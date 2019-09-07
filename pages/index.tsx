import React from "react";
import { Text, View, Image, ScrollView, Platform } from "react-native";
import styled from "@emotion/native";
import Link from "next/link";
import RView, {
  MediaRule,
  mergeRStyle,
  isWidthGreaterThanOrEqualTo,
} from "emotion-native-media-query";
import { BREAKPOINTS, FONTS, COLORS } from "../helpers/constants";
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
import { Article, ArticleHeader } from "../components/Article";
import { OrderedList } from "../components/List";
import { CategoryList } from "../components/CategoryList";
import LoadingView from "../components/Loading";

// TODO: layout got reset to mobile one when returning from other app on iPad

interface SectionProps {
  content: Post[];
  sectionTitle?: string;
  SectionTag?: React.ElementType;
  [key: string]: any;
}

interface ArticleProps {
  post: Post;
  [key: string]: any;
}

const borderValue = `1px solid ${COLORS.BORDER_COLOR}`;

const Column: React.ElementType = (props: any) => {
  const { style = {}, rStyle = {}, ...remainingProps } = props;
  const resultStyle = {
    flexDirection: "column",
    flexGrow: 1,
    ...style,
  };
  const resultRStyle = mergeRStyle(
    {
      [MediaRule.MinWidth]: {
        [BREAKPOINTS.TABLET]: {
          flexBasis: 0,
        },
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
      [MediaRule.MinWidth]: {
        [BREAKPOINTS.TABLET]: {
          flexDirection: "row",
        },
      },
    },
    rStyle,
  );

  return (
    <RView {...remainingProps} style={resultStyle} rStyle={resultRStyle} />
  );
};

const SectionTitleStyle = styled.Text({
  fontFamily: FONTS.TITLE,
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
    return children;
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
  const { thumbnailInfo } = post;

  let thumbnailUrl =
    "https://raw.githubusercontent.com/TheStanfordDaily/stanforddaily-graphic-assets/master/DailyIcon/without-background/DailyIcon.png";
  if (thumbnailInfo && thumbnailInfo.urls && thumbnailInfo.urls.mediumLarge) {
    thumbnailUrl = thumbnailInfo.urls.mediumLarge;
  }
  return (
    <Image
      resizeMode="cover"
      style={{
        width: "100%",
        backgroundColor: "#f4f4f4",
        ...style,
      }}
      source={{
        uri: thumbnailUrl,
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

const ArticleTitleStyle = styled.Text({
  fontFamily: FONTS.TITLE,
  fontSize: 20,
  margin: 0,
});
const ArticleTitle =
  Platform.OS === "web"
    ? ArticleTitleStyle.withComponent("h2")
    : ArticleTitleStyle;
const ArticleTitleWithLink: React.ElementType = ({
  post,
  marginBottomMore = false,
  style,
  ...props
}: {
  post: Post;
  marginBottomMore: boolean;
  [key: string]: any;
}) => {
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
      <LinkToArticle post={post} {...props}>
        {post.postTitle}
      </LinkToArticle>
    </ArticleTitle>
  );
};

const ArticleSubtitleStyle = styled.Text({
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
        <Text style={{ fontFamily: FONTS.AUXILIARY }}>
          {authors.map((author, index) => (
            <React.Fragment key={author.id}>
              {index > 0 && (authors.length !== 2 ? ", " : " ")}
              {index > 0 && index === authors.length - 1 && "and "}
              {/* TODO: USE NEXT LINK */}
              <a
                href={`https://www.stanforddaily.com/author/${author.userNicename}/`}
                rel="author"
                {...props}
              >
                {author.displayName}
              </a>
            </React.Fragment>
          ))}
        </Text>
      </View>
    );
  } else {
    return (
      <Text {...props}>
        {authors.map(author => author.displayName).join(", ")}
      </Text>
    );
  }
};

const PostExcerpt: React.ElementType = ({ post, style }: ArticleProps) => {
  const { postExcerpt } = post;
  return (
    <Text
      style={{
        fontFamily: FONTS.CONTENT,
      }}
    >
      {postExcerpt}
    </Text>
  );
};

const HeadlineArticle: React.ElementType = ({ post, style }: ArticleProps) => {
  const { postSubtitle, tsdAuthors } = post;
  return (
    <Article
      post={post}
      style={{
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
        {postSubtitle ? (
          <ArticleSubtitle>{postSubtitle}</ArticleSubtitle>
        ) : (
          undefined
        )}
      </ArticleHeader>
      <View
        style={{
          marginBottom: 5,
        }}
      >
        <PostExcerpt post={post} />
      </View>
      <AuthorView authors={tsdAuthors} />
    </Article>
  );
};

const TopThumbnailArticle: React.ElementType = ({ post }: ArticleProps) => {
  const { tsdAuthors } = post;
  return (
    <Article post={post}>
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
    <Article post={post}>
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
    <Article post={post}>
      <ArticleHeader>
        <ArticleTitleWithLink post={post} />
      </ArticleHeader>
      <AuthorView authors={tsdAuthors} />
    </Article>
  );
};

const TextOnlyArticle: React.ElementType = ({ post, style }: ArticleProps) => {
  const { tsdPrimaryCategory, tsdAuthors } = post;
  const date = getPostLocalDate(post);
  return (
    <RView
      style={{
        width: "100%",
      }}
      rStyle={{
        [MediaRule.MinWidth]: {
          [BREAKPOINTS.TABLET]: {
            width: 250,
            height: 340,
            paddingRight: 15,
            paddingLeft: 15,
            borderRight: "1px solid black",
          },
        },
      }}
    >
      <Article
        post={post}
        style={{
          width: "100%",
          ...style,
        }}
      >
        {/* TODO: ADD CATEGORY LINK */}
        <Text>{tsdPrimaryCategory.name}</Text>
        <ArticleHeader>
          <ArticleTitleWithLink post={post} />
        </ArticleHeader>
        <PostExcerpt post={post} />
        <View>
          <AuthorView authors={tsdAuthors} />
          <Text style={{ fontFamily: FONTS.AUXILIARY }}>
            {date.format("MMM DD YYYY")}
          </Text>
        </View>
      </Article>
    </RView>
  );
};

const ListStyleArticle: React.ElementType = ({ post }: ArticleProps) => {
  const { tsdAuthors } = post;
  return (
    <Article post={post}>
      <AuthorView authors={tsdAuthors} />
      <ArticleHeader>
        <ArticleTitleWithLink post={post} marginBottomMore />
      </ArticleHeader>
    </Article>
  );
};

const TopSection: React.ElementType = ({ content, style }: SectionProps) => {
  const SmallSection: React.ElementType = (sProps: any) => {
    return (
      <View
        style={{
          marginLeft: 20,
          flexDirection: "row",
          alignItems: "center",
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
      style={{ ...style }}
      rStyle={{
        [MediaRule.MaxWidth]: {
          [BREAKPOINTS.MAX_WIDTH.DESKTOP]: {
            display: "none",
          },
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
        order: 1,
      }}
      rStyle={{
        [MediaRule.MinWidth]: {
          [BREAKPOINTS.TABLET]: {
            order: 2,
          },
        },
      }}
    >
      <SectionTag>
        {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
        <HeadlineArticle post={content[0]} style={{ marginBottom: 20 }} />
        <DesktopRow>
          <Column>
            <TopThumbnailArticle post={content[1]} />
          </Column>
          <Column>
            <TopThumbnailArticle post={content[2]} />
          </Column>
        </DesktopRow>
      </SectionTag>
    </Column>
  );
};

const LeftSection: React.ElementType = (props: SectionProps) => {
  const { content, sectionTitle, SectionTag = Section, style } = props;
  return (
    <Column
      style={{
        flexGrow: 3,
        order: 2,
        ...style,
      }}
      rStyle={{
        [MediaRule.MinWidth]: {
          [BREAKPOINTS.TABLET]: {
            order: 1,
          },
        },
      }}
    >
      <SectionTag>
        {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
        <View>
          <TopThumbnailArticle post={content[0]} />
        </View>
        <View>
          <TopThumbnailArticle post={content[1]} />
        </View>
        <View>
          <TitleOnlyArticle post={content[2]} />
        </View>
        <View>
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
  return <RightListedSection content={content} sectionTitle="Opinion" />;
};

const GrindSection: React.ElementType = ({ content }: SectionProps) => {
  return <RightListedSection content={content} sectionTitle="The Grind" />;
};

const ArtsAndLifeSection: React.ElementType = ({ content }: SectionProps) => {
  return (
    <Section>
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
        height: 300,
      }}
    >
      <SectionTitle>sponsored content</SectionTitle>
    </Section>
  );
};

const MultimediaSection: React.ElementType = (props: SectionProps) => {
  const { style } = props;
  return (
    <Section
      style={{
        flexGrow: 1,
        height: 400,
        ...style,
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
        flexDirection: "column",
      }}
    >
      <Text>more from daily</Text>
      <RView
        style={{
          width: "100%",
          flexDirection: "column",
        }}
        rStyle={{
          [MediaRule.MinWidth]: {
            [BREAKPOINTS.TABLET]: {
              height: 700,
              overflow: "scroll",
              flexWrap: "wrap",
            },
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
      return <LoadingView />;
    }

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
      if (isWidthGreaterThanOrEqualTo(BREAKPOINTS.TABLET)) {
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
          style={{ borderRight: borderValue }}
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
          <TopSection
            content={homePosts.featured}
            style={{
              borderTop: borderValue,
            }}
          />
          <DesktopRow
            style={{
              borderTop: borderValue,
              borderBottom: borderValue,
            }}
          >
            <Column
              style={{
                flexGrow: 6,
              }}
            >
              <DesktopRow style={{ borderBottom: borderValue }}>
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
                borderLeft: borderValue,
              }}
            >
              <OpinionSection content={homePosts.opinions} />
              <GrindSection content={homePosts.theGrind} />
              <ArtsAndLifeSection content={homePosts.artsAndLife} />
              <SponsoredSection content={[]} />
            </Column>
          </DesktopRow>
          <MultimediaSection
            content={[]}
            style={{ borderBottom: borderValue }}
          />
          <MoreFromTheDailySection content={homePosts.moreFromTheDaily} />
        </ScrollView>
      </>
    );
  }
}

export function IndexPageWrapper(props): any {
  return <Wrapper class={IndexPage} props={props} getInitialProps={{}} />;
}
IndexPageWrapper.navigationOptions = {
  title: "Home",
};
