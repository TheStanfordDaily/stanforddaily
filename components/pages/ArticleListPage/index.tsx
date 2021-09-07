import React from "react";
import { Platform } from "react-native";
import { ArticleListPageData } from "helpers/wpapi";
import LoadingView from "components/Loading";
import ArticlesView from "components/ArticlesView";
import WPHead from "components/webHelpers/WPHead";
import WPFooter from "components/webHelpers/WPFooter";
import { deiTopper } from "./deiTopper";
import { usElections2020Topper } from "./UsElections2020Topper";

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
      <>
        {/* Apply only one custom section topper, if any */}
        {initData.tsdMeta["title"] === "DEI" && deiTopper()}
        {initData.tsdMeta["title"] === "US Elections 2020" &&
          usElections2020Topper(initData)}

        <ArticlesView
          displayCategory={displayCategory}
          displayExcerpt={displayExcerpt}
          initPosts={
            initData.tsdMeta["title"] === "US Elections 2020"
              ? initData.posts.filter(
                  post => !post["postCategory"].includes(70941),
                )
              : initData.posts
          }
          getExtraPosts={async pageNumber => {
            const extraData = await getExtraData(pageNumber);
            return extraData.posts;
          }}
        />
      </>
    );

    if (Platform.OS !== "web") {
      return articlesView;
    }

    return (
      <>
        <WPHead base={initData} />
        {articlesView}
        <WPFooter base={initData} />
        {/* Parse.ly analytics tracking */}
        <script
          id="parsely-cfg"
          src="//cdn.parsely.com/keys/stanforddaily.com/p.js"
        />
      </>
    );
  }
}
