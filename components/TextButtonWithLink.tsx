import React from "react";
import css from "@emotion/css";
import Link from "./Link";
import { FONTS, STANFORD_COLORS } from "helpers/constants";

// For the "SEND TIPS" and "GET OUR EMAILS" buttons
// on the rightmost side of the top section (below nav bar)
export const TextButtonWithLink: React.ElementType = ({
  url,
  urlFile = "/[year]/",
  title,
  mobileTitle,
  tbwlStyle,
  cssContent = `
    color: #8c1515;
    &:hover,
    &:focus-visible {
      color: white !important;
      background-color: #8c1515 !important;
    }
    &:visited {
      color: #8c1515;
    }
    `,
}: any) => (
  <Link href={urlFile} as={url}>
    <a
      title={title}
      style={{
        ...FONTS.AUXILIARY,
        border: `2px ${STANFORD_COLORS.CARDINAL_RED} solid`,
        fontSize: 15,
        letterSpacing: 1,
        fontWeight: 700,
        borderRadius: 0,
        outline: 0,
        padding: 8,
        cursor: "pointer",
        textAlign: "center",
        textDecoration: "none",
        ...tbwlStyle,
      }}
      css={css`
        ${cssContent}
      `}
    >
      {!mobileTitle && title}
      {mobileTitle && (
        <>
          <span className="hidden-mobile">{title}</span>
          <span className="visible-mobile">{mobileTitle}</span>
        </>
      )}
    </a>
  </Link>
);
