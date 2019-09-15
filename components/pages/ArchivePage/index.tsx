import React from "react";
import { View, Text } from "react-native";
import { getHomeAsync, Post } from "helpers/wpapi";
import LoadingView from "components/Loading";

export enum ArchivePageType {
  Time,
  Category,
  Tag,
}

export interface ArchivePageProps {
  type: ArchivePageType;
  content?: Post[];
}

export interface ArchivePageState {}

export default class ArchivePage extends React.Component<
  ArchivePageProps,
  ArchivePageState
> {
  static async getInitialProps(param): Promise<any> {
    return {};
  }

  render(): React.ReactNode {
    const { content } = this.props;
    // console.log("render", this.props.content.length);
    return (
      <View>
        {/* <Text>{content.map(post => <View>

      </View>)}</Text> */}
      </View>
    );
  }
}
