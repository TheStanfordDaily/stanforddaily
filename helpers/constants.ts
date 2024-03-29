import { Platform } from "react-native";

export const BREAKPOINTS = {
  // For `min-width`
  TABLET: 768,
  DESKTOP: 1100,

  MAX_WIDTH: {
    // For `max-width`
    TABLET: 767,
    DESKTOP: 1099,
  },
};

export const STRINGS = {
  WP_URL: "https://wp.stanforddaily.com",
  WEBSITE_URL: "https://www.stanforddaily.com",
  DISQUS_SHORTNAME: "stanforddaily",
  TSD_APP_USERAGENT: "TheStanfordDailyApp/1.0.0",
  _MAIN_ONLY_QUERY: "_main-only",
};

// TODO: CHANGE MOBILE FONTS TOO
export const FONTS: any = {
  ARTICLE_TITLE:
    Platform.OS === "web"
      ? {
          fontFamily: "'Libre Baskerville', sans-serif",
          fontWeight: "bold",
          fontSize: 15,
          lineHeight: "normal",
        }
      : {
          fontFamily: "LibreBaskerville-Bold",
          fontSize: 20,
        },
  SECTION_TITLE:
    Platform.OS === "web"
      ? {
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: "900",
          fontSize: 15,
          lineHeight: "normal",
        }
      : {
          fontFamily: "Faune-Display_Black",
          fontSize: 20,
        },
  CONTENT:
    Platform.OS === "web"
      ? {
          fontFamily: "'PT Serif', sans-serif",
          lineHeight: "2em",
        }
      : {
          fontFamily: "PTSerif-Regular",
        },
  AUXILIARY:
    Platform.OS === "web"
      ? {
          fontFamily: "Segoe UI, Roboto,Ubuntu, Helvetica Neue, sans-serif",
          textTransform: "uppercase",
          lineHeight: "1em",
        }
      : {
          fontFamily: "IBMPlexSansCondensed-Regular",
          textTransform: "uppercase",
          lineHeight: "1em",
        },
};

export const STANFORD_COLORS = {
  // https://identity.stanford.edu/color.html
  CARDINAL_RED: "#8C1515",
  CARDINAL_DARK_RED: "#820000",
  CARDINAL_BRIGHT_RED: "#B1040E",
  COOL_GREY: "#4D4F53",
  DRIFTWOOD: "#B6B1A9",
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
  CLOUD: "#DAD7CB",
  WHITE: "#FFFFFF",
  BLACK: "#2e2d29",
};

export const COLORS = {
  BORDER_COLOR: STANFORD_COLORS.CLOUD,
  DATA_RED: "#2e2d29",
  LINK: {
    DEFAULT: STANFORD_COLORS.CARDINAL_DARK_RED,
    VISITED: STANFORD_COLORS.CARDINAL_DARK_RED,
    HOVER: "black",
  },
};

// For tab-accessibility of clickable elements
export const FOCUS_STATES = {
  YELLOW_OUTLINE: `&:focus-visible {
    padding: 3px !important;
    outline: 2px solid yellow !important;
  }`,
  BLACK_OUTLINE: `&:focus-visible {
    padding: 3px !important;
    outline: 2px solid black !important;
  }`,
};

// 24 is from `MORE_FROM_DAILY_POST_PER_PAGE` in tsd-json plugin on the server.
export const MORE_FROM_DAILY_POST_PER_PAGE = 24;

export const LINKS = {
  ACCESSIBILITY_STATEMENT: "/accessibility/",
  FACEBOOK: "https://www.facebook.com/stanforddaily/",
  TWITTER: "https://twitter.com/StanfordDaily",
  INSTAGRAM: "https://www.instagram.com/stanforddaily/",
  YOUTUBE: "https://www.youtube.com/channel/UCWg3QqUzqxXt6herm5sMjNw",
  ISSUU: "https://issuu.com/thestanforddaily",
  THE_DAILY_BREW_SPOTIFY:
    "https://open.spotify.com/show/2ty8gvAnvYP31X8TUrFwoj?si=cZWDWKp2SiOotNh4ZqG0xg",
  NEWSLETTER_LOGO:
    "https://wp.stanforddaily.com/wp-content/uploads/2020/02/weekend_roundup_logo-1.jpg",
  DAILY_BREW_LOGO:
    "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded400/1460559/1460559-1550520909113-dfa4db03769d.jpg",
  ADOPT_A_BUSINESS_LOGO:
    "https://wp.stanforddaily.com/wp-content/uploads/2020/08/Advertising-icon.png",
  CORONAVIRUS_LOGO:
    "https://wp.stanforddaily.com/wp-content/uploads/2020/01/NEW.013120.coronavirus-e1586436562445.png",
  ISSUU_LOGO:
    "https://wp.stanforddaily.com/wp-content/uploads/2020/02/example_paper.png",
  SODP_LOGO:
    "https://wp.stanforddaily.com/wp-content/uploads/2020/03/logo.b1da2910.jpg",
  US_ELECTIONS_2020_LOGO:
    "https://wp.stanforddaily.com/wp-content/uploads/2020/11/us2020ElectionsIcon.png",
  YEARBOOK_LOGO:
    "https://wp.stanforddaily.com/wp-content/uploads/2020/11/yearbook_logo.png",
  ARCHIVES: "https://archives.stanforddaily.com/",
  SODP: "http://opendata.stanforddaily.com/",
  JOIN_US: "http://apply.stanforddaily.com",
};

export const srAndTabOnlyDropdown = `
background: white;
color: red;
font-size: 24px;
height: 40px;
left: 40%;
padding: 6px;
position: absolute;
transform: translateY(-100%);
transition: transform 0.3s;
&:focus {
  transform: translateY(0%);
  outline: 4px solid yellow;
}
`;
