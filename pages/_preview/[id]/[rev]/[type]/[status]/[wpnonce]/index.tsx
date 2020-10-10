import React from "react";
import { getRevision } from "helpers/wpapi";
import LoadingView from "components/Loading";
import ContentView from "components/ContentView";

// Describes requirement of various properties of specific types
// https://www.typescriptlang.org/docs/handbook/interfaces.html 
interface ArticlePageProps {
  query: any;
}

// Describes requirement of various properties of specific types
// https://www.typescriptlang.org/docs/handbook/interfaces.html 
interface ArticlePageState {
  post?: any;
}

export default class ArticlePage extends React.Component<
  ArticlePageProps,
  ArticlePageState
> {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }

  static async getInitialProps({ query }): Promise<any> {
    return { query };
  }

  // Fetching needs to be done on the client so that cookie auth works
  async componentDidMount(): Promise<any> {
    const { id, rev, type, status, wpnonce } = this.props.query;
    const post: any = await getRevision({ id, rev, type, status, wpnonce });
    const newPost = {
      id: post.id,
      postTitle: post.title.rendered,
      postSubtitle: post.wps_subtitle,
      thumbnailInfo: {
        urls: {
          full:
            post._embedded["wp:featuredmedia"] &&
            post._embedded["wp:featuredmedia"][0].source_url,
        },
        caption:
          post._embedded["wp:featuredmedia"] &&
          post._embedded["wp:featuredmedia"][0].caption.rendered,
      },
      tsdAuthors: post._embedded.author.map(author => ({
        id: author.id,
        displayName: author.name,
        url: author.link,
        description: author.description,
      })),
      tsdCategories: post._embedded["wp:term"][0],
      tsdPrimaryCategory: post._embedded["wp:term"][0][0],
      postContent: post.content.rendered,
      postType: post.type,
      commentStatus: post.comment_status,
      guid: post.guid,
      postAuthor: String(post.author),
      postDate: post.date,
      postDateGmt: post.date_gmt,
    };
    this.setState({ post: newPost });
  }

  render(): React.ReactNode {
    const { post } = this.state;
    if (!post) {
      return <LoadingView />;
    }
    return <ContentView post={post} />;
  }
}
