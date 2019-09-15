import React from "react";
import { RightListedSection } from "./RightListedSection";
import { SectionProps } from "../../pages/SectionProps";

export const OpinionSection: React.ElementType = ({
  content,
  ...props
}: SectionProps) => {
  return (
    <RightListedSection content={content} sectionTitle="Opinion" {...props} />
  );
};
