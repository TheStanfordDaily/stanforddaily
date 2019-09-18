import React from "react";
import PagePage from "components/pages/PagePage";

export default class FirstLevelPage extends React.Component<any, any> {
  static async getInitialProps(param): Promise<any> {
    const { query } = param;
    const { year }: { year: string } = query;
    if (Number.isNaN(Number(year)) || year.length !== 4) {
      const pageSlug = year;
      const initProps = await PagePage.getPage(pageSlug);
      return { ...initProps, isPage: true };
    } else {
      // TODO: DATE ARCHIVE
      return { isPage: false };
    }
  }

  render(): React.ReactNode {
    const { isPage } = this.props;
    if (isPage) {
      return <PagePage {...this.props} />;
    } else {
      return <></>;
    }
  }
}
