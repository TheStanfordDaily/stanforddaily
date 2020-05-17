import React from "react";
import { SECTION_PADDING } from "components/Section";
import DonationForm from "./DonationForm";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";
import LogoYoutube from "react-ionicons/lib/LogoYoutube";
import { LINKS, FONTS, STANFORD_COLORS } from "helpers/constants";
import Link from "components/Link";

const LogoIconWithLink: React.ElementType = ({ url, LogoComponent }: any) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-flex",
      marginRight: 20,
    }}
  >
    <LogoComponent className="headerLogoIcon" fontSize="25px" />
  </a>
);

const TextButtonWithLink: React.ElementType = ({
  url,
  urlFile = "/[year]/",
  title,
  mobileTitle,
  tbwlStyle,
}: any) => (
  <Link href={urlFile} as={url}>
    <a
      title={title}
      style={{
        ...FONTS.AUXILIARY,
        color: STANFORD_COLORS.CARDINAL_RED,
        border: `2px ${STANFORD_COLORS.CARDINAL_RED} solid`,
        fontSize: 14,
        letterSpacing: 1.5,
        padding: 8,
        textAlign: "center",
        ...tbwlStyle,
      }}
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
      <br></br>
      <TextButtonWithLink
        url="/email-digests/"
        title="Get Our Emails"
        mobileTitle="Digest"
      />
      <div>
        <br></br>
        <LogoIconWithLink url={LINKS.FACEBOOK} LogoComponent={LogoFacebook} />
        <LogoIconWithLink url={LINKS.TWITTER} LogoComponent={LogoTwitter} />
        <LogoIconWithLink url={LINKS.INSTAGRAM} LogoComponent={LogoInstagram} />
        <LogoIconWithLink url={LINKS.YOUTUBE} LogoComponent={LogoYoutube} />
      </div>
    </div>
  );
};

export default FooterDonationBanner;
