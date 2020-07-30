import React from "react";
import { Article, ArticleHeader } from "components/Article";
import AuthorAndDateView from "components/AuthorAndDateView";
import { BREAKPOINTS } from "helpers/constants";
import css from "@emotion/css";
import { ArticleProps } from "./ArticleProps";
import { ArticleTitleWithLink } from "./ArticleTitleWithLink";
import { ThumbnailImageWithLink } from "./ThumbnailImageWithLink";

// For the top two articles on the leftmost side of the
// News and Sports sections on the homepage
export const TopThumbnailArticle: React.ElementType = ({
  post,
}: ArticleProps) => {
  return (
    <Article post={post}>
      <ThumbnailImageWithLink
        post={post}
        css={css`
          width: 100%;
          min-height: 200px;
          height: 50vw;
          @media (min-width: ${BREAKPOINTS.TABLET}px) {
            min-height: 150px;
            height: 10vw;
          }
        `}
      />
      <ArticleHeader>
        <ArticleTitleWithLink post={post} />
      </ArticleHeader>
      <AuthorAndDateView post={post} newLineBetweenAuthorAndDate />
    </Article>
  );
};
