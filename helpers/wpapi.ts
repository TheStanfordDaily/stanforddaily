import WPAPI from "wpapi";
import moment from "moment";
import "moment-timezone";
import fetch from "isomorphic-fetch";
import { STRINGS } from "./constants";
import tsdJson from "./tsd-json.json";

export type Base = {
  tsdMeta: {
    wpHead?: string; // Elements (scripts, styles, etc.) in `wp_head()`.
    wpFooter?: string; // Elements (scripts etc.) in `wp_footer()`.
  };
};

export type Home = Base & {
  featured: Post[];
  news: Post[];
  sports: Post[];
  opinions: Post[];
  theGrind: Post[];
  artsAndLife: Post[];
  cartoons: Post[];
  satire: Post[];
  sponsored: Post[];
  moreFromTheDaily: Post[];
  tsdMeta: {
    categories: {
      featured: Category;
      news: Category;
      sports: Category;
      opinions: Category;
      "arts-life": Category;
      satire: Category;
      thegrind: Category;
      cartoons: Category;
    };
  };
};

export type PostURL = {
  year: string;
  month: string;
  day: string;
  slug: string;
};

export type Author = {
  id: number;
  displayName: string;
  userNicename: string; // This is user's URL-friendly slug
  url: string;
  avatarUrl: string;
  description?: string;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  url: string;
};

export type Tag = string;

export type Thumbnail = {
  urls: {
    full?: string;
    mediumLarge?: string;
    thumbnail?: string;
  };
  caption?: string;
  alt?: string;
};

export type Post = Base & {
  id: number;
  postDate: string;
  postDateGmt: string;
  postModified: string;
  postModifiedGmt: string;
  postTitle: string;
  postSubtitle?: string;
  tsdAuthors: Author[];
  postExcerpt: string;
  postContent?: string;
  postType: "post" | "page";
  commentStatus: string;
  thumbnailInfo?: Thumbnail;
  tsdPrimaryCategory?: Category;
  tsdCategories?: Category[];
  tagsInput: string[];
  tsdUrlParameters: PostURL;
  guid: string; // Unique perminlinks (e.g., "https://www.stanforddaily.com/?p=1144743")
};

export type ArchivePageData = Base & {
  posts: Post[];
};

export type CategoryArchivePageData = ArchivePageData & {
  tsdMeta: {
    title: string;
  };
};

export type TagArchivePageData = ArchivePageData & {
  tsdMeta: {
    title: string;
  };
};

export type AuthorArchivePageData = ArchivePageData & {
  tsdMeta: {
    author: Author;
  };
};

export type SearchArchivePageData = ArchivePageData & {};

const wp = new WPAPI({
  endpoint: `${STRINGS.WP_URL}/wp-json`,
  routes: tsdJson.routes,
});
const wpTsdJson = wp.namespace("tsd/json/v1");

export async function getPostByIdAsync(id: number): Promise<Post> {
  return wpTsdJson.postsId().postId(id);
}

export async function getPostAsync(
  year: string,
  month: string,
  day: string,
  slug: string,
): Promise<Post> {
  return (
    wpTsdJson
      .posts()
      .postYear(year)
      .postMonth(month)
      .postDay(day)
      // We have to encode it for cases such as https://www.stanforddaily.com/2019/05/09/dont-miss-cap-and-gowns-spring-brunch%ef%bb%bf-featuring-a-guest-from-the-san-francisco-49ers/
      .postSlug(encodeURIComponent(slug))
      .param("_time", moment().format("MMMM Do YYYY, h:mm a")) // Update every minute
  );
}

/* Get post from WP API. TODO: migrate other functions
 * to use the WP API endpoint instead of the custom TSD endpoint.
 */
// export async function getPost({ slug = null, id = null }): Promise<Post> {
//   let req = wp
//     .posts().embed()
//     .param("_time", moment().format("MMMM Do YYYY, h:mm a"));
//   if (id) {
//     req = req.id(id);
//   } else {
//     req = req.slug(encodeURIComponent(slug));
//   };
//   return req;
// }

