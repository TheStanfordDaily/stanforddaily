import React from "react";
import { Text, View } from "react-native";
import RView, { MediaRule } from "emotion-native-media-query";
import { BREAKPOINTS, FONTS, STANFORD_COLORS } from "helpers/constants";
import { getPostLocalDate } from "helpers/wpapi";
import { SECTION_PADDING } from "components/Section";
import { Article, ArticleHeader } from "components/Article";
import { AuthorView } from "./AuthorView";
import { PostExcerpt } from "./PostExcerpt";
import { ArticleProps } from "./ArticleProps";
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
        marginLeft: SECTION_PADDING / 2,
        marginRight: SECTION_PADDING / 2,
        marginBottom: SECTION_PADDING,
        backgroundColor: STANFORD_COLORS.LIGHT_SANDSTONE,
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
          marginTop: 0,
          marginbottom: 0,
          ...style,
        }}
      >
        <View
          style={{
            padding: SECTION_PADDING,
          }}
        >
          <Text
            style={{
              ...FONTS.AUXILIARY,
            }}
          >
            {tsdPrimaryCategory.name}
          </Text>
        </View>
        <ThumbnailImageWithLink
          post={post}
          style={{
            height: 150,
          }}
        />
        <View
          style={{
            paddingLeft: SECTION_PADDING,
            paddingRight: SECTION_PADDING,
            paddingBottom: SECTION_PADDING,
          }}
        >
          <ArticleHeader>
            <ArticleTitleWithLink post={post} />
          </ArticleHeader>
          <PostExcerpt post={post} />
          <View>
            <AuthorView authors={tsdAuthors} />
            <Text style={{ ...FONTS.AUXILIARY }}>
              {date.format("MMM DD YYYY")}
            </Text>
          </View>
        </View>
      </Article>
    </RView>
  );
};
