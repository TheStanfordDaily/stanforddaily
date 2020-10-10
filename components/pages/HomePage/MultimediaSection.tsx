import React from "react";
import { Section } from "components/Section";
import { SectionTitleWithLink } from "./SectionTitle";
import { SectionProps } from "./SectionProps";

// Currently unused
export const MultimediaSection: React.ElementType<SectionProps> = ({
  style,
  category,
}: SectionProps) => {
  return (
    <Section
      style={{
        flexGrow: 1,
        height: 400,
        ...style,
      }}
    >
      <SectionTitleWithLink category={category}>
        Video & Photograph
      </SectionTitleWithLink>
    </Section>
  );
};
