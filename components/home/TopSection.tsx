import React from "react";
import { Text, View } from "react-native";
import RView, { MediaRule } from "emotion-native-media-query";
import { BREAKPOINTS, STANFORD_COLORS } from "../../helpers/constants";
import { SectionStyle } from "../Section";
import { OrderedList } from "../List";
import { getBorderValue } from "../../pages/getBorderValue";
import { SectionProps } from "../../pages/SectionProps";
import { LinkToArticle } from "./LinkToArticle";
import { ThumbnailImage } from "./ThumbnailImage";

export const TopSection: React.ElementType = ({
  content,
  style,
}: SectionProps) => {
  const SmallSection: React.ElementType = (sProps: any) => {
    return (
      <View
        style={{
          marginLeft: 30,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <ThumbnailImage
          style={{
            width: 50,
            height: 50,
          }}
          post={content[0]}
        />
        <View
          style={{
            marginLeft: 10,
          }}
        >
          <View>
            <Text>Issue #</Text>
          </View>
          <View>
            <Text>The Daily Magazine</Text>
          </View>
          <View>
            <Text>Subtitle here lorem</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <RView
      style={{ ...style }}
      rStyle={{
        [MediaRule.MinWidth]: {
          [BREAKPOINTS.DESKTOP]: {
            ...getBorderValue("Top"),
          },
        },
        [MediaRule.MaxWidth]: {
          [BREAKPOINTS.MAX_WIDTH.DESKTOP]: {
            display: "none",
          },
        },
      }}
    >
      <SectionStyle style={{ paddingTop: 10, paddingBottom: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ backgroundColor: "#d7b9b9" }}>
              <Text style={{ color: STANFORD_COLORS.WHITE }}>
                Top{"\n"}Stories
              </Text>
            </View>
            <OrderedList
              data={[
                { title: "Hello World first" },
                { title: "Welcome World Second" },
                { title: "Hi World Third" },
              ]}
              renderItem={(item: any) => {
                console.log(item);
                // TODO: COMPLETE THIS
                return (
                  <LinkToArticle post={content[0]}>{item.title}</LinkToArticle>
                );
              }}
              style={{
                paddingLeft: 30,
              }}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SmallSection />
            <SmallSection />
            <SmallSection />
          </View>
        </View>
      </SectionStyle>
    </RView>
  );
};
