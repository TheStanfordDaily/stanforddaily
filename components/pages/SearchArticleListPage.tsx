import React from "react";
import { Text } from "react-native";
import { getSearchAsync, SearchArticleListPageData } from "helpers/wpapi";
import { FONTS } from "helpers/constants";
import Wrapper from "components/Wrapper";
import { Section } from "components/Section";
import ArticleListPage, {
  ArticleListPageType,
  ArticleListPageState,
} from "./ArticleListPage";

async function _getSearchData(
  keyword: string,
  pageNumber: number,
): Promise<SearchArticleListPageData> {
  return getSearchAsync(keyword, pageNumber);
}

interface SearchArticleListPageProps {
  initData: SearchArticleListPageData;
  keyword: string;
}

export default class SearchArticleListPage extends React.Component<
  SearchArticleListPageProps,
  ArticleListPageState
> {
  static async getSearchResults(keyword): Promise<SearchArticleListPageProps> {
    const authorData = await _getSearchData(keyword, 1);

    return { initData: authorData, keyword };
  }

  render(): React.ReactNode {
    const { initData, keyword } = this.props;
    return (
      <Section
        style={{
          flexGrow: 1,
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            ...FONTS.SECTION_TITLE,
            fontSize: 25,
          }}
        >
          Search results for: {keyword}
        </Text>
        <ArticleListPage
          initData={initData}
          type={ArticleListPageType.Search}
          getExtraData={async pageNumber => {
            return _getSearchData(keyword, pageNumber);
          }}
          {...this.props}
        />
      </Section>
    );
  }
}

export function SearchArticleListPageWrapper(props: any): any {
  return (
    <Wrapper class={SearchArticleListPage} props={props} getInitialProps={{}} />
  );
}
