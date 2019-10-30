import styled from "@emotion/native";
import React from "react";
import { Platform } from "react-native";
import { FONTS, STANFORD_COLORS } from "helpers/constants";
import { Post } from "helpers/wpapi";
import { LinkToArticle } from "./LinkToArticle";

const ArticleTitleStyle = styled.Text({
  ...FONTS.ARTICLE_TITLE,
  margin: 0,
});
const ArticleTitle =
  Platform.OS === "web"
    ? ArticleTitleStyle.withComponent("h2")
    : ArticleTitleStyle;
export const ArticleTitleWithLink: React.ElementType = ({
  post,
  marginBottomMore = false,
  whiteText = false,
  style,
  ...props
}: {
  post: Post;
  marginBottomMore: boolean;
  [key: string]: any;
}) => {
  let margin = {
    marginTop: 10,
    marginBottom: 5,
  };
  if (marginBottomMore) {
    margin = {
      marginTop: 5,
      marginBottom: 10,
    };
  }
  return (
    <ArticleTitle
      style={{
        color: whiteText ? STANFORD_COLORS.WHITE : STANFORD_COLORS.BLACK,
        ...margin,
        ...style,
      }}
    >
      <LinkToArticle post={post} {...props}>
        {post.postTitle}
      </LinkToArticle>
    </ArticleTitle>
  );
};
