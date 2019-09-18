import React from "react";
import { Text, TextStyle } from "react-native";
import Link from "next/link";
import { FONTS } from "helpers/constants";
import { Category, getNextJsCategoryPath } from "helpers/wpapi";

interface CategoryLinkProps {
  category: Category;
  style?: TextStyle;
}

export const CategoryLink: React.ElementType<CategoryLinkProps> = ({
  category,
  style = {},
}: CategoryLinkProps) => {
  return (
    <Text
      style={{
        ...FONTS.AUXILIARY,
        ...style,
      }}
    >
      <Link href={getNextJsCategoryPath(category.url)} as={category.url}>
        <a title={category.name} style={{ color: "inherit" }}>
          {category.name}
        </a>
      </Link>
    </Text>
  );
};
