import React from "react";
import { Image } from "react-native";
import RView from "emotion-native-media-query";
import { Section } from "components/Section";
import { SectionTitleWithLink } from "./SectionTitle";
import { SectionProps } from "./SectionProps";
import { LinkToArticle } from "./LinkToArticle";

// Appears on right-hand side of homepage
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
        <SectionTitleWithLink category={category}>
          <Image
            source={{
              uri: "/static/sectionHeaders/cartoons.png",
            }}
            accessibilityLabel="Cartoons"
            resizeMode="contain"
            style={{
              width: 200,
              height: 65,
            }}
          />
        </SectionTitleWithLink>
        <LinkToArticle post={content[0]}>
          <Image
            source={{
              uri: content[0].thumbnailInfo.urls.full,
            }}
            resizeMode="contain"
            style={{
              width: "100%",
              height: 400,
            }}
          />
        </LinkToArticle>
      </RView>
    );
  } else {
    return <></>;
  }
};
