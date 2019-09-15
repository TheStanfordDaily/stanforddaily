import { Platform } from "react-native";
import { Style } from "emotion-native-media-query";
import { COLORS } from "../../../helpers/constants";

export const getBorderValue = (
  type: "Top" | "Bottom" | "Left" | "Right",
): Style => {
  return Platform.OS === "web"
    ? { [`border${type}`]: `1px solid ${COLORS.BORDER_COLOR}` }
    : {
        [`border${type}Color`]: COLORS.BORDER_COLOR,
        [`border${type}Width`]: 1,
      };
};
