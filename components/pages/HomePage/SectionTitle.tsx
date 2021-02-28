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

const SectionTitleStyleColorBackground = styled.Text({
  ...FONTS.SECTION_TITLE,
  color: STANFORD_COLORS.WHITE,
  fontSize: 20,
  margin: 0,
  textTransform: "none",
});

const SectionTitleElement =
  Platform.OS === "web"
    ? SectionTitleStyle.withComponent("h1")
    : SectionTitleStyle;

const SectionTitleElementColorBackground =
  Platform.OS === "web"
    ? SectionTitleStyleColorBackground.withComponent("h1")
    : SectionTitleStyleColorBackground;

type SectionTitleProps = {
  category?: Category;
  children?: ReactNode;
  style?: any;
  isHumor?: Boolean;
};

// Used in MoreFromTheDailySection on homepage,
// and in SectionTitleWithLink defined below
export const SectionTitle: React.ElementType<SectionTitleProps> = ({
  category,
  style,
  children = category.name,
}: SectionTitleProps) => {
  return <SectionTitleElement style={style}>{children}</SectionTitleElement>;
};

export const SectionTitleColorBackground: React.ElementType<SectionTitleProps> = ({
  category,
  style,
  children = category.name,
}: SectionTitleProps) => {
  return (
    <SectionTitleElementColorBackground style={style}>
      {children}
    </SectionTitleElementColorBackground>
  );
};

type SectionTitleWithLinkProps = SectionTitleProps & {
  category: Category;
};

// What we end up seeing for each section on the homepage,
// except in the MoreFromTheDaily section
export const SectionTitleWithLink: React.ElementType<SectionTitleWithLinkProps> = ({
  category,
  style,
  children,
  isHumor = false,
}: SectionTitleWithLinkProps) => {
  return (
    <CategoryLink category={category} isHumor={isHumor}>
      <SectionTitle category={category} style={style}>
        {Platform.OS === "web"
          ? children
          : category.name /* TODO: Currently we are not displaying custom logo for sections. */}
      </SectionTitle>
    </CategoryLink>
  );
};
