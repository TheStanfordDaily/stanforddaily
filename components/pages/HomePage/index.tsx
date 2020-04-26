import React from "react";
import {
  ScrollView,
  RefreshControl,
  Platform,
  SafeAreaView,
} from "react-native";
import {
  MediaRule,
  isWidthGreaterThanOrEqualTo,
} from "emotion-native-media-query";
import { BREAKPOINTS } from "helpers/constants";
import { getHomeAsync, Home } from "helpers/wpapi";
import Wrapper from "components/Wrapper";
import { CategoryList } from "components/CategoryList";
import LoadingView from "components/Loading";
import WPHead from "components/webHelpers/WPHead";
import WPFooter from "components/webHelpers/WPFooter";
import Head from "next/head";
import { MainSection } from "./MainSection";
import { LeftSection } from "./LeftSection";
import { SportsSection } from "./SportsSection";
import { GrindSection } from "./GrindSection";
import { OpinionSection } from "./OpinionSection";
import { ArtsAndLifeSection } from "./ArtsAndLifeSection";
import { CartoonsSection } from "./CartoonsSection";
import { SponsoredSection } from "./SponsoredSection";
import { MultimediaSection } from "./MultimediaSection";
import { MoreFromTheDailySection } from "./MoreFromTheDailySection";
import { DesktopRow } from "./DesktopRow";
import { Column } from "./Column";
import { getBorderValue } from "./getBorderValue";

interface IndexProps {
  homePosts?: Home;
  navigation?: any;
  refreshControl?: any;
}

interface IndexState {}

export default class HomePage extends React.Component<IndexProps, IndexState> {
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
          category={homePosts.tsdMeta.categories.featured}
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
          category={homePosts.tsdMeta.categories.news}
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
        <Head>
          <title>Homepage | The Stanford Daily</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <SafeAreaView style={{ flex: 1 }}>
          <WPHead base={homePosts} />
          {Platform.OS !== "web" && (
            <CategoryList itemStyle={{ color: "black" }} />
          )}
          <ScrollView
            contentContainerStyle={{
              flexDirection: "column",
            }}
            refreshControl={this.props.refreshControl}
          >
            <DesktopRow
              style={{
                ...getBorderValue("Bottom"),
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
                  category={homePosts.tsdMeta.categories.sports}
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
                  category={homePosts.tsdMeta.categories.opinions}
                  style={{
                    ...getBorderValue("Bottom"),
                  }}
                />
                <GrindSection
                  content={homePosts.theGrind}
                  category={homePosts.tsdMeta.categories.thegrind}
                  style={{
                    ...getBorderValue("Bottom"),
                  }}
                />
                <ArtsAndLifeSection
                  content={homePosts.artsAndLife}
                  category={homePosts.tsdMeta.categories["arts-life"]}
                  style={{
                    ...getBorderValue("Bottom"),
                  }}
                />
                <CartoonsSection
                  content={homePosts.cartoons}
                  category={homePosts.tsdMeta.categories.cartoons}
                  rStyle={{
                    [MediaRule.MaxWidth]: {
                      [BREAKPOINTS.MAX_WIDTH.TABLET]: {
                        ...getBorderValue("Bottom"),
                      },
                    },
                  }}
                />
              </Column>
            </DesktopRow>
            {/* <MultimediaSection
              content={[]}
              style={{
                ...getBorderValue("Bottom"),
              }}
            /> */}
            {/* <SponsoredSection category={null} content={homePosts.sponsored} /> */}
            <MoreFromTheDailySection
              category={null}
              content={homePosts.moreFromTheDaily}
            />
          </ScrollView>
          <WPFooter base={homePosts} />
        </SafeAreaView>
      </>
    );
  }
}

export function HomePageWrapper(props): any {
  const [refreshing, setRefreshing] = React.useState(false);
  const wrapper: React.RefObject<Wrapper> = React.createRef();

  return (
    <Wrapper
      class={HomePage}
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
HomePageWrapper.navigationOptions = {
  title: "The Stanford Daily",
  headerBackTitle: "Home",
  headerTitleStyle: {
    fontFamily: "Canterbury",
    fontSize: 30,
    fontWeight: undefined, // https://github.com/react-navigation/react-navigation/issues/542#issuecomment-438631938
  },
};
