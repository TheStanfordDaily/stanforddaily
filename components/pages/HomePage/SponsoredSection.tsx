import React from "react";
import { Section } from "components/Section";
import ArticlesView from "components/ArticlesView";
import { STANFORD_COLORS } from "helpers/constants";
import { SectionProps } from "./SectionProps";

// Not currently in use
export const SponsoredSection: React.ElementType<SectionProps> = ({
  content,
}: SectionProps) => {
  return (
    <Section
      style={{
        backgroundColor: STANFORD_COLORS.CARDINAL_RED,
        flexGrow: 1,
        flexDirection: "column",
      }}
    >
      <ArticlesView
        initPosts={content}
        displayLoadMore={false}
        displayExcerpt={false}
        displayDateAuthor={false}
        textColor={STANFORD_COLORS.WHITE}
      />
    </Section>
  );
};
