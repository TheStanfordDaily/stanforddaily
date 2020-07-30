import React from "react";
import { Text, Platform } from "react-native";
import { FONTS } from "helpers/constants";
import { ArticleProps } from "./ArticleProps";

// Used to show excerpts for articles with up-sized images
// on the homepage and ArticleList pages, as well as for
// all other posts on the AuthorArticleList pages
export const PostExcerpt: React.ElementType = ({
  post,
  style,
}: ArticleProps) => {
  const { postExcerpt } = post;
  return (
    <Text
      style={{
        ...FONTS.CONTENT,
        ...(Platform.OS === "web" ? { lineHeight: "1.2em" } : {}),
        ...style,
      }}
    >
      {postExcerpt}
    </Text>
  );
};
