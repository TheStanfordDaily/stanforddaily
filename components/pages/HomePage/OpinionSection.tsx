import React from "react";
import { RightListedSection } from "./RightListedSection";
import { SectionProps } from "./SectionProps";

export const OpinionSection: React.ElementType = ({
  content,
  ...props
}: SectionProps) => {
  return (
    <div>
      <RightListedSection
        content={content}
        sectionTitle="Opinions"
        {...props}
      />
      <p
        style={{
          paddingLeft: 16,
        }}
      >
        <a href="/category/opinions/">See more</a>
      </p>
    </div>
  );
};
