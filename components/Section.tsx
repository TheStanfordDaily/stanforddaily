import React from "react";
import { View, Platform } from "react-native";
import styled from "@emotion/native";

export const SectionStyle = styled.View({
  padding: 15,
});
export const Section =
  Platform.OS === "web" ? SectionStyle.withComponent("section") : SectionStyle;
export const SectionWithoutStyle =
  Platform.OS === "web" ? styled.View().withComponent("section") : View;
