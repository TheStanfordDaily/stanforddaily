import React from "react";
import { Text, View } from "react-native";
import styled, { css } from "@emotion/native";
import { getPostsAsync } from "../helpers/wpapi";
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
    return (
      <View style={containerStyle}>
        <Title
          style={css({
            borderColor: "blue",
            borderStyle: "solid",
            borderWidth: 5,
            color: "red",
          })}
          href="#"
        >
          My page
        </Title>
        <Text>{JSON.stringify(posts)}</Text>
      </View>
    );
  }
}

export function IndexWrapper(props): any {
  return <Wrapper class={Index} props={props} getInitialProps={{}} />;
}
