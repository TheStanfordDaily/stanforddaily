import React from "react";
import { getPageAsync, Post } from "helpers/wpapi";
import ContentView from "components/ContentView";

interface PagePageProps {
  page?: Post;
}

interface PagePageState {}

export default class PagePage extends React.Component<
  PagePageProps,
  PagePageState
> {
  static async getPage(pageSlug: string): Promise<any> {
    const page = await getPageAsync(pageSlug);
    return { page };
  }

  render(): React.ReactNode {
    const { page } = this.props;
    return <ContentView post={page} />;
  }
}
