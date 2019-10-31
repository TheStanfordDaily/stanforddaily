import React from "react";
import { Article, ArticleHeader } from "components/Article";
import AuthorAndDateView from "components/AuthorAndDateView";
import { ArticleProps } from "./ArticleProps";
import { ArticleTitleWithLink } from "./ArticleTitleWithLink";
import { ThumbnailImageWithLink } from "./ThumbnailImageWithLink";

export const TopThumbnailArticle: React.ElementType = ({
  post,
}: ArticleProps) => {
  return (
    <Article post={post}>
      <ThumbnailImageWithLink
        post={post}
        style={{
          height: 120,
        }}
      />
      <ArticleHeader>
        <ArticleTitleWithLink post={post} />
      </ArticleHeader>
      <AuthorAndDateView post={post} newLineBetweenAuthorAndDate />
    </Article>
  );
};
