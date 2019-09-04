import React from "react";
import { View } from "react-native";
import ArchivePage, {
  ArchiveType,
  ArchiveProps,
  ArchiveState,
} from "../ArchivePage";
import Wrapper from "../Wrapper";

export default class CategoryArchivePage extends React.Component<
  ArchiveProps,
  ArchiveState
> {
  static async getInitialProps(param): Promise<any> {
    return ArchivePage.getInitialProps(param);
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
