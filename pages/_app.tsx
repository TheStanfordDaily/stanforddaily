import React from "react";
import App from "next/app";
import Head from "next/head";
import ReactGA from "react-ga";
import { Global, css } from "@emotion/core";
import RView, { MediaRule } from "emotion-native-media-query";
import {
  STRINGS,
  BREAKPOINTS,
  COLORS,
  STANFORD_COLORS,
  FONTS,
} from "helpers/constants";
import { SectionStyle } from "components/Section";
import { getBorderValue } from "components/pages/HomePage/getBorderValue";
import { TopSection } from "components/pages/HomePage/TopSection";
import { CategoryList } from "components/CategoryList";
import { FooterContent } from "components/FooterContent";
import HeaderDonationBanner from "components/HeaderDonationBanner";
import Link from "../components/Link";

const containerRStyle: any = {
  [MediaRule.MinWidth]: {
    0: {
      margin: "0 auto",
      width: "100%",
      flexWrap: "wrap",
    },
    [BREAKPOINTS.TABLET]: {},
    [BREAKPOINTS.DESKTOP]: {
      maxWidth: BREAKPOINTS.DESKTOP,
    },
    1300: {
      maxWidth: 1300,
    },
  },
};

const HeaderLogo: React.ElementType = () => {
  return (
    <SectionStyle>
      <RView
        style={{
          height: 60,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          css={{
            textAlign: "center",
            margin: 0,
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Link href="/" as="/">
            <a
              rel="home"
              id="tsd-logo"
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
              title="The Stanford Daily"
            >
              <img
                src="https://raw.githubusercontent.com/TheStanfordDaily/stanforddaily-graphic-assets/master/DailyLogo/DailyLogo.png"
                alt="The Stanford Daily"
                css={{
                  height: "auto",
                  width: "auto",
                  maxHeight: "100%",
                  maxWidth: "100%",
                }}
              />
            </a>
          </Link>
        </h1>
      </RView>
    </SectionStyle>
  );
};

const SiteHeader: React.ElementType = (props: any) => {
  return (
    <>
      <RView
        style={{
          backgroundColor: "#eee",
        }}
      >
        <RView rStyle={containerRStyle}>
          <HeaderDonationBanner currentPageUrl={props.router.asPath} />
        </RView>
      </RView>
      <RView
        WebTag="header"
        style={{
          backgroundColor: STANFORD_COLORS.WHITE,
        }}
        rStyle={{
          [MediaRule.MinWidth]: {
            [BREAKPOINTS.TABLET]: {
              ...getBorderValue("Bottom"),
            },
          },
          [MediaRule.MaxWidth]: {
            [BREAKPOINTS.MAX_WIDTH.TABLET]: {
              position: "sticky",
              top: 0,
              zIndex: 999,
            },
          },
        }}
        {...props}
      >
        <RView
          style={{
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
          <HeaderLogo />
        </RView>
        <RView
          id="tsd-navbar"
          style={{
            order: 2,
            maxWidth: "100vw",
            backgroundColor: STANFORD_COLORS.CARDINAL_RED,
          }}
          rStyle={{
            [MediaRule.MinWidth]: {
              [BREAKPOINTS.TABLET]: {
                order: 1,
              },
            },
          }}
        >
          <RView
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            rStyle={containerRStyle}
          >
            <CategoryList itemStyle={{ color: STANFORD_COLORS.WHITE }} />
          </RView>
        </RView>
        <RView
          style={{
            order: 3,
          }}
          rStyle={{
            [MediaRule.MinWidth]: {
              [BREAKPOINTS.DESKTOP]: {
                ...getBorderValue("Top"),
              },
            },
            [MediaRule.MaxWidth]: {
              [BREAKPOINTS.MAX_WIDTH.TABLET]: {
                display: "none",
              },
            },
          }}
        >
          <RView rStyle={containerRStyle}>
            <TopSection />
          </RView>
        </RView>
      </RView>
    </>
  );
};

const SiteFooter: React.ElementType = ({ style, ...props }: any) => {
  // TODO: ADD FONTS CREDIT
  return (
    <footer
      css={{
        backgroundColor: STANFORD_COLORS.CARDINAL_RED,
        ...style,
      }}
      {...props}
    >
      <RView rStyle={containerRStyle}>
        <SectionStyle>
          <FooterContent
            style={{
              color: STANFORD_COLORS.WHITE,
            }}
          />
        </SectionStyle>
      </RView>
    </footer>
  );
};

const Layout: React.ElementType = (props: any) => {
  const { children } = props;
  return <RView rStyle={containerRStyle}>{children}</RView>;
};

export default class MyApp extends App {
  componentDidMount(): void {
    // Initialize GA, track pageviews
    ReactGA.initialize("UA-5773957-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render(): JSX.Element {
    const { Component, pageProps, router } = this.props;

    let includeHeaderAndFooter = true;
    if (router.query[STRINGS._MAIN_ONLY_QUERY] != null) {
      includeHeaderAndFooter = false;
    }

    return (
      <div
        id="body-main"
        css={{
          width: "100%",
        }}
      >
        <Global
          styles={{
            "body, button, input, optgroup, select, textarea": {
              ...FONTS.CONTENT,
            },
            a: {
              color: COLORS.LINK.DEFAULT,
              textDecoration: "none",
              "&:visited": {
                color: COLORS.LINK.VISITED,
              },
              "&:hover, &:focus, &:active": {
                color: COLORS.LINK.HOVER,
                textDecoration: "underline",
              },
              "&:focus": {
                outline: "thin dotted",
              },
              "&:hover, &:active": {
                outline: 0,
              },
            },
          }}
        />
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700|PT+Serif:400,400i&display=swap"
            rel="stylesheet"
          />
          <link href="/static/fonts.css" rel="stylesheet" />
        </Head>
        {/* `body` `overflow: initial` is added in order for `position: "sticky"` below to work. */}
        <Global
          styles={css`
            body {
              overflow: initial;
            }
          `}
        />
        {includeHeaderAndFooter && (
          <SiteHeader id="site-header" router={router} />
        )}
        <Layout>
          <main id="site-main">
            <Component {...pageProps} />
          </main>
        </Layout>
        {includeHeaderAndFooter && <SiteFooter id="site-footer" />}
      </div>
    );
  }
}
