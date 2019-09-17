import React from "react";
import { View, Text } from "react-native";
import { getCategoryAsync, ArchivePageData } from "helpers/wpapi";
import Wrapper from "components/Wrapper";
import { Section } from "components/Section";
import ArchivePage, {
  ArchivePageType,
  ArchivePageProps,
  ArchivePageState,
} from "./ArchivePage";

async function _getCategoryData(
  slug: string,
  pageNumber: number,
): Promise<ArchivePageData> {
  return getCategoryAsync(slug, pageNumber);
}

interface CategoryArchivePageProps extends ArchivePageProps {
  slug: string;
}

export default class CategoryArchivePage extends React.Component<
  CategoryArchivePageProps,
  ArchivePageState
> {
  static async getInitialProps(param): Promise<any> {
    const { query } = param;
    const { slug } = query;
    const categoryData = await _getCategoryData(slug, 1);

    return { initData: categoryData, slug };
  }

  render(): React.ReactNode {
    const { initData, slug } = this.props;
    return (
      <Section
        style={{
          flexGrow: 1,
          flexDirection: "column",
        }}
      >
        <Text>{initData.meta.title}</Text>
        <ArchivePage
          initData={initData}
          type={ArchivePageType.Category}
          getExtraData={async pageNumber => {
            return _getCategoryData(slug, pageNumber);
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
