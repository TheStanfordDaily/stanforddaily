import { Post } from "../../helpers/wpapi";

export interface ArticleProps {
  post: Post;
  [key: string]: any;
}
