import React from "react";
import App from "next/app";
import Head from "next/head";
import { Global, css } from "@emotion/core";
import { View } from "react-native";
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
import DonationForm from "components/DonationForm";
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
    <View style={{ padding: 15 }}>
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
          <Link href="/" as="/">
            <a
              id="tsd-logo-dataviz"
              style={{
                display: "none",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src="/static/94305-logo.png"
                alt="The Stanford Daily"
                css={{
                  height: "auto",
                  width: "120%",
                  maxWidth: "100vw",
                }}
              />
            </a>
          </Link>
        </h1>
      </RView>
    </View>
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
        <RView
          style={{
            margin: "0 !important",
            maxWidth: "none !important",
          }}
          rStyle={{
            ...containerRStyle,
          }}
        >
          {/* Apply banner */}
          {/* <a href="http://apply.stanforddaily.com">
            <img
              src="https://wp.stanforddaily.com/wp-content/uploads/2020/04/apply_for_the_daily.jpg"
              style={{
                maxHeight: 100,
                objectFit: "contain",
                width: "100%",
                display: "block",
                margin: "auto",
                marginBottom: 20,
              }}
            />
          </a> */}
          {/* Readers survey */}
          {/* <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScPzcqoZYTfUx5hPIe56Ils1gKn0ibO27ugWmiJVMKADdgdpA/viewform"
          >
            <img
              src="https://wp.stanforddaily.com/wp-content/uploads/2020/05/reader-survey-5-12-20.jpg"
              style={{
                maxHeight: 100,
                objectFit: "contain",
                width: "100%",
                display: "block",
                margin: "auto",
                marginBottom: 0,
                marginTop: 0,
                // backgroundColor: "#8C1515"
              }}
            />
          </a> */}
          <DonationForm
            currentPageUrl={STRINGS.WEBSITE_URL}
            bannerLocation={"Banner"}
            large={false}
          />
          {/* <HeaderDonationBanner currentPageUrl={props.router.asPath} /> */}
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
              // position: "sticky",
              // top: 0,
              // zIndex: 999,
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
          style={{ order: 3, overflow: "hidden", ...getBorderValue("Top") }}
          rStyle={containerRStyle}
        >
          <TopSection />
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
            "#tsd-logo-dataviz": {
              display: "none",
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
          <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
          {/* We have to embed Google Analytics this way (and not through react-ga) because react-ga requires
            Next JS's javascript code to be running -- and we had to turn off the Next JS javascript code
            on article pages in order to fix some integration issues with Ezoic.
          */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-5773957-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-5773957-1');
          `,
            }}
          />
        </Head>
        {/* `body` `overflow: initial` is added in order for `position: "sticky"` below to work. */}
        <Global
          styles={css`
            html {
              font-size: 0.8em;
            }
            body {
              overflow: initial;
            }
            .visible-mobile {
              @media (min-width: ${BREAKPOINTS.TABLET}px) {
                display: none;
              }
            }
            .hidden-mobile {
              @media (max-width: ${BREAKPOINTS.MAX_WIDTH.TABLET}px) {
                display: none;
              }
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
