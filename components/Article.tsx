import React from "react";
import { View, TouchableOpacity, Platform } from "react-native";
import styled from "@emotion/native";
import { Post } from "../helpers/wpapi";
import { withNavigation } from "../helpers/trivial/react-navigation";

export const ArticleStyle = styled.View({
  marginTop: 5,
  marginBottom: 5,
});

const _Article: React.ElementType = (props: {
  post: Post;
  [key: string]: any;
}) => {
  const { post } = props;
  if (Platform.OS === "web") {
    const ArticleTag = ArticleStyle.withComponent("article");
    return <ArticleTag {...props} />;
  } else {
    return (
      <ArticleStyle>
        <TouchableOpacity
          onPress={() => {
            props.navigation.push("post", post.tsdUrlParameters);
          }}
          {...props}
        />
      </ArticleStyle>
    );
  }
};
export const Article = withNavigation(_Article);

export const ArticleHeader =
  Platform.OS === "web" ? styled.View().withComponent("header") : View;
