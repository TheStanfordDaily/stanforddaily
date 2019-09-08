import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Platform,
} from "react-native";
import styled from "@emotion/native";
import Link from "next/link";
import RView, {
  MediaRule,
  mergeRStyle,
  isWidthGreaterThanOrEqualTo,
  Style,
  RStyle,
} from "emotion-native-media-query";
import {
  BREAKPOINTS,
  FONTS,
  COLORS,
  STANFORD_COLORS,
} from "../helpers/constants";
import {
  getHomeAsync,
  getHomeMoreAsync,
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
  style?: Style;
  rStyle?: RStyle;
  [key: string]: any;
}

interface ArticleProps {
  post: Post;
  [key: string]: any;
}

const getBorderValue = (type: "Top" | "Bottom" | "Left" | "Right"): Style => {
  return Platform.OS === "web"
    ? { [`border${type}`]: `1px solid ${COLORS.BORDER_COLOR}` }
    : {
        [`border${type}Color`]: COLORS.BORDER_COLOR,
        [`border${type}Width`]: 1,
      };
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
  fontSize: 15,
  color: STANFORD_COLORS.CARDINAL_DARK_RED,
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
  fontSize: 15,
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
        <ArticleTitleWithLink post={post} style={{ fontSize: 20 }} />
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
            marginLeft: 20,
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
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 300,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        border: "1px solid black",
      }}
      rStyle={{
        [MediaRule.MinWidth]: {
          [BREAKPOINTS.TABLET]: {
            minHeight: 340,
            padding: 10,
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
          marginLeft: 30,
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
        <View
          style={{
            marginLeft: 10,
          }}
        >
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
        [MediaRule.MinWidth]: {
          [BREAKPOINTS.DESKTOP]: {
            ...getBorderValue("Top"),
          },
        },
        [MediaRule.MaxWidth]: {
          [BREAKPOINTS.MAX_WIDTH.DESKTOP]: {
            display: "none",
          },
        },
      }}
    >
      <SectionStyle style={{ paddingTop: 10, paddingBottom: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ backgroundColor: "#d7b9b9" }}>
              <Text style={{ color: "white" }}>Top{"\n"}Stories</Text>
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
              style={{
                paddingLeft: 30,
              }}
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
  const { content, sectionTitle, SectionTag = Section, style, rStyle } = props;
  return (
    <Column
      style={{
        flexGrow: 7,
        order: 1,
        ...style,
      }}
      rStyle={mergeRStyle(
        {
          [MediaRule.MinWidth]: {
            [BREAKPOINTS.TABLET]: {
              order: 2,
            },
          },
        },
        rStyle,
      )}
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
  const { content, sectionTitle, SectionTag = Section, style, rStyle } = props;
  return (
    <Column
      style={{
        flexGrow: 3,
        order: 2,
        ...style,
      }}
      rStyle={mergeRStyle(
        {
          [MediaRule.MinWidth]: {
            [BREAKPOINTS.TABLET]: {
              order: 1,
            },
          },
        },
        rStyle,
      )}
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
    <RView WebTag={SectionTag} NativeTag={SectionTag} {...remainingProps}>
      {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
      <ListStyleArticle post={content[0]} />
      <ListStyleArticle post={content[1]} />
      <ListStyleArticle post={content[2]} />
      <ListStyleArticle post={content[3]} />
    </RView>
  );
};

const SportsSection: React.ElementType = (props: SectionProps) => {
  const { content, mainBeforeSide, style, rStyle } = props;
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
    <RView
      WebTag={SectionWithoutStyle}
      NativeTag={SectionWithoutStyle}
      style={style}
      rStyle={rStyle}
    >
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
    </RView>
  );
};

const OpinionSection: React.ElementType = ({
  content,
  ...props
}: SectionProps) => {
  return (
    <RightListedSection content={content} sectionTitle="Opinion" {...props} />
  );
};

const GrindSection: React.ElementType = ({
  content,
  ...props
}: SectionProps) => {
  return (
    <RightListedSection content={content} sectionTitle="The Grind" {...props} />
  );
};

const ArtsAndLifeSection: React.ElementType = ({
  content,
  ...props
}: SectionProps) => {
  return (
    <RView WebTag={Section} NativeTag={Section} {...props}>
      <SectionTitle>arts and life</SectionTitle>
      <SideThumbnailArticle post={content[0]} />
      <SideThumbnailArticle post={content[1]} />
      <SideThumbnailArticle post={content[2]} />
      <SideThumbnailArticle post={content[3]} />
    </RView>
  );
};

const SponsoredSection: React.ElementType = ({
  content,
  ...props
}: SectionProps) => {
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
      <SectionTitle>Video & Photograph</SectionTitle>
    </Section>
  );
};

const MoreFromTheDailySection: React.ElementType = ({
  content,
  extraContent,
  loadMore,
  loadMoreEnabled,
}: SectionProps) => {
  return (
    <Section
      style={{
        flexGrow: 1,
        flexDirection: "column",
      }}
    >
      <SectionTitle>More from The Daily</SectionTitle>
      <RView
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          marginLeft: -10,
          marginRight: -10,
        }}
      >
        {content.map(post => (
          <TextOnlyArticle key={post.id} post={post} />
        ))}
        {(extraContent as Post[]).map(post => (
          <TextOnlyArticle key={post.id} post={post} />
        ))}
        <TouchableOpacity
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            height: 100,
            backgroundColor: STANFORD_COLORS.LIGHT_SANDSTONE,
          }}
          disabled={!loadMoreEnabled}
          onPress={async () => loadMore()}
        >
          <Text>{loadMoreEnabled ? "Load more" : "Loading..."}</Text>
        </TouchableOpacity>
      </RView>
    </Section>
  );
};

