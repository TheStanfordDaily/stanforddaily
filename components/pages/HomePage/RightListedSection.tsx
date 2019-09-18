import React from "react";
import RView from "emotion-native-media-query";
import { Section } from "components/Section";
import { ListStyleArticle } from "./ListStyleArticle";
import { SectionTitle } from "./SectionTitle";
import { SectionProps } from "./SectionProps";

export const RightListedSection: React.ElementType = (props: SectionProps) => {
  const {
    content,
    sectionTitle,
    SectionTag = Section,
    displayAuthor = true,
    ...remainingProps
  } = props;
  return (
    <RView WebTag={SectionTag} NativeTag={SectionTag} {...remainingProps}>
      {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
      <ListStyleArticle displayAuthor={displayAuthor} post={content[0]} />
      <ListStyleArticle displayAuthor={displayAuthor} post={content[1]} />
      <ListStyleArticle displayAuthor={displayAuthor} post={content[2]} />
      <ListStyleArticle displayAuthor={displayAuthor} post={content[3]} />
    </RView>
  );
};
