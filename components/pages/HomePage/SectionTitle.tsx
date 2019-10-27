import { Platform } from "react-native";
import styled from "@emotion/native";
import { FONTS, STANFORD_COLORS } from "helpers/constants";

const SectionTitleStyle = styled.Text({
  ...FONTS.SECTION_TITLE,
  color: STANFORD_COLORS.CARDINAL_DARK_RED,
  margin: 0,
});
export const SectionTitle =
  Platform.OS === "web"
    ? SectionTitleStyle.withComponent("h1")
    : SectionTitleStyle;
