import React from "react";
import { Image } from "react-native";
import { Section } from "components/Section";
import ArticlesView from "components/ArticlesView";
import { SectionProps } from "./SectionProps";
import { SectionTitleWithLink } from "./SectionTitle";

export const HumorSection: React.ElementType<SectionProps> = ({
  category,
  content,
}: SectionProps) => {
  return (
    <Section
      style={{
        backgroundColor: "#fef2f1",
        flexGrow: 1,
        flexDirection: "column",
      }}
    >
      <SectionTitleWithLink category={category} isHumor={true}>
        <Image
          source={{
            uri: "/static/soc-no-background.png",
          }}
          accessibilityLabel="Humor"
          resizeMode="contain"
          style={{
            height: 75,
            width: 300,
            marginBottom: -20,
          }}
        />
      </SectionTitleWithLink>
      <ArticlesView
        initPosts={content}
        displayLoadMore={false}
        displayExcerpt={false}
        displayDateAuthor={true}
        noDates={true}
        isHumor2={true}
      />
    </Section>
  );
};
