import React from "react";
import { Article, ArticleHeader } from "components/Article";
import AuthorAndDateView from "components/AuthorAndDateView";
import { ArticleProps } from "./ArticleProps";
import { ArticleTitleWithLink } from "./ArticleTitleWithLink";

// Used for bottom two articles in left-most portion
// of News and Sports sections on homepage
export const TitleOnlyArticle: React.ElementType = ({ post }: ArticleProps) => {
  return (
    <Article post={post}>
      <ArticleHeader>
        <ArticleTitleWithLink post={post} />
      </ArticleHeader>
      <AuthorAndDateView post={post} newLineBetweenAuthorAndDate />
    </Article>
  );
};
