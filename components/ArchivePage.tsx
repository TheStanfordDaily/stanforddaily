import React from "react";
import { View, Text } from "react-native";
import { getHomeAsync, Post } from "../helpers/wpapi";
import LoadingView from "./Loading";

export enum ArchiveType {
  Time,
  Category,
  Tag,
}

export interface ArchiveProps {
  type: ArchiveType;
  content?: Post[];
}

export interface ArchiveState {}

export default class ArchivePage extends React.Component<
  ArchiveProps,
  ArchiveState
> {
  static async getInitialProps(param): Promise<any> {
    const homePosts = await getHomeAsync();
    return { homePosts };
  }

  render(): React.ReactNode {
    return <Text>{this.props.type}</Text>;
  }
}
