import React from "react";
import { Article, ArticleHeader } from "../Article";
import { AuthorView } from "./AuthorView";
import { ArticleProps } from "../../pages/ArticleProps";
import { ArticleTitleWithLink } from "./ArticleTitleWithLink";
import { ThumbnailImageWithLink } from "./ThumbnailImageWithLink";

export const TopThumbnailArticle: React.ElementType = ({
  post,
}: ArticleProps) => {
  const { tsdAuthors } = post;
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
      <AuthorView authors={tsdAuthors} />
    </Article>
  );
};
