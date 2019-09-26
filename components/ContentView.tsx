import React from "react";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import { Global } from "@emotion/core";
import { DiscussionEmbed, CommentCount } from "disqus-react";
import RView from "emotion-native-media-query";
import { getPostLocalDate, Post } from "helpers/wpapi";
import {
  STRINGS,
  BREAKPOINTS,
  FONTS,
  STANFORD_COLORS,
} from "helpers/constants";
import { SectionStyle, SECTION_PADDING } from "components/Section";
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
    [`@media (min-width: ${BREAKPOINTS.DESKTOP}px)`]: {
      width: 600,
    },
  };

  const centerOuterContentStyle = {
    margin: "0 auto",
    width: "100%",
    [`@media (min-width: ${BREAKPOINTS.DESKTOP}px)`]: {
      width: 650,
    },
  };

  const {
    id: postId,
    postTitle,
    postSubtitle,
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

  const ExtraHead: React.ElementType = () => {
    return <Head>{ReactHtmlParser(post.tsdHead)}</Head>;
  };

  return (
    <SectionStyle>
      <ExtraHead />
      <Article>
        <ArticleHeader>
          <h1
            css={{
              ...centerContentStyle,
              ...FONTS.ARTICLE_TITLE,
              textAlign: "center",
              fontSize: "2.25rem",
              lineHeight: "1.5em",
            }}
          >
            {postTitle}
          </h1>
          {postSubtitle ? (
            <h2
              css={{
                ...centerContentStyle,
                ...FONTS.ARTICLE_TITLE,
                textAlign: "center",
                fontSize: "1.2rem",
                lineHeight: "1.4em",
                color: "gray",
              }}
            >
              {postSubtitle}
            </h2>
          ) : (
            undefined
          )}
        </ArticleHeader>
        <Global
          styles={{
            "#main-article-content": {
              ...FONTS.CONTENT,
              marginTop: SECTION_PADDING,
              "#main-article-text": {
                ...centerOuterContentStyle,
              },
              "p, h1, h2, h3, h4, h5, h6, figcaption": {
                ...centerContentStyle,
                marginBottom: "1em",
                fontSize: "1.3rem",
              },
              figcaption: {
                ...FONTS.AUXILIARY,
                textTransform: "none",
                textAlign: "right",
                marginTop: 5,
                color: STANFORD_COLORS.COOL_GREY,
                fontSize: "1.1rem",
                fontStyle: "italic",
              },
              figure: {
                margin: "0 auto",
                width: "initial !important",
                textAlign: "center",
                img: {
                  ...centerOuterContentStyle,
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
          <p
            style={{
              ...FONTS.AUXILIARY,
              fontWeight: "bold",
            }}
          >
            <span style={{ textTransform: "none" }}>By</span>{" "}
            {tsdAuthors.map(author => (
              <span key={author.id}>{author.displayName}, </span>
            ))}
            <span style={{ textTransform: "none" }}>on</span>{" "}
            {date.format("MMMM D, YYYY")}
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
      {post.tsdFooter ? ReactHtmlParser(post.tsdFooter) : undefined}
    </SectionStyle>
  );
};

export default ContentView;
