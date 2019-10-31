import React from "react";
import { getHomeMoreAsync } from "helpers/wpapi";
import { Section } from "components/Section";
import ArticlesView from "components/ArticlesView";
import { SectionTitle } from "./SectionTitle";
import { SectionProps } from "./SectionProps";

export const MoreFromTheDailySection: React.ElementType<SectionProps> = ({
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
        displayExcerpt={false}
        getExtraPosts={async pageNumber => {
          return getHomeMoreAsync(pageNumber);
        }}
      />
    </Section>
  );
};
