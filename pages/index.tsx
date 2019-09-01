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
import {
  RView,
  BREAKPOINTS,
  mergeRStyle,
  isWidthGreaterThan,
} from "../helpers/responsiveStyle";
import {
  getHomeAsync,
  getPostPath,
  getPostLocalDate,
  Home,
  Post,
  Author,
} from "../helpers/wpapi";
import Wrapper from "../components/Wrapper";
import {
  Section,
  SectionStyle,
  SectionWithoutStyle,
} from "../components/Section";
import { OrderedList } from "../components/List";
import { CategoryList } from "../components/CategoryList";

// TODO: layout got reset to mobile one when returning from other app on iPad

type SectionProps = {
  content: Post[];
  sectionTitle?: string;
  SectionTag?: string | React.Component;
  [key: string]: any;
};

type ArticleProps = {
  post: Post;
  [key: string]: any;
};

const Column: React.ElementType = (props: any) => {
  const { style = {}, rStyle = {}, ...remainingProps } = props;
  const resultStyle = {
    flexDirection: "column",
    flexGrow: 1,
    ...style,
  };
  const resultRStyle = mergeRStyle(
    {
      [BREAKPOINTS.TABLET]: {
        flexBasis: 0,
      },
    },
    rStyle,
  );

  return (
    <RView {...remainingProps} style={resultStyle} rStyle={resultRStyle} />
  );
};

