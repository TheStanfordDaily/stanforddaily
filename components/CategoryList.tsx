import React from "react";
import { ScrollView } from "react-native";
import { STANFORD_COLORS } from "helpers/constants";
import { Category } from "helpers/wpapi";
import { SECTION_PADDING } from "./Section";
import { CategoryLink } from "./CategoryLink";

export const CategoryList: React.ElementType = ({ itemStyle }: any) => {
  // https://www.stanforddaily.com/wp-json/tsd/json/v1/nav
  const categoryLinkList: Category[] = [
    { id: 3, name: "NEWS", slug: "news", url: "/category/news/" },
    { id: 23, name: "SPORTS", slug: "sports", url: "/category/sports/" },
    {
      id: 24,
      name: "OPINIONS",
      slug: "opinions",
      url: "/category/opinions/",
    },
    {
      id: 25,
      name: "ARTS & LIFE",
      slug: "arts-life",
      url: "/category/arts-life/",
    },
    {
      id: 32278,
      name: "The Grind",
      slug: "thegrind",
      url: "/category/thegrind/",
    },
    {
      id: 53462,
      name: "Magazine",
      slug: "magazine",
      url: "/category/magazine/",
    },
    {
      id: 58277,
      name: "Data Viz",
      slug: "data-vizzes",
      url: "/category/data-vizzes/",
    },
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
      {categoryLinkList.map((category, i) => {
        const _itemStyle = {
          ...itemStyle,
        };
        if (i === categoryLinkList.length - 1) {
          _itemStyle.marginRight = 0;
        }
        // We have to add `paddingTop` and `paddingBottom` here instead of in `contentContainerStyle`
        // because if we do that, the letter will get cut off at the bottom.
        return (
          <CategoryLink
            key={category.id}
            category={category}
            style={{
              color: STANFORD_COLORS.WHITE,
              marginRight: 30,
              paddingTop: SECTION_PADDING,
              paddingBottom: SECTION_PADDING,
              ..._itemStyle,
            }}
          />
        );
      })}
    </ScrollView>
  );
};
