import React from "react";
import { Image } from "react-native";
import styled from "@emotion/native";
import RView from "emotion-native-media-query";
import { SectionStyle, SectionWithoutStyle } from "components/Section";
import { MainSection } from "./MainSection";
import { LeftSection } from "./LeftSection";
import { DesktopRow } from "./DesktopRow";
import { SectionTitleWithLink } from "./SectionTitle";
import { SectionProps } from "./SectionProps";

// Appears on left-hand side of homepage
export const SportsSection: React.ElementType<SectionProps> = ({
  content,
  category,
  mainBeforeSide,
  style,
  rStyle,
}: SectionProps) => {
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
      <SectionStyle>
        <SectionTitleWithLink category={category}>
          <Image
            source={{
              uri: "/static/sectionHeaders/sports.png",
            }}
            accessibilityLabel="Sports"
            resizeMode="contain"
            style={{
              width: 120,
              height: 30,
            }}
          />
        </SectionTitleWithLink>
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
