import {
  STRINGS,
  BREAKPOINTS,
  FONTS,
  STANFORD_COLORS,
} from "helpers/constants";
import { SectionStyle, SECTION_PADDING } from "components/Section";

export const centerContentStyle = {
  margin: "0 auto",
  width: "100%",
  [`@media (min-width: ${BREAKPOINTS.DESKTOP}px)`]: {
    width: 600,
  },
};

export const centerOuterContentStyle = {
  margin: "0 auto",
  width: "100%",
  [`@media (min-width: ${BREAKPOINTS.DESKTOP}px)`]: {
    width: 650,
  },
};

export default {
  "#main-article-content": {
    ...FONTS.CONTENT,
    marginTop: SECTION_PADDING,
    "#main-article-text2": {
      ...centerOuterContentStyle,
    },
    a: {
      textDecoration: "underline",
    },
    "p, h1, h2, h3, h4, h5, h6, figcaption": {
      ...centerContentStyle,
      marginBottom: "1em",
      fontSize: "1.3rem",
      color: STANFORD_COLORS.BLACK,
    },
    figcaption: {
      ...FONTS.AUXILIARY,
      textTransform: "none",
      textAlign: "right",
      marginTop: 5,
      color: STANFORD_COLORS.COOL_GREY,
      fontSize: "1.1rem",
      fontStyle: "italic",
    },
    figure: {
      margin: "0 auto",
      width: "initial !important",
      textAlign: "center",
      img: {
        ...centerOuterContentStyle,
        maxWidth: "100%",
        width: "100%",
        height: "auto",
      },
      "&#featured-image": {
        width: "100% !important",
      },
    },
  },
};
