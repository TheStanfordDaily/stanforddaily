import React from "react";
import { Section } from "components/Section";
import ArticlesView from "components/ArticlesView";
import { RightListedSection } from "./RightListedSection";
import { SectionTitle } from "./SectionTitle";
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

export const MoreFromTheDailySection: React.ElementType = ({
  content,
}: SectionProps) => {
  return (
    <Section
      style={{
        flexGrow: 1,
        flexDirection: "column",
      }}
    >
      <SectionTitle>More from The Daily</SectionTitle>
      <ArticlesView
        initPosts={content}
        // getExtraPosts={async pageNumber => {
        //   return getHomeMoreAsync(pageNumber);
        // }}
      />
    </Section>
  );
};
