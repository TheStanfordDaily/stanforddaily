import React from "react";
import RView from "emotion-native-media-query";
import { Section } from "components/Section";
import { ListStyleArticle } from "./ListStyleArticle";
import { SectionTitleWithLink } from "./SectionTitle";
import { SectionProps } from "./SectionProps";

// Used for Grind and Opinions
export const RightListedSection: React.ElementType<SectionProps> = ({
  content,
  category,
  sectionTitle,
  SectionTag = Section,
  displayAuthor = true,
  innerStyle,
  innerRStyle,
  titleStyle,
  authorStyle,
  sectionTitleStyle,
  ...remainingProps
}: SectionProps) => {
  return (
    <RView WebTag={SectionTag} NativeTag={SectionTag} {...remainingProps}>
      <RView style={innerStyle} rStyle={innerRStyle}>
        {sectionTitle && (
          <SectionTitleWithLink
            style={{
              ...sectionTitleStyle,
            }}
            category={category}
            homePageSpecial={category.name === "The Grind" ? true : false}
          >
            {sectionTitle}
          </SectionTitleWithLink>
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