const DesktopRow: React.ElementType = (props: any) => {
  const { style = {}, rStyle = {}, ...remainingProps } = props;
  const resultStyle = {
    flexDirection: "column",
    ...style,
  };
  const resultRStyle = mergeRStyle(
    {
      [BREAKPOINTS.TABLET]: {
        flexDirection: "row",
      },
    },
    rStyle,
  );

  return (
    <RView {...remainingProps} style={resultStyle} rStyle={resultRStyle} />
  );
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

const LinkToArticle: React.ElementType = ({
  post,
  children,
  ...props
}: {
  post: Post;
  [key: string]: any;
}) => {
  if (Platform.OS === "web") {
    return (
      <Link href="/[year]/[month]/[day]/[slug]/" as={getPostPath(post)}>
        <a title={post.postTitle} {...props}>
          {children}
        </a>
      </Link>
    );
  } else {
    return <Text>{post.postTitle}</Text>;
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

const ThumbnailImage: React.ElementType = ({
  post,
  style,
  ...props
}: {
  post: Post;
  [key: string]: any;
}) => {
  const { thumbnailUrl } = post;
  return (
    <Image
      resizeMode="cover"
      style={{
        width: "100%",
        backgroundColor: "#f4f4f4",
        ...style,
      }}
      source={{
        uri:
          thumbnailUrl ||
          "https://raw.githubusercontent.com/TheStanfordDaily/stanforddaily-graphic-assets/master/DailyIcon/without-background/DailyIcon.png",
      }}
      {...props}
    />
  );
};
const ThumbnailImageWithLink: React.ElementType = (props: {
  post: Post;
  [key: string]: any;
}) => {
  const { post } = props;
  return (
    <LinkToArticle post={post}>
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
});
const ArticleTitle =
  Platform.OS === "web"
    ? ArticleTitleStyle.withComponent("h2")
    : ArticleTitleStyle;
const ArticleTitleWithLink: React.ElementType = (props: {
  post: Post;
  marginBottomMore: boolean;
  [key: string]: any;
}) => {
  const { post, marginBottomMore = false, style } = props;
  let margin = {
    marginTop: 10,
    marginBottom: 5,
  };
  if (marginBottomMore) {
    margin = {
      marginTop: 5,
      marginBottom: 10,
    };
  }
  return (
    <ArticleTitle
      style={{
        ...margin,
        ...style,
      }}
    >
      <LinkToArticle {...props}>{post.postTitle}</LinkToArticle>
    </ArticleTitle>
  );
};

const ArticleSubtitleStyle = styled.Text({
  backgroundColor: "#999",
  fontSize: 17,
  margin: 0,
  marginBottom: 5,
});
const ArticleSubtitle: React.ElementType = (props: any) => {
  const Tag =
    Platform.OS === "web"
      ? ArticleSubtitleStyle.withComponent("h3")
      : ArticleSubtitleStyle;
  return (
    <View>
      <Tag {...props} />
    </View>
  );
};

const AuthorView: React.ElementType = ({
  authors,
  ...props
}: {
  authors: Author[];
  [key: string]: any;
}) => {
  if (Platform.OS === "web") {
    return (
      <View>
        <Text>
          {authors.map((author, index) => (
            <>
              {index > 0 && (authors.length !== 2 ? ", " : " ")}
              {index > 0 && index === authors.length - 1 && "and "}
              <a
                key={author.id}
                href={`https://www.stanforddaily.com/author/${author.userNicename}/`}
                rel="author"
                {...props}
              >
                {author.displayName}
              </a>
            </>
          ))}
        </Text>
      </View>
    );
  } else {
    return <Text {...props}>{authors.join(", ")}</Text>;
  }
};

const HeadlineArticle: React.ElementType = ({ post, style }: ArticleProps) => {
  const { postSubtitle, postExcerpt, tsdAuthors } = post;
  return (
    <Article
      style={{
        backgroundColor: "yellow",
        ...style,
      }}
    >
      <ThumbnailImageWithLink
        post={post}
        style={{
          height: 350,
        }}
      />
      <ArticleHeader>
        <ArticleTitleWithLink post={post} />
        {postSubtitle && <ArticleSubtitle>{postSubtitle}</ArticleSubtitle>}
      </ArticleHeader>
      <View
        style={{
          marginBottom: 5,
        }}
      >
        <Text>{postExcerpt}</Text>
      </View>
      <AuthorView authors={tsdAuthors} />
    </Article>
  );
};

const TopThumbnailArticle: React.ElementType = ({ post }: ArticleProps) => {
  const { tsdAuthors } = post;
  return (
    <Article
      style={{
        backgroundColor: "#ABCDEF",
      }}
    >
      <ThumbnailImageWithLink
        post={post}
        style={{
          height: 120,
        }}
      />
      <ArticleHeader>
        <ArticleTitleWithLink post={post} />
      </ArticleHeader>
      <AuthorView authors={tsdAuthors} />
    </Article>
  );
};

const SideThumbnailArticle: React.ElementType = ({ post }: ArticleProps) => {
  const { tsdAuthors } = post;
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
            post={post}
            style={{
              height: 100,
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
            <ArticleTitleWithLink
              post={post}
              style={{
                marginTop: 0,
              }}
            />
          </ArticleHeader>
          <AuthorView authors={tsdAuthors} />
        </View>
      </View>
    </Article>
  );
};

const TitleOnlyArticle: React.ElementType = ({ post }: ArticleProps) => {
  const { tsdAuthors } = post;
  return (
    <Article
      style={{
        backgroundColor: "#FEDCBA",
      }}
    >
      <ArticleHeader>
        <ArticleTitleWithLink post={post} />
      </ArticleHeader>
      <AuthorView authors={tsdAuthors} />
    </Article>
  );
};

const TextOnlyArticle: React.ElementType = ({ post, style }: ArticleProps) => {
  const { tsdPrimaryCategory, postExcerpt, tsdAuthors } = post;
  const date = getPostLocalDate(post);
  return (
    <RView
      style={{
        width: "100%",
      }}
      rStyle={{
        [BREAKPOINTS.TABLET]: {
          width: 250,
        },
      }}
    >
      <Article
        style={{
          width: "100%",
          backgroundColor: "#AAAAAA",
          ...style,
        }}
      >
        {/* TODO: ADD CATEGORY LINK */}
        <Text>{tsdPrimaryCategory.name}</Text>
        <ArticleHeader>
          <ArticleTitleWithLink post={post} />
        </ArticleHeader>
        <Text>{postExcerpt}</Text>
        <View>
          <AuthorView authors={tsdAuthors} />
          <Text>{date.format("MMM DD YYYY")}</Text>
        </View>
      </Article>
    </RView>
  );
};

const ListStyleArticle: React.ElementType = ({ post }: ArticleProps) => {
  const { tsdAuthors } = post;
  return (
    <Article
      style={{
        backgroundColor: "#935502",
      }}
    >
      <AuthorView authors={tsdAuthors} />
      <ArticleHeader>
        <ArticleTitleWithLink post={post} marginBottomMore />
      </ArticleHeader>
    </Article>
  );
};

const TopSection: React.ElementType = ({ content }: SectionProps) => {
  const SmallSection: React.ElementType = (sProps: any) => {
    return (
      <View
        style={{
          marginLeft: 20,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#666666",
        }}
      >
        <ThumbnailImage
          style={{
            width: 50,
            height: 50,
          }}
          post={content[0]}
        />
        <View>
          <View>
            <Text>Issue #</Text>
          </View>
          <View>
            <Text>The Daily Magazine</Text>
          </View>
          <View>
            <Text>Subtitle here lorem</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <RView
      style={{
        display: "none",
      }}
      rStyle={{
        [BREAKPOINTS.DESKTOP]: {
          display: "flex",
        },
      }}
    >
      <SectionStyle>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ backgroundColor: "#987654" }}>
              <Text>Top{"\n"}Stories</Text>
            </View>
            <OrderedList
              data={[
                { title: "Hello World first" },
                { title: "Welcome World Second" },
                { title: "Hi World Third" },
              ]}
              renderItem={(item: any) => {
                console.log(item);
                // TODO: COMPLETE THIS
                return (
                  <LinkToArticle post={content[0]}>{item.title}</LinkToArticle>
                );
              }}
              style={{ backgroundColor: "#472044" }}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SmallSection />
            <SmallSection />
            <SmallSection />
          </View>
        </View>
      </SectionStyle>
    </RView>
  );
};

const MainSection: React.ElementType = (props: SectionProps) => {
  const { content, sectionTitle, SectionTag = Section } = props;
  return (
    <Column
      style={{
        flexGrow: 7,
        backgroundColor: "green",
        order: 1,
      }}
      rStyle={{
        [BREAKPOINTS.TABLET]: {
          order: 2,
        },
      }}
    >
      <SectionTag>
        {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
        <HeadlineArticle post={content[0]} style={{ marginBottom: 20 }} />
        <DesktopRow
          style={{
            backgroundColor: "blue",
          }}
        >
          <Column
            style={{
              backgroundColor: "blue",
            }}
          >
            <TopThumbnailArticle post={content[1]} />
          </Column>
          <Column
            style={{
              backgroundColor: "lightgray",
            }}
          >
            <TopThumbnailArticle post={content[2]} />
          </Column>
        </DesktopRow>
      </SectionTag>
    </Column>
  );
};

const LeftSection: React.ElementType = (props: SectionProps) => {
  const { content, sectionTitle, SectionTag = Section } = props;
  return (
    <Column
      style={{
        flexGrow: 3,
        backgroundColor: "lightgreen",
        order: 2,
      }}
      rStyle={{
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
          <TopThumbnailArticle post={content[0]} />
        </View>
        <View
          style={{
            backgroundColor: "#A23456",
          }}
        >
          <TopThumbnailArticle post={content[1]} />
        </View>
        <View
          style={{
            backgroundColor: "#523456",
          }}
        >
          <TitleOnlyArticle post={content[2]} />
        </View>
        <View
          style={{
            backgroundColor: "#D2E456",
          }}
        >
          <TitleOnlyArticle post={content[3]} />
        </View>
      </SectionTag>
    </Column>
  );
};

const RightListedSection: React.ElementType = (props: SectionProps) => {
  const {
    content,
    sectionTitle,
    SectionTag = Section,
    ...remainingProps
  } = props;
  return (
    <SectionTag {...remainingProps}>
      {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
      <ListStyleArticle post={content[0]} />
      <ListStyleArticle post={content[1]} />
      <ListStyleArticle post={content[2]} />
      <ListStyleArticle post={content[3]} />
    </SectionTag>
  );
};

const SportsSection: React.ElementType = (props: SectionProps) => {
  const { content, mainBeforeSide } = props;
  const leftContent = content.slice(3);
  const mainContent = content.slice(0, 3);

  const SectionStyleWithoutPaddingTop = styled(SectionStyle)({
    paddingTop: 0,
  });

  const LeftSportSection: React.ElementType = (lsProps: SectionProps) => {
    return (
      <LeftSection
        content={leftContent}
        sectionTitle={null}
        SectionTag={SectionStyleWithoutPaddingTop}
        {...lsProps}
      />
    );
  };
  const MainSportSection: React.ElementType = (msProps: SectionProps) => {
    return (
      <MainSection
        content={mainContent}
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

const OpinionSection: React.ElementType = ({ content }: SectionProps) => {
  return (
    <RightListedSection
      content={content}
      sectionTitle="Opinion"
      style={{
        backgroundColor: "blue",
      }}
    />
  );
};

const GrindSection: React.ElementType = ({ content }: SectionProps) => {
  return (
    <RightListedSection
      content={content}
      sectionTitle="The Grind"
      style={{
        backgroundColor: "cyan",
      }}
    />
  );
};

const ArtsAndLifeSection: React.ElementType = ({ content }: SectionProps) => {
  return (
    <Section
      style={{
        backgroundColor: "lightred",
      }}
    >
      <SectionTitle>arts and life</SectionTitle>
      <SideThumbnailArticle post={content[0]} />
      <SideThumbnailArticle post={content[1]} />
      <SideThumbnailArticle post={content[2]} />
      <SideThumbnailArticle post={content[3]} />
    </Section>
  );
};

const SponsoredSection: React.ElementType = ({ content }: SectionProps) => {
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

const MultimediaSection: React.ElementType = (props: SectionProps) => {
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

const MoreFromTheDailySection: React.ElementType = ({
  content,
}: SectionProps) => {
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
        style={{
          backgroundColor: "lightblue",
          width: "100%",
          flexDirection: "column",
        }}
        rStyle={{
          [BREAKPOINTS.TABLET]: {
            height: 700,
            flexWrap: "wrap",
            overflow: "auto",
          },
        }}
      >
        {content.map(post => (
          <TextOnlyArticle key={post.id} post={post} />
        ))}
      </RView>
    </Section>
  );
};

interface IndexProps {
  homePosts?: Home;
  navigation?: any;
}

interface IndexState {}

export default class IndexPage extends React.Component<IndexProps, IndexState> {
  static async getInitialProps(): Promise<any> {
    const homePosts = await getHomeAsync();
    return { homePosts };
  }

  render(): React.ReactNode {
    const { homePosts } = this.props;
    if (!homePosts) {
      return <Text>Loading...</Text>;
    }
    /*
    return (
      <RView
        style={{
          margin: 0,
          padding: 30,
          lineHeight: "1.5",
          fontFamily: "Sans-Serif",
          backgroundColor: "red",
        }}
        rStyle={{
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
    const fposts = homePosts.moreFromTheDaily.map(post => {
      return (
        <View key={post.tsdUrlParameters.slug}>
          {Platform.OS === "web" ? (
            <Link href="/[year]/[month]/[day]/[slug]/" as={getPostPath(post)}>
              <a>{post.postTitle}</a>
            </Link>
          ) : (
            <Text
              onPress={() => {
                this.props.navigation.push("post", post.tsdUrlParameters);
              }}
            >
              {post.postTitle}
            </Text>
          )}
        </View>
      );
    });
    return <View>{fposts}</View>;
    */

    let featuredBeforeNews = true;
    // Note that on web it is handled by the CSS `order` property and media query.
    if (Platform.OS !== "web") {
      if (isWidthGreaterThan(BREAKPOINTS.TABLET)) {
        featuredBeforeNews = false;
      }
    }

    const FeaturedSection: React.ElementType = (fsProps: any) => {
      return (
        <MainSection
          sectionTitle="Featured"
          content={homePosts.featured}
          {...fsProps}
        />
      );
    };
    const NewsSection: React.ElementType = (nsProps: any) => {
      return (
        <LeftSection
          sectionTitle="News"
          content={homePosts.news}
          {...nsProps}
        />
      );
    };

    return (
      <>
        {Platform.OS === "ios" && <CategoryList />}
        <ScrollView
          contentContainerStyle={{
            flexDirection: "column",
          }}
        >
          {/* TODO: FIX THIS */}
          <TopSection content={homePosts.featured} />
          <DesktopRow>
            <Column
              style={{
                flexGrow: 6,
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
              <SportsSection
                content={homePosts.sports}
                mainBeforeSide={featuredBeforeNews}
              />
            </Column>
            <Column
              style={{
                flexGrow: 3,
              }}
            >
              <OpinionSection content={homePosts.opinions} />
              <GrindSection content={homePosts.theGrind} />
              <ArtsAndLifeSection content={homePosts.artsAndLife} />
              <SponsoredSection content={[]} />
            </Column>
          </DesktopRow>
          <MultimediaSection content={[]} />
          <MoreFromTheDailySection content={homePosts.moreFromTheDaily} />
        </ScrollView>
      </>
    );
  }
}

export function IndexPageWrapper(props): any {
  return <Wrapper class={IndexPage} props={props} getInitialProps={{}} />;
}
