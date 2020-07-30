import React from "react";
import { View, Platform } from "react-native";
import styled from "@emotion/native";

// Used in HeadlineArticle component
const ArticleSubtitleStyle = styled.Text({
  fontSize: 17,
  margin: 0,
  marginBottom: 5,
});
export const ArticleSubtitle: React.ElementType = (props: any) => {
  const Tag =
    Platform.OS === "web"
      ? ArticleSubtitleStyle.withComponent("h3")
      : ArticleSubtitleStyle;
  return (
    <View>
      <Tag {...props} />
    </View>
  );
};