interface IndexProps {
  homePosts?: Home;
  navigation?: any;
  refreshControl?: any;
}

interface IndexState {
  extraArticles: Post[];
  extraArticlesPageCount: number;
  extraArticlesLoading: boolean;
}

export default class IndexPage extends React.Component<IndexProps, IndexState> {
  constructor(props) {
    super(props);

    this.state = {
      extraArticles: [],
      extraArticlesPageCount: 0,
      extraArticlesLoading: false,
    };
  }

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
          rStyle={{
            [MediaRule.MaxWidth]: {
              [BREAKPOINTS.MAX_WIDTH.TABLET]: {
                ...getBorderValue("Bottom"),
              },
            },
          }}
          {...fsProps}
        />
      );
    };
    const NewsSection: React.ElementType = (nsProps: any) => {
      return (
        <LeftSection
          sectionTitle="News"
          content={homePosts.news}
          rStyle={{
            [MediaRule.MinWidth]: {
              [BREAKPOINTS.TABLET]: {
                ...getBorderValue("Right"),
              },
            },
          }}
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
          refreshControl={this.props.refreshControl}
        >
          {/* TODO: FIX THIS */}
          <TopSection content={homePosts.featured} />
          <DesktopRow
            style={{
              ...getBorderValue("Bottom"),
            }}
            rStyle={{
              [MediaRule.MinWidth]: {
                [BREAKPOINTS.TABLET]: {
                  ...getBorderValue("Top"),
                },
              },
            }}
          >
            <Column
              style={{
                flexGrow: 6,
              }}
            >
              <DesktopRow
                style={{
                  ...getBorderValue("Bottom"),
                }}
              >
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
                rStyle={{
                  [MediaRule.MaxWidth]: {
                    [BREAKPOINTS.MAX_WIDTH.TABLET]: {
                      ...getBorderValue("Bottom"),
                    },
                  },
                }}
              />
            </Column>
            <Column
              style={{
                flexGrow: 3,
              }}
              rStyle={{
                [MediaRule.MinWidth]: {
                  [BREAKPOINTS.TABLET]: {
                    ...getBorderValue("Left"),
                  },
                },
              }}
            >
              <OpinionSection
                content={homePosts.opinions}
                rStyle={{
                  [MediaRule.MaxWidth]: {
                    [BREAKPOINTS.MAX_WIDTH.TABLET]: {
                      ...getBorderValue("Bottom"),
                    },
                  },
                }}
              />
              <GrindSection
                content={homePosts.theGrind}
                rStyle={{
                  [MediaRule.MaxWidth]: {
                    [BREAKPOINTS.MAX_WIDTH.TABLET]: {
                      ...getBorderValue("Bottom"),
                    },
                  },
                }}
              />
              <ArtsAndLifeSection
                content={homePosts.artsAndLife}
                rStyle={{
                  [MediaRule.MaxWidth]: {
                    [BREAKPOINTS.MAX_WIDTH.TABLET]: {
                      ...getBorderValue("Bottom"),
                    },
                  },
                }}
              />
              <SponsoredSection content={[]} />
            </Column>
          </DesktopRow>
          <MultimediaSection
            content={[]}
            style={{
              ...getBorderValue("Bottom"),
            }}
          />
          <MoreFromTheDailySection
            content={homePosts.moreFromTheDaily}
            extraContent={this.state.extraArticles}
            loadMoreEnabled={!this.state.extraArticlesLoading}
            loadMore={async () => {
              this.setState({ extraArticlesLoading: true }, async () => {
                const newExtraArticles = await getHomeMoreAsync(
                  this.state.extraArticlesPageCount + 1,
                );
                this.setState(
                  prevState => ({
                    extraArticlesPageCount:
                      prevState.extraArticlesPageCount + 1,
                    extraArticles: prevState.extraArticles.concat(
                      newExtraArticles,
                    ),
                  }),
                  () => {
                    this.setState({ extraArticlesLoading: false });
                  },
                );
              });
            }}
          />
        </ScrollView>
      </>
    );
  }
}

export function IndexPageWrapper(props): any {
  const [refreshing, setRefreshing] = React.useState(false);
  const wrapper: React.RefObject<Wrapper> = React.createRef();

  return (
    <Wrapper
      class={IndexPage}
      ref={wrapper}
      props={{
        ...props,
        refreshControl: (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={async () => {
              setRefreshing(true);
              await wrapper.current._setInitialProps();
              setRefreshing(false);
            }}
          />
        ),
      }}
      getInitialProps={{}}
    />
  );
}
IndexPageWrapper.navigationOptions = {
  title: "Home",
};
