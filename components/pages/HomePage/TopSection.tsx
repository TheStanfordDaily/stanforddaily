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
  header: string;
  //mobile_header?: string;
  title: string;
  //mobile_title?: string;
  newTab?: boolean;
  className?: string;
  noRightMarginOnMobile?: boolean;
}

// Each of these consists of an image and link to some Daily material;
// they are the leftmost three elements of the top section (below nav bar)
const SmallSection: React.ElementType<SmallSectionProps> = ({
  url,
  imageUrl,
  header,
  //mobile_header,
  title,
  //mobile_title,
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
              // css={css`
              //   @media (max-width: ${BREAKPOINTS.MAX_WIDTH.TABLET}px) {
              //     font-weight: bold;
              //   }
              // `}
            >
              {header}
            </Text>
            {/* <Text
              style={{
                ...FONTS.AUXILIARY,
                color: STANFORD_COLORS.CARDINAL_DARK_RED,
                fontSize: 12,
              }}
              css={css`
                @media (max-width: ${!BREAKPOINTS.MAX_WIDTH.TABLET}px) {
                  display: none;
                  font-weight: bold;
                }
              `}
            >
              {mobile_header}
            </Text> */}
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
            {/* <Text
              css={css`
                font-weight: bold;
                @media (max-width: ${!BREAKPOINTS.MAX_WIDTH.TABLET}px) {
                  display: none;
                }
              `}
            >
              {mobile_title}
            </Text> */}
          </View>
          {/* <View>
          <Text>Subtitle here lorem</Text>
        </View> */}
        </View>
      </View>
    </a>
  );
};

// For the social media accounts on the right side of the top section (below nav bar)
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
        &:hover {
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
            url="https://www.jostens.com/apps/store/productBrowse/1007644/Stanford-University/2021-Yearbook/2020110604245966376/CATALOG_SHOP/"
            imageUrl={LINKS.YEARBOOK_LOGO}
            header="STANFORD STUDENTS"
            title="Buy your 2020-21 yearbook"
            newTab
            css={css`
              @media (max-width: ${BREAKPOINTS.MAX_WIDTH.TABLET}px) {
                display: none;
              }
            `}
          />
          {/* <SmallSection
            className="small-section small-section-issuu"
            url={LINKS.ISSUU}
            imageUrl={LINKS.ISSUU_LOGO}
            header="Newspaper & Magazine"
            title="Read Our Print Issues"
            newTab
            css={css`
              @media (max-width: ${BREAKPOINTS.MAX_WIDTH.TABLET}px) {
                display: none;
              }
            `}
          /> */}
          <SmallSection
            className="small-section small-section-sodp"
            url={LINKS.SODP}
            imageUrl={LINKS.SODP_LOGO}
            header="Stanford Open Data Portal"
            title="Explore Open Data"
            newTab
            css={css`
              @media (max-width: ${BREAKPOINTS.MAX_WIDTH.TABLET}px) {
                display: none;
              }
            `}
          />
          <SmallSection
            className="small-section small-section-join"
            url="/submitting-to-the-daily/"
            imageUrl={LINKS.NEWSLETTER_LOGO}
            header="Submit work" //"Fall Workshops (all remote)"
            // mobile_header="High Schoolers"
            title="Or join us" //"Programs for High Schoolers"
            // mobile_title="Fall Workshops"
            newTab
          />
          {/* <SmallSection
            className="small-section small-section-newsletters"
            url="/high-school-programs/"
            imageUrl={LINKS.NEWSLETTER_LOGO}
            header="Summer Programs | APPLY NOW"
            title="For high school students nationally"
            newTab
          /> */}
          {/* <SmallSection
              imageUrl="https://www.stanforddaily.com/wp-content/uploads/2018/10/Stanford_School_of_Medicine_Li_Ka_Shing_Center.jpg"
              header="Issue #"
              title="The Daily Magazine"
            /> */}
          {/* <SmallSection
              className="small-section small-section-podcasts"
              url="/category/podcasts/"
              imageUrl={LINKS.DAILY_BREW_LOGO}
              header="Podcasts"
              title="The Daily Brew & More"
            /> */}
          {/* <SmallSection
            className="small-section small-section-adopt-a-small-business"
            url="/adopt-a-small-business-with-stanford-daily-advertising"
            imageUrl={LINKS.ADOPT_A_BUSINESS_LOGO}
            header="Adopt a" //"Stanford Daily Advertising"
            //mobile_header="Adopt a"
            title="Business" //"Adopt a Small Business"
            //mobile_title="Business"
          /> */}
          <SmallSection
            className="small-section small-section-elections"
            url="/category/us-elections-2020/"
            imageUrl={LINKS.US_ELECTIONS_2020_LOGO}
            header="US Elections 2020"
            title="Our coverage"
            noRightMarginOnMobile={true}
          />
        </ViewRow>
        <ViewRow>
          <Global styles={globalStyles} />
          <LogoIconWithLink url={LINKS.FACEBOOK} LogoComponent={LogoFacebook} />
          <LogoIconWithLink url={LINKS.TWITTER} LogoComponent={LogoTwitter} />
          <LogoIconWithLink
            url={LINKS.INSTAGRAM}
            LogoComponent={LogoInstagram}
          />
          <LogoIconWithLink url={LINKS.YOUTUBE} LogoComponent={LogoYoutube} />
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
