import React from "react";
import { SECTION_PADDING } from "components/Section";
import DonationForm from "./DonationForm";

const FooterDonationBanner: React.ElementType = ({ currentPageUrl }) => {
  return (
    <div
      style={{
        background: "#eee",
        padding: SECTION_PADDING,
        borderTopWidth: 1,
        borderTopStyle: "solid",
        borderTopColor: "#aa0000",
        fontFamily: '"PT Serif", serif',
        marginTop: SECTION_PADDING,
        marginBottom: SECTION_PADDING,
      }}
    >
      <h3
        style={{
          marginTop: 2,
          fontSize: 20,
        }}
      >
        While you're here...
      </h3>
      <p>
        We're a student-run organization committed to providing hands-on
        experience in journalism, digital media and business for the next
        generation of reporters. Your support makes a difference in helping give
        staff members from all backgrounds the opportunity to develop important
        professional skills and conduct meaningful reporting. All contributions
        are tax-deductible.
      </p>
      <DonationForm currentPageUrl={currentPageUrl} bannerLocation="Footer" />
    </div>
  );
};

export default FooterDonationBanner;
