import React from "react";
import { View } from "react-native";
import { Article, ArticleHeader } from "components/Article";
import { AuthorView } from "./AuthorView";
import { PostExcerpt } from "./PostExcerpt";
import { ArticleSubtitle } from "./ArticleSubtitle";
import { ArticleProps } from "./ArticleProps";
import { ArticleTitleWithLink } from "./ArticleTitleWithLink";
import { ThumbnailImageWithLink } from "./ThumbnailImageWithLink";

export const HeadlineArticle: React.ElementType = ({
  post,
  style,
}: ArticleProps) => {
  const { postSubtitle, tsdAuthors } = post;
  return (
    <Article
      post={post}
      style={{
        ...style,
      }}
    >
      <ThumbnailImageWithLink
        post={post}
        style={{
          height: 350,
        }}
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
      <AuthorView authors={tsdAuthors} />
    </Article>
  );
};
