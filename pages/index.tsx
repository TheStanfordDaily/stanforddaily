// TODO: use pure React + display: grid!
import React from "react";
import { Text, View, Dimensions, ScrollView, ViewProps } from "react-native";
import styled, { css } from "@emotion/native";
import Link from "next/link";
import { getPostsAsync, getPostPath } from "../helpers/wpapi";
import Wrapper from "../components/Wrapper";

const MyView = styled.View({
  margin: 0,
  padding: 0,
});

function isMobile(): boolean {
  const { width } = Dimensions.get("window");
  console.warn(width);
  return width < 600;
}

const Column: React.ElementType = (props: any) => {
  const style: any = {
    flexDirection: "column",
    flexGrow: 1,
  };
  if (!isMobile()) {
    style.flexBasis = 0;
  }
  return <View {...props} style={{ ...style, ...props.style }} />;
};

const DesktopRow: React.ElementType = (props: any) => {
  const style: any = {
    flexDirection: "row",
  };
  if (isMobile()) {
    style.flexDirection = "column";
  }
  return <View {...props} style={{ ...style, ...props.style }} />;
};

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

  componentDidMount(): void {
    Dimensions.addEventListener("change", () => {
      this.forceUpdate();
    });
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
        <DesktopRow>
          <Column
            style={{
              flexGrow: 6,
            }}
          >
            <DesktopRow>
              <Column
                style={{
                  flexGrow: 3,
                  backgroundColor: "lightgreen",
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
              </Column>
              <Column
                style={{
                  flexGrow: 7,
                  backgroundColor: "green",
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
                <DesktopRow
                  style={{
                    backgroundColor: "blue",
                  }}
                >
                  <Column
                    style={{
                      backgroundColor: "#298323",
                      height: 200,
                    }}
                  >
                    <Text>featured article 2</Text>
                  </Column>
                  <Column
                    style={{
                      backgroundColor: "lightgray",
                      height: 200,
                    }}
                  >
                    <Text>featured article 3</Text>
                  </Column>
                </DesktopRow>
              </Column>
            </DesktopRow>
            <DesktopRow>
              <Column
                style={{
                  flexGrow: 3,
                  backgroundColor: "cyan",
                  height: 300,
                }}
              >
                <Text>sports1</Text>
              </Column>
              <Column
                style={{
                  flexGrow: 7,
                  backgroundColor: "orange",
                  height: 300,
                }}
              >
                <Text>sports2</Text>
              </Column>
            </DesktopRow>
          </Column>
          <Column
            style={{
              flexGrow: 3,
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
          </Column>
        </DesktopRow>
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
          <DesktopRow
            style={{
              backgroundColor: "lightblue",
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
                <Text>article 11</Text>
              </View>
            </Column>
          </DesktopRow>
        </MyView>
      </ScrollView>
    );
  }
}

export function IndexWrapper(props): any {
  return <Wrapper class={Index} props={props} getInitialProps={{}} />;
}
