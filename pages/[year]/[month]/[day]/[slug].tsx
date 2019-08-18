import React from "react";
import { Text, View } from "react-native";
import styled, { css } from "@emotion/native";
import { getPostBySlugAsync } from "../../../../helpers/wpapi";
import Wrapper from "../../../../components/Wrapper";

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
    const { post } = this.props;
    if (!post) {
      return <Text>Loading...</Text>;
    }
    return (
      <View style={containerStyle}>
        <Text>
          {
            post.title
              .rendered /* TODO: this is rendered, we have to decode e.g. Q&#038;A: Incoming Stanford */
          }
        </Text>
        <Text>{post.content.rendered /* TODO: render it */}</Text>
      </View>
    );
  }
}

export function PostWrapper(props: any): any {
  const { slug } = props.navigation.state.params;
  return (
    <Wrapper
      class={Post}
      props={props}
      getInitialProps={{
        query: {
          slug,
        },
      }}
    />
  );
}
