import React from "react";
import { Image } from "react-native";
import RView from "emotion-native-media-query";
import { Section } from "components/Section";
import { SideThumbnailArticle } from "./SideThumbnailArticle";
import { SectionTitle } from "./SectionTitle";
import { SectionProps } from "./SectionProps";

export const ArtsAndLifeSection: React.ElementType = ({
  content,
  ...props
}: SectionProps) => {
  return (
    <RView WebTag={Section} NativeTag={Section} {...props}>
      <SectionTitle style={{ textAlign: "center" }}>
        <Image
          source={{
            uri: "/static/sectionHeaders/artsAndLife.png",
          }}
          accessibilityLabel="Arts & Life"
          resizeMode="contain"
          style={{
            height: 30,
          }}
        />
      </SectionTitle>
      <SideThumbnailArticle post={content[0]} />
      <SideThumbnailArticle post={content[1]} />
      <SideThumbnailArticle post={content[2]} />
      <SideThumbnailArticle post={content[3]} />
    </RView>
  );
};
