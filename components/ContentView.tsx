import React from "react";
import { Global } from "@emotion/core";
import { DiscussionEmbed, CommentCount } from "disqus-react";
import RView from "emotion-native-media-query";
import { Post } from "helpers/wpapi";
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
import WPFooter from "components/webHelpers/WPFooter";
import { AuthorsTextWithLink } from "./pages/HomePage/AuthorView";
import AuthorBox from "./AuthorBox";
import { CategoryLink } from "./CategoryLink";
import { DateWithAbbr } from "./DateView";
import SatireGlobal from "./SatireGlobal";

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
    tsdPrimaryCategory,
    postContent,
    postType,
    commentStatus,
    guid,
  } = post;

  const {
    urls: { full: thumbnailUrl = null } = {},
    caption: thumbnailCaption = null,
    alt: thumbnailAlt = thumbnailCaption,
  } = thumbnailInfo || {};

  const isPost = postType === "post";

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
      {isSatire && <SatireGlobal />}
      <Article>
        <ArticleHeader>
          {isPost && (
            <div
              css={{
                ...centerContentStyle,
                textAlign: "center",
              }}
            >
              <CategoryLink
                category={tsdPrimaryCategory}
                style={{
                  fontSize: 20,
                }}
              />
            </div>
          )}
          <h1
            css={{
              ...centerContentStyle,
              ...FONTS.ARTICLE_TITLE,
              textAlign: "center",
              fontSize: "2rem",
              lineHeight: "1.5em",
              [`@media (max-width: ${BREAKPOINTS.TABLET}px)`]: {
                fontSize: "1.4rem",
              },
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
                fontSize: "1.1rem",
                lineHeight: "1.4em",
                color: "gray",
                [`@media (max-width: ${BREAKPOINTS.TABLET}px)`]: {
                  fontSize: "1rem",
                },
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
              "#main-article-text2": {
                ...centerOuterContentStyle,
              },
              "p, h1, h2, h3, h4, h5, h6, figcaption": {
                ...centerContentStyle,
                marginBottom: "1em",
                fontSize: "1.3rem",
                color: STANFORD_COLORS.BLACK,
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
                <figcaption style={{ marginBottom: 0 }}>
                  {thumbnailCaption}
                </figcaption>
              ) : (
                undefined
              )}
            </figure>
          ) : (
            undefined
          )}
          {isPost && (
            <p
              style={{
                ...FONTS.AUXILIARY,
                fontWeight: "bold",
                textTransform: "none",
                marginTop: "1em",
              }}
            >
              <span>{isSatire ? "Satire by" : "By"}</span>{" "}
              <AuthorsTextWithLink
                authors={tsdAuthors}
                aStyle={{
                  textDecoration: "underline",
                }}
              />{" "}
              <span>
                <DateWithAbbr post={post} format="on MMMM D, YYYY" />
              </span>
            </p>
          )}
          <div id="main-article-text" />
          <div
            id="main-article-text2"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: postContent,
            }}
          />
          <div id="dummy-div" />
        </RView>
        {isPost && (
          <footer css={centerOuterContentStyle} style={{ marginTop: 30 }}>
            {tsdAuthors.map(author => (
              <AuthorBox key={author.id} author={author} />
            ))}
          </footer>
        )}
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
