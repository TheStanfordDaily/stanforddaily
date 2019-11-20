import React from "react";
import { Platform } from "react-native";
import { getPostPath, Post } from "helpers/wpapi";
import Link from "../../Link";

export const LinkToArticle: React.ElementType = ({
  post,
  children,
  style,
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
        >
          {children}
        </a>
      </Link>
    );
  } else {
    return children;
  }
};
