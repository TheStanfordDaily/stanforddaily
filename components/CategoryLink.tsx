import React, { ReactNode } from "react";
import { Text, TextStyle, Platform, TouchableOpacity } from "react-native";
import Link from "next/link";
import { FONTS } from "helpers/constants";
import { Category, getNextJsCategoryPath } from "helpers/wpapi";
import { withNavigation } from "helpers/trivial/react-navigation";

interface CategoryLinkProps {
  category: Category;
  children?: ReactNode;
  style?: TextStyle;

  // See "helpers/trivial/react-navigation"
  navigation?: any;
}

const _CategoryLink: React.ElementType<CategoryLinkProps> = ({
  category,
  children = category.name,
  style = {},
  navigation,
}: CategoryLinkProps) => {
  if (Platform.OS !== "web") {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.push("categoryArchive", category);
        }}
      >
        <Text
          style={{
            ...FONTS.AUXILIARY,
            ...style,
          }}
        >
          {category ? children : "Uncategorized"}
        </Text>
      </TouchableOpacity>
    );
  }

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

export const CategoryLink = withNavigation(_CategoryLink);
