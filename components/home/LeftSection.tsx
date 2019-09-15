import React from "react";
import { View } from "react-native";
import { MediaRule, mergeRStyle } from "emotion-native-media-query";
import { BREAKPOINTS } from "../../helpers/constants";
import { Section } from "../Section";
import { TopThumbnailArticle } from "./TopThumbnailArticle";
import { TitleOnlyArticle } from "./TitleOnlyArticle";
import { Column } from "../../pages/Column";
import { SectionTitle } from "../../pages/SectionTitle";
import { SectionProps } from "../../pages/SectionProps";

export const LeftSection: React.ElementType = (props: SectionProps) => {
  const { content, sectionTitle, SectionTag = Section, style, rStyle } = props;
  return (
    <Column
      style={{
        flexGrow: 3,
        order: 2,
        ...style,
      }}
      rStyle={mergeRStyle(
        {
          [MediaRule.MinWidth]: {
            [BREAKPOINTS.TABLET]: {
              order: 1,
            },
          },
        },
        rStyle,
      )}
    >
      <SectionTag>
        {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
        <View>
          <TopThumbnailArticle post={content[0]} />
        </View>
        <View>
          <TopThumbnailArticle post={content[1]} />
        </View>
        <View>
          <TitleOnlyArticle post={content[2]} />
        </View>
        <View>
          <TitleOnlyArticle post={content[3]} />
        </View>
      </SectionTag>
    </Column>
  );
};
