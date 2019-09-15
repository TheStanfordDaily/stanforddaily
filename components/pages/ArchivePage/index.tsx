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
    const homePosts = await getHomeAsync();
    return { homePosts };
  }

  render(): React.ReactNode {
    return <Text>{this.props.type}</Text>;
  }
}
