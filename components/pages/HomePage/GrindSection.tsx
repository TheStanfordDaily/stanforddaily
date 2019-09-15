import React from "react";
import { RightListedSection } from "./RightListedSection";
import { SectionProps } from "./SectionProps";

export const GrindSection: React.ElementType = ({
  content,
  ...props
}: SectionProps) => {
  return (
    <RightListedSection content={content} sectionTitle="The Grind" {...props} />
  );
};
