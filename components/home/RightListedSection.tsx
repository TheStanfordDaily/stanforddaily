import React from "react";
import RView from "emotion-native-media-query";
import { Section } from "../Section";
import { ListStyleArticle } from "./ListStyleArticle";
import { SectionTitle } from "../../pages/SectionTitle";
import { SectionProps } from "../../pages/SectionProps";

export const RightListedSection: React.ElementType = (props: SectionProps) => {
  const {
    content,
    sectionTitle,
    SectionTag = Section,
    ...remainingProps
  } = props;
  return (
    <RView WebTag={SectionTag} NativeTag={SectionTag} {...remainingProps}>
      {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
      <ListStyleArticle post={content[0]} />
      <ListStyleArticle post={content[1]} />
      <ListStyleArticle post={content[2]} />
      <ListStyleArticle post={content[3]} />
    </RView>
  );
};
