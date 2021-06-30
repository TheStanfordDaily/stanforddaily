import React from "react";
import { Platform } from "react-native";
import { getPostPath, Post } from "helpers/wpapi";
import { FOCUS_STATES } from "helpers/constants";
import Link from "../Link";
import css from "@emotion/css";

// Used in ArticleTitleWithLink and ThumbnailImageWithLink components,
// and wrapped around cartoon displayed in CartoonsSection on homepage
export const LinkToArticle: React.ElementType = ({
  post,
  children,
  style,
  linkTabIndex = 0,
  ...props
}: {
  post: Post;
  [key: string]: any;
}) => {
  if (Platform.OS === "web") {
    return (
      <Link href="/[year]/[month]/[day]/[slug]/" as={getPostPath(post)}>
        <a
          title={post.postTitle}
          style={{ color: "inherit", ...style }}
          {...props}
          css={
            linkTabIndex === 0
              ? css`
                  ${FOCUS_STATES.BLACK_OUTLINE}
                `
              : ""
          }
          tabIndex={linkTabIndex}
        >
          {children}
        </a>
      </Link>
    );
  } else {
    return children;
  }
};
