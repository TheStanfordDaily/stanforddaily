import React from "react";
import App from "next/app";
import Head from "next/head";
import Link from "next/link";
import { Global, css } from "@emotion/core";
import RView, { MediaRule } from "emotion-native-media-query";
import {
  STRINGS,
  BREAKPOINTS,
  COLORS,
  STANFORD_COLORS,
} from "helpers/constants";
import { SectionStyle } from "components/Section";
import { CategoryList } from "components/CategoryList";

const containerRStyle = {
  [MediaRule.MinWidth]: {
    0: {
      margin: "0 auto",
      width: "100%",
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

const HeaderLogo: React.ElementType = (props: any) => {
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
          <Link href="/">
            <a
              rel="home"
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src="https://raw.githubusercontent.com/TheStanfordDaily/stanforddaily-graphic-assets/master/DailyLogo/DailyLogo.png"
                alt="The Stanford Daily"
                title="The Stanford Daily"
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
    <RView
      WebTag="header"
      style={{
        backgroundColor: STANFORD_COLORS.WHITE,
      }}
      rStyle={{
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
        <RView rStyle={containerRStyle}>
          <CategoryList itemStyle={{ color: STANFORD_COLORS.WHITE }} />
        </RView>
      </RView>
    </RView>
  );
};

const SiteFooter: React.ElementType = ({ style, ...props }: any) => {
  return (
    <footer
      css={{
        backgroundColor: STANFORD_COLORS.CARDINAL_RED,
        ...style,
      }}
      {...props}
    >
      <RView rStyle={containerRStyle}>
        <SectionStyle
          css={{
            color: STANFORD_COLORS.WHITE,
          }}
        >
          <p>Footer here</p>
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
  render(): JSX.Element {
    const { Component, pageProps, router } = this.props;

    let includeHeaderAndFooter = true;
    if (router.query[STRINGS._MAIN_ONLY_QUERY] != null) {
      includeHeaderAndFooter = false;
    }

    return (
      <div
        css={{
          width: "100%",
        }}
      >
        <Global
          styles={{
            a: {
              color: COLORS.LINK.DEFAULT,
              textDecoration: "none",
              "&:visited": {
                color: COLORS.LINK.VISITED,
              },
              "&:hover, &:focus, &:active": {
                color: COLORS.LINK.HOVER,
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
            href="https://fonts.googleapis.com/css?family=Open+Sans|Libre+Baskerville:400,700|PT+Serif:400,400i,700,700i&display=swap"
            rel="stylesheet"
          />
        </Head>
        {/* `body` `overflow: initial` is added in order for `position: "sticky"` below to work. */}
        <Global
          styles={css`
            body {
              overflow: initial;
            }
          `}
        />
        {includeHeaderAndFooter && <SiteHeader id="site-header" />}
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
