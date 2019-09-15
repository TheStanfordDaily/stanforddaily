import React from "react";
import RView from "emotion-native-media-query";
import { Section } from "../Section";
import { SideThumbnailArticle } from "./SideThumbnailArticle";
import { SectionTitle } from "../../pages/SectionTitle";
import { SectionProps } from "../../pages/SectionProps";

export const ArtsAndLifeSection: React.ElementType = ({
  content,
  ...props
}: SectionProps) => {
  return (
    <RView WebTag={Section} NativeTag={Section} {...props}>
      <SectionTitle>arts and life</SectionTitle>
      <SideThumbnailArticle post={content[0]} />
      <SideThumbnailArticle post={content[1]} />
      <SideThumbnailArticle post={content[2]} />
      <SideThumbnailArticle post={content[3]} />
    </RView>
  );
};
