import React from "react";
import { Text, Platform } from "react-native";
import { MediaRule } from "emotion-native-media-query";
import { FONTS, BREAKPOINTS } from "helpers/constants";
import { ArticleListPageData } from "helpers/wpapi";
import LoadingView from "components/Loading";
import ArticlesView from "components/ArticlesView";
import WPHead from "components/webHelpers/WPHead";
import WPFooter from "components/webHelpers/WPFooter";
import { TopThumbnailArticle } from "../HomePage/TopThumbnailArticle";
import { DesktopRow } from "../HomePage/DesktopRow";
import { Column } from "../HomePage/Column";
import { SECTION_PADDING } from "components/Section";
import { getBorderValue } from "../HomePage/getBorderValue";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { UsElections2020Map } from "./UsElections2020Map";

import { TitleOnlyArticle } from "../HomePage/TitleOnlyArticle";

export enum ArticleListPageType {
  Time, // TODO
  Author,
  Category,
  Tag, // TODO
  Search,
}

export interface ArticleListPageProps {
  type: ArticleListPageType;
  initData: ArticleListPageData;
  getExtraData: (pageNumber: number) => Promise<ArticleListPageData>;
  displayCategory?: boolean;
  displayExcerpt?: boolean;
}

export interface ArticleListPageState {}

export default class ArticleListPage extends React.Component<
  ArticleListPageProps,
  ArticleListPageState
