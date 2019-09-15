import React from "react";
import { Text, View } from "react-native";
import RView, { MediaRule } from "emotion-native-media-query";
import { BREAKPOINTS, FONTS } from "../../helpers/constants";
import { getPostLocalDate } from "../../helpers/wpapi";
import { SECTION_PADDING } from "../Section";
import { Article, ArticleHeader } from "../Article";
import { AuthorView } from "./AuthorView";
import { PostExcerpt } from "./PostExcerpt";
import { ArticleProps } from "../../pages/ArticleProps";
import { ThumbnailImageWithLink } from "./ThumbnailImageWithLink";
import { ArticleTitleWithLink } from "./ArticleTitleWithLink";

export const TextOnlyArticle: React.ElementType = ({
  post,
  style,
}: ArticleProps) => {
  const { tsdPrimaryCategory, tsdAuthors } = post;
  const date = getPostLocalDate(post);
  return (
    <RView
      style={{
        width: "100%",
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 300,
        padding: 10,
        marginLeft: SECTION_PADDING / 2,
        marginRight: SECTION_PADDING / 2,
        marginBottom: SECTION_PADDING,
        border: "1px solid black",
      }}
      rStyle={{
        [MediaRule.MinWidth]: {
          [BREAKPOINTS.TABLET]: {
            minHeight: 340,
          },
        },
      }}
    >
      <Article
        post={post}
        style={{
          width: "100%",
          ...style,
        }}
      >
        <Text>{tsdPrimaryCategory.name}</Text>
        <ThumbnailImageWithLink
          post={post}
          style={{
            height: 150,
          }}
        />
        <ArticleHeader>
          <ArticleTitleWithLink post={post} />
        </ArticleHeader>
        <PostExcerpt post={post} />
        <View>
          <AuthorView authors={tsdAuthors} />
          <Text style={{ fontFamily: FONTS.AUXILIARY }}>
            {date.format("MMM DD YYYY")}
          </Text>
        </View>
      </Article>
    </RView>
  );
};
