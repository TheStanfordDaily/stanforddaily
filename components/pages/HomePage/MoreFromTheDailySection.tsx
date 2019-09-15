import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import RView from "emotion-native-media-query";
import { STANFORD_COLORS, FONTS, COLORS } from "helpers/constants";
import { Post } from "helpers/wpapi";
import { Section, SECTION_PADDING } from "components/Section";
import { TextOnlyArticle } from "./TextOnlyArticle";
import { SectionTitle } from "./SectionTitle";
import { SectionProps } from "./SectionProps";

export const MoreFromTheDailySection: React.ElementType = ({
  content,
  extraContent,
  loadMore,
  loadMoreEnabled,
}: SectionProps) => {
  const LoadMoreTag = Platform.OS === "web" ? "a" : View;
  let LoadMoreNativeColor = loadMoreEnabled ? COLORS.LINK.DEFAULT : "black";
  if (Platform.OS === "web") {
    LoadMoreNativeColor = loadMoreEnabled ? "inherit" : "black";
  }
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
        <LoadMoreTag
          style={{
            width: "100%",
            paddingLeft: SECTION_PADDING / 2,
            paddingRight: SECTION_PADDING / 2,
          }}
        >
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
            <Text
              style={{
                ...FONTS.AUXILIARY,
                fontSize: 30,
                color: LoadMoreNativeColor,
              }}
            >
              {loadMoreEnabled ? "Load more" : "Loading..."}
            </Text>
          </TouchableOpacity>
        </LoadMoreTag>
      </RView>
    </Section>
  );
};
