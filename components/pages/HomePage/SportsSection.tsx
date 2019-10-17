import React from "react";
import { Image } from "react-native";
import styled from "@emotion/native";
import RView from "emotion-native-media-query";
import { SectionStyle, SectionWithoutStyle } from "components/Section";
import Link from "next/link";
import { MainSection } from "./MainSection";
import { LeftSection } from "./LeftSection";
import { DesktopRow } from "./DesktopRow";
import { SectionTitle } from "./SectionTitle";
import { SectionProps } from "./SectionProps";

export const SportsSection: React.ElementType = (props: SectionProps) => {
  const { content, mainBeforeSide, style, rStyle } = props;
  const leftContent = content.slice(3);
  const mainContent = content.slice(0, 3);
  const SectionStyleWithoutPaddingTop = styled(SectionStyle)({
    paddingTop: 0,
  });
  const LeftSportSection: React.ElementType = (lsProps: SectionProps) => {
    return (
      <LeftSection
        content={leftContent}
        sectionTitle={null}
        SectionTag={SectionStyleWithoutPaddingTop}
        {...lsProps}
      />
    );
  };
  const MainSportSection: React.ElementType = (msProps: SectionProps) => {
    return (
      <MainSection
        content={mainContent}
        sectionTitle={null}
        SectionTag={SectionStyleWithoutPaddingTop}
        {...msProps}
      />
    );
  };
  return (
    <RView
      WebTag={SectionWithoutStyle}
      NativeTag={SectionWithoutStyle}
      style={style}
      rStyle={rStyle}
    >
      <SectionStyle
        style={{ paddingBottom: 0, paddingLeft: 0, cursor: "pointer" }}
      >
        <SectionTitle>
          <Link href="/category/sports/">
            <Image
              source={{
                uri: "/static/sectionHeaders/sports.png",
              }}
              accessibilityLabel="Sports"
              resizeMode="contain"
              style={{
                width: 140,
                height: 30,
              }}
            />
          </Link>
        </SectionTitle>
      </SectionStyle>
      <DesktopRow>
        {mainBeforeSide ? (
          <>
            <MainSportSection />
            <LeftSportSection />
          </>
        ) : (
          <>
            <LeftSportSection />
            <MainSportSection />
          </>
        )}
      </DesktopRow>
    </RView>
  );
};
