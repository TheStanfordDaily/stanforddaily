import { Post } from "helpers/wpapi";

// Describes requirement of various properties of specific types
// https://www.typescriptlang.org/docs/handbook/interfaces.html
export interface ArticleProps {
  post: Post;
  [key: string]: any;
}
