import React from "react";
import {
  getPostAsync,
  getPostLocalDate,
  Post,
} from "../../../../helpers/wpapi";
import { SectionStyle } from "../../../../components/Section";
import { Article, ArticleHeader } from "../../../../components/Article";

interface PostProps {
  post?: Post;
}

interface PostState {}

export default class PostPage extends React.Component<PostProps, PostState> {
  static async getInitialProps({ query }): Promise<any> {
    console.warn(query);
    const { year, month, day, slug } = query;
    console.warn({ year, month, day, slug });
    const post = await getPostAsync(year, month, day, slug);
    console.log(post.postTitle);
    return { post };
  }

  render(): React.ReactNode {
    const { post } = this.props;
    if (!post) {
      return <p>Loading...</p>;
    }

    const { postTitle, thumbnailUrl, tsdAuthors, postContent } = post;
    const date = getPostLocalDate(post);

    return (
      <SectionStyle>
        <Article>
          <ArticleHeader>
            <h1>{postTitle}</h1>
          </ArticleHeader>
          <main>
            <p>
              By{" "}
              {tsdAuthors.map(author => (
                <span key={author.id}>{author.displayName}, </span>
              ))}
              on {date.format("MMMM D, YYYY")}
            </p>
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: post.postContent }} />
          </main>
          <footer>
            {tsdAuthors.map(author => (
              <div key={author.id}>{author.displayName}</div>
            ))}
          </footer>
        </Article>
        <div>{/* TODO: ADD DISQUS */}</div>
      </SectionStyle>
    );
  }
}
