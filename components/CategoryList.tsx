import React from "react";
import { Text, ScrollView } from "react-native";
import { SECTION_PADDING } from "./Section";

export const CategoryList: React.ElementType = ({ itemStyle }: any) => {
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

  const categoryLinkList = [
    "Home",
    "Sports",
    "Opinion",
    "Arts and life",
    "The Grind",
    "Magazine",
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingLeft: SECTION_PADDING,
        paddingRight: SECTION_PADDING,
      }}
    >
      {categoryLinkList.map((categoryName, i) => {
        let _itemStyle: any = {};
        if (i === categoryLinkList.length - 1) {
          _itemStyle.marginRight = 0;
        }
        _itemStyle = { _itemStyle, ...itemStyle };
        return (
          <CategoryLink key={categoryName} style={_itemStyle}>
            {categoryName}
          </CategoryLink>
        );
      })}
    </ScrollView>
  );
};
