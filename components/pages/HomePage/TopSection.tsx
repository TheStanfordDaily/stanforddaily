import React from "react";
import { Text, View, Image } from "react-native";
import Link from "next/link";
import { Global } from "@emotion/core";
import RView, { MediaRule } from "emotion-native-media-query";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";
import LogoYoutube from "react-ionicons/lib/LogoYoutube";
import { BREAKPOINTS, STANFORD_COLORS, FONTS } from "helpers/constants";
import { SectionStyle } from "components/Section";

export const TopSection: React.ElementType = ({ style }) => {
  const SmallSection: React.ElementType = (sProps: any) => {
    return (
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
            uri:
              "https://www.stanforddaily.com/wp-content/uploads/2018/10/Stanford_School_of_Medicine_Li_Ka_Shing_Center.jpg",
          }}
        />
        <View
          style={{
            marginLeft: 10,
          }}
        >
          <View>
            <Text>Issue #</Text>
          </View>
          <View>
            <Text>The Daily Magazine</Text>
          </View>
          <View>
            <Text>Subtitle here lorem</Text>
          </View>
        </View>
      </View>
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
  return (
    <RView
      style={{ ...style }}
      rStyle={{
        [MediaRule.MaxWidth]: {
          [BREAKPOINTS.MAX_WIDTH.DESKTOP]: {
            display: "none",
          },
        },
      }}
    >
      <SectionStyle style={{ paddingTop: 10, paddingBottom: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SmallSection />
            <SmallSection />
            <SmallSection />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Global
              styles={{
                ".headerLogoIcon": {
                  fill: STANFORD_COLORS.CARDINAL_RED,
                  "&:hover": {
                    fill: STANFORD_COLORS.BLACK,
                  },
                },
              }}
            />
            <LogoIconWithLink
              url="https://www.facebook.com/stanforddaily/"
              LogoComponent={LogoFacebook}
            />
            <LogoIconWithLink
              url="https://twitter.com/StanfordDaily"
              LogoComponent={LogoTwitter}
            />
            <LogoIconWithLink
              url="https://www.instagram.com/stanforddaily/"
              LogoComponent={LogoInstagram}
            />
            <LogoIconWithLink
              url="https://www.youtube.com/channel/UCWg3QqUzqxXt6herm5sMjNw"
              LogoComponent={LogoYoutube}
            />
            <Link href="/[year]/" as="/email-digests/">
              <a
                title="Email Digest"
                style={{
                  ...FONTS.AUXILIARY,
                  color: STANFORD_COLORS.WHITE,
                  backgroundColor: STANFORD_COLORS.CARDINAL_RED,
                  letterSpacing: 1.5,
                  padding: 10,
                }}
              >
                Email Digest
              </a>
            </Link>
          </View>
        </View>
      </SectionStyle>
    </RView>
  );
};
