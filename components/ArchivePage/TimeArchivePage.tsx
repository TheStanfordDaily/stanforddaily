import React from "react";
import { View } from "react-native";
import ArchivePage, {
  ArchiveType,
  ArchiveProps,
  ArchiveState,
} from "../ArchivePage";
import Wrapper from "../Wrapper";

export default class TimeArchivePage extends React.Component<
  ArchiveProps,
  ArchiveState
> {
  static async getInitialProps(param): Promise<any> {
    return ArchivePage.getInitialProps(param);
  }

  render(): React.ReactNode {
    return <ArchivePage type={ArchiveType.Time} {...this.props} />;
  }
}

export function TimeArchivePageWrapper(props: any): any {
  return <Wrapper class={TimeArchivePage} props={props} getInitialProps={{}} />;
}
