import React from "react";
import { RightListedSection } from "./RightListedSection";
import { SectionProps } from "./SectionProps";

// Appears on right-hand side of homepage
export const OpinionSection: React.ElementType<SectionProps> = ({
  content,
  category,
  ...props
}: SectionProps) => {
  return (
    <RightListedSection
      content={content}
      category={category}
      sectionTitle="Opinions"
      {...props}
    />
  );
};
