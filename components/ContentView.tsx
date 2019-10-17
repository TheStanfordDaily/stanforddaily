import React from "react";
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
import WPHead from "components/webHelpers/WPHead";
import WPFooter from "components/webHelpers/WPFooter.web";
import { AuthorsTextWithLink } from "./pages/HomePage/AuthorView";

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
    tsdCategories,
    postContent,
    postType,
    commentStatus,
    guid,
  } = post;
  const date = getPostLocalDate(post);

  const {
    urls: { full: thumbnailUrl = null } = {},
    caption: thumbnailCaption = null,
    alt: thumbnailAlt = thumbnailCaption,
  } = thumbnailInfo || {};

  const displayAuthors = postType === "post";

  let isSatire = false;
  if (
    tsdCategories &&
    tsdCategories.find(category => category.slug === "satire")
  ) {
    isSatire = true;
  }

  return (
    <SectionStyle>
      <WPHead base={post} />
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
          {displayAuthors && (
            <p
              style={{
                ...FONTS.AUXILIARY,
                fontWeight: "bold",
              }}
            >
              <span style={{ textTransform: "none" }}>
                {isSatire ? "Satire by" : "By"}
              </span>{" "}
              <AuthorsTextWithLink authors={tsdAuthors} />{" "}
              <span style={{ textTransform: "none" }}>on</span>{" "}
              {date.format("MMMM D, YYYY")}
            </p>
          )}
          <div
            id="main-article-text"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: postContent }}
          />
        </RView>
        {displayAuthors && <footer>{}</footer>}
      </Article>
      {commentStatus === "open" && (
        <div css={{ ...centerContentStyle }}>
          <DiscussionEmbed
            shortname={STRINGS.DISQUS_SHORTNAME}
            config={{
              url: guid,
              identifier: `${postId} ${guid}`, // From `dsq_identifier_for_post` in Disqus WordPress plugin
              title: postTitle,
            }}
          />
        </div>
      )}
      <WPFooter base={post} />
    </SectionStyle>
  );
};

export default ContentView;
