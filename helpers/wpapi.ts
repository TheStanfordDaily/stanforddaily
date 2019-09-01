import WPAPI from "wpapi";
import moment from "moment";
import tsdJson from "./tsd-json.json";

export type Home = {
  featured: Post[];
  news: Post[];
  sports: Post[];
  opinions: Post[];
  the_grind: Post[];
  arts_and_life: Post[];
  more_from_the_daily: Post[];
};

export type PostURL = {
  year: string;
  month: string;
  day: string;
  slug: string;
};

export type Author = {
  id: number;
  display_name: string;
  user_nicename: string; // This is user's URL-friendly slug
};

export type Category = {
  id: number;
  name: string;
  slug: string;
};

export type Post = {
  ID: number;
  post_date: string;
  post_date_gmt: string;
  post_modified: string;
  post_modified_gmt: string;
  post_title: string;
  post_subtitle?: string;
  tsd_authors: Author[];
  post_excerpt: string;
  post_content?: string;
  tsd_primary_category?: Category;
  tags_input: string[];
  tsd_url_parameters: PostURL;
  guid: string; // Unique perminlinks (e.g., "https://www.stanforddaily.com/?p=1144743")
};

const wp = new WPAPI({
  endpoint: "http://localhost.stanforddaily.com/wp-json",
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
  const date = moment.utc(post.post_date_gmt);
  return date;
}

export function getPostPath(post: Post): string {
  return `/${post.tsd_url_parameters.year}/${post.tsd_url_parameters.month}/${post.tsd_url_parameters.day}/${post.tsd_url_parameters.slug}/`;
}
