import React from "react";
import { Text, View, Image } from "react-native";
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

export interface SmallSectionProps {
  url: string;
  imageUrl: string;
  header: string;
  title: string;
  newTab?: boolean;
  className?: string;
}

const SmallSection: React.ElementType<SmallSectionProps> = ({
  url,
  imageUrl,
  header,
  title,
  newTab,
  className,
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
      >
        <Image
          resizeMode="cover"
          style={{
            width: 50,
            height: 50,
          }}
          source={{
            uri: imageUrl,
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
              css={css`
                @media (max-width: ${BREAKPOINTS.MAX_WIDTH.TABLET}px) {
                  font-weight: bold;
                }
              `}
            >
              {header}
            </Text>
          </View>
          <View>
            <Text
              css={css`
                font-weight: bold;
                @media (max-width: ${BREAKPOINTS.MAX_WIDTH.TABLET}px) {
                  display: none;
                }
              `}
            >
              {title}
            </Text>
          </View>
          {/* <View>
          <Text>Subtitle here lorem</Text>
        </View> */}
        </View>
      </View>
    </a>
  );
};

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
          <span
            css={css`
              display: none;
              @media (min-width: ${BREAKPOINTS.TABLET}px) {
                display: inline;
              }
            `}
          >
            {title}
          </span>
          <span
            css={css`
              display: inline;
              @media (min-width: ${BREAKPOINTS.TABLET}px) {
                display: none;
              }
            `}
          >
            {mobileTitle}
          </span>
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

export const TopSection: React.ElementType = ({ style }) => {
  return (
    <SectionStyle style={{ paddingTop: 10, paddingBottom: 10 }}>
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
          />
          <SmallSection
            className="small-section small-section-sodp"
            url={LINKS.SODP}
            imageUrl={LINKS.SODP_LOGO}
            header="Stanford Open Data Portal"
            title="Explore Open Data"
            newTab
          />
          <SmallSection
            className="small-section small-section-newsletters"
            url="/category/newsletters/"
            imageUrl={LINKS.NEWSLETTER_LOGO}
            header="Weekend Roundup"
            title="Read Our Weekly Newsletter"
            newTab
          />
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
          <SmallSection
            className="small-section small-section-coronavirus"
            url="/tag/coronavirus/"
            imageUrl={LINKS.CORONAVIRUS_LOGO}
            header="Coronavirus"
            title="Latest Coverage"
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
