import React from "react";
import { Image } from "react-native";
import RView from "emotion-native-media-query";
import { Section } from "components/Section";
import { SectionTitleWithLink } from "./SectionTitle";
import { SectionProps } from "./SectionProps";
import { LinkToArticle } from "./LinkToArticle";

export const CartoonsSection: React.ElementType = ({
  content,
  category,
  ...props
}: SectionProps) => {
  if (
    content &&
    content[0] &&
    content[0].thumbnailInfo &&
    content[0].thumbnailInfo.urls &&
    content[0].thumbnailInfo.urls.full
  ) {
    return (
      <RView WebTag={Section} NativeTag={Section} {...props}>
        <SectionTitleWithLink category={category} />
        <LinkToArticle post={content[0]}>
          <Image
            source={{
              uri: content[0].thumbnailInfo.urls.full,
            }}
            resizeMode="contain"
            style={{
              width: "100%",
              height: 400,
              marginTop: 20,
            }}
          />
        </LinkToArticle>
      </RView>
    );
  } else {
    return <></>;
  }
};
