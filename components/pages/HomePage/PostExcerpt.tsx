import React from "react";
import { Text } from "react-native";
import { FONTS } from "helpers/constants";
import { ArticleProps } from "./ArticleProps";

export const PostExcerpt: React.ElementType = ({
  post,
  style,
}: ArticleProps) => {
  const { postExcerpt } = post;
  return (
    <Text
      style={{
        fontFamily: FONTS.CONTENT,
      }}
    >
      {postExcerpt}
    </Text>
  );
};
