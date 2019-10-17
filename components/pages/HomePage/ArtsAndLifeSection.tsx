import React from "react";
import { Image } from "react-native";
import RView from "emotion-native-media-query";
import { Section, SectionStyle } from "components/Section";
import Link from "next/link";
import { SideThumbnailArticle } from "./SideThumbnailArticle";
import { SectionTitle } from "./SectionTitle";
import { SectionProps } from "./SectionProps";

export const ArtsAndLifeSection: React.ElementType = ({
  content,
  ...props
}: SectionProps) => {
  return (
    <RView WebTag={Section} NativeTag={Section} {...props}>
      <SectionStyle
        style={{
          paddingTop: 0,
          cursor: "pointer",
          width: 140,
          height: 50,
        }}
      >
        <SectionTitle style={{ textAlign: "center" }}>
          <Link href="/category/arts-life/">
            <Image
              source={{
                uri: "/static/sectionHeaders/artsAndLife.png",
              }}
              accessibilityLabel="Arts & Life"
              resizeMode="contain"
              style={{
                height: 50,
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
  );
};
