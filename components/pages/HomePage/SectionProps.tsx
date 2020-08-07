import React from "react";
import { Style, RStyle } from "emotion-native-media-query";
import { Post, Category } from "helpers/wpapi";
// TODO: layout got reset to mobile one when returning from other app on iPad

// Describes requirement of various properties of specific types
// https://www.typescriptlang.org/docs/handbook/interfaces.html
export interface SectionProps {
  content: Post[];
  category: Category;
  sectionTitle?: string | JSX.Element;
  SectionTag?: React.ElementType;
  style?: Style;
  rStyle?: RStyle;
  [key: string]: any;
}
