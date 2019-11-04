import React from "react";
import { View, Text, Platform } from "react-native";
import {
  getCategoryAsync,
  CategoryArchivePageData,
  splitCategoryToSlugs,
  Category,
} from "helpers/wpapi";
import { FONTS } from "helpers/constants";
import Wrapper from "components/Wrapper";
import { Section } from "components/Section";
import SatireGlobal from "components/SatireGlobal";
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
      return _archivePage;
    }

    return (
      <Section
        style={{
          flexGrow: 1,
          flexDirection: "column",
        }}
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
        {initData.tsdMeta.title === "Satire" && <SatireGlobal />}
        {_archivePage}
      </Section>
    );
  }
}

export function CategoryArchivePageWrapper(props: any): any {
  const category: Category = props.navigation.state.params;
  return (
    <Wrapper
      class={CategoryArchivePage}
      props={props}
      getInitialProps={{ query: splitCategoryToSlugs(category) }}
    />
  );
}
// https://github.com/react-navigation/react-navigation/issues/2379
CategoryArchivePageWrapper.navigationOptions = ({ navigation }) => ({
  title: (navigation.state.params as Category).name || "Category",
});
