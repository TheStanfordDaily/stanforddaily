import React from "react";
import { SECTION_PADDING } from "components/Section";
import DonationForm from "./DonationForm";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";
import LogoYoutube from "react-ionicons/lib/LogoYoutube";
import { LINKS, FONTS, STANFORD_COLORS } from "helpers/constants";
import Link from "components/Link";
import css from "@emotion/css";

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
        borderRadius: 0,
        lineHeight: "30px",
        color: STANFORD_COLORS.WHITE,
        display: "inlineBlock",
        cursor: "pointer",
        fontSize: 15,
        fontWeight: 700,
        letterSpacing: 1,
        outline: 0,
        padding: 10,
        textDecoration: "none",
        ...tbwlStyle,
      }}
      css={css`
        background-color: #8c1515;
        &:hover {
          background-color: #54100b !important;
        }
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

// Box at bottom of posts, right above AuthorBox
const PostFooterBox: React.ElementType = () => {
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
      css={css`
        @media print {
          display: none;
        }
      `}
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

      <DonationForm />
      <br></br>
      <TextButtonWithLink
        url="/email-digests/"
        title="Get Our Emails"
        mobileTitle="Get Our Emails"
      />
      <div>
        <br></br>
        <LogoIconWithLink
          url={LINKS.FACEBOOK}
          aria="Facebook"
          LogoComponent={LogoFacebook}
        />
        <LogoIconWithLink
          url={LINKS.TWITTER}
          aria="Twitter"
          LogoComponent={LogoTwitter}
        />
        <LogoIconWithLink
          url={LINKS.INSTAGRAM}
          aria="Instagram"
          LogoComponent={LogoInstagram}
        />
        <LogoIconWithLink
          url={LINKS.YOUTUBE}
          aria="Youtube"
          LogoComponent={LogoYoutube}
        />
      </div>
    </div>
  );
};

export default PostFooterBox;
