import React from "react";
import { Style, RStyle } from "emotion-native-media-query";
import { Post } from "../helpers/wpapi";
// TODO: layout got reset to mobile one when returning from other app on iPad
export interface SectionProps {
  content: Post[];
  sectionTitle?: string;
  SectionTag?: React.ElementType;
  style?: Style;
  rStyle?: RStyle;
  [key: string]: any;
}
