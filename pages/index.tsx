import React from "react";
import HomePage from "components/pages/HomePage";
import SearchArchivePage from "components/pages/SearchArchivePage";

export default class IndexPage extends React.Component<any, any> {
  static async getInitialProps(param): Promise<any> {
    const { query } = param;
    const { s = null }: { s?: string } = query;
    if (s) {
      const searchKeyword = s;
      const initProps = await SearchArchivePage.getSearchResults(searchKeyword);
      return { ...initProps, isSearch: true };
    } else {
      const initProps = await HomePage.getInitialProps();
      return { ...initProps, isSearch: false };
    }
    // TODO: CONSIDER `?p=`.
  }

  render(): React.ReactNode {
    const { isSearch, ...restProps } = this.props;
    if (isSearch) {
      return <SearchArchivePage {...(restProps as any)} />;
    } else {
      return <HomePage {...(restProps as any)} />;
    }
  }
}
