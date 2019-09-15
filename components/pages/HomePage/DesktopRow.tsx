import React from "react";
import RView, { MediaRule, mergeRStyle } from "emotion-native-media-query";
import { BREAKPOINTS } from "helpers/constants";

export const DesktopRow: React.ElementType = (props: any) => {
  const { style = {}, rStyle = {}, ...remainingProps } = props;
  const resultStyle = {
    flexDirection: "column",
    ...style,
  };
  const resultRStyle = mergeRStyle(
    {
      [MediaRule.MinWidth]: {
        [BREAKPOINTS.TABLET]: {
          flexDirection: "row",
        },
      },
    },
    rStyle,
  );
  return (
    <RView {...remainingProps} style={resultStyle} rStyle={resultRStyle} />
  );
};
