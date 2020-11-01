import { BREAKPOINTS, FONTS, STANFORD_COLORS } from "helpers/constants";
import { SECTION_PADDING } from "components/Section";
import quote from "../assets/pullquote.gif";

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
      display: "block !important",
      width: "200px !important",
      padding: "5px 0 0 5px !important",
      //right align
      float: "right !important",
      borderLeft: "3px solid #820000 !important",

      /*//left align
      float: "left !important",
      borderRight: "3px solid #820000 !important",*/

      cite: {
        width: "200px !important",
        fontSize: "1.3em !important",
        textAlign: "center",
      },
      p: {
        width: "200px !important",
        fontSize: "1.6em !important",
        textAlign: "left",
        overflowWrap: "break-word",
        padding: "20px 15px 0 25px !important",
        backgroundImage: `url(${quote})`,
        backgroundSize: "25%",
        backgroundRepeat: "no-repeat !important",

        //first letter code not working
        /*'&::firstLetter': { // firstLetter: { also doesn't work
          fontSize: "2em !important",
	        fontWeight: "bold !important",
        },*/
      },
    },
  },
};
