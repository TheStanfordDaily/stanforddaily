import React from "react";
import { View, Text, Platform, ScrollView, SafeAreaView } from "react-native";
import {
  getCategoryAsync,
  CategoryArchivePageData,
  splitCategoryToSlugs,
  Category,
} from "helpers/wpapi";
import { FONTS } from "helpers/constants";
import Wrapper from "components/Wrapper";
import { Section, SECTION_PADDING } from "components/Section";
import SatireGlobal from "components/SatireGlobal";
import DataVizGlobal from "components/DataVizGlobal";
import LoadingView from "components/Loading";
import ArchivePage, { ArchivePageType, ArchivePageState } from "./ArchivePage";

async function _getCategoryData(
  slugs: string[],
  pageNumber: number,
): Promise<CategoryArchivePageData> {
  return getCategoryAsync(slugs, pageNumber);
}

interface CategoryArchivePageProps {
  initData: CategoryArchivePageData;
  slugs: string[];
}

function _getSlugs(query: any): string[] {
  const { slug1, slug2, slug3, slug4, slug5 } = query;
  return [slug1, slug2, slug3, slug4, slug5].filter(Boolean);
}

export default class CategoryArchivePage extends React.Component<
  CategoryArchivePageProps,
  ArchivePageState
> {
  static async getInitialProps(param): Promise<any> {
    const { query } = param;
    const slugs = _getSlugs(query);
    const categoryData = await _getCategoryData(slugs, 1);

    return { initData: categoryData, slugs };
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
        type={ArchivePageType.Category}
        getExtraData={async pageNumber => {
          return _getCategoryData(slugs, pageNumber);
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

export function CategoryArchivePageWrapper(props: any): any {
  const category: Category = props.navigation.state.params;
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "column",
        margin: SECTION_PADDING,
      }}
    >
      <Wrapper
        class={CategoryArchivePage}
        props={props}
        getInitialProps={{ query: splitCategoryToSlugs(category) }}
      />
    </ScrollView>
  );
}
// https://github.com/react-navigation/react-navigation/issues/2379
CategoryArchivePageWrapper.navigationOptions = ({ navigation }) => ({
  title: (navigation.state.params as Category).name || "Category",
});
