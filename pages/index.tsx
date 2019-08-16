import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled, { css } from "@emotion/native";
import { getWPAPI } from "../helpers/wpapi";

const wp = getWPAPI();

const Title = styled.Text({
  fontSize: 50,
  color: "blue"
});

export default class App extends React.Component {
  async componentDidMount() {
    let apiMethod = wp.posts();
    const post = await apiMethod
      .slug(
        "elite-college-counseling-a-legal-prohibitively-expensive-pay-to-win-game-in-admissions"
      )
      .embed()
      .then(data => {
        return data[0];
      });
    console.log(post.title);
  }

  render() {
    return (
      <View style={containerStyle}>
        <Title
          style={css({
            borderColor: "blue",
            borderStyle: "solid",
            borderWidth: 5,
            color: "red"
          })}
          href="#"
        >
          My page
        </Title>
        <Text> up App.tsx to sta123rt working on your app!</Text>
      </View>
    );
  }
}

const containerStyle = css({
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center"
});
