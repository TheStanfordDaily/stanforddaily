import React from "react";
import { Text, ScrollView } from "react-native";
import { SECTION_PADDING } from "./Section";

export const CategoryList: React.ElementType = (props: any) => {
  const CategoryLink: React.ElementType = ({
    children,
    style,
    ...clProps
  }: any) => {
    // We have to add `paddingTop` and `paddingBottom` here instead of in `contentContainerStyle`
    // because if we do that, the letter will get cut off at the bottom.
    return (
      <Text
        {...clProps}
        style={{
          marginRight: 30,
          paddingTop: SECTION_PADDING,
          paddingBottom: SECTION_PADDING,
          ...style,
        }}
      >
        {children}
      </Text>
    );
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingLeft: SECTION_PADDING,
        paddingRight: SECTION_PADDING,
      }}
    >
      <CategoryLink>Home</CategoryLink>
      <CategoryLink>Sports</CategoryLink>
      <CategoryLink>Opinion</CategoryLink>
      <CategoryLink>Arts and life</CategoryLink>
      <CategoryLink>The Grind</CategoryLink>
      <CategoryLink style={{ marginRight: 0 }}>Magazine</CategoryLink>
    </ScrollView>
  );
};
