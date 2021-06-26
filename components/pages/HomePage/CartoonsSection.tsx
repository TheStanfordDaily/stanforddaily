import React from "react";
import { Image } from "react-native";
import RView from "emotion-native-media-query";
import { Section } from "components/Section";
import { SectionTitleWithLink } from "./SectionTitle";
import { SectionProps } from "./SectionProps";
import { LinkToArticle } from "../../article-links-and-thumbnails/LinkToArticle";

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
        <SectionTitleWithLink category={category} homePageSpecial={true}>
          <Image
            source={{
              uri: "/static/sectionHeaders/cartoons.png",
            }}
            accessibilityLabel="Cartoons"
            resizeMode="contain"
            style={{
              width: 180,
              height: 60,
            }}
          />
        </SectionTitleWithLink>
        <LinkToArticle post={content[0]}>
          <img
            src={content[0].thumbnailInfo.urls.full}
            alt={content[0].thumbnailInfo.alt}
            style={{ width: "100%" }}
          />
        </LinkToArticle>
      </RView>
    );
  } else {
    return <></>;
  }
};
