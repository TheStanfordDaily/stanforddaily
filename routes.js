import routes from "next-routes";

module.exports = routes()
  .add("redirect", "/wp-admin/.*", "_redirect")
  .add("redirect", "/wp-json/.*", "_redirect")
  .add("redirect", "/ads.txt", "_redirect")
  .add("redirect", "/robots.txt", "_redirect");
