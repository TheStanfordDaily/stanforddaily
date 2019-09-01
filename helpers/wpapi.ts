import WPAPI from "wpapi";
import moment from "moment";
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

export type Post = {
  ID: number;
  postDate: string;
  postDateGmt: string;
  postModified: string;
  postModifiedGmt: string;
  postTitle: string;
  postSubtitle?: string;
  tsdAuthors: Author[];
  postExcerpt: string;
  postContent?: string;
  tsdPrimaryCategory?: Category;
  tagsInput: string[];
  tsdUrlParameters: PostURL;
  guid: string; // Unique perminlinks (e.g., "https://www.stanforddaily.com/?p=1144743")
};

const wp = new WPAPI({
  endpoint: "https://www.stanforddaily.com/wp-json",
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

export async function getHomeAsync(): Promise<any> {
  return wpTsdJson.home();
}

export function getPostLocalDate(post: Post): moment.Moment {
  const date = moment.utc(post.postDateGmt);
  return date;
}

export function getPostPath(post: Post): string {
  const { tsdUrlParameters } = post;
  return `/${tsdUrlParameters.year}/${tsdUrlParameters.month}/${tsdUrlParameters.day}/${tsdUrlParameters.slug}/`;
}
