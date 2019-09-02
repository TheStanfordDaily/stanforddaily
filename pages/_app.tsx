import React from "react";
import App from "next/app";
import { Global, css } from "@emotion/core";
import { RView, BREAKPOINTS } from "../helpers/responsiveStyle";
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

const Layout: React.ElementType = (props: any) => {
  const { children } = props;
  return (
    <RView
      style={{
        margin: "0 auto",
        width: "100%",
      }}
      rStyle={{
        [BREAKPOINTS.TABLET]: {},
        [BREAKPOINTS.DESKTOP]: {
          maxWidth: BREAKPOINTS.DESKTOP,
        },
        1300: {
          maxWidth: 1300,
        },
      }}
    >
      {children}
    </RView>
  );
};

export default class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
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
            [BREAKPOINTS.TABLET]: {
              position: "inherit",
            },
          }}
        >
          <RView
            style={{
              order: 1,
            }}
            rStyle={{
              [BREAKPOINTS.TABLET]: {
                order: 2,
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
              [BREAKPOINTS.TABLET]: {
                order: 1,
              },
            }}
          >
            <CategoryList />
          </RView>
        </RView>
        <main>
          <Component {...pageProps} />
        </main>
        <footer>Footer here</footer>
      </Layout>
    );
  }
}
