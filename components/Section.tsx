import React from "react";
import { View, Platform } from "react-native";
import styled from "@emotion/native";

export const SECTION_PADDING = 15;

export const SectionStyle = styled.View({
  padding: SECTION_PADDING,
});
export const Section =
  Platform.OS === "web" ? SectionStyle.withComponent("section") : SectionStyle;
export const SectionWithoutStyle =
  Platform.OS === "web" ? styled.View().withComponent("section") : View;
