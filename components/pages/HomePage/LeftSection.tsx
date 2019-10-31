import React from "react";
import { View } from "react-native";
import { MediaRule, mergeRStyle } from "emotion-native-media-query";
import { BREAKPOINTS } from "helpers/constants";
import { Section } from "components/Section";
import Link from "next/link";
import { TopThumbnailArticle } from "./TopThumbnailArticle";
import { TitleOnlyArticle } from "./TitleOnlyArticle";
import { Column } from "./Column";
import { SectionTitleWithLink } from "./SectionTitle";
import { SectionProps } from "./SectionProps";

export const LeftSection: React.ElementType<SectionProps> = ({
  content,
  category,
  sectionTitle,
  SectionTag = Section,
  style,
  rStyle,
}: SectionProps) => {
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
        {sectionTitle && <SectionTitleWithLink category={category} />}
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
