import React from "react";
import { Global } from "@emotion/core";
import { View, Text } from "react-native";
import { getCategoryAsync, CategoryArchivePageData } from "helpers/wpapi";
import {
  STRINGS,
  BREAKPOINTS,
  FONTS,
  STANFORD_COLORS,
} from "helpers/constants";
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
              ...FONTS.SECTION_TITLE,
              fontSize: 25,
            }}
          >
            {initData.tsdMeta.title}
          </Text>
        </View>
        {initData.tsdMeta.title === "Satire" && (
          <Global
            // TODO: CUSTOM LOGO FOR SATIRE (SEE https://stackoverflow.com/a/28710709/2603230)
            styles={{
              "#body-main": {
                backgroundColor: STANFORD_COLORS.WHITE,
              },
              "#tsd-navbar, #site-footer": {
                backgroundColor: STANFORD_COLORS.BLACK,
              },
              "#tsd-logo img": {
                display: "none",
              },
              "#tsd-logo::after": {
                content: '" "',
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                height: 87.5,
                width: 1477,
                backgroundImage: "url(/static/soc.jpg)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              },
            }}
          />
        )}
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
      </Section>
    );
  }
}

export function CategoryArchivePageWrapper(props: any): any {
  return (
    <Wrapper class={CategoryArchivePage} props={props} getInitialProps={{}} />
  );
}
