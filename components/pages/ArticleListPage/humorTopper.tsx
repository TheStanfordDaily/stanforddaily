import React, { Fragment } from "react";
import { Image, Platform, Text } from "react-native";
import { MediaRule } from "emotion-native-media-query";
import { FONTS, BREAKPOINTS, LINKS } from "helpers/constants";
import { TopThumbnailArticle } from "../HomePage/TopThumbnailArticle";
import { DesktopRow } from "../HomePage/DesktopRow";
import { Column } from "../HomePage/Column";
import { SectionTitleWithLink } from "../Homepage/SectionTitle";
import { SECTION_PADDING } from "components/Section";
import { getBorderValue } from "../HomePage/getBorderValue";
import { ListStyleArticle } from "../HomePage/ListStyleArticle";
import { MainSection } from "../HomePage/MainSection";
import { ArticleTitle } from "../../article-links-and-thumbnails/ArticleTitleWithLink";

const horoscopesText = [
  { header: "Aries", text: "f" },
  { header: "Taurus", text: "f" },
  { header: "Gemini", text: "f" },
  { header: "Cancer", text: "f" },
  { header: "Leo", text: "f" },
  { header: "Virgo", text: "f" },
  { header: "Libra", text: "f" },
  { header: "Scorpio", text: "f" },
  { header: "Sagittarius", text: "f" },
  { header: "Capricorn", text: "f" },
  { header: "Aquarius", text: "f" },
  { header: "Pisces", text: "f" },
];

export function humorTopper(initData) {
  return (
    <>
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
          <Image
            source={{
              uri: "/static/horoscopes-logo.png",
            }}
            accessibilityLabel="Astrology Corner logo"
            resizeMode="contain"
            style={{
              height: 100,
            }}
          />
          {horoscopesText.map(entry => {
            return (
              <Fragment>
                <div
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    backgroundColor: "#ECECEC",
                  }}
                >
                  {entry.header}
                </div>
                <div style={{ textAlign: "center" }}>{entry.text}</div>
              </Fragment>
            );
          })}
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
          {console.log(initData)}
          {console.log(initData.posts[0].postCategory)}
          <MainSection
            content={initData.posts}
            category={{
              id: 55796,
              name: "Humor",
              slug: "humor",
              url: "/category/humor/",
            }}
            sectionTitle="Featured"
          />
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
          <Image
            source={{
              uri: "/static/horoscopes-logo.png",
            }}
            accessibilityLabel="Astrology Corner logo"
            resizeMode="contain"
          />
          <SectionTitleWithLink
            category={{
              id: 55796,
              name: "Headlines",
              slug: "humor",
              url: "/category/headlines/",
            }}
          />
          {initData.posts.slice(3, 8).map(post => (
            <ListStyleArticle
              key={post.id}
              displayAuthor={true}
              post={post}
              titleStyle=""
              authorStyle=""
            />
          ))}
          <SectionTitleWithLink
            category={{
              id: 55796,
              name: "Occasionally Broadcasting Network",
              slug: "humor",
              url: LINKS.YOUTUBE,
            }}
            style={{ paddingBottom: 10 }}
          />
          <iframe
            style={{ paddingBottom: 10 }}
            width="100%"
            height="215"
            src="https://www.youtube.com/embed/joVilbEyNjU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <ArticleTitle>
            Occasionally Broadcasting Network: Sorority recruitment and other
            stories
          </ArticleTitle>
        </Column>
      </DesktopRow>
      <h1>More Humor</h1>
    </>
  );
}
