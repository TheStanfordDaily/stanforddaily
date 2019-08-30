import React from "react";
import { View, Platform, Dimensions } from "react-native";
// `import { jsx, css }` is necessary (for web) even if seems to be unused.
import { jsx, css } from "@emotion/core"; // eslint-disable-line @typescript-eslint/no-unused-vars
import merge from "lodash.merge";

export type Style = { [key: string]: any };
export type RStyle = { [minWidth: number]: Style };

export const BREAKPOINTS = {
  TABLET: 576,
  DESKTOP: 1100,
};

export function isWidthGreaterThan(breakpoint: number): boolean {
  const { width } = Dimensions.get("window");
  console.warn(width);
  return width > breakpoint;
}

function _getStyleWithMediaQuery(rStyle: RStyle): { [key: string]: any } {
  const rStylesMediaQueries = {};
  Object.entries(rStyle).forEach(([minWidth, value]) => {
    rStylesMediaQueries[`@media (min-width: ${minWidth}px)`] = value;
  });

  return rStylesMediaQueries;
}

function _getStyleBasedOnCurrentWidth(rStyle: RStyle): Style {
  let style = {};
  Object.entries(rStyle).forEach(([minWidth, value]) => {
    if (isWidthGreaterThan(Number(minWidth))) {
      style = { ...style, ...value };
    }
  });

  return style;
}

export const RView: React.ElementType = (props: any) => {
  const {
    WebTag = "div",
    NativeTag = View,
    style: defaultStyle = {},
    rStyle = {},
    ...remainingProps
  } = props;

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

    const rStylesMediaQueries = _getStyleWithMediaQuery(rStyle);
    return (
      <WebTag
        css={{
          ...reactNativeWebViewStyle,
          ...defaultStyle,
          ...rStylesMediaQueries,
        }}
        {...remainingProps}
      />
    );
  } else {
    const responsiveStyle = _getStyleBasedOnCurrentWidth(rStyle);
    return (
      <NativeTag style={{ ...defaultStyle, ...responsiveStyle }} {...props} />
    );
  }
};

export function mergeRStyle(originalRStyle: RStyle, newRStyle: RStyle): RStyle {
  return merge(originalRStyle, newRStyle);
}
