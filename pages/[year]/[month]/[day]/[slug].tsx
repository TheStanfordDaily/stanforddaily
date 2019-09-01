import React from "react";
import { Text, View, Platform } from "react-native";
import { WebView } from "react-native-webview";
import styled, { css } from "@emotion/native";
import { getPostAsync, Post } from "../../../../helpers/wpapi";
import Wrapper from "../../../../components/Wrapper";

const containerStyle = css({
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
});

interface PostProps {
  post?: Post;
}

interface PostState {}

export default class PostPage extends React.Component<PostProps, PostState> {
  static async getInitialProps({ query }): Promise<any> {
    console.warn(query);
    const { year, month, day, slug } = query;
    console.warn({ year, month, day, slug });
    const post = await getPostAsync(year, month, day, slug);
    console.log(post.post_title);
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
        <div dangerouslySetInnerHTML={{ __html: post.post_content }} />
      );
    }

    // TODO: Make source the actual webpage (i.e., directly loading the above page)
    return (
      <WebView
        source={{ html: post.post_content }}
        originWhitelist={["*"]}
        style={{ marginTop: 20 }}
      />
    );
  }
}

export function PostPageWrapper(props: any): any {
  const urlParameters = props.navigation.state.params;
  return (
    <Wrapper
      class={PostPage}
      props={props}
      getInitialProps={{
        query: urlParameters,
      }}
    />
  );
}
