import React from "react";
import { Section } from "components/Section";
import ArticlesView from "components/ArticlesView";
import { STANFORD_COLORS } from "helpers/constants";
import { SectionProps } from "./SectionProps";
import { SectionTitle, SectionTitleColorBackground } from "./SectionTitle";

export const SatireSection: React.ElementType<SectionProps> = ({
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
      <SectionTitleColorBackground>Satire</SectionTitleColorBackground>
      <br></br>
      <ArticlesView
        initPosts={content}
        displayLoadMore={false}
        displayExcerpt={false}
        displayDateAuthor={false}
        hideCategory={true}
        textColor={STANFORD_COLORS.WHITE}
      />
    </Section>
  );
};
