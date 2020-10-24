import React, { ReactNode } from "react";
import { Text, TextStyle, Platform, TouchableOpacity } from "react-native";
import { FONTS } from "helpers/constants";
import { Category, getNextJsCategoryPath } from "helpers/wpapi";
import { withNavigation } from "helpers/trivial/react-navigation";
import Link from "./Link";
import css from "@emotion/css";

// Describes requirement of various properties of specific types
// https://www.typescriptlang.org/docs/handbook/interfaces.html
interface CategoryLinkProps {
  category: Category;
  children?: ReactNode;
  style?: TextStyle;
  isSatire?: Boolean;
  isSatire2?: Boolean;

  // See "helpers/trivial/react-navigation"
  navigation?: any;
}

// Component for category links that appear in places such as
// the footer, top bar, above articles in "MoreFromTheDaily"
// on homepage, above headlines on post pages and elsewhere
const _CategoryLink: React.ElementType<CategoryLinkProps> = ({
  category,
  children = (category && category.name) || "Uncategorized",
  style = {},
  navigation,
  isSatire = false,
  isSatire2 = false,
}: CategoryLinkProps) => {
  if (Platform.OS !== "web") {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.push("categoryArticleList", category);
        }}
      >
        <Text
          style={{
            ...FONTS.AUXILIARY,
            ...style,
          }}
        >
          {children}
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
      css={css`
        @media print {
          display: none;
        }
      `}
    >
      {category || isSatire || isSatire2 ? (
        <Link
          href={
            isSatire || isSatire2
              ? "/category/satire/"
              : getNextJsCategoryPath(category.url)
          }
          as={isSatire || isSatire2 ? "/category/satire/" : category.url}
        >
          <a
            title={isSatire || isSatire2 ? "Satire" : category.name}
            style={{ color: "inherit" }}
          >
            {isSatire2 ? "Satire" : children}
          </a>
        </Link>
      ) : (
        children
      )}
    </Text>
  );
};

export const CategoryLink = withNavigation(_CategoryLink);
