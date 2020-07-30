import React from "react";
import { Platform } from "react-native";
import { ArticleListPageData } from "helpers/wpapi";
import LoadingView from "components/Loading";
import ArticlesView from "components/ArticlesView";
import WPHead from "components/webHelpers/WPHead";
import WPFooter from "components/webHelpers/WPFooter";

export enum ArticleListPageType {
  Time, // TODO
  Author,
  Category,
  Tag, // TODO
  Search,
}

export interface ArticleListPageProps {
  type: ArticleListPageType;
  initData: ArticleListPageData;
  getExtraData: (pageNumber: number) => Promise<ArticleListPageData>;
  displayCategory?: boolean;
  displayExcerpt?: boolean;
}

export interface ArticleListPageState {}

export default class ArticleListPage extends React.Component<
  ArticleListPageProps,
  ArticleListPageState
> {
  static async getInitialProps(param): Promise<any> {
    return {};
  }

  render(): React.ReactNode {
    const {
      initData,
      getExtraData,
      displayCategory,
      displayExcerpt,
    } = this.props;
    if (!initData) {
      return <LoadingView />;
    }

    const articlesView = (
      <ArticlesView
        displayCategory={displayCategory}
        displayExcerpt={displayExcerpt}
        initPosts={initData.posts}
        getExtraPosts={async pageNumber => {
          const extraData = await getExtraData(pageNumber);
          return extraData.posts;
        }}
      />
    );

    if (Platform.OS !== "web") {
      return articlesView;
    }

    return (
      <>
        <WPHead base={initData} />
        {articlesView}
        <WPFooter base={initData} />
      </>
    );
  }
}
