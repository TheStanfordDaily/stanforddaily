import { Platform } from "react-native";
import styled from "@emotion/native";
import { FONTS, STANFORD_COLORS } from "helpers/constants";

const SectionTitleStyle = styled.Text({
  fontFamily: FONTS.TITLE,
  fontWeight: 900,
  fontSize: 15,
  lineHeight: Platform.OS === "web" ? 1 : undefined,
  color: STANFORD_COLORS.CARDINAL_DARK_RED,
  margin: 0,
  marginBottom: 15,
});
export const SectionTitle =
  Platform.OS === "web"
    ? SectionTitleStyle.withComponent("h1")
    : SectionTitleStyle;
