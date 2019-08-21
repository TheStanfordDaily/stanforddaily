import React from "react";
import { Text, View, Platform, ScrollView } from "react-native";
import styled, { css } from "@emotion/native";
import Link from "next/link";
import { getPostsAsync, getPostPath } from "../helpers/wpapi";
import Wrapper from "../components/Wrapper";

const MyView = styled.View({
  margin: 0,
  padding: 0,
});

const Column: React.ElementType = props => (
  <View
    style={css({
      flexDirection: "column",
      flexGrow: 1,
      flexBasis: 0,
    })}
    {...props}
  />
);

interface IndexProps {
  posts?: any[];
  navigation?: any;
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
    /*
    const fposts = posts.map(post => {
      return (
        <View key={post.slug}>
          {Platform.OS === "web" ? (
            <Link href="/[year]/[month]/[day]/[slug]/" as={getPostPath(post)}>
              <a>{post.title.rendered}</a>
            </Link>
          ) : (
            <Text
              onPress={() => {
                this.props.navigation.push("post", { slug: post.slug });
              }}
            >
              {post.title.rendered}
            </Text>
          )}
        </View>
      );
    });
    return <View style={containerStyle}>{fposts}</View>;
    */
    return (
      <ScrollView
        contentContainerStyle={{
          flexDirection: "column",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <MyView
            style={{
              flexGrow: 6,
              flexBasis: 0,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <MyView
                style={{
                  flexGrow: 3,
                  flexBasis: 0,
                  backgroundColor: "lightgreen",
                  flexDirection: "column",
                }}
              >
                <MyView
                  style={{
                    backgroundColor: "#123456",
                    height: 100,
                  }}
                >
                  <Text>news 1</Text>
                </MyView>
                <MyView
                  style={{
                    backgroundColor: "#A23456",
                    height: 100,
                  }}
                >
                  <Text>news 2</Text>
                </MyView>
                <MyView
                  style={{
                    backgroundColor: "#523456",
                    height: 70,
                  }}
                >
                  <Text>news 3</Text>
                </MyView>
                <MyView
                  style={{
                    backgroundColor: "#D2E456",
                    height: 70,
                  }}
                >
                  <Text>news 4</Text>
                </MyView>
              </MyView>
              <MyView
                style={{
                  flexGrow: 7,
                  flexBasis: 0,
                  backgroundColor: "green",
                  flexDirection: "column",
                }}
              >
                <Text>featured</Text>
                <MyView
                  style={{
                    backgroundColor: "yellow",
                    height: 400,
                  }}
                >
                  <Text>featured article 1</Text>
                </MyView>
                <MyView
                  style={{
                    backgroundColor: "blue",
                    flexDirection: "row",
                  }}
                >
                  <MyView
                    style={{
                      backgroundColor: "#298323",
                      height: 200,
                      flexBasis: 0,
                      flexGrow: 1,
                    }}
                  >
                    <Text>featured article 2</Text>
                  </MyView>
                  <MyView
                    style={{
                      backgroundColor: "lightgray",
                      height: 200,
                      flexBasis: 0,
                      flexGrow: 1,
                    }}
                  >
                    <Text>featured article 3</Text>
                  </MyView>
                </MyView>
              </MyView>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MyView
                style={{
                  flexGrow: 3,
                  flexBasis: 0,
                  backgroundColor: "cyan",
                  height: 300,
                }}
              >
                <Text>sports1</Text>
              </MyView>
              <MyView
                style={{
                  flexGrow: 7,
                  flexBasis: 0,
                  backgroundColor: "orange",
                  height: 300,
                }}
              >
                <Text>sports2</Text>
              </MyView>
            </View>
          </MyView>
          <MyView
            style={{
              flexGrow: 3,
              flexBasis: 0,
              flexDirection: "column",
            }}
          >
            <MyView
              style={{
                flexGrow: 3,
                flexBasis: 0,
                backgroundColor: "blue",
                height: 100,
              }}
            >
              <Text>opinion</Text>
            </MyView>
            <MyView
              style={{
                flexGrow: 3,
                flexBasis: 0,
                backgroundColor: "cyan",
                height: 100,
              }}
            >
              <Text>grind</Text>
            </MyView>
            <MyView
              style={{
                flexGrow: 3,
                flexBasis: 0,
                backgroundColor: "lightred",
                height: 100,
              }}
            >
              <Text>arts and life</Text>
            </MyView>
            <MyView
              style={{
                flexGrow: 3,
                flexBasis: 0,
                backgroundColor: "gray",
                height: 100,
              }}
            >
              <Text>sponsored content</Text>
            </MyView>
          </MyView>
        </View>
        <MyView
          style={{
            flexGrow: 1,
            backgroundColor: "yellow",
            height: 400,
          }}
        >
          <Text>multimedia</Text>
        </MyView>
        <MyView
          style={{
            flexGrow: 1,
            backgroundColor: "green",
            flexDirection: "column",
          }}
        >
          <Text>more from daily</Text>
          <MyView
            style={{
              backgroundColor: "lightblue",
              flexDirection: "row",
            }}
          >
            <Column
              style={{
                flexGrow: 2,
              }}
            >
              <View style={{ height: 100, backgroundColor: "#123456" }}>
                <Text>article 1</Text>
              </View>
              <View style={{ height: 100, backgroundColor: "#234234" }}>
                <Text>article 2</Text>
              </View>
              <View style={{ height: 100, backgroundColor: "#928284" }}>
                <Text>article 3</Text>
              </View>
            </Column>
            <Column>
              <View style={{ height: 80, backgroundColor: "#903894" }}>
                <Text>article 4</Text>
              </View>
              <View style={{ height: 80, backgroundColor: "#098764" }}>
                <Text>article 5</Text>
              </View>
              <View style={{ height: 80, backgroundColor: "#238923" }}>
                <Text>article 6</Text>
              </View>
            </Column>
            <Column>
              <View style={{ height: 75, backgroundColor: "#373737" }}>
                <Text>article 7</Text>
              </View>
              <View style={{ height: 75, backgroundColor: "#292929" }}>
                <Text>article 8</Text>
              </View>
              <View style={{ height: 75, backgroundColor: "#575757" }}>
                <Text>article 9</Text>
              </View>
              <View style={{ height: 75, backgroundColor: "#ababba" }}>
                <Text>article 10</Text>
              </View>
            </Column>
            <Column>
              <View style={{ height: 75, backgroundColor: "#e83944" }}>
                <Text>
                  article
                  111111wefklnwejkfnjkewnfjkewjknfjkwefnjkwenjkfjknewfnjkewjknfjnkewjknf1
                </Text>
              </View>
            </Column>
          </MyView>
        </MyView>
      </ScrollView>
    );
  }
}

export function IndexWrapper(props): any {
  return <Wrapper class={Index} props={props} getInitialProps={{}} />;
}
