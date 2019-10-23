import React from "react";
import { Text, View } from "react-native";
import RView, { MediaRule } from "emotion-native-media-query";
import { BREAKPOINTS, FONTS, STANFORD_COLORS } from "helpers/constants";
import { getPostTimeString } from "helpers/wpapi";
import { SECTION_PADDING } from "components/Section";
import { Article, ArticleHeader } from "components/Article";
import { CategoryLink } from "components/CategoryLink";
import AuthorAndDateView from "components/AuthorAndDateView";
import { PostExcerpt } from "./PostExcerpt";
import { ArticleProps } from "./ArticleProps";
import { ThumbnailImageWithLink } from "./ThumbnailImageWithLink";
import { ArticleTitleWithLink } from "./ArticleTitleWithLink";

export const TextOnlyArticle: React.ElementType = ({
  post,
  style,
  displayCategory = true,
}: ArticleProps) => {
  const { tsdPrimaryCategory } = post;
  return (
    <Article
      post={post}
      style={{
        width: "100%",
        marginTop: 0,
        marginbottom: 0,
        ...style,
      }}
    >
      {displayCategory && (
        <View
          style={{
            paddingVertical: SECTION_PADDING,
          }}
        >
          <CategoryLink category={tsdPrimaryCategory} />
        </View>
      )}
      <ThumbnailImageWithLink
        post={post}
        style={{
          height: 150,
        }}
      />
      <View
        style={{
          paddingBottom: SECTION_PADDING,
        }}
      >
        <ArticleHeader>
          <ArticleTitleWithLink post={post} />
        </ArticleHeader>
        <PostExcerpt post={post} />
        <AuthorAndDateView post={post} style={{ marginTop: 5 }} />
      </View>
    </Article>
  );
};
