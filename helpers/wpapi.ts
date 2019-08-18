import WPAPI from "wpapi";

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
