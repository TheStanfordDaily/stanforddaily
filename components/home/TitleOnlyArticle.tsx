import React from "react";
import { Article, ArticleHeader } from "../Article";
import { AuthorView } from "./AuthorView";
import { ArticleProps } from "../../pages/ArticleProps";
import { ArticleTitleWithLink } from "./ArticleTitleWithLink";

export const TitleOnlyArticle: React.ElementType = ({ post }: ArticleProps) => {
  const { tsdAuthors } = post;
  return (
    <Article post={post}>
      <ArticleHeader>
        <ArticleTitleWithLink post={post} />
      </ArticleHeader>
      <AuthorView authors={tsdAuthors} />
    </Article>
  );
};
