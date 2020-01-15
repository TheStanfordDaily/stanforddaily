import React from "react";
import Router from "next/router";
import HomePage from "components/pages/HomePage";
import SearchArchivePage from "components/pages/SearchArchivePage";
import { getPostByIdAsync, getPostPath } from "helpers/wpapi";

enum PageType {
  SEARCH,
  HOME,
  REDIRECT_TO_POST,
}

export default class IndexPage extends React.Component<any, any> {
  static async getInitialProps(param): Promise<any> {
    const { query, res, pathname } = param;

    const {
      s = null,
      p = null,
    }: {
      s?: string;
      p?: string;
    } = query;

    if (s) {
      const searchKeyword = s;
      const initProps = await SearchArchivePage.getSearchResults(searchKeyword);
      return { ...initProps, pageType: PageType.SEARCH };
    } else if (p) {
      const post = await getPostByIdAsync(Number(p));

      // https://github.com/zeit/next.js/wiki/Redirecting-in-%60getInitialProps%60
      const redirectLocation = getPostPath(post);
      if (res) {
        res.writeHead(301, {
          Location: redirectLocation,
        });
        res.end();
      } else {
        Router.push(redirectLocation);
      }
      return { pageType: PageType.REDIRECT_TO_POST };
    } else {
      const initProps = await HomePage.getInitialProps();
      return { ...initProps, pageType: PageType.HOME };
    }
  }

  render(): React.ReactNode {
    const { pageType, ...restProps } = this.props;
    switch (pageType) {
      case PageType.HOME:
        return <HomePage {...(restProps as any)} />;

      case PageType.SEARCH:
        return <SearchArchivePage {...(restProps as any)} />;

      default:
        return <></>;
    }
  }
}
