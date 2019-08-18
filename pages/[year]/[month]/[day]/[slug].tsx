import React from "react";
import { Text, View, Platform } from "react-native";
import { WebView } from "react-native-webview";
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
    if (Platform.OS === "web") {
      return (
        // eslint-disable-next-line react/no-danger
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      );
    }

    // TODO: Make source the actual webpage (i.e., directly loading the above page)
    return (
      <WebView
        source={{ html: post.content.rendered }}
        originWhitelist={["*"]}
        style={{ marginTop: 20 }}
      />
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
