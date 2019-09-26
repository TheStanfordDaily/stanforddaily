import React from "react";
import RView, { MediaRule } from "emotion-native-media-query";
import MdPaper from "react-ionicons/lib/MdPaper";
import { STANFORD_COLORS, BREAKPOINTS } from "helpers/constants";
import { SECTION_PADDING } from "components/Section";
import DonationForm from "./DonationForm";

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
        <h3
          style={{
            textAlign: "center",
          }}
        >
          <span
            style={{
              background: STANFORD_COLORS.SUN,
            }}
          >
            Support independent, student-run journalism.
          </span>
        </h3>
        <RView
          style={{
            flexDirection: "row",
            alignItems: "center",
            fontSize: "1.3em",
          }}
          rStyle={{
            [MediaRule.MaxWidth]: {
              [BREAKPOINTS.MAX_WIDTH.TABLET]: {
                display: "none",
              },
            },
          }}
        >
          <div
            style={{
              marginRight: SECTION_PADDING,
            }}
          >
            <MdPaper fontSize="4em" className="DonateBannerTitleIcon" />
          </div>
          <div>
            Your support helps give staff members from all backgrounds the
            opportunity to conduct meaningful reporting on important issues at
            Stanford. All contributions are tax-deductible.
          </div>
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
        }}
      >
        <DonationForm currentPageUrl={currentPageUrl} bannerLocation="Header" />
      </div>
    </RView>
  );
};

export default HeaderDonationBanner;
