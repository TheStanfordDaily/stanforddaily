import React from "react";
import { View } from "react-native";
import { STANFORD_COLORS } from "helpers/constants";
import { SECTION_PADDING } from "components/Section";
import { Article, ArticleHeader } from "components/Article";
import { CategoryLink } from "components/CategoryLink";
import AuthorAndDateView from "components/article-links-and-thumbnails/AuthorAndDateView";
import { PostExcerpt } from "../pages/HomePage/PostExcerpt";
import { ArticleProps } from "../pages/HomePage/ArticleProps";
import { ThumbnailImageWithLink } from "./ThumbnailImageWithLink";
import { ArticleTitleWithLink } from "./ArticleTitleWithLink";

// Component for articles that appear in ArticleView components,
// such as in Humor, MoreFromTheDaily and ArticleList pages
export const TextOnlyArticle: React.ElementType = ({
  post,
  style,
  displayCategory = true,
  displayExcerpt = true,
  displayDateAuthor = true,
  textColor = STANFORD_COLORS.BLACK,
  noDate = false,
  isHumor = false,
  isHumor2 = false,
}: ArticleProps) => {
  const { tsdPrimaryCategory } = post;
  return (
    <Article
      post={post}
      style={{
        width: "100%",
        ...style,
      }}
    >
      {displayCategory && (
        <View
          style={{
            paddingVertical: SECTION_PADDING,
          }}
        >
          <CategoryLink
            category={isHumor ? null : tsdPrimaryCategory}
            style={{ color: textColor }}
            isHumor={isHumor}
            isHumor2={isHumor2}
            hasCustomOutline={true}
          />
        </View>
      )}
      <ThumbnailImageWithLink
        post={post}
        style={{
          height: 200,
        }}
      />
      <View
        style={{
          paddingBottom: SECTION_PADDING,
        }}
      >
        <ArticleHeader>
          <ArticleTitleWithLink
            post={post}
            marginBottomMore
            style={{ color: textColor }}
          />
        </ArticleHeader>
        {displayExcerpt && (
          <PostExcerpt post={post} style={{ color: textColor }} />
        )}
        {displayDateAuthor && (
          <AuthorAndDateView
            post={post}
            style={{ color: textColor }}
            noDate={noDate}
          />
        )}
      </View>
    </Article>
  );
};
