import React from "react";
import { View, Text } from "react-native";
import { getCategoryAsync, CategoryArchivePageData } from "helpers/wpapi";
import Wrapper from "components/Wrapper";
import { Section } from "components/Section";
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
              fontSize: 25,
            }}
          >
            {initData.tsdMeta.title}
          </Text>
        </View>
        <ArchivePage
          displayCategory={false}
          excerptBool={false}
          initData={initData}
          type={ArchivePageType.Category}
          getExtraData={async pageNumber => {
            return _getCategoryData(slugs, pageNumber);
          }}
          {...this.props}
        />
      </Section>
    );
  }
}

export function CategoryArchivePageWrapper(props: any): any {
  return (
    <Wrapper class={CategoryArchivePage} props={props} getInitialProps={{}} />
  );
}
