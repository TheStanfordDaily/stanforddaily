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
          paddingLeft: 15,
          paddingBottom: 0,
        }}
      >
        <a href="/category/opinions/">See more Opinions articles</a>
      </p>
    </div>
  );
};
