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
import {
  RView,
  BREAKPOINTS,
  mergeRStyle,
  isWidthGreaterThan,
} from "../helpers/responsiveStyle";

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

const ThumbnailImage: React.ElementType = ({ style, ...props }: any) => {
  return (
    <Image
      resizeMode="cover"
      style={{
        width: "100%",
        ...style,
      }}
      {...props}
    />
  );
};
const ThumbnailImageWithLink: React.ElementType = (props: any) => {
  return (
    <LinkToArticle>
      <ThumbnailImage {...props} />
    </LinkToArticle>
  );
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
const ArticleTitleWithLink: React.ElementType = (props: any) => {
  return (
    <ArticleTitle>
      <LinkToArticle {...props} />
    </ArticleTitle>
  );
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

const HeadlineArticle: React.ElementType = (props: any) => {
  return (
    <Article
      style={{
        backgroundColor: "yellow",
      }}
    >
      <ThumbnailImageWithLink
        style={{
          height: 200,
        }}
        source={{
          uri:
            "https://www.stanforddaily.com/wp-content/uploads/2019/08/44010386874_30ea221b19_o.jpg",
        }}
      />
      <ArticleHeader>
        <ArticleTitleWithLink>
          Stanford legend Andrew Luck retires from NFL after six seasons
        </ArticleTitleWithLink>
        <ArticleSubtitle>
          After push by student activists, Second Harvest of Silicon Valley,
          Graduate Student Council and R&DE partner for three deliveries
        </ArticleSubtitle>
      </ArticleHeader>
      <Text>
        Bring grocery bags, transportation (like a wagon, stroller, or a car)
        and your Stanford ID card, the RSVP form asks. The Monday event is a
        pilot of a campus food pantry, where students who self-identify as food
        insecure will receive up to 150 lbs of food per household.{" "}
      </Text>
      <Author>John Doe</Author>
    </Article>
  );
};

const TopThumbnailArticle: React.ElementType = (props: any) => {
  return (
    <Article
      style={{
        backgroundColor: "#ABCDEF",
      }}
    >
      <ThumbnailImageWithLink
        style={{
          height: 100,
        }}
        source={{
          uri:
            "https://www.stanforddaily.com/wp-content/uploads/2019/08/44010386874_30ea221b19_o.jpg",
        }}
      />
      <ArticleHeader>
        <ArticleTitleWithLink>
          Stanford legend Andrew Luck retires from NFL after six seasons
        </ArticleTitleWithLink>
      </ArticleHeader>
      <Author>John Doe</Author>
    </Article>
  );
};

const SideThumbnailArticle: React.ElementType = (props: any) => {
  return (
    <Article
      style={{
        backgroundColor: "#ABCDEF",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexBasis: "35%",
            justifyContent: "center",
          }}
        >
          <ThumbnailImageWithLink
            style={{
              height: 100,
            }}
            source={{
              uri:
                "https://www.stanforddaily.com/wp-content/uploads/2019/08/44010386874_30ea221b19_o.jpg",
            }}
          />
        </View>
        <View
          style={{
            flexBasis: "65%",
            justifyContent: "center",
          }}
        >
          <ArticleHeader>
            <ArticleTitleWithLink>
              Stanford legend Andrew Luck retires from NFL after six seasons
            </ArticleTitleWithLink>
          </ArticleHeader>
          <Author>John Doe</Author>
        </View>
      </View>
    </Article>
  );
};

const TitleOnlyArticle: React.ElementType = (props: any) => {
  return (
    <Article
      style={{
        backgroundColor: "#FEDCBA",
      }}
    >
      <ArticleHeader>
        <ArticleTitleWithLink>
          Stanford legend Andrew Luck retires from NFL after six seasons
        </ArticleTitleWithLink>
      </ArticleHeader>
      <Author>John Doe</Author>
    </Article>
  );
};

const TextOnlyArticle: React.ElementType = (props: any) => {
  const { style } = props;
  return (
    <Article
      style={{
        width: 250,
        backgroundColor: "#AAAAAA",
        ...style,
      }}
    >
      {/* TODO: ADD CATEGORY LINK */}
      <Text>Sports</Text>
      <ArticleHeader>
        <ArticleTitleWithLink>
          Stanford legend Andrew Luck retires from NFL after six seasons
        </ArticleTitleWithLink>
      </ArticleHeader>
      <Text>
        Bring grocery bags, transportation (like a wagon, stroller, or a car)
        and your Stanford ID card, the RSVP form asks. The Monday event is a
        pilot of a campus food pantry, where students who self-identify as food
        insecure will receive up to 150 lbs of food per household.{" "}
      </Text>
      <View>
        <Author>John Doe</Author>
        <Text>Jan 01, 2019</Text>
      </View>
    </Article>
  );
};

const ListStyleArticle: React.ElementType = (props: any) => {
  return (
    <Article
      style={{
        backgroundColor: "#935502",
      }}
    >
      <Author>John Doe</Author>
      <ArticleHeader>
        <ArticleTitleWithLink>
          Stanford legend Andrew Luck retires from NFL after six seasons
        </ArticleTitleWithLink>
      </ArticleHeader>
    </Article>
  );
};

const MainSection: React.ElementType = (props: any) => {
  const { sectionTitle, SectionTag = Section } = props;
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
      <SectionTag>
        {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
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
            <TopThumbnailArticle />
          </Column>
          <Column
            rStyle={{
              [BREAKPOINTS.DEFAULT]: {
                backgroundColor: "lightgray",
              },
            }}
          >
            <TopThumbnailArticle />
          </Column>
        </DesktopRow>
      </SectionTag>
    </Column>
  );
};

const LeftSection: React.ElementType = (props: any) => {
  const { sectionTitle, SectionTag = Section } = props;
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
      <SectionTag>
        {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
        <View
          style={{
            backgroundColor: "#123456",
          }}
        >
          <TopThumbnailArticle />
        </View>
        <View
          style={{
            backgroundColor: "#A23456",
          }}
        >
          <TopThumbnailArticle />
        </View>
        <View
          style={{
            backgroundColor: "#523456",
          }}
        >
          <TitleOnlyArticle />
        </View>
        <View
          style={{
            backgroundColor: "#D2E456",
          }}
        >
          <TitleOnlyArticle />
        </View>
      </SectionTag>
    </Column>
  );
};

const RightListedSection: React.ElementType = (props: any) => {
  const { sectionTitle, SectionTag = Section, ...remainingProps } = props;
  return (
    <SectionTag {...remainingProps}>
      {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
      <ListStyleArticle />
      <ListStyleArticle />
      <ListStyleArticle />
      <ListStyleArticle />
    </SectionTag>
  );
};

const SportsSection: React.ElementType = (props: any) => {
  const { mainBeforeSide } = props;

  const SectionStyleWithoutPaddingTop = styled(SectionStyle)({
    paddingTop: 0,
  });

  const LeftSportSection: React.ElementType = (lsProps: any) => {
    return (
      <LeftSection
        sectionTitle={null}
        SectionTag={SectionStyleWithoutPaddingTop}
        {...lsProps}
      />
    );
  };
  const MainSportSection: React.ElementType = (msProps: any) => {
    return (
      <MainSection
        sectionTitle={null}
        SectionTag={SectionStyleWithoutPaddingTop}
        {...msProps}
      />
    );
  };

  return (
    <SectionWithoutStyle>
      <SectionStyle style={{ paddingBottom: 0 }}>
        <SectionTitle>Sports</SectionTitle>
      </SectionStyle>
      <DesktopRow>
        {mainBeforeSide ? (
          <>
            <MainSportSection />
            <LeftSportSection />
          </>
        ) : (
          <>
            <LeftSportSection />
            <MainSportSection />
          </>
        )}
      </DesktopRow>
    </SectionWithoutStyle>
  );
};

const OpinionSection: React.ElementType = (props: any) => {
  return (
    <RightListedSection
      sectionTitle="Opinion"
      style={{
        backgroundColor: "blue",
      }}
    />
  );
};

const GrindSection: React.ElementType = (props: any) => {
  return (
    <RightListedSection
      sectionTitle="The Grind"
      style={{
        backgroundColor: "cyan",
      }}
    />
  );
};

const ArtsAndLifeSection: React.ElementType = (props: any) => {
  return (
    <Section
      style={{
        backgroundColor: "lightred",
      }}
    >
      <SectionTitle>arts and life</SectionTitle>
      <SideThumbnailArticle />
      <SideThumbnailArticle />
      <SideThumbnailArticle />
      <SideThumbnailArticle />
    </Section>
  );
};

const SponsoredSection: React.ElementType = (props: any) => {
  return (
    <Section
      style={{
        backgroundColor: "gray",
        height: 300,
      }}
    >
      <SectionTitle>sponsored content</SectionTitle>
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
      <RView
        rStyle={{
          [BREAKPOINTS.DEFAULT]: {
            backgroundColor: "lightblue",
            height: 700,
            width: "100%",
            flexWrap: "wrap",
            flexDirection: "column",
          },
        }}
      >
        <View style={{ width: 400, height: "100%" }}>
          <TextOnlyArticle style={{ width: "100%" }} />
          <TextOnlyArticle style={{ width: "100%" }} />
          <TextOnlyArticle style={{ width: "100%" }} />
        </View>
        <TextOnlyArticle />
        <TextOnlyArticle />
        <TextOnlyArticle />
        <TextOnlyArticle />
        <TextOnlyArticle />
        <TextOnlyArticle />
        <TextOnlyArticle />
        <TextOnlyArticle />
        <TextOnlyArticle />
      </RView>
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

    let featuredBeforeNews = true;
    // Note that on web it is handled by the CSS `order` property and media query.
    if (Platform.OS !== "web") {
      if (isWidthGreaterThan(BREAKPOINTS.TABLET)) {
        featuredBeforeNews = false;
      }
    }

    const FeaturedSection: React.ElementType = (fsProps: any) => {
      return <MainSection sectionTitle="Featured" {...fsProps} />;
    };
    const NewsSection: React.ElementType = (nsProps: any) => {
      return <LeftSection sectionTitle="News" {...nsProps} />;
    };

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
              {featuredBeforeNews ? (
                <>
                  <FeaturedSection />
                  <NewsSection />
                </>
              ) : (
                <>
                  <NewsSection />
                  <FeaturedSection />
                </>
              )}
            </DesktopRow>
            <SportsSection mainBeforeSide={featuredBeforeNews} />
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
