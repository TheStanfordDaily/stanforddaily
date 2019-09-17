import WPAPI from "wpapi";
import moment from "moment";
import { STRINGS } from "./constants";
import tsdJson from "./tsd-json.json";

export type Home = {
  featured: Post[];
  news: Post[];
  sports: Post[];
  opinions: Post[];
  theGrind: Post[];
  artsAndLife: Post[];
  moreFromTheDaily: Post[];
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
};

export type Category = {
  id: number;
  name: string;
  slug: string;
};

export type Thumbnail = {
  urls: {
    full?: string;
    mediumLarge?: string;
    thumbnail?: string;
  };
  caption?: string;
  alt?: string;
};

export type Post = {
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
  thumbnailInfo?: Thumbnail;
  tsdPrimaryCategory?: Category;
  tagsInput: string[];
  tsdUrlParameters: PostURL;
  guid: string; // Unique perminlinks (e.g., "https://www.stanforddaily.com/?p=1144743")
};

export type ArchivePageData = {
  meta: {
    title: string;
  };
  posts: Post[];
};

const wp = new WPAPI({
  endpoint: `${STRINGS.ROOT_URL}/wp-json`,
  routes: tsdJson.routes,
});
const wpTsdJson = wp.namespace("tsd/json/v1");

export async function getPostAsync(
  year: string,
  month: string,
  day: string,
  slug: string,
): Promise<Post> {
  return wpTsdJson
    .posts()
    .postyear(year)
    .postmonth(month)
    .postday(day)
    .postslug(slug);
}

export async function getHomeAsync(): Promise<Home> {
  return wpTsdJson.home();
}

export async function getHomeMoreAsync(
  extraPageNumber: number,
): Promise<Post[]> {
  return wpTsdJson
    .home()
    .more()
    .extraPageNumber(extraPageNumber);
}

export async function getCategoryAsync(
  categorySlug: string,
  pageNumber: number,
): Promise<ArchivePageData> {
  return wpTsdJson
    .category()
    .categorySlug(categorySlug)
    .pageNumber(pageNumber);
}

export function getPostLocalDate(post: Post): moment.Moment {
  const date = moment.utc(post.postDateGmt);
  return date;
}

export function getPostPath(post: Post): string {
  const { tsdUrlParameters } = post;
  return `/${tsdUrlParameters.year}/${tsdUrlParameters.month}/${tsdUrlParameters.day}/${tsdUrlParameters.slug}/`;
}
