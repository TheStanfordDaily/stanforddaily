import React from "react";
import { Post } from "../../helpers/wpapi";
import { ThumbnailImage } from "./ThumbnailImage";
import { LinkToArticle } from "./LinkToArticle";

export const ThumbnailImageWithLink: React.ElementType = (props: {
  post: Post;
  [key: string]: any;
}) => {
  const { post } = props;
  return (
    <LinkToArticle post={post}>
      <ThumbnailImage {...props} />
    </LinkToArticle>
  );
};
