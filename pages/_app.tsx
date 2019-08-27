import React from "react";
import App from "next/app";
import { RView, BREAKPOINTS } from "../helpers/responsiveStyle";

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
        <Component {...pageProps} />
      </Layout>
    );
  }
}
