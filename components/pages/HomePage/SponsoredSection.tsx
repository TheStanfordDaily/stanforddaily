import React from "react";
import { Section } from "../../Section";
import { SectionTitle } from "./SectionTitle";
import { SectionProps } from "./SectionProps";

export const SponsoredSection: React.ElementType = ({
  content,
  ...props
}: SectionProps) => {
  return (
    <Section
      style={{
        height: 300,
      }}
    >
      <SectionTitle>sponsored content</SectionTitle>
    </Section>
  );
};
