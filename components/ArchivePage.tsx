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
  title: string;
  content?: Post[];
}

export interface ArchiveState {}

export default class ArchivePage extends React.Component<
  ArchiveProps,
  ArchiveState
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
