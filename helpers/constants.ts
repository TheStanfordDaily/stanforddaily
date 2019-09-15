import { Platform } from "react-native";

export const BREAKPOINTS = {
  // For `min-width`
  TABLET: 700,
  DESKTOP: 1100,

  MAX_WIDTH: {
    // For `max-width`
    TABLET: 575,
    DESKTOP: 1099,
  },
};

export const STRINGS = {
  ROOT_URL: "https://www.stanforddaily.com",
  DISQUS_SHORTNAME: "stanforddaily",
  TSD_APP_USERAGENT: "TheStanfordDailyApp/1.0.0",
  _MAIN_ONLY_QUERY: "_main-only",
};

export const FONTS: any = {
  ARTICLE_TITLE:
    Platform.OS === "web"
      ? {
          fontFamily: "'Faune', sans-serif",
          fontWeight: "bold",
          fontSize: 15,
          lineHeight: 1,
        }
      : {
          fontFamily: "Faune-Text_Bold",
          fontSize: 20,
        },
  SECTION_TITLE:
    Platform.OS === "web"
      ? {
          fontFamily: "'Faune', sans-serif",
          fontWeight: 900,
          fontSize: 15,
          lineHeight: 1,
        }
      : {
          fontFamily: "Faune-Display_Black",
          fontSize: 20,
        },
  CONTENT:
    Platform.OS === "web"
      ? {
          fontFamily: "'Public Sans Web', sans-serif",
        }
      : {
          fontFamily: "PublicSans-Regular",
        },
  AUXILIARY: "Open Sans",
};

export const STANFORD_COLORS = {
  // https://identity.stanford.edu/color.html
  CARDINAL_RED: "#8C1515",
  CARDINAL_DARK_RED: "#820000",
  CARDINAL_BRIGHT_RED: "#B1040E",
  COOL_GREY: "#4D4F53",
  FOG: "#F4F4F4",
  STONE: "#544948",
  SANDSTONE: "#D2C295",
  LIGHT_SANDSTONE: "#F9F6EF",
  LIGHT_SAGE: "#C7D1C5",
  CLAY: "#5F574F",
  GOLD: "#B26F16",
  REDWOOD: "#8D3C1E",
  BROWN: "#5E3032",
  SUN: "#EAAB00",
  WHITE: "#FFFFFF",
};

export const COLORS = {
  BORDER_COLOR: STANFORD_COLORS.CLAY,
  LINK: {
    DEFAULT: STANFORD_COLORS.CARDINAL_DARK_RED,
    VISITED: STANFORD_COLORS.CARDINAL_DARK_RED,
    HOVER: "black",
  },
};
