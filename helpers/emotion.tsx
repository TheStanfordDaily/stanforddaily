import React from "react";
import { View, Platform, Dimensions } from "react-native";
// `import { jsx, css }` is necessary (for web) even if seems to be unused.
import { jsx, css } from "@emotion/core"; // eslint-disable-line @typescript-eslint/no-unused-vars

export type Style = { [key: string]: any };
export type RStyle = { [minWidth: number]: Style };

export const BREAKPOINTS = {
  DEFAULT: -1,
  TABLET: 576,
  DESKTOP: 1100,
};

function _isWidthGreaterThan(breakpoint: number): boolean {
  const { width } = Dimensions.get("window");
  console.warn(width);
  return width > breakpoint;
}

function _getStyleWithMediaQuery(rStyle: RStyle): { [key: string]: any } {
  const {
    [BREAKPOINTS.DEFAULT]: defaultRStyle = {},
    ...remainingRStyles
  } = rStyle;

  const rStylesMediaQueries = defaultRStyle;
  Object.entries(remainingRStyles).forEach(([minWidth, value]) => {
    rStylesMediaQueries[`@media (min-width: ${minWidth}px)`] = value;
  });

  return rStylesMediaQueries;
}

function _getStyleBasedOnCurrentWidth(rStyle: RStyle): Style {
  const {
    [BREAKPOINTS.DEFAULT]: defaultRStyle = {},
    ...remainingRStyles
  } = rStyle;

  let style = defaultRStyle;
  Object.entries(remainingRStyles).forEach(([minWidth, value]) => {
    if (_isWidthGreaterThan(Number(minWidth))) {
      style = { ...style, ...value };
    }
  });

  return style;
}

export const RView: React.ElementType = (props: any) => {
  const { style, rStyle, ...remainingProps } = props;

  if (style) {
    console.warn("You should not use `style` property on `RView`.");
  }

  if (Platform.OS === "web") {
    const rStylesMediaQueries = _getStyleWithMediaQuery(rStyle);
    return (
      <div
        css={{
          display: "flex",
          ...rStylesMediaQueries,
          ...style,
        }}
        {...remainingProps}
      />
    );
  } else {
    const mobileStyle = _getStyleBasedOnCurrentWidth(rStyle);
    return <View style={{ ...mobileStyle, ...style }} {...props} />;
  }
};

/*
export function mergeRStyle(originalRStyle: RStyle, newRStyle: RStyle): RStyle {
  // TODO
}
*/

/*
export function initRStyle(input: any): { [key: string]: any } {
  const rStyle: any = input || {};
  if (!Object.prototype.hasOwnProperty.call(rStyle, BREAKPOINTS.DEFAULT)) {
    rStyle[BREAKPOINTS.DEFAULT] = {};
  }
  return rStyle;
}
*/
