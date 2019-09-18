import React from "react";
import { RightListedSection } from "./RightListedSection";
import { SectionProps } from "./SectionProps";

export const SponsoredSection: React.ElementType = ({
  content,
  ...props
}: SectionProps) => {
  return (
    <RightListedSection
      displayAuthor={false}
      content={content}
      sectionTitle="Sponsored Content"
      {...props}
    />
  );
};
