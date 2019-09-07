import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import { Global } from "@emotion/core";
import RView from "emotion-native-media-query";
import {
  getPostAsync,
  getPostLocalDate,
  getPostPath,
  Post,
} from "../../../../helpers/wpapi";
import { STRINGS, BREAKPOINTS } from "../../../../helpers/constants";
import { SectionStyle } from "../../../../components/Section";
import { Article, ArticleHeader } from "../../../../components/Article";
import LoadingView from "../../../../components/Loading";

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
      return <LoadingView />;
    }

    const { postTitle, thumbnailInfo, tsdAuthors, postContent } = post;
    const date = getPostLocalDate(post);

    const {
      urls: { full: thumbnailUrl = null } = {},
      caption: thumbnailCaption = null,
      alt: thumbnailAlt = thumbnailCaption,
    } = thumbnailInfo || {};

    return (
      <SectionStyle>
        <Article>
          <ArticleHeader>
            <h1
              css={{
                textAlign: "center",
                fontSize: "2.25rem",
              }}
            >
              {postTitle}
            </h1>
          </ArticleHeader>
          <Global
            styles={{
              "#main-article-content": {
                "p, figcaption": {
                  margin: "0 auto",
                  [`@media (min-width: ${BREAKPOINTS.TABLET}px)`]: {
                    width: 600,
                  },
                  [`@media (min-width: ${BREAKPOINTS.DESKTOP}px)`]: {
                    width: 700,
                  },
                },
                figure: {
                  margin: "0 auto",
                  width: "initial !important",
                  textAlign: "center",
                  img: {
                    maxWidth: "100%",
                    width: "100%",
                    height: "auto",
                  },
                  "&#featured-image": {
                    width: "100% !important",
                  },
                },
              },
            }}
          />
          <RView WebTag="main" id="main-article-content">
            {thumbnailUrl ? (
              <figure id="featured-image">
                <img src={thumbnailUrl} alt={thumbnailAlt} />
                {thumbnailCaption ? (
                  <figcaption>{thumbnailCaption}</figcaption>
                ) : (
                  undefined
                )}
              </figure>
            ) : (
              undefined
            )}
            <p>
              By{" "}
              {tsdAuthors.map(author => (
                <span key={author.id}>{author.displayName}, </span>
              ))}
              on {date.format("MMMM D, YYYY")}
            </p>
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: postContent }}
            />
          </RView>
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

export function PostPageWrapper(props: any): any {
  const post: Post = props.navigation.state.params;
  return (
    <View style={{ overflow: "hidden", flex: 1, width: "100%" }}>
      <WebView
        source={{
          uri: `https://stanford-daily.hesyifei.now.sh${getPostPath(post)}?${
            STRINGS._MAIN_ONLY_QUERY
          }`,
        }}
        originWhitelist={["*"]}
        applicationNameForUserAgent={STRINGS.TSD_APP_USERAGENT}
        startInLoadingState
        renderLoading={() => (
          <View
            style={{
              justifyContent: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <LoadingView />
          </View>
        )}
      />
    </View>
  );
}
