import React from "react";
import { View, Text } from "react-native";
import { getSearchAsync, SearchArchivePageData } from "helpers/wpapi";
import Wrapper from "components/Wrapper";
import { Section } from "components/Section";
import ArchivePage, { ArchivePageType, ArchivePageState } from "./ArchivePage";

async function _getSearchData(
  keyword: string,
  pageNumber: number,
): Promise<SearchArchivePageData> {
  return getSearchAsync(keyword, pageNumber);
}

interface SearchArchivePageProps {
  initData: SearchArchivePageData;
  keyword: string;
}

export default class SearchArchivePage extends React.Component<
  SearchArchivePageProps,
  ArchivePageState
> {
  static async getSearchResults(keyword): Promise<SearchArchivePageProps> {
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
            fontFamily: "Open Sans",
            fontSize: 25,
          }}
        >
          Search results for: {keyword}
        </Text>
        <ArchivePage
          initData={initData}
          type={ArchivePageType.Search}
          getExtraData={async pageNumber => {
            return _getSearchData(keyword, pageNumber);
          }}
          {...this.props}
        />
      </Section>
    );
  }
}

export function SearchArchivePageWrapper(props: any): any {
  return (
    <Wrapper class={SearchArchivePage} props={props} getInitialProps={{}} />
  );
}
