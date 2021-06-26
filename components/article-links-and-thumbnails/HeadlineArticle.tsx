import React from "react";
import { View } from "react-native";
import { Article, ArticleHeader } from "components/Article";
import AuthorAndDateView from "components/article-links-and-thumbnails/AuthorAndDateView";
import { BREAKPOINTS } from "helpers/constants";
import css from "@emotion/css";
import { PostExcerpt } from "../pages/HomePage/PostExcerpt";
import { ArticleSubtitle } from "../pages/HomePage/ArticleSubtitle";
import { ArticleProps } from "../pages/HomePage/ArticleProps";
import { ArticleTitleWithLink } from "./ArticleTitleWithLink";
import { ThumbnailImageWithLink } from "./ThumbnailImageWithLink";

// Used for the articles with excerpts and sized-up photos displayed
// on the ArticleList pages and (for News and Sports) on the homepage
export const HeadlineArticle: React.ElementType = ({
  post,
  style,
}: ArticleProps) => {
  const { postSubtitle } = post;
  return (
    <Article
      post={post}
      style={{
        ...style,
      }}
    >
      <ThumbnailImageWithLink
        post={post}
        css={css`
          width: 100%;
          min-height: 200px;
          height: 50vw;
          @media (min-width: ${BREAKPOINTS.TABLET}px) {
            min-height: 200px;
            height: 20vw;
          }
        `}
      />
      <ArticleHeader>
        <ArticleTitleWithLink post={post} style={{ fontSize: 20 }} />
        {postSubtitle ? (
          <ArticleSubtitle>{postSubtitle}</ArticleSubtitle>
        ) : (
          undefined
        )}
      </ArticleHeader>
      <View
        style={{
          marginBottom: 5,
        }}
      >
        <PostExcerpt post={post} />
      </View>
      <AuthorAndDateView post={post} noDate />
    </Article>
  );
};
