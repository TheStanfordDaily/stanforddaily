import React from "react";
import { View } from "react-native";
import { Article, ArticleHeader } from "components/Article";
import AuthorAndDateView from "components/article-links-and-thumbnails/AuthorAndDateView";
import { ArticleProps } from "./ArticleProps";
import { ThumbnailImageWithLink } from "../../article-links-and-thumbnails/ThumbnailImageWithLink";
import { ArticleTitleWithLink } from "../../article-links-and-thumbnails/ArticleTitleWithLink";

// Currently used only for ArtsAndLifeSection on homepage
export const SideThumbnailArticle: React.ElementType = ({
  post,
}: ArticleProps) => {
  return (
    <Article post={post}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexBasis: "35%",
            justifyContent: "center",
          }}
        >
          <ThumbnailImageWithLink
            post={post}
            style={{
              height: 100,
            }}
          />
        </View>
        <View
          style={{
            flexBasis: "65%",
            justifyContent: "center",
            marginLeft: 20,
          }}
        >
          <ArticleHeader>
            <ArticleTitleWithLink
              post={post}
              style={{
                marginTop: 0,
              }}
            />
          </ArticleHeader>
          <AuthorAndDateView post={post} />
        </View>
      </View>
    </Article>
  );
};
