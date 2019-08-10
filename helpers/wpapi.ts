import WPAPI from "wpapi";

export function getWPAPI(): WPAPI {
  return new WPAPI({ endpoint: "https://www.stanforddaily.com/wp-json" });
}
