import React from "react";
import { View, Text } from "react-native";
import { Post } from "helpers/wpapi";
import LoadingView from "components/Loading";
import ArticlesView from "components/ArticlesView";

export enum ArchivePageType {
  Time,
  Category,
  Tag,
}

export interface ArchivePageProps {
  type: ArchivePageType;
  initPosts: Post[];
  getExtraPosts: (pageNumber: number) => Promise<Post[]>;
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
    const { initPosts, getExtraPosts } = this.props;
    if (!initPosts) {
      return <LoadingView />;
    }

    console.log(typeof getExtraPosts);

    return (
      <ArticlesView
        initPosts={initPosts}
        getExtraPosts={async pageNumber => {
          return getExtraPosts(pageNumber);
        }}
      />
    );
  }
}
