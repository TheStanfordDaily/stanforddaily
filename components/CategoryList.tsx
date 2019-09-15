import React from "react";
import { Text, ScrollView } from "react-native";
import Link from "next/link";
import { SECTION_PADDING } from "./Section";

export const CategoryList: React.ElementType = ({ itemStyle }: any) => {
  const CategoryLink: React.ElementType = ({
    children,
    style,
    ...clProps
  }: any) => {
    // We have to add `paddingTop` and `paddingBottom` here instead of in `contentContainerStyle`
    // because if we do that, the letter will get cut off at the bottom.
    // TODO: do a better slug replacement logic here. Not sure if this covers all cases.
    const slug = children.replace(/\s+/g, "-").toLowerCase();
    return (
      <Link href="/category/[slug]" as={`/category/${slug}`}>
        <Text
          {...clProps}
          style={{
            marginRight: 30,
            paddingTop: SECTION_PADDING,
            paddingBottom: SECTION_PADDING,
            cursor: "pointer",
            ...style,
          }}
        >
          {children}
        </Text>
      </Link>
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
        const _itemStyle = { ...itemStyle };
        if (i === categoryLinkList.length - 1) {
          _itemStyle.marginRight = 0;
        }
        return (
          // TODO: Add special case for "Home" link.
          <CategoryLink key={categoryName} style={_itemStyle}>
            {categoryName}
          </CategoryLink>
        );
      })}
    </ScrollView>
  );
};
