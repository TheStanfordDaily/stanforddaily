import React from "react";
import { getCategoryAsync, Post } from "helpers/wpapi";
import Wrapper from "components/Wrapper";
import ArchivePage, {
  ArchivePageType,
  ArchivePageProps,
  ArchivePageState,
} from "./ArchivePage";

function _getPosts(slug: string, pageNumber: number): Promise<Post[]> {
  return getCategoryAsync(slug, pageNumber);
}

interface CategoryArchivePageProps extends ArchivePageProps {
  slug: string;
}

export default class CategoryArchivePage extends React.Component<
  CategoryArchivePageProps,
  ArchivePageState
> {
  static async getInitialProps(param): Promise<any> {
    const { query } = param;
    const { slug } = query;
    const initPosts = await _getPosts(slug, 1);

    return { initPosts, slug };
  }

  render(): React.ReactNode {
    const { initPosts, slug } = this.props;
    return (
      <ArchivePage
        initPosts={initPosts}
        type={ArchivePageType.Category}
        getExtraPosts={async pageNumber => {
          return _getPosts(slug, pageNumber);
        }}
        {...this.props}
      />
    );
  }
}

export function CategoryArchivePageWrapper(props: any): any {
  return (
    <Wrapper class={CategoryArchivePage} props={props} getInitialProps={{}} />
  );
}
