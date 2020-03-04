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
import styled from "@emotion/styled";
import { AuthorsTextWithLink } from "./pages/HomePage/AuthorView";
import AuthorBox from "./AuthorBox";
import { CategoryLink } from "./CategoryLink";
import { DateWithAbbr } from "./DateView";
import SatireGlobal from "./SatireGlobal";
import DataVizGlobal from "./DataVizGlobal";

import ContentViewStyles, {
  centerOuterContentStyle,
  centerContentStyle,
} from "./ContentViewStyles";

const PostTitle = styled.h1({
  ...centerContentStyle,
  ...FONTS.ARTICLE_TITLE,
  textAlign: "center",
  fontSize: "2rem",
  lineHeight: "1.5em",
  [`@media (max-width: ${BREAKPOINTS.TABLET}px)`]: {
    fontSize: "1.4rem",
  },
});

const PostSubtitle = styled.h2({
  ...centerContentStyle,
  ...FONTS.ARTICLE_TITLE,
  textAlign: "center",
  fontSize: "1.1rem",
  lineHeight: "1.4em",
  color: "gray",
  [`@media (max-width: ${BREAKPOINTS.TABLET}px)`]: {
    fontSize: "1rem",
  },
});

const Byline = styled.p({
  ...FONTS.AUXILIARY,
  fontWeight: "bold",
  textTransform: "none",
  marginTop: "1em",
});

interface ContentViewProps {
  post: Post;
}

const ContentView: React.ElementType<ContentViewProps> = ({
  post,
}: ContentViewProps) => {
  if (!post) {
    return <LoadingView />;
  }

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

  const isSatire =
    tsdCategories && tsdCategories.find(category => category.slug === "satire");

  let isDataViz = false;
  if (
    tsdCategories &&
    tsdCategories.find(category => category.slug === "data-vizzes")
  ) {
    isDataViz = true;
  }

  return (
    <SectionStyle>
      <WPHead base={post} />
      {isSatire && <SatireGlobal />}
      {isDataViz && <DataVizGlobal />}
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
          <PostTitle>{postTitle}</PostTitle>
          {postSubtitle ? (
            <PostSubtitle>{postSubtitle}</PostSubtitle>
          ) : (
            undefined
          )}
        </ArticleHeader>
        <Global styles={ContentViewStyles} />
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
            <Byline>
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
            </Byline>
          )}
          <div id="main-article-text" />
          {/* TODO: UNKNOWN WHY THIS IS NECESSARY FOR SOME POSTS TO SHOW UP: E.G. https://www.stanforddaily.com/2019/11/20/the-disappearance-of-financial-aid-how-stanford-consumes-outside-scholarships-when-need-based-aid-doesnt-fulfill-student-needs/ */}
          <div
            id="main-article-text2"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: postContent,
            }}
          />
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
