import { BREAKPOINTS, FONTS, STANFORD_COLORS } from "helpers/constants";
import { SECTION_PADDING } from "components/Section";

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
    "p, h1, h3, h4, h5, h6, figcaption": {
      ...centerContentStyle,
      marginBottom: "1em",
      fontSize: "1.3rem",
      color: STANFORD_COLORS.BLACK,
    },
    h2: {
      ...centerContentStyle,
      marginBottom: "1em",
      fontSize: "1.6rem",
      color: STANFORD_COLORS.BLACK,
    },
    li: {
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
    blockquote: {
      display: "flex !important",
      flexDirection: "column",
      justifyContent: "center !important",
      padding: "5px 0 0 0px !important",
      borderLeft: "3px solid #820000 !important",
      cite: {
        width: "350px !important",
        padding: "5px 0 0 0 !important",
        borderLeft: "3px solid #820000 !important",
        fontSize: "1.3em !important",
        textAlign: "center",
      },
      p: {
        fontSize: "1.6em !important",
        lineHeight: "normal",
        textAlign: "left",
        overflowWrap: "break-word",
        padding: "25px 25px 0 25px !important",
        backgroundImage: `url(${"../assets/pullquote.gif"})`,
        backgroundSize: "20%",
        backgroundRepeat: "no-repeat !important",
        "&::first-letter": {
          fontSize: "2em !important",
          fontWeight: "bold !important",
        },
      },
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      textAlign: "center",
      border: `1px solid ${STANFORD_COLORS.COOL_GREY}`,
      fontSize: "1.3rem",
    },
    td: {
      border: `1px solid ${STANFORD_COLORS.COOL_GREY}`,
      padding: "10px",
    },
      table: {
        width: "100%",
        borderCollapse: "collapse",
        textAlign: "center",
        border: `1px solid ${STANFORD_COLORS.COOL_GREY}`,
        fontSize: "1.3rem",
      },
      td: {
        border: `1px solid ${STANFORD_COLORS.COOL_GREY}`,
        padding: "10px",
    }
  }
};
