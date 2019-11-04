import React, { ReactNode } from "react";
import { Platform } from "react-native";
import styled from "@emotion/native";
import { FONTS, STANFORD_COLORS } from "helpers/constants";
import { Category } from "helpers/wpapi";
import { CategoryLink } from "components/CategoryLink";

const SectionTitleStyle = styled.Text({
  ...FONTS.SECTION_TITLE,
  color: STANFORD_COLORS.CARDINAL_DARK_RED,
  fontSize: 20,
  margin: 0,
  textTransform: "none",
});
const SectionTitleElement =
  Platform.OS === "web"
    ? SectionTitleStyle.withComponent("h1")
    : SectionTitleStyle;

type SectionTitleProps = {
  category?: Category;
  children?: ReactNode;
  style?: any;
};

export const SectionTitle: React.ElementType<SectionTitleProps> = ({
  category,
  style,
  children = category.name,
}: SectionTitleProps) => {
  return <SectionTitleElement style={style}>{children}</SectionTitleElement>;
};

type SectionTitleWithLinkProps = SectionTitleProps & {
  category: Category;
};

export const SectionTitleWithLink: React.ElementType<
  SectionTitleWithLinkProps
> = ({ category, style, children }: SectionTitleWithLinkProps) => {
  return (
    <CategoryLink category={category}>
      <SectionTitle category={category} style={style}>
        {Platform.OS === "web"
          ? children
          : category.name /* TODO: Currently we are not displaying custom logo for sections. */}
      </SectionTitle>
    </CategoryLink>
  );
};
