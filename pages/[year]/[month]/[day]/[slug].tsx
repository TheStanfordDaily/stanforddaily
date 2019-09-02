import React from "react";
import { Text, View, Platform } from "react-native";
import { WebView } from "react-native-webview";
import styled from "@emotion/native";
import {
  getPostAsync,
  getPostPath,
  getPostLocalDate,
  Post,
} from "../../../../helpers/wpapi";
import Wrapper from "../../../../components/Wrapper";
import { SectionStyle } from "../../../../components/Section";
import { Article, ArticleHeader } from "../../../../components/Article";

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
    console.log(post.postTitle);
    return { post };
  }

  render(): React.ReactNode {
    const { post } = this.props;
    if (!post) {
      return <Text>Loading...</Text>;
    }

    const { postTitle, thumbnailUrl, tsdAuthors, postContent } = post;
    const date = getPostLocalDate(post);

    if (Platform.OS !== "web") {
      return (
        <WebView
          source={{ uri: `http://10.31.234.102:19006/${getPostPath(post)}` }}
          originWhitelist={["*"]}
          applicationNameForUserAgent="TSDApp/1.0.0"
        />
      );
    }

    return (
      <SectionStyle>
        <Article>
          <ArticleHeader>
            <h1>{postTitle}</h1>
          </ArticleHeader>
          <main>
            <p>
              By{" "}
              {tsdAuthors.map(author => (
                <span key={author.id}>{author.displayName}, </span>
              ))}
              on {date.format("MMMM D, YYYY")}
            </p>
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: post.postContent }} />
          </main>
          <footer>
            {tsdAuthors.map(author => (
              <div key={author.id}>{author.displayName}</div>
            ))}
          </footer>
        </Article>
        <div>{/* TODO: ADD DISQUS */}</div>
      </SectionStyle>
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
