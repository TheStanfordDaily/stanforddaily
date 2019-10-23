import React from "react";
import { Text, View } from "react-native";
import RView, { MediaRule } from "emotion-native-media-query";
import { BREAKPOINTS, FONTS, STANFORD_COLORS } from "helpers/constants";
import { getPostLocalDate } from "helpers/wpapi";
import { SECTION_PADDING } from "components/Section";
import { Article, ArticleHeader } from "components/Article";
import { CategoryLink } from "components/CategoryLink";
import { AuthorView } from "./AuthorView";
import { PostExcerpt } from "./PostExcerpt";
import { ArticleProps } from "./ArticleProps";
import { ThumbnailImageWithLink } from "./ThumbnailImageWithLink";
import { ArticleTitleWithLink } from "./ArticleTitleWithLink";

export const TextOnlyArticle: React.ElementType = ({
  post,
  style,
  displayCategory = true,
}: ArticleProps) => {
  const { tsdPrimaryCategory, tsdAuthors } = post;
  const date = getPostLocalDate(post);
  return (
    <RView
      style={{
        width: "100%",
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 250,
        marginLeft: SECTION_PADDING,
        marginRight: SECTION_PADDING,
        marginBottom: SECTION_PADDING,
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
          <Text style={{ marginTop: 5 }}>
            <AuthorView
              authors={tsdAuthors}
              containerStyle={{ display: "inline-flex" }}
            />{" "}
            •{" "}
            <Text style={{ ...FONTS.AUXILIARY }}>
              {date.format("MMM DD YYYY")}
            </Text>
          </Text>
        </View>
      </Article>
    </RView>
  );
};
