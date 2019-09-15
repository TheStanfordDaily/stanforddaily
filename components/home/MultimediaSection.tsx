import React from "react";
import { Section } from "../Section";
import { SectionTitle } from "../../pages/SectionTitle";
import { SectionProps } from "../../pages/SectionProps";

export const MultimediaSection: React.ElementType = (props: SectionProps) => {
  const { style } = props;
  return (
    <Section
      style={{
        flexGrow: 1,
        height: 400,
        ...style,
      }}
    >
      <SectionTitle>Video & Photograph</SectionTitle>
    </Section>
  );
};
