import React, { ReactNode } from "react";
import { Text, TextStyle } from "react-native";
import Link from "next/link";
import { FONTS } from "helpers/constants";
import { Category, getNextJsCategoryPath } from "helpers/wpapi";

interface CategoryLinkProps {
  category: Category;
  children?: ReactNode;
  style?: TextStyle;
}

export const CategoryLink: React.ElementType<CategoryLinkProps> = ({
  category,
  children = category.name,
  style = {},
}: CategoryLinkProps) => {
  return (
    <Text
      style={{
        ...FONTS.AUXILIARY,
        ...style,
      }}
    >
      {category ? (
        <Link href={getNextJsCategoryPath(category.url)} as={category.url}>
          <a title={category.name} style={{ color: "inherit" }}>
            {children}
          </a>
        </Link>
      ) : (
        "Uncategorized"
      )}
    </Text>
  );
};
