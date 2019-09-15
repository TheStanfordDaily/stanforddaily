import React from "react";
import { View } from "react-native";
import ArchivePage, {
  ArchiveType,
  ArchiveProps,
  ArchiveState,
} from "../ArchivePage";
import Wrapper from "../Wrapper";
import { getPostsByCategory } from "../../helpers/wpapi";

export default class CategoryArchivePage extends React.Component<
  ArchiveProps,
  ArchiveState
> {
  static async getInitialProps(param): Promise<any> {
    const { query } = param;
    const { slug } = query;
    return {
      ...ArchivePage.getInitialProps(param),
      content: await getPostsByCategory(slug),
      type: ArchiveType.Category,
      title: slug.replace(/-/g, " "), // TODO: better way to get the actual title from the wp api.
    };
  }

  render(): React.ReactNode {
    return <ArchivePage type={ArchiveType.Category} {...this.props} />;
  }
}

export function CategoryArchivePageWrapper(props: any): any {
  return (
    <Wrapper class={CategoryArchivePage} props={props} getInitialProps={{}} />
  );
}
