import React from "react";
import MdPaper from "react-ionicons/lib/MdPaper";
import DonationForm from "./DonationForm";

const HeaderDonationBanner: React.ElementType = ({ currentPageUrl }) => {
  return (
    <div className="DonateHeader">
      <div className="container">
        <div className="row DonateBannerRow">
          <h3 className="DonateBannerTitle">
            <MdPaper fontSize="1.5em" className="DonateBannerTitleIcon" />
            <span className="DonateBannerTitleText">
              Help us preserve <em>your</em> history today!
            </span>
          </h3>
          <DonationForm
            currentPageUrl={currentPageUrl}
            bannerLocation="Header"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderDonationBanner;
