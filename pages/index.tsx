import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import styled from "@emotion/native";
import Link from "next/link";
import { getPostsAsync, getPostPath } from "../helpers/wpapi";
import Wrapper from "../components/Wrapper";
import { RView, BREAKPOINTS, mergeRStyle } from "../helpers/responsiveStyle";

// TODO: layout got reset to mobile one when returning from other app on iPad

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

const SectionStyle = styled.View({
  padding: 15,
});
const Section =
  Platform.OS === "web" ? SectionStyle.withComponent("section") : SectionStyle;
const SectionWithoutStyle =
  Platform.OS === "web" ? styled.View().withComponent("section") : View;

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

const ArticleStyle = styled.View({
  marginTop: 5,
  marginBottom: 5,
});
const Article: React.ElementType = (props: any) => {
  if (Platform.OS === "web") {
    const ArticleTag = ArticleStyle.withComponent("article");
    return <ArticleTag {...props} />;
  } else {
    return (
      <ArticleStyle>
        <TouchableOpacity
          onPress={() => {
            this.alert("Go to article!");
          }}
          {...props}
        />
      </ArticleStyle>
    );
  }
};

const ArticleHeader =
  Platform.OS === "web" ? styled.View().withComponent("header") : View;

const ArticleTitleStyle = styled.Text({
  backgroundColor: "#666",
  fontSize: 20,
  margin: 0,
  marginTop: 10,
  marginBottom: 10,
});
const ArticleTitle =
  Platform.OS === "web"
    ? ArticleTitleStyle.withComponent("h2")
    : ArticleTitleStyle;
const LinkToArticle: React.ElementType = ({ children, ...props }: any) => {
  if (Platform.OS === "web") {
    return (
      <Link href="/[year]/[month]/[day]/[slug]/" as="/2019/01/01/test">
        <a title="ARTICLE TITLE HERE" {...props}>
          {children}
        </a>
      </Link>
    );
  } else {
    return children;
  }
};

const ArticleSubtitleStyle = styled.Text({
  backgroundColor: "#999",
  fontSize: 17,
  margin: 0,
  marginTop: -5,
  marginBottom: 10,
});
const ArticleSubtitle =
  Platform.OS === "web"
    ? ArticleSubtitleStyle.withComponent("h3")
    : ArticleSubtitleStyle;

const Author: React.ElementType = ({ children, ...props }: any) => {
  if (Platform.OS === "web") {
    return (
      <View>
        <Text>
          <a href="https://example.com" rel="author" {...props}>
            {children}
          </a>
        </Text>
      </View>
    );
  } else {
    return <Text {...props}>{children}</Text>;
  }
};

const FeaturedSection: React.ElementType = (props: any) => {
  const HeadlineArticle: React.ElementType = (hProps: any) => {
    return (
      <Article
        style={{
          backgroundColor: "yellow",
        }}
      >
        <LinkToArticle>
          <Image
            style={{
              width: "100%",
              height: 200,
            }}
            source={{
              uri:
                "https://www.stanforddaily.com/wp-content/uploads/2019/08/44010386874_30ea221b19_o.jpg",
            }}
            resizeMode="cover"
          />
        </LinkToArticle>
        <ArticleHeader>
          <ArticleTitle>
            <LinkToArticle>
              Stanford legend Andrew Luck retires from NFL after six seasons
            </LinkToArticle>
          </ArticleTitle>
          <ArticleSubtitle>
            After push by student activists, Second Harvest of Silicon Valley,
            Graduate Student Council and R&DE partner for three deliveries
          </ArticleSubtitle>
        </ArticleHeader>
        <Text>
          Bring grocery bags, transportation (like a wagon, stroller, or a car)
          and your Stanford ID card, the RSVP form asks. The Monday event is a
          pilot of a campus food pantry, where students who self-identify as
          food insecure will receive up to 150 lbs of food per household.{" "}
        </Text>
        <Author>John Doe</Author>
      </Article>
    );
  };
  const SmallArticle: React.ElementType = (sProps: any) => {
    return (
      <Article
        style={{
          backgroundColor: "#ABCDEF",
        }}
      >
        <LinkToArticle>
          <Image
            style={{
              width: "100%",
              height: 100,
            }}
            source={{
              uri:
                "https://www.stanforddaily.com/wp-content/uploads/2019/08/44010386874_30ea221b19_o.jpg",
            }}
            resizeMode="cover"
          />
        </LinkToArticle>
        <ArticleHeader>
          <ArticleTitle>
            <LinkToArticle>
              Stanford legend Andrew Luck retires from NFL after six seasons
            </LinkToArticle>
          </ArticleTitle>
        </ArticleHeader>
        <Author>John Doe</Author>
      </Article>
    );
  };

  return (
    <Column
      rStyle={{
        [BREAKPOINTS.DEFAULT]: {
          flexGrow: 7,
          backgroundColor: "green",
          order: 1,
        },
        [BREAKPOINTS.TABLET]: {
          order: 2,
        },
      }}
    >
      <Section>
        <SectionTitle>Featured</SectionTitle>
        <HeadlineArticle />
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
                backgroundColor: "blue",
              },
            }}
          >
            <SmallArticle />
          </Column>
          <Column
            rStyle={{
              [BREAKPOINTS.DEFAULT]: {
                backgroundColor: "lightgray",
              },
            }}
          >
            <SmallArticle />
          </Column>
        </DesktopRow>
      </Section>
    </Column>
  );
};

