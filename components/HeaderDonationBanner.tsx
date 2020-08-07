import React from "react";
import RView, { MediaRule } from "emotion-native-media-query";
import MdPaper from "react-ionicons/lib/MdPaper";
import { BREAKPOINTS } from "helpers/constants";
import { SECTION_PADDING } from "components/Section";
import DonationForm from "./DonationForm";
import css from "@emotion/css";

const HeaderDonationBanner: React.ElementType = ({ currentPageUrl }) => {
  return (
    <RView
      style={{
        flexDirection: "column",
        paddingTop: SECTION_PADDING / 2,
        paddingBottom: SECTION_PADDING / 2,
      }}
      rStyle={{
        [MediaRule.MinWidth]: {
          [BREAKPOINTS.TABLET]: {
            flexDirection: "row",
          },
        },
      }}
    >
      <div
        style={{
          paddingLeft: SECTION_PADDING,
          paddingRight: SECTION_PADDING,
          flexBasis: "65%",
        }}
      >
        <RView
          style={{
            flexDirection: "row",
            alignItems: "center",
            fontSize: "1.3em",
          }}
        >
          <div
            style={{
              marginRight: SECTION_PADDING,
            }}
          >
            <span className="hidden-mobile">
              <MdPaper fontSize="4em" />
            </span>
            <span className="visible-mobile">
              <MdPaper fontSize="2em" />
            </span>
          </div>
          <small
            css={css`
              @media (max-width: ${BREAKPOINTS.MAX_WIDTH.TABLET}px) {
                line-height: normal;
                margin-bottom: 10px;
                > strong {
                  font-weight: normal;
                }
              }
            `}
          >
            <strong>
              Support independent, student-run journalism.&nbsp;&nbsp;
            </strong>
            <span className="hidden-mobile">
              Your support helps give staff members from all backgrounds the
              opportunity to conduct meaningful reporting on important issues at
              Stanford. All contributions are tax-deductible.
            </span>
          </small>
        </RView>
      </div>
      <div
        style={{
          paddingLeft: SECTION_PADDING,
          paddingRight: SECTION_PADDING,
          flexBasis: "35%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <DonationForm currentPageUrl={currentPageUrl} bannerLocation="Header" />
      </div>
    </RView>
  );
};

export default HeaderDonationBanner;
