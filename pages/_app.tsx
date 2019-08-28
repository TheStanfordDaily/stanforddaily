import React from "react";
import App from "next/app";
import { RView, BREAKPOINTS } from "../helpers/responsiveStyle";
import { SectionStyle } from "../components/Section";
import { CategoryList } from "../components/CategoryList";

const HeaderLogo: React.ElementType = (props: any) => {
  return (
    <SectionStyle>
      <RView
        rStyle={{
          [BREAKPOINTS.DEFAULT]: {
            height: 60,
            backgroundColor: "#888888",
            justifyContent: "center",
            alignItems: "center",
          },
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
      rStyle={{
        [BREAKPOINTS.DEFAULT]: {
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
        <header>
          <RView
            rStyle={{
              [BREAKPOINTS.DEFAULT]: {
                maxWidth: "100vw",
              },
            }}
          >
            <RView
              rStyle={{
                [BREAKPOINTS.DEFAULT]: {
                  order: 1,
                },
                [BREAKPOINTS.TABLET]: {
                  order: 2,
                },
              }}
            >
              <HeaderLogo />
            </RView>
            <RView
              rStyle={{
                [BREAKPOINTS.DEFAULT]: {
                  order: 2,
                },
                [BREAKPOINTS.TABLET]: {
                  order: 1,
                },
              }}
            >
              <CategoryList />
            </RView>
          </RView>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <footer>Footer here</footer>
      </Layout>
    );
  }
}
