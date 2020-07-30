import React from "react";
import RView, { MediaRule, mergeRStyle } from "emotion-native-media-query";
import { BREAKPOINTS } from "helpers/constants";

// Used in LeftSection and MainSection
export const Column: React.ElementType = (props: any) => {
  const { style = {}, rStyle = {}, ...remainingProps } = props;
  const resultStyle = {
    flexDirection: "column",
    flexGrow: 1,
    ...style,
  };
  const resultRStyle = mergeRStyle(
    {
      [MediaRule.MinWidth]: {
        [BREAKPOINTS.TABLET]: {
          flexBasis: 0,
        },
      },
    },
    rStyle,
  );
  return (
    <RView {...remainingProps} style={resultStyle} rStyle={resultRStyle} />
  );
};
