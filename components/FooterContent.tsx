import React from "react";
import { View } from "react-native";
import styled from "@emotion/native";
import RView, { MediaRule } from "emotion-native-media-query";
import { STANFORD_COLORS, BREAKPOINTS, FONTS, LINKS } from "helpers/constants";
import { Category } from "helpers/wpapi";
import Link from "./Link";
import { SECTION_PADDING } from "./Section";
import { CategoryLink } from "./CategoryLink";
import css from "@emotion/css";

type CategoryWithChildren = Category & {
  children: { [slug: string]: CategoryWithChildren };
};

// List of links that appears at bottom of any page on the site;
// note the difference between this component and TopBarLinks;
// make sure to change links in desired place(s) when updating
export const FooterContent: React.ElementType = ({ style }: any) => {
  // https://www.stanforddaily.com/wp-json/tsd/json/v1/nav
  const categoryList: {
    [slug: string]: CategoryWithChildren;
  } = {
    news: {
      id: 3,
      name: "News",
      slug: "news",
      url: "/category/news/",
      children: {
        "academics-news": {
          id: 4408,
          name: "Academics",
          slug: "academics-news",
          url: "/category/news/academics-news/",
          children: {},
        },
        "local-news": {
          id: 4412,
          name: "Local",
          slug: "local-news",
          url: "/category/news/local-news/",
          children: {},
        },
        "research-news": {
          id: 4414,
          name: "Research",
          slug: "research-news",
          url: "/category/news/research-news/",
          children: {},
        },
        "technology-news": {
          id: 16821,
          name: "Science & Tech",
          slug: "technology-news",
          url: "/category/news/technology-news/",
          children: {},
        },
        "speakers-events-news": {
          id: 4421,
          name: "Speakers & Events",
          slug: "speakers-events-news",
          url: "/category/news/speakers-events-news/",
          children: {},
        },
        "student-government-news": {
          id: 4422,
          name: "Student Government",
          slug: "student-government-news",
          url: "/category/news/student-government-news/",
          children: {},
        },
        "student-life-news": {
          id: 4423,
          name: "Student Life",
          slug: "student-life-news",
          url: "/category/news/student-life-news/",
          children: {},
        },
        "university-news": {
          id: 4424,
          name: "University",
          slug: "university-news",
          url: "/category/news/university-news/",
          children: {},
        },
      },
    },
    sports: {
      id: 23,
      name: "SPORTS",
      slug: "sports",
      url: "/category/sports/",
      children: {
        "fall-sports": {
          id: 45417,
          name: "Fall Sports",
          slug: "fall-sports",
          url: "/category/sports/fall-sports/",
          children: {},
        },
        "winter-sports": {
          id: 45418,
          name: "Winter Sports",
          slug: "winter-sports",
          url: "/category/sports/winter-sports/",
          children: {},
        },
        "spring-sports": {
          id: 45419,
          name: "Spring Sports",
          slug: "spring-sports",
          url: "/category/sports/spring-sports/",
          children: {},
        },
        "sports-features": {
          id: 57510,
          name: "Sports Features",
          slug: "sports-features",
          url: "/category/sports/sports-features/",
          children: {},
        },
      },
    },
    opinions: {
      id: 24,
      name: "OPINIONS",
      slug: "opinions",
      url: "/category/opinions/",
      children: {
        columnists: {
          id: 13181,
          name: "Columnists",
          slug: "columnists",
          url: "/category/opinions/columnists/",
          children: {},
        },
        editorials: {
          id: 13183,
          name: "Editorials",
          slug: "editorials",
          url: "/category/opinions/editorials/",
          children: {},
        },
        "letters-to-the-community": {
          id: 38657,
          name: "Letters to the Community",
          slug: "letters-to-the-community",
          url: "/category/opinions/letters-to-the-community/",
          children: {},
        },
        "letters-to-the-editor": {
          id: 13182,
          name: "Letters to the Editor",
          slug: "letters-to-the-editor",
          url: "/category/opinions/letters-to-the-editor/",
          children: {},
        },
        "op-eds": {
          id: 27142,
          name: "Op-Eds",
          slug: "op-eds",
          url: "/category/opinions/op-eds/",
          children: {},
        },
      },
    },
    "arts-life": {
      id: 25,
      name: "ARTS & LIFE",
      slug: "arts-life",
      url: "/category/arts-life/",
      children: {
        "comedy-intermission": {
          id: 26817,
          name: "Comedy",
          slug: "comedy-intermission",
          url: "/category/arts-life/comedy-intermission/",
          children: {},
        },
        "critics-pick": {
          id: 26681,
          name: "Critic's Pick",
          slug: "critics-pick",
          url: "/category/arts-life/critics-pick/",
          children: {},
        },
        culture: {
          id: 40678,
          name: "Culture",
          slug: "culture",
          url: "/category/arts-life/culture/",
          children: {},
        },
        "fashion-intermission": {
          id: 23854,
          name: "Fashion",
          slug: "fashion-intermission",
          url: "/category/arts-life/fashion-intermission/",
          children: {},
        },
        "film-intermission": {
          id: 23850,
          name: "Film",
          slug: "film-intermission",
          url: "/category/arts-life/film-intermission/",
          children: {},
        },
        food: {
          id: 23853,
          name: "Food",
          slug: "food",
          url: "/category/arts-life/food/",
          children: {},
        },
        "music-intermission": {
          id: 23848,
          name: "Music",
          slug: "music-intermission",
          url: "/category/arts-life/music-intermission/",
          children: {},
        },
        reads: {
          id: 40679,
          name: "Reads",
          slug: "reads",
          url: "/category/arts-life/reads/",
          children: {},
        },
        reviews: {
          id: 40680,
          name: "Reviews",
          slug: "reviews",
          url: "/category/arts-life/reviews/",
          children: {},
        },
        screen: {
          id: 40640,
          name: "Screen",
          slug: "screen",
          url: "/category/arts-life/screen/",
          children: {},
        },
        "television-intermission": {
          id: 23849,
          name: "Television",
          slug: "television-intermission",
          url: "/category/arts-life/television-intermission/",
          children: {},
        },
        "theater-intermission": {
          id: 23851,
          name: "Theater",
          slug: "theater-intermission",
          url: "/category/arts-life/theater-intermission/",
          children: {},
        },
        "video-games": {
          id: 66235,
          name: "Video Games",
          slug: "video-games",
          url: "/category/arts-life/video-games/",
          children: {},
        },
        "visual-arts-intermission": {
          id: 23867,
          name: "Visual Arts",
          slug: "visual-arts-intermission",
          url: "/category/arts-life/visual-arts-intermission/",
          children: {},
        },
      },
    },
    thegrind: {
      id: 32278,
      name: "The Grind",
      slug: "thegrind",
      url: "/category/thegrind/",
      children: {
        "social-life": {
          id: 66231,
          name: "Social Life",
          slug: "social-life",
          url: "/category/thegrind/social-life/",
          children: {},
        },
        "campus-quirks": {
          id: 66225,
          name: "Campus Quirks",
          slug: "campus-quirks",
          url: "/category/thegrind/campus-quirks/",
          children: {},
        },
        "reflections-advice": {
          id: 66227,
          name: "Reflections & Advice",
          slug: "reflections-advice",
          url: "/category/thegrind/reflections-advice/",
          children: {},
        },
        "classes-declassified": {
          id: 66232,
          name: "Classes Declassified",
          slug: "classes-declassified",
          url: "/category/thegrind/classes-declassified/",
          children: {},
        },
      },
    },
    humor: {
      id: 55796,
      name: "Humor",
      slug: "humor",
      url: "/category/humor/",
      children: {},
    },
    // magazine: {
    //   id: 53462,
    //   name: "Magazine",
    //   slug: "magazine",
    //   url: "/category/magazine/",
    //   children: {},
    // },
    "@94305": {
      id: 58277,
      name: "Data",
      slug: "94305",
      url: "/category/@94305/",
      children: {},
    },
    // TODO: use `LinkLink` type
    podcasts: {
      id: null,
      name: "Podcasts",
      slug: "podcasts",
      url: LINKS.THE_DAILY_BREW_SPOTIFY,
      children: {},
    },
    video: {
      id: null,
      name: "Video",
      slug: "video",
      url: LINKS.YOUTUBE,
      children: {},
    },
    cartoons: {
      id: 41527,
      name: "Cartoons",
      slug: "cartoons",
      url: "/category/cartoons/",
      children: {},
    },
    aboutUs: {
      id: null,
      name: "About us",
      slug: "about-us",
      url: "/about/",
      children: {},
    },
    alumni: {
      id: null,
      name: "Alumni",
      slug: "alumni",
      url: "https://alumni.stanforddaily.com/",
      children: {},
    },
    advertise: {
      id: null,
      name: "Advertise",
      slug: "advertise",
      url: "/advertise/",
      children: {},
    },
    archives: {
      id: null,
      name: "Archives",
      slug: "archives",
      url: "https://archives.stanforddaily.com/",
      children: {},
    },
  };

  const BottomText = styled.Text({
    ...FONTS.AUXILIARY,
    color: STANFORD_COLORS.WHITE,
  });

  const BottomLine: React.ElementType = props => (
    <RView
      style={{
        textAlign: "center",
      }}
      rStyle={{
        [MediaRule.MinWidth]: {
          [BREAKPOINTS.DESKTOP]: {
            justifyContent: "space-between",
            flexDirection: "row",
          },
        },
      }}
      {...props}
    />
  );

  const bottomLinkStyle = {
    color: "inherit",
    textDecoration: "underline",
  };

  return (
    <RView
      style={style}
      css={css`
        a {
          line-height: 1.5em;
        }
        @media print {
          display: none;
        }
      `}
      rStyle={{
        [MediaRule.MinWidth]: {
          [BREAKPOINTS.TABLET]: {
            padding: SECTION_PADDING,
          },
        },
      }}
    >
      <RView
        rStyle={{
          [MediaRule.MinWidth]: {
            [BREAKPOINTS.TABLET]: {
              marginTop: SECTION_PADDING,
              height: 300,
              flexWrap: "wrap",
            },
          },
        }}
      >
        {Object.values(categoryList).map(category => {
          return (
            <View
              key={category.url}
              style={{
                marginBottom: SECTION_PADDING,
              }}
            >
              <CategoryLink
                category={category}
                style={{
                  color: STANFORD_COLORS.WHITE,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              />
              {Object.values(category.children).map(subCategory => {
                return (
                  <CategoryLink
                    key={subCategory.id}
                    category={subCategory}
                    style={{
                      color: STANFORD_COLORS.WHITE,
                      textTransform: "none",
                    }}
                  />
                );
              })}
            </View>
          );
        })}
      </RView>
      <View>
        <BottomLine>
          <BottomText style={{ fontWeight: "bold" }}>
            © 2020 The Stanford Daily Publishing Corporation
          </BottomText>
          <BottomText style={{ fontWeight: "bold" }}>
            <Link href="/[year]/" as="/privacy-policy/">
              <a style={bottomLinkStyle} title="Privacy Policy">
                Privacy Policy
              </a>
            </Link>{" "}
            |{" "}
            <a
              style={bottomLinkStyle}
              href="https://apps.apple.com/us/app/stanford-daily/id1341270063" // add to constants
              title="iOS App"
            >
              iOS App
            </a>{" "}
            |{" "}
            <a
              style={bottomLinkStyle}
              href="https://play.google.com/store/apps/details?id=com.Stanford.Daily.App&hl=en_US"
              title="Google Play App"
            >
              Google Play App
            </a>
          </BottomText>
        </BottomLine>
        <BottomLine>
          <BottomText style={{ textTransform: "none" }}>
            Proudly powered by{" "}
            <a
              style={bottomLinkStyle}
              href="https://wordpress.org/"
              title="WordPress"
            >
              WordPress
            </a>{" "}
            and{" "}
            <a style={bottomLinkStyle} href="https://expo.io/" title="Expo">
              Expo
            </a>{" "}
            | Theme by{" "}
            <a
              style={bottomLinkStyle}
              href="https://github.com/TheStanfordDaily/"
              title="The Stanford Daily Tech Team"
            >
              TSD Tech Team
            </a>
          </BottomText>
          <BottomText style={{ textTransform: "none" }}>
            <a style={bottomLinkStyle} href="/donate/" title="Donate">
              Donate
            </a>{" "}
            and support The Daily when you shop on{" "}
            <a
              style={bottomLinkStyle}
              href="https://smile.amazon.com/"
              title="Amazon Smile"
            >
              Amazon
            </a>
          </BottomText>
        </BottomLine>
      </View>
    </RView>
  );
};
