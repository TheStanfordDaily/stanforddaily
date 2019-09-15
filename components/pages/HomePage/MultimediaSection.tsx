import React from "react";
import { Section } from "components/Section";
import { SectionTitle } from "./SectionTitle";
import { SectionProps } from "./SectionProps";

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
