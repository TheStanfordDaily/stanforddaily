import React from "react";
import { View } from "react-native";
import Wrapper from "components/Wrapper";
import ArchivePage, {
  ArchivePageType,
  ArchivePageProps,
  ArchivePageState,
} from "./ArchivePage";

export default class TimeArchivePage extends React.Component<
  ArchivePageProps,
  ArchivePageState
> {
  static async getInitialProps(param): Promise<any> {
    return ArchivePage.getInitialProps(param);
  }

  render(): React.ReactNode {
    return <ArchivePage type={ArchivePageType.Time} {...this.props} />;
  }
}

export function TimeArchivePageWrapper(props: any): any {
  return <Wrapper class={TimeArchivePage} props={props} getInitialProps={{}} />;
}