const NewsSection: React.ElementType = (props: any) => {
  return (
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
      <Section>
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
      </Section>
    </Column>
  );
};

const SportsSection: React.ElementType = (props: any) => {
  return (
    <SectionWithoutStyle>
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
          <SectionStyle>
            <Text>sports1</Text>
          </SectionStyle>
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
          <SectionStyle>
            <Text>sports2</Text>
          </SectionStyle>
        </Column>
      </DesktopRow>
    </SectionWithoutStyle>
  );
};

const OpinionSection: React.ElementType = (props: any) => {
  return (
    <Section
      style={{
        flexGrow: 3,
        flexBasis: 0,
        backgroundColor: "blue",
        height: 100,
      }}
    >
      <Text>opinion</Text>
    </Section>
  );
};

const GrindSection: React.ElementType = (props: any) => {
  return (
    <Section
      style={{
        flexGrow: 3,
        flexBasis: 0,
        backgroundColor: "cyan",
        height: 100,
      }}
    >
      <Text>The Grind</Text>
    </Section>
  );
};

const ArtsAndLifeSection: React.ElementType = (props: any) => {
  return (
    <Section
      style={{
        flexGrow: 3,
        flexBasis: 0,
        backgroundColor: "lightred",
        height: 100,
      }}
    >
      <Text>arts and life</Text>
    </Section>
  );
};

const SponsoredSection: React.ElementType = (props: any) => {
  return (
    <Section
      style={{
        flexGrow: 3,
        flexBasis: 0,
        backgroundColor: "gray",
        height: 100,
      }}
    >
      <Text>sponsored content</Text>
    </Section>
  );
};

const MultimediaSection: React.ElementType = (props: any) => {
  return (
    <Section
      style={{
        flexGrow: 1,
        backgroundColor: "yellow",
        height: 400,
      }}
    >
      <Text>multimedia</Text>
    </Section>
  );
};

const MoreFromTheDailySection: React.ElementType = (props: any) => {
  return (
    <Section
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
          <View
            style={{
              height: 100,
              backgroundColor: "#123456",
            }}
          >
            <Text>article 1</Text>
          </View>
          <View
            style={{
              height: 100,
              backgroundColor: "#234234",
            }}
          >
            <Text>article 2</Text>
          </View>
          <View
            style={{
              height: 100,
              backgroundColor: "#928284",
            }}
          >
            <Text>article 3</Text>
          </View>
        </Column>
        <Column>
          <View
            style={{
              height: 80,
              backgroundColor: "#903894",
            }}
          >
            <Text>article 4</Text>
          </View>
          <View
            style={{
              height: 80,
              backgroundColor: "#098764",
            }}
          >
            <Text>article 5</Text>
          </View>
          <View
            style={{
              height: 80,
              backgroundColor: "#238923",
            }}
          >
            <Text>article 6</Text>
          </View>
        </Column>
        <Column>
          <View
            style={{
              height: 75,
              backgroundColor: "#373737",
            }}
          >
            <Text>article 7</Text>
          </View>
          <View
            style={{
              height: 75,
              backgroundColor: "#292929",
            }}
          >
            <Text>article 8</Text>
          </View>
          <View
            style={{
              height: 75,
              backgroundColor: "#575757",
            }}
          >
            <Text>article 9</Text>
          </View>
          <View
            style={{
              height: 75,
              backgroundColor: "#ababba",
            }}
          >
            <Text>article 10</Text>
          </View>
        </Column>
        <Column>
          <View
            style={{
              height: 75,
              backgroundColor: "#e83944",
            }}
          >
            <Text>article 11</Text>
          </View>
        </Column>
      </DesktopRow>
    </Section>
  );
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
              {/* TODO: on iPad FeaturedSection should not be displayed before NewsSection */}
              <FeaturedSection />
              <NewsSection />
            </DesktopRow>
            <SportsSection />
          </Column>
          <Column
            rStyle={{
              [BREAKPOINTS.DEFAULT]: {
                flexGrow: 3,
              },
            }}
          >
            <OpinionSection />
            <GrindSection />
            <ArtsAndLifeSection />
            <SponsoredSection />
          </Column>
        </DesktopRow>
        <MultimediaSection />
        <MoreFromTheDailySection />
      </ScrollView>
    );
  }
}

export function IndexWrapper(props): any {
  return <Wrapper class={Index} props={props} getInitialProps={{}} />;
}