export async function getRevision({
  id,
  rev,
  type,
  status,
  wpnonce,
}): Promise<Post> {
  // const wp = new WPAPI({
  //   endpoint: `${STRINGS.WP_URL}/wp-json`,
  //   // nonce: wpnonce
  // });
  // let req = wp
  //   .posts()
  //   .id(id)
  //   .embed()
  //   // .auth()
  //   .param("_time", moment().format("MMMM Do YYYY, h:mm a"))
  //   .param("_wpnonce", wpnonce)
  //   .revisions(rev);
  // console.log({ id, rev, type, status, wpnonce });
  let postUrl = `${STRINGS.WP_URL}/wp-json/wp/v2/${type}s/${id}/revisions/${rev}?_wpnonce=${wpnonce}`;
  if (status === "draft") {
    postUrl = `${STRINGS.WP_URL}/wp-json/wp/v2/${type}s/${rev}?_wpnonce=${wpnonce}`;
  }

  const response = await fetch(
    postUrl,
    { credentials: "include" }, // required for cookie nonce auth
  ).then(e => e.json());
  return response;
}

export async function getPageAsync(slug: string): Promise<Post> {
  return wpTsdJson.page().pageSlug(encodeURIComponent(slug));
}

export async function getHomeAsync(): Promise<Home> {
  return wpTsdJson
    .home()
    .param("_time", moment().format("MMMM Do YYYY, h:mm a")); // Update every minute
}

export async function getHomeMoreAsync(
  extraPageNumber: number,
): Promise<Post[]> {
  return wpTsdJson
    .home()
    .more()
    .extraPageNumber(extraPageNumber)
    .param("_time", moment().format("MMMM Do YYYY, h:mm a")); // Update every minute
}

export async function getCategoryAsync(
  categorySlugs: string[],
  pageNumber: number,
): Promise<CategoryArchivePageData> {
  // Rewrite @94305
  let slugs = [...categorySlugs];
  for (let i in slugs) {
    if (slugs[i] === "@94305" || slugs[i] === "data-vizzes") {
      slugs[i] = "94305";
    }
  }

  return wpTsdJson
    .category()
    .categorySlugs(slugs.map(encodeURIComponent).join("/"))
    .pageNumber(pageNumber);
}

export async function getTagAsync(
  slugs,
  pageNumber,
): Promise<TagArchivePageData> {
  console.log(slugs);
  return wpTsdJson
    .tag()
    .tagSlugs(slugs.map(encodeURIComponent).join("/"))
    .pageNumber(pageNumber);
}

export async function getAuthorAsync(
  authorSlug: string,
  pageNumber: number,
): Promise<AuthorArchivePageData> {
  return wpTsdJson
    .author()
    .authorSlug(encodeURIComponent(authorSlug))
    .pageNumber(pageNumber);
}

export async function getSearchAsync(
  keyword: string,
  pageNumber: number,
): Promise<SearchArchivePageData> {
  return wpTsdJson
    .search()
    .searchKeyword(encodeURIComponent(keyword))
    .pageNumber(pageNumber);
}

export function getPostLocalDate(post: Post): moment.Moment {
  const date = moment.utc(post.postDateGmt).tz("America/Los_Angeles");
  return date;
}

export function getPostPath(post: Post): string {
  const { tsdUrlParameters } = post;
  return `/${tsdUrlParameters.year}/${tsdUrlParameters.month}/${tsdUrlParameters.day}/${tsdUrlParameters.slug}/`;
}

export function getNextJsCategoryPath(categoryUrl: string): string {
  const categorySlugs = categoryUrl.split("/");
  const categoryLevel = categorySlugs.length - 3; // Remove beginning `"/"`, `"category/"`, and trailing `"/"`
  let nextJsCategoryPath = "/category";
  for (let index = 1; index <= categoryLevel; index += 1) {
    nextJsCategoryPath += `/[slug${index}]`;
  }
  return nextJsCategoryPath;
}

export type CategorySlugs = {
  slug1?: string;
  slug2?: string;
  slug3?: string;
  slug4?: string;
  slug5?: string;
};

export function splitCategoryToSlugs(category: Category): CategorySlugs {
  const categorySlugsUrl = category.url.split("/");

  // Remove beginning `"/"`, `"category/"`, and trailing `"/"`
  categorySlugsUrl.pop();
  categorySlugsUrl.shift();
  categorySlugsUrl.shift();

  const results: CategorySlugs = {};
  for (let index = 0; index < categorySlugsUrl.length; index += 1) {
    results[`slug${index + 1}`] = categorySlugsUrl[index];
  }
  return results;
}

export function splitTagToSlugs(tag) {
  return [tag];
}

export function getPostTimeString(date: moment.Moment, format: string): string {
  if (date.isSame(new Date(), "day")) {
    // If posted on the same day.
    return date.fromNow();
  } else {
    return date.format(format);
  }
}
