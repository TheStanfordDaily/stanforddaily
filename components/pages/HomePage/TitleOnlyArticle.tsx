import React from "react";
import { Article, ArticleHeader } from "components/Article";
import AuthorAndDateView from "components/article-links-and-thumbnails/AuthorAndDateView";
import { ArticleProps } from "./ArticleProps";
import { ArticleTitleWithLink } from "../../article-links-and-thumbnails/ArticleTitleWithLink";

// Used for bottom two articles in left-most portion
// of News and Sports sections on homepage
export const TitleOnlyArticle: React.ElementType = ({ post }: ArticleProps) => {
  return (
    <Article post={post}>
      <ArticleHeader>
        <ArticleTitleWithLink marginBottomMore post={post} />
      </ArticleHeader>
      <AuthorAndDateView post={post} noDate />
    </Article>
  );
};
