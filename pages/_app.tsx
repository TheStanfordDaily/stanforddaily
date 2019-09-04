import React from "react";
import App from "next/app";
import { Global, css } from "@emotion/core";
import { STRINGS, BREAKPOINTS } from "../helpers/constants";
import { RView, MediaRule } from "../helpers/responsiveStyle";
import { SectionStyle } from "../components/Section";
import { CategoryList } from "../components/CategoryList";

const HeaderLogo: React.ElementType = (props: any) => {
  return (
    <SectionStyle>
      <RView
        style={{
          height: 60,
          backgroundColor: "#888888",
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
          {/* TODO: USE NEXT LINK */}
          <a
            href="https://www.stanforddaily.com/"
            rel="home"
            css={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src="https://www.stanforddaily.com/wp-content/uploads/2019/03/cropped-DailyLogo-CardinalRed.png"
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
        maxWidth: "100vw",
        position: "sticky",
        top: 0,
        zIndex: 999,
        backgroundColor: "white",
      }}
      rStyle={{
        [MediaRule.MinWidth]: {
          [BREAKPOINTS.TABLET]: {
            position: "inherit",
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
        }}
        rStyle={{
          [MediaRule.MinWidth]: {
            [BREAKPOINTS.TABLET]: {
              order: 1,
            },
          },
        }}
      >
        <CategoryList />
      </RView>
    </RView>
  );
};

const SiteFooter: React.ElementType = (props: any) => {
  return (
    <footer {...props}>
      <SectionStyle>
        <p>Footer here</p>
      </SectionStyle>
    </footer>
  );
};

const Layout: React.ElementType = (props: any) => {
  const { children } = props;
  return (
    <RView
      style={{
        margin: "0 auto",
        width: "100%",
      }}
      rStyle={{
        [MediaRule.MinWidth]: {
          [BREAKPOINTS.TABLET]: {},
          [BREAKPOINTS.DESKTOP]: {
            maxWidth: BREAKPOINTS.DESKTOP,
          },
          1300: {
            maxWidth: 1300,
          },
        },
      }}
    >
      {children}
    </RView>
  );
};

export default class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps, router } = this.props;

    let includeHeaderAndFooter = true;
    if (router.query[STRINGS._MAIN_ONLY_QUERY] != null) {
      includeHeaderAndFooter = false;
    }

    return (
      <Layout>
        {/* `body` `overflow: initial` is added in order for `position: "sticky"` below to work. */}
        <Global
          styles={css`
            body {
              overflow: initial;
            }
          `}
        />
        {includeHeaderAndFooter && <SiteHeader id="site-header" />}
        <main id="site-main">
          <Component {...pageProps} />
        </main>
        {includeHeaderAndFooter && <SiteFooter id="site-footer" />}
      </Layout>
    );
  }
}
