export const BREAKPOINTS = {
  // For `min-width`
  TABLET: 576,
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

export const FONTS = {
  TITLE: "Libre Baskerville",
  CONTENT: "PT Serif",
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
};

export const COLORS = {
  BORDER_COLOR: STANFORD_COLORS.CLAY,
  LINK: {
    DEFAULT: STANFORD_COLORS.CARDINAL_DARK_RED,
    VISITED: STANFORD_COLORS.CARDINAL_DARK_RED,
    HOVER: "black",
  },
};
