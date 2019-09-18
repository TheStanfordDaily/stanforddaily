import React from "react";
import { Global } from "@emotion/core";
import { DiscussionEmbed, CommentCount } from "disqus-react";
import RView from "emotion-native-media-query";
import { getPostLocalDate, Post } from "helpers/wpapi";
import { STRINGS, BREAKPOINTS, FONTS } from "helpers/constants";
import { SectionStyle } from "components/Section";
import { Article, ArticleHeader } from "components/Article";
import LoadingView from "components/Loading";

interface ContentViewProps {
  post: Post;
}

const ContentView: React.ElementType<ContentViewProps> = ({
  post,
}: ContentViewProps) => {
  if (!post) {
    return <LoadingView />;
  }

  const centerContentStyle = {
    margin: "0 auto",
    width: "100%",
    [`@media (min-width: ${BREAKPOINTS.TABLET}px)`]: {
      width: 650,
    },
    [`@media (min-width: ${BREAKPOINTS.DESKTOP}px)`]: {
      width: 810,
    },
  };

  const {
    id: postId,
    postTitle,
    thumbnailInfo,
    tsdAuthors,
    postContent,
    guid,
  } = post;
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
              ...FONTS.ARTICLE_TITLE,
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
              ...FONTS.CONTENT,
              "p, figcaption, #main-article-text div": {
                ...centerContentStyle,
                marginBottom: "1.75em",
                fontSize: "1.3rem",
              },
              figure: {
                margin: "0 auto",
                width: "initial !important",
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
            id="main-article-text"
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
      <div css={{ ...centerContentStyle }}>
        <DiscussionEmbed
          shortname={STRINGS.DISQUS_SHORTNAME}
          config={{
            url: guid,
            identifier: `${STRINGS.DISQUS_SHORTNAME}-${postId}`,
            title: postTitle,
          }}
        />
      </div>
    </SectionStyle>
  );
};

export default ContentView;
