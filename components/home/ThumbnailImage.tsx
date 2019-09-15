import React from "react";
import { Image } from "react-native";
import { Post } from "../../helpers/wpapi";

export const ThumbnailImage: React.ElementType = ({
  post,
  style,
  ...props
}: {
  post: Post;
  [key: string]: any;
}) => {
  const { thumbnailInfo } = post;
  let thumbnailUrl =
    "https://raw.githubusercontent.com/TheStanfordDaily/stanforddaily-graphic-assets/master/DailyIcon/without-background/DailyIcon.png";
  if (thumbnailInfo && thumbnailInfo.urls && thumbnailInfo.urls.mediumLarge) {
    thumbnailUrl = thumbnailInfo.urls.mediumLarge;
  }
  return (
    <Image
      resizeMode="cover"
      style={{
        width: "100%",
        backgroundColor: "#f4f4f4",
        ...style,
      }}
      source={{
        uri: thumbnailUrl,
      }}
      {...props}
    />
  );
};
