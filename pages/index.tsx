import React from "react";
import { Text, View, Image, ScrollView, Platform } from "react-native";
import styled from "@emotion/native";
import Link from "next/link";
import { getPostsAsync, getPostPath } from "../helpers/wpapi";
import Wrapper from "../components/Wrapper";
import { RView, BREAKPOINTS, mergeRStyle } from "../helpers/responsiveStyle";

const Column: React.ElementType = (props: any) => {
  const { rStyle = {}, ...remainingProps } = props;
  const resultRStyle = mergeRStyle(
    {
      [BREAKPOINTS.DEFAULT]: {
        flexDirection: "column",
        flexGrow: 1,
      },
      [BREAKPOINTS.TABLET]: {
        flexBasis: 0,
      },
    },
    rStyle,
  );

  return <RView {...remainingProps} rStyle={resultRStyle} />;
};

const DesktopRow: React.ElementType = (props: any) => {
  const { rStyle = {}, ...remainingProps } = props;
  const resultRStyle = mergeRStyle(
    {
      [BREAKPOINTS.DEFAULT]: {
        flexDirection: "column",
      },
      [BREAKPOINTS.TABLET]: {
        flexDirection: "row",
      },
    },
    rStyle,
  );

  return <RView {...remainingProps} rStyle={resultRStyle} />;
};

const SectionTitleStyle = styled.Text({
  backgroundColor: "#333",
  fontSize: 25,
  margin: 0,
  marginBottom: 15,
});
const SectionTitle =
  Platform.OS === "web"
    ? SectionTitleStyle.withComponent("h1")
    : SectionTitleStyle;

const ArticleTitleStyle = styled.Text({
  backgroundColor: "#666",
  fontSize: 20,
  margin: 0,
  marginTop: 10,
  marginBottom: 15,
});
const ArticleTitle =
  Platform.OS === "web"
    ? ArticleTitleStyle.withComponent("h2")
    : ArticleTitleStyle;

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
    return (
      <RView
        rStyle={{
          [BREAKPOINTS.DEFAULT]: {
            margin: 0,
            padding: 30,
            lineHeight: "1.5",
            fontFamily: "Sans-Serif",
            backgroundColor: "red",
          },
          [BREAKPOINTS.TABLET]: {
            backgroundColor: "pink",
          },
          [BREAKPOINTS.DESKTOP]: {
            backgroundColor: "green",
          },
        }}
      >
        <Text>haha</Text>
      </RView>
    );
    */
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
            rStyle={{
              [BREAKPOINTS.DEFAULT]: {
                flexGrow: 6,
              },
            }}
          >
            <DesktopRow>
              <Column
                rStyle={{
                  [BREAKPOINTS.DEFAULT]: {
                    flexGrow: 7,
                    backgroundColor: "green",
                    padding: 15,
                    order: 1,
                  },
                  [BREAKPOINTS.TABLET]: {
                    order: 2,
                  },
                }}
              >
                <SectionTitle>Featured</SectionTitle>
                <View
                  style={{
                    backgroundColor: "yellow",
                  }}
                >
                  <Image
                    style={{ width: "100%", height: 200 }}
                    source={{
                      uri:
                        "https://www.stanforddaily.com/wp-content/uploads/2019/08/44010386874_30ea221b19_o.jpg",
                    }}
                    resizeMode="cover"
                  />
                  <ArticleTitle>
                    Stanford legend Andrew Luck retires from NFL after six
                    seasons
                  </ArticleTitle>
                </View>
                <DesktopRow
                  rStyle={{
                    [BREAKPOINTS.DEFAULT]: {
                      backgroundColor: "blue",
                    },
                  }}
                >
                  <Column
                    rStyle={{
                      [BREAKPOINTS.DEFAULT]: {
                        backgroundColor: "#298323",
                        height: 200,
                      },
                    }}
                  >
                    <Text>featured article 2</Text>
                  </Column>
                  <Column
                    rStyle={{
                      [BREAKPOINTS.DEFAULT]: {
                        backgroundColor: "lightgray",
                        height: 200,
                      },
                    }}
                  >
                    <Text>featured article 3</Text>
                  </Column>
                </DesktopRow>
              </Column>
              <Column
                rStyle={{
                  [BREAKPOINTS.DEFAULT]: {
                    flexGrow: 3,
                    backgroundColor: "lightgreen",
                    order: 2,
                  },
                  [BREAKPOINTS.TABLET]: {
                    order: 1,
                  },
                }}
              >
                <View
                  style={{
                    backgroundColor: "#123456",
                    height: 100,
                  }}
                >
                  <Text>news 1</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#A23456",
                    height: 100,
                  }}
                >
                  <Text>news 2</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#523456",
                    height: 70,
                  }}
                >
                  <Text>news 3</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#D2E456",
                    height: 70,
                  }}
                >
                  <Text>news 4</Text>
                </View>
              </Column>
            </DesktopRow>
            <DesktopRow>
              <Column
                rStyle={{
                  [BREAKPOINTS.DEFAULT]: {
                    flexGrow: 3,
                    backgroundColor: "cyan",
                    height: 300,
                  },
                }}
              >
                <Text>sports1</Text>
              </Column>
              <Column
                rStyle={{
                  [BREAKPOINTS.DEFAULT]: {
                    flexGrow: 7,
                    backgroundColor: "orange",
                    height: 300,
                  },
                }}
              >
                <Text>sports2</Text>
              </Column>
            </DesktopRow>
          </Column>
          <Column
            rStyle={{
              [BREAKPOINTS.DEFAULT]: {
                flexGrow: 3,
              },
            }}
          >
            <View
              style={{
                flexGrow: 3,
                flexBasis: 0,
                backgroundColor: "blue",
                height: 100,
              }}
            >
              <Text>opinion</Text>
            </View>
            <View
              style={{
                flexGrow: 3,
                flexBasis: 0,
                backgroundColor: "cyan",
                height: 100,
              }}
            >
              <Text>grind</Text>
            </View>
            <View
              style={{
                flexGrow: 3,
                flexBasis: 0,
                backgroundColor: "lightred",
                height: 100,
              }}
            >
              <Text>arts and life</Text>
            </View>
            <View
              style={{
                flexGrow: 3,
                flexBasis: 0,
                backgroundColor: "gray",
                height: 100,
              }}
            >
              <Text>sponsored content</Text>
            </View>
          </Column>
        </DesktopRow>
        <View
          style={{
            flexGrow: 1,
            backgroundColor: "yellow",
            height: 400,
          }}
        >
          <Text>multimedia</Text>
        </View>
        <View
          style={{
            flexGrow: 1,
            backgroundColor: "green",
            flexDirection: "column",
          }}
        >
          <Text>more from daily</Text>
          <DesktopRow
            rStyle={{
              [BREAKPOINTS.DEFAULT]: {
                backgroundColor: "lightblue",
              },
            }}
          >
            <Column
              rStyle={{
                [BREAKPOINTS.DEFAULT]: {
                  flexGrow: 2,
                },
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
        </View>
      </ScrollView>
    );
  }
}

export function IndexWrapper(props): any {
  return <Wrapper class={Index} props={props} getInitialProps={{}} />;
}
