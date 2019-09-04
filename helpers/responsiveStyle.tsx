import React from "react";
import { View, Platform, Dimensions } from "react-native";
// `import { jsx, css }` is necessary (for web) even if seems to be unused.
import { jsx, css } from "@emotion/core"; // eslint-disable-line @typescript-eslint/no-unused-vars
import merge from "lodash.merge";

export enum MediaRule {
  MinWidth,
  MaxWidth,
}

export type Style = { [key: string]: any };
export type RStyle = {
  [MediaRule.MinWidth]?: { [minWidth: number]: Style };
  [MediaRule.MaxWidth]?: { [maxWidth: number]: Style };
};

export function isWidthGreaterThanOrEqualTo(breakpoint: number): boolean {
  const { width } = Dimensions.get("window");
  return width >= breakpoint;
}

export function isWidthSmallerThanOrEqualTo(breakpoint: number): boolean {
  const { width } = Dimensions.get("window");
  return width <= breakpoint;
}

function _getStyleWithMediaQuery(
  rStyle: RStyle,
): { [mediaQuery: string]: any } {
  const {
    [MediaRule.MinWidth]: minWidthStyle = {},
    [MediaRule.MaxWidth]: maxWidthStyle = {},
  } = rStyle;

  const rStyleMediaQueries = {};
  Object.entries(minWidthStyle).forEach(([minWidth, value]) => {
    rStyleMediaQueries[`@media (min-width: ${minWidth}px)`] = value;
  });
  Object.entries(maxWidthStyle).forEach(([maxWidth, value]) => {
    rStyleMediaQueries[`@media (max-width: ${maxWidth}px)`] = value;
  });

  return rStyleMediaQueries;
}

function _getFlattenedStyleForCurrentScreen(rStyle: RStyle): Style {
  const {
    [MediaRule.MinWidth]: minWidthStyle = {},
    [MediaRule.MaxWidth]: maxWidthStyle = {},
  } = rStyle;

  let style = {};

  Object.keys(minWidthStyle)
    // We have to sort the style ascendingly first, else different order will produce different results
    .sort((a, b) => Number(a) - Number(b))
    .forEach(minWidth => {
      if (isWidthGreaterThanOrEqualTo(Number(minWidth))) {
        const value = minWidthStyle[minWidth];
        style = { ...style, ...value };
      }
    });

  Object.keys(maxWidthStyle)
    // We have to sort the style descendingly first, else different order will produce different results
    .sort((a, b) => Number(b) - Number(a))
    .forEach(maxWidth => {
      if (isWidthSmallerThanOrEqualTo(Number(maxWidth))) {
        const value = maxWidthStyle[maxWidth];
        style = { ...style, ...value };
      }
    });

  return style;
}

interface RViewProps {
  WebTag?: string | React.ElementType;
  NativeTag?: string | React.ElementType;
  style?: Style;
  rStyle?: RStyle;
  [key: string]: any;
}

export const RView: React.FunctionComponent<RViewProps> = ({
  WebTag = "div",
  NativeTag = View,
  style: defaultStyle = {},
  rStyle = {},
  ...remainingProps
}) => {
  if (Platform.OS === "web") {
    // Partly based on https://github.com/necolas/react-native-web/blob/e810f1fd2b41293cb1efe04e332fb6f8d4bcca65/packages/react-native-web/src/exports/View/index.js#L80-L94
    const reactNativeWebViewStyle = {
      display: "flex",
      flexBasis: "auto",
      flexDirection: "column",
      flexShrink: 0,
      margin: 0,
      minHeight: 0,
      minWidth: 0,
      padding: 0,
      position: "relative",
      zIndex: 0,
    };

    const rStyleMediaQueries = _getStyleWithMediaQuery(rStyle);
    return (
      <WebTag
        css={{
          ...reactNativeWebViewStyle,
          ...defaultStyle,
          ...rStyleMediaQueries,
        }}
        {...remainingProps}
      />
    );
  } else {
    const responsiveStyle = _getFlattenedStyleForCurrentScreen(rStyle);
    return (
      <NativeTag
        style={{
          ...defaultStyle,
          ...responsiveStyle,
        }}
        {...remainingProps}
      />
    );
  }
};

export function mergeRStyle(originalRStyle: RStyle, newRStyle: RStyle): RStyle {
  return merge(originalRStyle, newRStyle);
}
