import React from "react";
import { Text, TouchableOpacity } from "react-native";
import RView from "emotion-native-media-query";
import { STANFORD_COLORS } from "../../helpers/constants";
import { Post } from "../../helpers/wpapi";
import { Section, SectionStyle, SECTION_PADDING } from "../Section";
import { TextOnlyArticle } from "./TextOnlyArticle";
import { SectionTitle } from "./SectionTitle";
import { SectionProps } from "./SectionProps";

export const MoreFromTheDailySection: React.ElementType = ({
  content,
  extraContent,
  loadMore,
  loadMoreEnabled,
}: SectionProps) => {
  return (
    <Section
      style={{
        flexGrow: 1,
        flexDirection: "column",
      }}
    >
      <SectionTitle>More from The Daily</SectionTitle>
      <RView
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          // Offset the leftmost and rightmost articles' margin
          marginLeft: -SECTION_PADDING / 2,
          marginRight: -SECTION_PADDING / 2,
        }}
      >
        {content.map(post => (
          <TextOnlyArticle key={post.id} post={post} />
        ))}
        {(extraContent as Post[]).map(post => (
          <TextOnlyArticle key={post.id} post={post} />
        ))}
        <SectionStyle style={{ width: "100%" }}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 100,
              backgroundColor: STANFORD_COLORS.LIGHT_SANDSTONE,
            }}
            disabled={!loadMoreEnabled}
            onPress={async () => loadMore()}
          >
            <Text>{loadMoreEnabled ? "Load more" : "Loading..."}</Text>
          </TouchableOpacity>
        </SectionStyle>
      </RView>
    </Section>
  );
};
