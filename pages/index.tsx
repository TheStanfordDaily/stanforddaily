import React from "react";
import { ScrollView, RefreshControl, Platform } from "react-native";
import {
  MediaRule,
  isWidthGreaterThanOrEqualTo,
} from "emotion-native-media-query";
import { BREAKPOINTS } from "../helpers/constants";
import { getHomeAsync, getHomeMoreAsync, Home, Post } from "../helpers/wpapi";
import Wrapper from "../components/Wrapper";
import { CategoryList } from "../components/CategoryList";
import LoadingView from "../components/Loading";
import { TopSection } from "../components/home/TopSection";
import { MainSection } from "../components/home/MainSection";
import { LeftSection } from "../components/home/LeftSection";
import { SportsSection } from "../components/home/SportsSection";
import { GrindSection } from "../components/home/GrindSection";
import { OpinionSection } from "../components/home/OpinionSection";
import { ArtsAndLifeSection } from "../components/home/ArtsAndLifeSection";
import { SponsoredSection } from "../components/home/SponsoredSection";
import { MultimediaSection } from "../components/home/MultimediaSection";
import { MoreFromTheDailySection } from "../components/home/MoreFromTheDailySection";
import { DesktopRow } from "../components/home/DesktopRow";
import { Column } from "../components/home/Column";
import { getBorderValue } from "../components/home/getBorderValue";

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
