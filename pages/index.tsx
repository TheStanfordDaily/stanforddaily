import React from "react";
import { Text, View } from "react-native";
import styled, { css } from "@emotion/native";
import Link from "next/link";
import { getPostsAsync, getPostPath } from "../helpers/wpapi";
import Wrapper from "../components/Wrapper";

const Title = styled.Text({
  fontSize: 50,
  color: "blue",
});

const containerStyle = css({
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
});

interface IndexProps {
  posts?: any[];
}

interface IndexState {}

export default class Index extends React.Component<IndexProps, IndexState> {
  static async getInitialProps(): Promise<any> {
    const posts = await getPostsAsync();
    return { posts };
  }

  render(): React.ReactNode {
    const { posts } = this.props;
    if (!posts) {
      return <Text>Loading...</Text>;
    }
    const fposts = posts.map(post => {
      return (
        <ul key={post.slug}>
          <li>
            <Link href="/[year]/[month]/[day]/[slug]" as={getPostPath(post)}>
              <a>{post.title.rendered}</a>
            </Link>
          </li>
        </ul>
      );
    });
    return fposts;
  }
}

export function IndexWrapper(props): any {
  return <Wrapper class={Index} props={props} getInitialProps={{}} />;
}
