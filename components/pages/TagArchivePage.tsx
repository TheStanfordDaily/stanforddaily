import React from "react";
import { View, Text, Platform, ScrollView, SafeAreaView } from "react-native";
import {
  getTagAsync,
  TagArchivePageData,
  splitTagToSlugs,
  Tag,
} from "helpers/wpapi";
import { FONTS } from "helpers/constants";
import Wrapper from "components/Wrapper";
import { Section, SECTION_PADDING } from "components/Section";
import SatireGlobal from "components/SatireGlobal";
import DataVizGlobal from "components/DataVizGlobal";
import LoadingView from "components/Loading";
import ArchivePage, { ArchivePageType, ArchivePageState } from "./ArchivePage";

async function _getTagData(
  slugs: string[],
  pageNumber: number,
): Promise<TagArchivePageData> {
  return getTagAsync(slugs, pageNumber);
}

interface TagArchivePageProps {
  initData: TagArchivePageData;
  slugs: string[];
}

function _getSlugs(query: any): string[] {
  const { slug1, slug2, slug3, slug4, slug5 } = query;
  return [slug1, slug2, slug3, slug4, slug5].filter(Boolean);
}

export default class TagArchivePage extends React.Component<
  TagArchivePageProps,
  ArchivePageState
> {
  static async getInitialProps(param): Promise<any> {
    const { query } = param;
    const slugs = _getSlugs(query);
    const tagData = await _getTagData(slugs, 1);

    return { initData: tagData, slugs };
  }

  render(): React.ReactNode {
    const { initData, slugs } = this.props;
    if (!initData) {
      return <LoadingView />;
    }

    const _archivePage = (
      <ArchivePage
        displayCategory={false}
        displayExcerpt={false}
        initData={initData}
        type={ArchivePageType.Tag}
        getExtraData={async pageNumber => {
          return _getTagData(slugs, pageNumber);
        }}
        {...this.props}
      />
    );

    if (Platform.OS !== "web") {
      // We do not need header on mobile
      return <SafeAreaView style={{ flex: 1 }}>{_archivePage}</SafeAreaView>;
    }

    return (
      <Section
        style={{
          flexGrow: 1,
          flexDirection: "column",
        }}
      >
        <a
          className="section-title"
          style={{ paddingBottom: 15, display: "block" }}
        >
          <View style={{ paddingBottom: 15 }}>
            <Text
              style={{
                ...FONTS.SECTION_TITLE,
                fontSize: 25,
              }}
            >
              {initData.tsdMeta.title}
            </Text>
          </View>
        </a>
        {initData.tsdMeta.title === "Satire" && <SatireGlobal />}
        {initData.tsdMeta.title === "Data Team" && <DataVizGlobal />}
        {_archivePage}
      </Section>
    );
  }
}

export function TagArchivePageWrapper(props: any): any {
  const tag: Tag = props.navigation.state.params;
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "column",
        margin: SECTION_PADDING,
      }}
    >
      <Wrapper
        class={TagArchivePage}
        props={props}
        getInitialProps={{ query: splitTagToSlugs(tag) }}
      />
    </ScrollView>
  );
}
// https://github.com/react-navigation/react-navigation/issues/2379
TagArchivePageWrapper.navigationOptions = ({ navigation }) => ({
  //   title: (navigation.state.params as Tag).name || "Tag",
});
