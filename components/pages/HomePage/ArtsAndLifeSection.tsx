import React from "react";
import { Image } from "react-native";
import RView from "emotion-native-media-query";
import { Section } from "components/Section";
import { SideThumbnailArticle } from "./SideThumbnailArticle";
import { SectionTitleWithLink } from "./SectionTitle";
import { SectionProps } from "./SectionProps";

// Appears on right-hand side of homepage
export const ArtsAndLifeSection: React.ElementType = ({
  content,
  category,
  ...props
}: SectionProps) => {
  return (
    <RView WebTag={Section} NativeTag={Section} {...props}>
      <SectionTitleWithLink category={category}>
        <Image
          source={{
            uri: "/static/sectionHeaders/artsAndLife.png",
          }}
          accessibilityLabel="Arts & Life"
          resizeMode="contain"
          style={{
            height: 50,
            width: 150,
          }}
        />
      </SectionTitleWithLink>
      <SideThumbnailArticle post={content[0]} />
      <SideThumbnailArticle post={content[1]} />
      <SideThumbnailArticle post={content[2]} />
      <SideThumbnailArticle post={content[3]} />
    </RView>
  );
};
