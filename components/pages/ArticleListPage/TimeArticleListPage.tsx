import React from "react";
import Wrapper from "components/Wrapper";
import ArticleListPage, {
  ArticleListPageType,
  ArticleListPageProps,
  ArticleListPageState,
} from "./index";

export default class TimeArticleListPage extends React.Component<
  ArticleListPageProps,
  ArticleListPageState
> {
  static async getInitialProps(param): Promise<any> {
    return ArticleListPage.getInitialProps(param);
  }

  render(): React.ReactNode {
    return <ArticleListPage type={ArticleListPageType.Time} {...this.props} />;
  }
}

export function TimeArticleListPageWrapper(props: any): any {
  return (
    <Wrapper class={TimeArticleListPage} props={props} getInitialProps={{}} />
  );
}
