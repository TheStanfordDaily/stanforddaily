import React from "react";
import { Text, View } from "react-native";
import styled, { css } from "@emotion/native";
import { getPostBySlugAsync } from "../../../../helpers/wpapi";
import Wrapper from "../../../../helpers/Wrapper";

const containerStyle = css({
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
});

interface PostProps {
  post?: any;
}

interface PostState {}

export default class Post extends React.Component<PostProps, PostState> {
  static async getInitialProps({ query }): Promise<any> {
    console.warn(query);
    const post = await getPostBySlugAsync(query.slug);
    console.log(post.title);
    return { post };
  }

  render(): React.ReactNode {
    return (
      <View style={containerStyle}>
        <Text>My page {JSON.stringify(this.props)}</Text>
        <Text> up App.tsx to sta123rt working on your app!</Text>
      </View>
    );
  }
}

export function PostWrapper(props): any {
  return (
    <Wrapper
      class={Post}
      props={props}
      getInitialProps={{
        query: {
          slug:
            "elite-college-counseling-a-legal-prohibitively-expensive-pay-to-win-game-in-admissions",
        },
      }}
    />
  );
}
