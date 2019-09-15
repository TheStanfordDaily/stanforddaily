import React from "react";
import { View } from "react-native";
import { getPostsByCategory } from "helpers/wpapi";
import Wrapper from "components/Wrapper";
import ArchivePage, {
  ArchivePageType,
  ArchivePageProps,
  ArchivePageState,
} from "./ArchivePage";

export default class CategoryArchivePage extends React.Component<
  ArchivePageProps,
  ArchivePageState
> {
  static async getInitialProps(param): Promise<any> {
    const { query } = param;
    const { slug } = query;
    return {
      ...ArchivePage.getInitialProps(param),
      content: await getPostsByCategory(slug),
      type: ArchivePageType.Category,
      title: slug.replace(/-/g, " "), // TODO: better way to get the actual title from the wp api.
    };
  }

  render(): React.ReactNode {
    return <ArchivePage type={ArchivePageType.Category} {...this.props} />;
  }
}

export function CategoryArchivePageWrapper(props: any): any {
  return (
    <Wrapper class={CategoryArchivePage} props={props} getInitialProps={{}} />
  );
}
