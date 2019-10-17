import React from "react";
import Link from "next/link";
import { RightListedSection } from "./RightListedSection";
import { SectionProps } from "./SectionProps";

export const OpinionSection: React.ElementType = ({
  content,
  ...props
}: SectionProps) => {
  return (
    <Link href="/category/opinions/">
      <RightListedSection
        content={content}
        sectionTitle="Opinions"
        {...props}
      />
    </Link>
  );
};
