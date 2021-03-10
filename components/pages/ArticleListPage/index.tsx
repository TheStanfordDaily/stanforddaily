import React from "react";
import { Text, Platform } from "react-native";
import { MediaRule } from "emotion-native-media-query";
import { FONTS, BREAKPOINTS, STANFORD_COLORS } from "helpers/constants";
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
import { AuthorsTextWithLink } from "../HomePage/AuthorView";

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
                      paddingRight: SECTION_PADDING / 2,
                    },
                  },
                }}
              >
                <div style={{ paddingTop: 50 }}>
                  <TopThumbnailArticle post={initData.posts[0]} />
                </div>
              </Column>
              <Column
                style={{
                  flex: 1,
                }}
                rStyle={{
                  [MediaRule.MinWidth]: {
                    [BREAKPOINTS.TABLET]: {
                      paddingRight: SECTION_PADDING / 2,
                    },
                  },
                }}
              >
                <div>
                  <h1
                    style={{
                      color: STANFORD_COLORS.CARDINAL_RED,
                      ...FONTS.SECTION_TITLE,
                      fontWeight: "bold",
                      fontSize: 22,
                      display: "inline",
                    }}
                  >
                    Our Columnists
                  </h1>

                  <a
                    href=""
                    style={{
                      color: STANFORD_COLORS.CARDINAL_RED,
                      ...FONTS.SECTION_TITLE,
                      fontWeight: "bold",
                      fontSize: 15,
                      float: "right",
                      paddingLeft: 10,
                    }}
                  >
                    LEARN MORE
                  </a>
                </div>
                <table
                  style={{
                    borderSpacing: 0,
                    borderCollapse: "collapse",
                    cellSpacing: 0,
                  }}
                >
                  <tr>
                    <td>
                      <div>
                        <p style={{ float: "left", display: "inline" }}>
                          <img
                            src="/static/cardinal-red-daily-s-logo.png"
                            style={{ maxHeight: 40, height: "auto" }}
                          />{" "}
                        </p>
                        <AuthorsTextWithLink
                          style={{
                            color: "black",
                            ...FONTS.SECTION_TITLE,
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                          authors={[
                            {
                              id: 1002777,
                              displayName: "Mikayla Tillery",
                              userNicename: "mtillery",
                              url: "/author/mtillery/",
                              avatarUrl:
                                "https://www.stanforddaily.com/wp-content/themes/thestanforddaily/img/placeholder-avatar.png",
                              description:
                                "Opinions Mother, Public Editor, and other.",
                            },
                          ]}
                          aStyle={{
                            textDecoration: "",
                          }}
                        />
                        <p
                          style={{
                            color: "black",
                            ...FONTS.SECTION_TITLE,
                            fontWeight: "normal",
                            fontSize: 15,
                            marginTop: -5,
                            padding: 0,
                          }}
                        >
                          Opinions Mother, Public Editor, and other.
                        </p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p style={{ float: "left", display: "inline" }}>
                          <img
                            src="/static/cardinal-red-daily-s-logo.png"
                            style={{ maxHeight: 40, height: "auto" }}
                          />{" "}
                        </p>
                        <AuthorsTextWithLink
                          style={{
                            color: "black",
                            ...FONTS.SECTION_TITLE,
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                          authors={[
                            {
                              id: 1002777,
                              displayName: "Mikayla Tillery",
                              userNicename: "mtillery",
                              url: "/author/mtillery/",
                              avatarUrl:
                                "https://www.stanforddaily.com/wp-content/themes/thestanforddaily/img/placeholder-avatar.png",
                              description:
                                "Opinions Mother, Public Editor, and other.",
                            },
                          ]}
                          aStyle={{
                            textDecoration: "",
                          }}
                        />
                        <p
                          style={{
                            color: "black",
                            ...FONTS.SECTION_TITLE,
                            fontWeight: "normal",
                            fontSize: 15,
                            marginTop: -5,
                            padding: 0,
                          }}
                        >
                          Opinions Mother, Public Editor, and other.
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div style={{ marginTop: -10 }}>
                        <p style={{ float: "left", display: "inline" }}>
                          <img
                            src="/static/cardinal-red-daily-s-logo.png"
                            style={{ maxHeight: 40, height: "auto" }}
                          />{" "}
                        </p>
                        <AuthorsTextWithLink
                          style={{
                            color: "black",
                            ...FONTS.SECTION_TITLE,
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                          authors={[
                            {
                              id: 1002777,
                              displayName: "Mikayla Tillery",
                              userNicename: "mtillery",
                              url: "/author/mtillery/",
                              avatarUrl:
                                "https://www.stanforddaily.com/wp-content/themes/thestanforddaily/img/placeholder-avatar.png",
                              description:
                                "Opinions Mother, Public Editor, and other.",
                            },
                          ]}
                          aStyle={{
                            textDecoration: "",
                          }}
                        />
                        <p
                          style={{
                            color: "black",
                            ...FONTS.SECTION_TITLE,
                            fontWeight: "normal",
                            fontSize: 15,
                            marginTop: -5,
                            padding: 0,
                          }}
                        >
                          Opinions Mother, Public Editor, and other.
                        </p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p style={{ float: "left", display: "inline" }}>
                          <img
                            src="/static/cardinal-red-daily-s-logo.png"
                            style={{ maxHeight: 40, height: "auto" }}
                          />{" "}
                        </p>
                        <AuthorsTextWithLink
                          style={{
                            color: "black",
                            ...FONTS.SECTION_TITLE,
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                          authors={[
                            {
                              id: 1002777,
                              displayName: "Mikayla Tillery",
                              userNicename: "mtillery",
                              url: "/author/mtillery/",
                              avatarUrl:
                                "https://www.stanforddaily.com/wp-content/themes/thestanforddaily/img/placeholder-avatar.png",
                              description:
                                "Opinions Mother, Public Editor, and other.",
                            },
                          ]}
                          aStyle={{
                            textDecoration: "",
                          }}
                        />
                        <p
                          style={{
                            color: "black",
                            ...FONTS.SECTION_TITLE,
                            fontWeight: "normal",
                            fontSize: 15,
                            marginTop: -5,
                            padding: 0,
                          }}
                        >
                          Opinions Mother, Public Editor, and other.
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <p style={{ float: "left", display: "inline" }}>
                          <img
                            src="/static/cardinal-red-daily-s-logo.png"
                            style={{ maxHeight: 40, height: "auto" }}
                          />{" "}
                        </p>
                        <AuthorsTextWithLink
                          style={{
                            color: "black",
                            ...FONTS.SECTION_TITLE,
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                          authors={[
                            {
                              id: 1002777,
                              displayName: "Mikayla Tillery",
                              userNicename: "mtillery",
                              url: "/author/mtillery/",
                              avatarUrl:
                                "https://www.stanforddaily.com/wp-content/themes/thestanforddaily/img/placeholder-avatar.png",
                              description:
                                "Opinions Mother, Public Editor, and other.",
                            },
                          ]}
                          aStyle={{
                            textDecoration: "",
                          }}
                        />
                        <p
                          style={{
                            color: "black",
                            ...FONTS.SECTION_TITLE,
                            fontWeight: "normal",
                            fontSize: 15,
                            marginTop: -5,
                            padding: 0,
                          }}
                        >
                          Opinions Mother, Public Editor, and other.
                        </p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p style={{ float: "left", display: "inline" }}>
                          <img
                            src="/static/cardinal-red-daily-s-logo.png"
                            style={{ maxHeight: 40, height: "auto" }}
                          />{" "}
                        </p>
                        <AuthorsTextWithLink
                          style={{
                            color: "black",
                            ...FONTS.SECTION_TITLE,
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                          authors={[
                            {
                              id: 1002777,
                              displayName: "Mikayla Tillery",
                              userNicename: "mtillery",
                              url: "/author/mtillery/",
                              avatarUrl:
                                "https://www.stanforddaily.com/wp-content/themes/thestanforddaily/img/placeholder-avatar.png",
                              description:
                                "Opinions Mother, Public Editor, and other.",
                            },
                          ]}
                          aStyle={{
                            textDecoration: "",
                          }}
                        />
                        <p
                          style={{
                            color: "black",
                            ...FONTS.SECTION_TITLE,
                            fontWeight: "normal",
                            fontSize: 15,
                            marginTop: -5,
                            padding: 0,
                          }}
                        >
                          Opinions Mother, Public Editor, and other.
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <p style={{ float: "left", display: "inline" }}>
                          <img
                            src="/static/cardinal-red-daily-s-logo.png"
                            style={{ maxHeight: 40, height: "auto" }}
                          />{" "}
                        </p>
                        <AuthorsTextWithLink
                          style={{
                            color: "black",
                            ...FONTS.SECTION_TITLE,
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                          authors={[
                            {
                              id: 1002777,
                              displayName: "Mikayla Tillery",
                              userNicename: "mtillery",
                              url: "/author/mtillery/",
                              avatarUrl:
                                "https://www.stanforddaily.com/wp-content/themes/thestanforddaily/img/placeholder-avatar.png",
                              description:
                                "Opinions Mother, Public Editor, and other.",
                            },
                          ]}
                          aStyle={{
                            textDecoration: "",
                          }}
                        />
                        <p
                          style={{
                            color: "black",
                            ...FONTS.SECTION_TITLE,
                            fontWeight: "normal",
                            fontSize: 15,
                            marginTop: -5,
                            padding: 0,
                          }}
                        >
                          Opinions Mother, Public Editor, and other.
                        </p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p style={{ float: "left", display: "inline" }}>
                          <img
                            src="/static/cardinal-red-daily-s-logo.png"
                            style={{ maxHeight: 40, height: "auto" }}
                          />{" "}
                        </p>
                        <AuthorsTextWithLink
                          style={{
                            color: "black",
                            ...FONTS.SECTION_TITLE,
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                          authors={[
                            {
                              id: 1002777,
                              displayName: "Mikayla Tillery",
                              userNicename: "mtillery",
                              url: "/author/mtillery/",
                              avatarUrl:
                                "https://www.stanforddaily.com/wp-content/themes/thestanforddaily/img/placeholder-avatar.png",
                              description:
                                "Opinions Mother, Public Editor, and other.",
                            },
                          ]}
                          aStyle={{
                            textDecoration: "",
                          }}
                        />
                        <p
                          style={{
                            color: "black",
                            ...FONTS.SECTION_TITLE,
                            fontWeight: "normal",
                            fontSize: 15,
                            marginTop: -5,
                            padding: 0,
                          }}
                        >
                          Opinions Mother, Public Editor, and other.
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <p style={{ float: "left", display: "inline" }}>
                          <img
                            src="/static/cardinal-red-daily-s-logo.png"
                            style={{ maxHeight: 40, height: "auto" }}
                          />{" "}
                        </p>
                        <AuthorsTextWithLink
                          style={{
                            color: "black",
                            ...FONTS.SECTION_TITLE,
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                          authors={[
                            {
                              id: 1002777,
                              displayName: "Mikayla Tillery",
                              userNicename: "mtillery",
                              url: "/author/mtillery/",
                              avatarUrl:
                                "https://www.stanforddaily.com/wp-content/themes/thestanforddaily/img/placeholder-avatar.png",
                              description:
                                "Opinions Mother, Public Editor, and other.",
                            },
                          ]}
                          aStyle={{
                            textDecoration: "",
                          }}
                        />
                        <p
                          style={{
                            color: "black",
                            ...FONTS.SECTION_TITLE,
                            fontWeight: "normal",
                            fontSize: 15,
                            marginTop: -5,
                            padding: 0,
                          }}
                        >
                          Opinions Mother, Public Editor, and other.
                        </p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p style={{ float: "left", display: "inline" }}>
                          <img
                            src="/static/cardinal-red-daily-s-logo.png"
                            style={{ maxHeight: 40, height: "auto" }}
                          />{" "}
                        </p>
                        <AuthorsTextWithLink
                          style={{
                            color: "black",
                            ...FONTS.SECTION_TITLE,
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                          authors={[
                            {
                              id: 1002777,
                              displayName: "Mikayla Tillery",
                              userNicename: "mtillery",
                              url: "/author/mtillery/",
                              avatarUrl:
                                "https://www.stanforddaily.com/wp-content/themes/thestanforddaily/img/placeholder-avatar.png",
                              description:
                                "Opinions Mother, Public Editor, and other.",
                            },
                          ]}
                          aStyle={{
                            textDecoration: "",
                          }}
                        />
                        <p
                          style={{
                            color: "black",
                            ...FONTS.SECTION_TITLE,
                            fontWeight: "normal",
                            fontSize: 15,
                            marginTop: -5,
                            padding: 0,
                          }}
                        >
                          Opinions Mother, Public Editor, and other.
                        </p>
                      </div>
                    </td>
                  </tr>
                </table>
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
                <a
                  href="#columnists"
                  style={{
                    color: "black",
                    ...FONTS.SECTION_TITLE,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  Columnists{" "}
                </a>
                |
                <a
                  href="#oped"
                  style={{
                    color: "black",
                    ...FONTS.SECTION_TITLE,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  {" "}
                  Op-Ed and Contributing Writers{" "}
                </a>
                |
                <a
                  href="#editorial"
                  style={{
                    color: "black",
                    ...FONTS.SECTION_TITLE,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  {" "}
                  Editorial Board{" "}
                </a>
                |
                <a
                  href="#editorletters"
                  style={{
                    color: "black",
                    ...FONTS.SECTION_TITLE,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  {" "}
                  Letters to the Editor{" "}
                </a>
                |
                <a
                  href="#communityletters"
                  style={{
                    color: "black",
                    ...FONTS.SECTION_TITLE,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  {" "}
                  Letters to the Community
                </a>
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
                      paddingRight: SECTION_PADDING / 2,
                    },
                  },
                }}
              >
                <h1
                  style={{
                    color: STANFORD_COLORS.CARDINAL_BRIGHT_RED,
                    ...FONTS.SECTION_TITLE,
                    fontWeight: "bold",
                    fontSize: 22,
                  }}
                >
                  Featured
                </h1>
                <TopThumbnailArticle post={initData.posts[0]} />
              </Column>
              <Column
                style={{
                  flex: 1,
                }}
                rStyle={{
                  [MediaRule.MinWidth]: {
                    [BREAKPOINTS.TABLET]: {
                      paddingLeft: SECTION_PADDING / 2,
                      paddingRight: SECTION_PADDING / 2,
                    },
                  },
                }}
              >
                {" "}
                <div style={{ paddingTop: 50 }}>
                  <TitleOnlyArticle post={initData.posts[1]} />
                </div>
                <div style={{ paddingTop: 10 }}>
                  <TitleOnlyArticle post={initData.posts[2]} />
                </div>
                <div style={{ paddingTop: 10 }}>
                  <TitleOnlyArticle post={initData.posts[3]} />
                </div>
                <div style={{ paddingTop: 10, paddingBottom: 50 }}>
                  <TitleOnlyArticle post={initData.posts[4]} />
                </div>
              </Column>
            </DesktopRow>
            <h1
              id="columnists"
              style={{
                color: STANFORD_COLORS.CARDINAL_BRIGHT_RED,
                ...FONTS.SECTION_TITLE,
                fontWeight: "bold",
                fontSize: 22,
              }}
            >
              Columnists
            </h1>
            <ArticlesView
              displayCategory={false}
              displayExcerpt={false}
              initPosts={initData.posts
                .filter(post => post["postCategory"].includes(13181))
                .slice(0, 4)}
            />
            <h1
              id="oped"
              style={{
                color: STANFORD_COLORS.CARDINAL_BRIGHT_RED,
                ...FONTS.SECTION_TITLE,
                fontWeight: "bold",
                fontSize: 22,
              }}
            >
              Op-Ed and Contributing Writers
            </h1>
            <ArticlesView
              displayCategory={false}
              displayExcerpt={false}
              initPosts={initData.posts
                .filter(post => post["postCategory"].includes(27142))
                .slice(0, 4)}
            />
            <h1
              id="editorial"
              style={{
                color: STANFORD_COLORS.CARDINAL_BRIGHT_RED,
                ...FONTS.SECTION_TITLE,
                fontWeight: "bold",
                fontSize: 22,
              }}
            >
              Editorial Board
            </h1>
            <ArticlesView
              displayCategory={false}
              displayExcerpt={false}
              initPosts={initData.posts
                .filter(post => post["postCategory"].includes(9986))
                .slice(0, 4)}
            />
            <h1
              id="editorletters"
              style={{
                color: STANFORD_COLORS.CARDINAL_BRIGHT_RED,
                ...FONTS.SECTION_TITLE,
                fontWeight: "bold",
                fontSize: 22,
              }}
            >
              Letters to the Editor
            </h1>
            <ArticlesView
              displayCategory={false}
              displayExcerpt={false}
              initPosts={initData.posts
                .filter(post => post["postCategory"].includes(13182))
                .slice(0, 4)}
            />
            <h1
              id="communityletters"
              style={{
                color: STANFORD_COLORS.CARDINAL_BRIGHT_RED,
                ...FONTS.SECTION_TITLE,
                fontWeight: "bold",
                fontSize: 22,
              }}
            >
              Letters to the Community
            </h1>
            <ArticlesView
              displayCategory={false}
              displayExcerpt={false}
              initPosts={initData.posts
                .filter(post => post["postCategory"].includes(38657))
                .slice(0, 4)}
            />
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
