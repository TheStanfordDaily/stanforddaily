import React from "react";
import { View, Text, Platform, ScrollView, SafeAreaView } from "react-native";
import {
  getCategoryAsync,
  CategoryArticleListPageData,
  splitCategoryToSlugs,
  Category,
} from "helpers/wpapi";
import { FONTS } from "helpers/constants";
import Wrapper from "components/Wrapper";
import { Section, SECTION_PADDING } from "components/Section";
import SatireGlobal from "components/SatireGlobal";
import LoadingView from "components/Loading";
import ArticleListPage, {
  ArticleListPageType,
  ArticleListPageState,
} from "./ArticleListPage";

async function _getCategoryData(
  slugs: string[],
  pageNumber: number,
): Promise<CategoryArticleListPageData> {
  return getCategoryAsync(slugs, pageNumber);
}

interface CategoryArticleListPageProps {
  initData: CategoryArticleListPageData;
  slugs: string[];
}

function _getSlugs(query: any): string[] {
  const { slug1, slug2, slug3, slug4, slug5 } = query;
  return [slug1, slug2, slug3, slug4, slug5].filter(Boolean);
}

export default class CategoryArticleListPage extends React.Component<
  CategoryArticleListPageProps,
  ArticleListPageState
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

    const _articleListPage = (
      <ArticleListPage
        displayCategory={false}
        displayExcerpt={false}
        initData={initData}
        type={ArticleListPageType.Category}
        getExtraData={async pageNumber => {
          return _getCategoryData(slugs, pageNumber);
        }}
        {...this.props}
      />
    );

    if (Platform.OS !== "web") {
      // We do not need header on mobile
      return (
        <SafeAreaView style={{ flex: 1 }}>{_articleListPage}</SafeAreaView>
      );
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
        {_articleListPage}
      </Section>
    );
  }
}

export function CategoryArticleListPageWrapper(props: any): any {
  const category: Category = props.navigation.state.params;
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "column",
        margin: SECTION_PADDING,
      }}
    >
      <Wrapper
        class={CategoryArticleListPage}
        props={props}
        getInitialProps={{ query: splitCategoryToSlugs(category) }}
      />
    </ScrollView>
  );
}
// https://github.com/react-navigation/react-navigation/issues/2379
CategoryArticleListPageWrapper.navigationOptions = ({ navigation }) => ({
  title: (navigation.state.params as Category).name || "Category",
});
