import React from "react";
import { MediaRule } from "emotion-native-media-query";
import { STANFORD_COLORS, BREAKPOINTS } from "helpers/constants";
import { SECTION_PADDING } from "components/Section";
import { RightListedSection } from "./RightListedSection";
import { SectionProps } from "./SectionProps";

export const GrindSection: React.ElementType = ({
  content,
  ...props
}: SectionProps) => {
  return (
    <RightListedSection
      content={content}
      sectionTitle="The Grind"
      innerStyle={{
        backgroundColor: STANFORD_COLORS.CARDINAL_DARK_RED,
        padding: SECTION_PADDING,
      }}
      innerRStyle={{
        [MediaRule.MaxWidth]: {
          [BREAKPOINTS.MAX_WIDTH.TABLET]: {
            margin: -SECTION_PADDING,
          },
        },
      }}
      sectionTitleStyle={{
        color: STANFORD_COLORS.WHITE,
      }}
      titleStyle={{
        color: STANFORD_COLORS.WHITE,
      }}
      authorStyle={{
        color: STANFORD_COLORS.FOG,
      }}
      {...props}
    />
  );
};
