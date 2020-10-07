import React from "react";
import { Article, ArticleHeader } from "components/Article";
import AuthorAndDateView from "components/AuthorAndDateView";
import { ArticleProps } from "./ArticleProps";
import { ArticleTitleWithLink } from "./ArticleTitleWithLink";

// Component used for articles in Grind and Opinions sections
// on homepage, not used for A&L (which has its own component)
export const ListStyleArticle: React.ElementType = ({
  post,
  displayAuthor = true,
  titleStyle,
  authorStyle,
}: ArticleProps) => {
  return (
    <Article post={post}>
      <ArticleHeader>
        <ArticleTitleWithLink post={post} marginBottomMore style={titleStyle} />
      </ArticleHeader>
      {displayAuthor && <AuthorAndDateView post={post} style={authorStyle} />}
    </Article>
  );
};