> {
  static async getInitialProps(param): Promise<any> {
    return {};
  }

  render(): React.ReactNode {
    const {
      initData,
      getExtraData,
      displayCategory,
      displayExcerpt,
    } = this.props;
    if (!initData) {
      return <LoadingView />;
    }

    const articlesView = (
      <>
        {initData.tsdMeta["title"] === "Columnists" && (
          <>
            {console.log(initData)}
            <DesktopRow
              style={{
                ...getBorderValue("Bottom"),
              }}
            >
              <Column
                style={{
                  flex: 1,
                }}
                rStyle={{
                  [MediaRule.MinWidth]: {
                    [BREAKPOINTS.TABLET]: {
                      // paddingLeft: SECTION_PADDING / 2,
                      paddingRight: SECTION_PADDING / 2,
                      //       ...getBorderValue("Left"),
                    },
                  },
                }}
              >
                <h1>Columnists</h1>
                <TopThumbnailArticle post={initData.posts[0]} />
              </Column>
              <Column
                style={{
                  flex: 2,
                }}
                rStyle={{
                  [MediaRule.MinWidth]: {
                    [BREAKPOINTS.TABLET]: {
                      // paddingLeft: SECTION_PADDING / 2,
                      paddingRight: SECTION_PADDING / 2,
                      //       ...getBorderValue("Left"),
                    },
                  },
                }}
              >
                <h1>Our Columnists</h1>
              </Column>
            </DesktopRow>
          </>
        )}
        {initData.tsdMeta["title"] === "Opinions" && (
          <>
            {console.log(initData)}
            <DesktopRow
              style={{
                ...getBorderValue("Bottom"),
              }}
            >
              <h1>
                <a href="#columnists">Columnists </a>|
                <a href="#oped"> Op-Ed and Contributing Writers </a>|
                <a href="#editorial"> Editorial Board </a>|
                <a href="#editorletters"> Letters to the Editor </a>|
                <a href="#communityletters"> Letters to the Community</a>
              </h1>
            </DesktopRow>
            <DesktopRow
              style={{
                ...getBorderValue("Bottom"),
              }}
            >
              <Column
                style={{
                  flex: 1,
                }}
                rStyle={{
                  [MediaRule.MinWidth]: {
                    [BREAKPOINTS.TABLET]: {
                      // paddingLeft: SECTION_PADDING / 2,
                      paddingRight: SECTION_PADDING / 2,
                      //       ...getBorderValue("Left"),
                    },
                  },
                }}
              >
                <h1>Featured</h1>
                <TopThumbnailArticle post={initData.posts[0]} />
              </Column>
              <Column
                style={{
                  flex: 1,
                }}
                rStyle={{
                  [MediaRule.MinWidth]: {
                    [BREAKPOINTS.TABLET]: {
                      // paddingLeft: SECTION_PADDING / 2,
                      paddingRight: SECTION_PADDING / 2,
                      //       ...getBorderValue("Left"),
                    },
                  },
                }}
              >
                <TitleOnlyArticle post={initData.posts[1]} />
                <TitleOnlyArticle post={initData.posts[2]} />
                <TitleOnlyArticle post={initData.posts[3]} />
                <TitleOnlyArticle post={initData.posts[4]} />
              </Column>
            </DesktopRow>
            <DesktopRow
              style={{
                ...getBorderValue("Bottom"),
              }}
            >
              <h1 id="columnists">Columnists</h1>
            </DesktopRow>
            <DesktopRow
              style={{
                ...getBorderValue("Bottom"),
              }}
            >
              <h1 id="oped">Op-Ed and Contributing Writers</h1>
            </DesktopRow>
            <DesktopRow
              style={{
                ...getBorderValue("Bottom"),
              }}
            >
              <h1 id="editorial">Editorial Board</h1>
            </DesktopRow>
            <DesktopRow
              style={{
                ...getBorderValue("Bottom"),
              }}
            >
              <h1 id="editorletters">Letters to the Editor</h1>
            </DesktopRow>
            <DesktopRow
              style={{
                ...getBorderValue("Bottom"),
              }}
            >
              <h1 id="communityletters">Letters to the Community</h1>
            </DesktopRow>
            <h1>More Opinions Articles</h1>
          </>
        )}
        {initData.tsdMeta["title"] === "US Elections 2020" && (
          <>
            {console.log(initData)}
            <DesktopRow
              style={{
                ...getBorderValue("Bottom"),
              }}
            >
              <Column
                style={{
                  flex: 1,
                }}
                rStyle={{
                  [MediaRule.MinWidth]: {
                    [BREAKPOINTS.TABLET]: {
                      // paddingLeft: SECTION_PADDING / 2,
                      paddingRight: SECTION_PADDING / 2,
                      //       ...getBorderValue("Left"),
                    },
                  },
                }}
              >
                <TopThumbnailArticle
                  post={
                    initData.posts.filter(post =>
                      post["postCategory"].includes(70941),
                    )[0]
                  }
                />
                <TopThumbnailArticle
                  post={
                    initData.posts.filter(post =>
                      post["postCategory"].includes(70941),
                    )[1]
                  }
                />
              </Column>
              <Column
                style={{
                  flex: 3,
                }}
                rStyle={{
                  [MediaRule.MinWidth]: {
                    [BREAKPOINTS.TABLET]: {
                      paddingLeft: SECTION_PADDING / 2,
                      paddingRight: SECTION_PADDING / 2,
                      paddingBottom: SECTION_PADDING / 2,
                      ...getBorderValue("Left"),
                    },
                  },
                  [MediaRule.MaxWidth]: {
                    [BREAKPOINTS.TABLET]: {
                      height: 300,
                    },
                  },
                }}
              >
                <h1 style={{ marginTop: "0px", marginBottom: "5px" }}>
                  Tracking the Stanford alums running for office
                </h1>
                <Text
                  style={{
                    marginBottom: "5px",
                    ...FONTS.CONTENT,
                    ...(Platform.OS === "web" ? { lineHeight: "1.2em" } : {}),
                  }}
                >
                  Are we missing anything? <a href="/tips/">Send us a tip</a> so
                  we can update the map!
                </Text>
                <UsElections2020Map />
                {console.log(initData.tsdMeta)}
                {/* <TopThumbnailArticle post={initData.posts[2]} />
                <TopThumbnailArticle post={initData.posts[2]} /> */}
              </Column>
              <Column
                style={{
                  flex: 2,
                }}
                rStyle={{
                  [MediaRule.MinWidth]: {
                    [BREAKPOINTS.TABLET]: {
                      paddingLeft: SECTION_PADDING / 2,
                      paddingRight: SECTION_PADDING / 2,
                      ...getBorderValue("Left"),
                    },
                  },
                  [MediaRule.MaxWidth]: {
                    [BREAKPOINTS.TABLET]: {
                      height: 300,
                    },
                  },
                }}
              >
                <div className="centerContent" style={{ height: "100%" }}>
                  <div
                    className="selfCenter standardWidth"
                    style={{ height: "100%" }}
                  >
                    <TwitterTimelineEmbed
                      sourceType="list"
                      id={"1322794375890436099"}
                      slug={null}
                      autoHeight={true}
                      //options={{ height: 400 }}
                    />
                  </div>
                </div>
              </Column>
            </DesktopRow>
            <h1>More elections coverage</h1>
          </>
        )}
        <ArticlesView
          displayCategory={displayCategory}
          displayExcerpt={displayExcerpt}
          initPosts={
            initData.tsdMeta["title"] === "US Elections 2020"
              ? initData.posts.filter(
                  post => !post["postCategory"].includes(70941),
                )
              : initData.posts
          }
          getExtraPosts={async pageNumber => {
            const extraData = await getExtraData(pageNumber);
            return extraData.posts;
          }}
        />
      </>
    );

    if (Platform.OS !== "web") {
      return articlesView;
    }

    return (
      <>
        <WPHead base={initData} />
        {articlesView}
        <WPFooter base={initData} />
      </>
    );
  }
}
