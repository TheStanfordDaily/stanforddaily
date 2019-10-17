import React from "react";
import { Image } from "react-native";
import RView from "emotion-native-media-query";
import { Section, SectionStyle, SECTION_PADDING } from "components/Section";
import Link from "next/link";
import { STANFORD_COLORS, BREAKPOINTS } from "helpers/constants";
import { SideThumbnailArticle } from "./SideThumbnailArticle";
import { SectionTitle } from "./SectionTitle";
import { SectionProps } from "./SectionProps";

export const GrindSection: React.ElementType = ({
  content,
  ...props
}: SectionProps) => {
  return (
    <RView WebTag={Section} NativeTag={Section} {...props}>
      <SectionStyle
        style={{
          paddingTop: 0,
          paddingLeft: 0,
          cursor: "pointer",
          width: 180,
          height: 70,
          backgroundColor: STANFORD_COLORS.CARDINAL_DARK_RED,
          padding: SECTION_PADDING,
        }}
      >
        <SectionTitle style={{ textAlign: "center" }}>
          <Link href="/category/thegrind/">
            <Image
              source={{
                uri: "/static/sectionHeaders/thegrind.png",
              }}
              accessibilityLabel="The Grind"
              resizeMode="contain"
              style={{
                height: 70,
              }}
            />
          </Link>
        </SectionTitle>
      </SectionStyle>
      <SideThumbnailArticle post={content[0]} />
      <SideThumbnailArticle post={content[1]} />
      <SideThumbnailArticle post={content[2]} />
      <SideThumbnailArticle post={content[3]} />
    </RView>
    // <RightListedSection
    //   content={content}
    //   sectionTitle="The Grind"
    //   innerStyle={{
    //     backgroundColor: STANFORD_COLORS.CARDINAL_DARK_RED,
    //     padding: SECTION_PADDING,
    //   }}
    //   innerRStyle={{
    //     [MediaRule.MaxWidth]: {
    //       [BREAKPOINTS.MAX_WIDTH.TABLET]: {
    //         margin: -SECTION_PADDING,
    //       },
    //     },
    //   }}
    //   sectionTitleStyle={{
    //     color: STANFORD_COLORS.WHITE,
    //   }}
    //   titleStyle={{
    //     color: STANFORD_COLORS.WHITE,
    //   }}
    //   authorStyle={{
    //     color: STANFORD_COLORS.FOG,
    //   }}
    //   {...props}
    // />
  );
};
