import React from "react";
import {
  ScrollView,
  RefreshControl,
  Platform,
  SafeAreaView,
  Image,
  View,
} from "react-native";
import {
  MediaRule,
  isWidthGreaterThanOrEqualTo,
  mergeRStyle,
} from "emotion-native-media-query";
import { BREAKPOINTS } from "helpers/constants";
import { getHomeAsync, Home } from "helpers/wpapi";
import Wrapper from "components/Wrapper";
import { TopBarLinks } from "components/TopBarLinks";
import LoadingView from "components/Loading";
import WPHead from "components/webHelpers/WPHead";
import WPFooter from "components/webHelpers/WPFooter";
import Head from "next/head";
import { MainSection } from "./MainSection";
import { LeftSection } from "./LeftSection";
import { GrindSection } from "./GrindSection";
import { OpinionSection } from "./OpinionSection";
import { CartoonsSection } from "./CartoonsSection";
import { SatireSection } from "./SatireSection";
import { MoreFromTheDailySection } from "./MoreFromTheDailySection";
import { DesktopRow } from "./DesktopRow";
import { Column } from "./Column";
import { getBorderValue } from "./getBorderValue";
import { CovidDataWidget } from "./CovidDataWidget";
import { SectionProps } from "./SectionProps";
import { SectionStyle, Section } from "components/Section";
import { SectionTitleWithLink } from "./SectionTitle";
import { TopThumbnailArticle } from "./TopThumbnailArticle";
import { TitleOnlyArticle } from "./TitleOnlyArticle";

interface IndexProps {
  homePosts?: Home;
  Post;
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
    const ArtsAndLifeSection: React.ElementType = (nsProps: any) => {
      return (
        <Column
          style={{
            flexGrow: 3,
            order: 2,
          }}
          rStyle={mergeRStyle(
            {
              [MediaRule.MinWidth]: {
                [BREAKPOINTS.TABLET]: {
                  order: 1,
                },
              },
            },
            {
              [MediaRule.MinWidth]: {
                [BREAKPOINTS.TABLET]: {
                  ...getBorderValue("Right"),
                },
              },
            },
          )}
        >
          <SectionStyle>
            <SectionTitleWithLink
              category={homePosts.tsdMeta.categories["arts-life"]}
            >
              <Image
                source={{
                  uri: "/static/sectionHeaders/artsAndLife.png",
                }}
                accessibilityLabel="Arts & Life"
                resizeMode="contain"
                style={{
                  width: 120,
                  height: 30,
                }}
              />
            </SectionTitleWithLink>
          </SectionStyle>
          <div style={{ marginTop: -25 }}>
            <Section>
              <View>
                <TopThumbnailArticle post={homePosts.artsAndLife[0]} />
              </View>
              <View>
                <TopThumbnailArticle post={homePosts.artsAndLife[1]} />
              </View>
              <View>
                <TitleOnlyArticle post={homePosts.artsAndLife[2]} />
              </View>
              <View>
                <TitleOnlyArticle post={homePosts.artsAndLife[3]} />
              </View>
            </Section>
          </div>
        </Column>
      );
    };
    const MainSportsSection: React.ElementType = (msProps: SectionProps) => {
      return (
        <MainSection
          content={homePosts.sports}
          category={homePosts.tsdMeta.categories.sports}
          sectionTitle="Sports"
          rStyle={{
            [MediaRule.MaxWidth]: {
              [BREAKPOINTS.MAX_WIDTH.TABLET]: {
                ...getBorderValue("Bottom"),
              },
            },
          }}
          {...msProps}
        />
      );
    };

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <SafeAreaView style={{ flex: 1 }}>
          <WPHead base={homePosts} />
          {Platform.OS !== "web" && (
            <TopBarLinks itemStyle={{ color: "black" }} />
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
                {/* <CovidDataWidget mobile={true} /> */}
                <DesktopRow
                  style={{
                    ...getBorderValue("Bottom"),
                  }}
                >
                  <ArtsAndLifeSection />
                  <MainSportsSection />
                </DesktopRow>
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
                <CovidDataWidget />
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
            <SatireSection
              category={homePosts.tsdMeta.categories.satire}
              content={homePosts.satire}
            />
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
