import React from "react";
import {
  FONTS,
  STANFORD_COLORS,
  BREAKPOINTS,
  FOCUS_STATES,
} from "helpers/constants";
import css from "@emotion/css";

// Donation form with 'large=true' appears on homepage, and
// 'large=false" variety appears at the end of individual posts
const DonationForm: React.ElementType = ({ large = false }) => {
  return large ? (
    <>
      <div
        style={{
          backgroundColor: "#54100b",
          width: "100%",
          color: STANFORD_COLORS.WHITE,
          padding: "15px 0",
          textAlign: "center",
          fontSize: "200%",
          ...FONTS.SECTION_TITLE,
        }}
      >
        <a
          href="https://givebutter.com/h0CJIU/"
          style={{
            textDecoration: "none",
            border: "none",
            borderRadius: 0,
            backgroundColor: "#54100b",
            marginTop: 5,
            marginBottom: 10,
            cursor: "pointer",
            outline: 0,
            color: STANFORD_COLORS.WHITE,
            fontSize: "200%",
            ...FONTS.SECTION_TITLE,
          }}
          css={css`
            ${FOCUS_STATES.YELLOW_OUTLINE}
          `}
        >
          We need your help: All banner donations made today will support The
          Daily's new staff financial aid program.{" "}
          <br
            css={css`
              display: none;
              @media (max-width: ${BREAKPOINTS.TABLET}px) {
                display: block;
              }
            `}
          />
          <span style={{ color: "#FF9999" }}>Learn more and donate.</span>
          <br
            css={css`
              display: none;
              @media (max-width: ${BREAKPOINTS.TABLET}px) {
                display: block;
              }
            `}
          />
          <br
            css={css`
              display: none;
              @media (max-width: ${BREAKPOINTS.TABLET}px) {
                display: block;
              }
            `}
          />
          <span
            css={css`
              @media (max-width: ${BREAKPOINTS.TABLET}px) {
                display: none;
              }
            `}
            style={{
              borderRight: "2px solid #FF9999",
              paddingTop: "0.8vw",
              paddingBottom: "0.8vw",
              paddingLeft: 12.5,
              marginRight: 2.5,
            }}
          ></span>
        </a>
        <a
          href="https://givebutter.com/h0CJIU"
          style={{
            ...FONTS.AUXILIARY,
            border: `2px solid ${STANFORD_COLORS.WHITE}`,
            borderRadius: 0,
            marginLeft: 10,
            marginRight: 10,
            lineHeight: "30px",
            height: 80,
            display: "inlineBlock",
            cursor: "pointer",
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: 1,
            outline: 0,
            padding: 10,
            textDecoration: "none",
          }}
          css={css`
            background-color: #54100b;
            color: white;
            &:hover {
              background-color: white;
              color: black !important;
            }
            &:visited {
              color: white;
            }
            ${FOCUS_STATES.YELLOW_OUTLINE}
          `}
        >
          Donate
        </a>
      </div>
    </>
  ) : (
    <div>
      <a
        href="/donate/"
        style={{
          ...FONTS.AUXILIARY,
          borderRadius: 0,
          lineHeight: "30px",
          backgroundColor: STANFORD_COLORS.CARDINAL_RED,
          display: "inlineBlock",
          cursor: "pointer",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: 1,
          outline: 0,
          padding: 10,
          textDecoration: "none",
        }}
        css={css`
          color: white;
          &:hover {
            background-color: #54100b !important;
            color: white !important;
          }
          &:visited {
            color: white;
          }
          ${FOCUS_STATES.YELLOW_OUTLINE}
        `}
      >
        Donate
      </a>
    </div>
  );
};

export default DonationForm;
