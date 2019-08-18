import WPAPI from "wpapi";
import moment from "moment";

export function getWPAPI(): WPAPI {
  return new WPAPI({ endpoint: "https://www.stanforddaily.com/wp-json" });
}

const wp = getWPAPI();
export async function getPostBySlugAsync(slug: string): Promise<any> {
  const apiMethod = wp.posts();
  const post = await apiMethod
    .slug(slug)
    .embed()
    .then(data => {
      return data[0];
    });
  console.log(post.title);
  return post;
}

export async function getPostsAsync(): Promise<any[]> {
  return wp.posts().embed();
}

export function getPostLocalDate(post: any): moment.Moment {
  const date = moment.utc(post.date_gmt);
  return date;
}

export function getPostPath(post: any): string {
  const serverDate = moment(post.date).format("YYYY/MM/DD");
  return `/${serverDate}/${post.slug}`;
}
