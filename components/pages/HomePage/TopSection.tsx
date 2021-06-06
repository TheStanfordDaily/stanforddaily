import React from "react";
import { Text, View } from "react-native";
import { Global } from "@emotion/core";
import css from "@emotion/css";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";
import LogoYoutube from "react-ionicons/lib/LogoYoutube";
import { BREAKPOINTS, STANFORD_COLORS, FONTS, LINKS } from "helpers/constants";
import { SectionStyle } from "components/Section";
import styled from "@emotion/styled";
import Link from "../../Link";

const globalStyles = {
  ".headerLogoIcon": {
    fill: STANFORD_COLORS.CARDINAL_RED,
    "&:hover": {
      fill: STANFORD_COLORS.BLACK,
    },
  },
  ".small-section-sodp": {
    display: "none",
  },
};

// Describes requirement of various properties of specific types
// https://www.typescriptlang.org/docs/handbook/interfaces.html
export interface SmallSectionProps {
  url: string;
  imageUrl: string;
  imageAlt: string;
  header: string;
  title: string;
  newTab?: boolean;
  className?: string;
  noRightMarginOnMobile?: boolean;
}

// Each of these consists of an image and link to some Daily material;
// they are the leftmost three elements of the top section (below nav bar)
const SmallSection: React.ElementType<SmallSectionProps> = ({
  url,
  imageUrl,
  imageAlt,
  header,
  title,
  newTab,
  className,
  noRightMarginOnMobile,
}) => {
  const additionalPropsForA: any = {};
  if (newTab) {
    additionalPropsForA.target = "_blank";
  }

  return (
    <a className={className} href={url} title={title} {...additionalPropsForA}>
      <View
        style={{
          marginRight: 30,
          flexDirection: "row",
          alignItems: "center",
        }}
        css={
          noRightMarginOnMobile &&
          css`
            @media (max-width: ${BREAKPOINTS.MAX_WIDTH.TABLET}px) {
              margin-right: 0px !important;
            }
          `
        }
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          style={{
            width: 50,
            height: 50,
            objectFit: "cover",
          }}
        />
        <View
          style={{
            marginLeft: 10,
          }}
        >
          <View>
            <Text
              style={{
                ...FONTS.AUXILIARY,
                color: STANFORD_COLORS.CARDINAL_DARK_RED,
                fontSize: 12,
              }}
            >
              {header}
            </Text>
          </View>
          <View>
            <Text
              css={css`
                font-weight: bold;
                @media (max-width: ${BREAKPOINTS.MAX_WIDTH.TABLET}px) {
                  font-weight: bold;
                }
              `}
            >
              {title}
            </Text>
          </View>
        </View>
      </View>
    </a>
  );
};

// For the social media accounts on the right side of the top section (below nav bar)
const LogoIconWithLink: React.ElementType = ({
  url,
  aria,
  LogoComponent,
}: any) => (
  <a
    href={url}
    aria-label={aria}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-flex",
      marginRight: 20,
    }}
    css={css`
      &:focus {
        padding: 3px;
        outline: 2px solid black !important;
      }
    `}
  >
    <LogoComponent className="headerLogoIcon" fontSize="25px" />
  </a>
);

// For the "SEND TIPS" and "GET OUR EMAILS" buttons
// on the rightmost side of the top section (below nav bar)
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
        color: #8c1515;
        &:hover,
        &:focus {
          color: white !important;
          background-color: #8c1515 !important;
        }
        &:visited {
          color: #8c1515;
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

const ViewRow: any = styled(View)({
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  [`@media (max-width: ${BREAKPOINTS.MAX_WIDTH.TABLET}px)`]: {
    minWidth: "100%",
    "&:first-child": {
      marginBottom: "20px",
    },
  },
});

// Component located immediately below Stanford Daily logo
// and nav bar on every page of the website
export const TopSection: React.ElementType = ({ style }) => {
  return (
    <SectionStyle
      style={{ paddingTop: 10, paddingBottom: 10 }}
      css={css`
        @media print {
          display: none;
        }
      `}
    >
      <View
        css={css`
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
          overflow: visible;
          @media (min-width: ${BREAKPOINTS.TABLET}px) {
            flex-wrap: nowrap;
          }
        `}
      >
        <ViewRow style={{ flex: 2 }}>
          <SmallSection
            className="small-section small-section-yearbook"
            url="/yearbook/"
            imageUrl={LINKS.YEARBOOK_LOGO}
            imageAlt="The cover of a former Quad yearbook"
            header="STANFORD STUDENTS"
            title="Buy your 2020-21 yearbook"
            newTab
            css={css`
              @media (max-width: ${BREAKPOINTS.MAX_WIDTH.TABLET}px) {
                display: none;
              }
              &:focus {
                padding: 3px;
                outline: 2px solid black !important;
              }
            `}
          />
          <SmallSection
            className="small-section small-section-sodp"
            url={LINKS.SODP}
            imageUrl={LINKS.SODP_LOGO}
            imageAlt="The Stanford Daily logo, a red S over a white background in Canterbury font"
            header="Stanford Open Data Portal"
            title="Explore Open Data"
            newTab
            css={css`
              @media (max-width: ${BREAKPOINTS.MAX_WIDTH.TABLET}px) {
                display: none;
              }
              &:focus {
                padding: 3px;
                outline: 2px solid black !important;
              }
            `}
          />
          <SmallSection
            className="small-section small-section-join"
            url="/submitting-to-the-daily/"
            imageUrl={LINKS.NEWSLETTER_LOGO}
            imageAlt="The Stanford Daily logo, a white S over a red background in Canterbury font"
            header="Submit work" //"Fall Workshops (all remote)"
            // mobile_header="High Schoolers"
            title="Or join us" //"Programs for High Schoolers"
            // mobile_title="Fall Workshops"
            newTab
            css={css`
              &:focus {
                padding: 3px;
                outline: 2px solid black !important;
              }
            `}
          />
          <SmallSection
            className="small-section small-section-newsletters"
            url="/high-school-programs/"
            imageUrl="https://wp.stanforddaily.com/wp-content/uploads/2020/11/cardinal-red-daily-s-logo.png"
            imageAlt="The Stanford Daily logo, a red S in Canterbury font"
            header="Summer Program | APPLY NOW"
            title="For high schoolers"
            newTab
            css={css`
              &:focus {
                padding: 3px;
                outline: 2px solid black !important;
              }
            `}
          />
        </ViewRow>
        <ViewRow>
          <Global styles={globalStyles} />
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
          <TextButtonWithLink
            url="/tips/"
            title="Send Tips"
            mobileTitle="Tips"
            tbwlStyle={{
              marginRight: 15,
            }}
          />
          <TextButtonWithLink
            url="/email-digests/"
            title="Get Our Emails"
            mobileTitle="Digest"
          />
        </ViewRow>
      </View>
    </SectionStyle>
  );
};
