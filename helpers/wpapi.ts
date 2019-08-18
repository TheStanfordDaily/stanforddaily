import WPAPI from "wpapi";

export function getWPAPI(): WPAPI {
  return new WPAPI({ endpoint: "https://www.stanforddaily.com/wp-json" });
}

export async function getPostBySlugAsync(slug: string): Promise<any> {
  const wp = getWPAPI();
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
