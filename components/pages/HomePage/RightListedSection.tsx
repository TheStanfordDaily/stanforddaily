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
    innerStyle,
    innerRStyle,
    titleStyle,
    authorStyle,
    sectionTitleStyle,
    link,
    ...remainingProps
  } = props;
  return (
    <RView WebTag={SectionTag} NativeTag={SectionTag} {...remainingProps}>
      <RView style={innerStyle} rStyle={innerRStyle}>
        {sectionTitle && (
          <SectionTitle
            style={{
              textAlign: "center",
              ...sectionTitleStyle,
            }}
          >
            {sectionTitle}
          </SectionTitle>
        )}
        {content.map(post => (
          <ListStyleArticle
            key={post.id}
            displayAuthor={displayAuthor}
            post={post}
            titleStyle={titleStyle}
            authorStyle={authorStyle}
          />
        ))}
      </RView>
    </RView>
  );
};
