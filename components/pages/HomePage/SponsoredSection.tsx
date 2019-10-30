import React from "react";
import { getCategoryAsync } from "helpers/wpapi";
import { Section } from "components/Section";
import ArticlesView from "components/ArticlesView";
import { STANFORD_COLORS } from "helpers/constants";
import { SectionProps } from "./SectionProps";

export const SponsoredSection: React.ElementType = ({
  content,
}: SectionProps) => {
  const [post, setPost] = React.useState([]);
  React.useEffect(() => {
    getCategoryAsync(["sponsored"], 1).then(function(testVar) {
      setPost(testVar.posts.slice(0, 4));
    });
  }, []);
  return (
    <Section
      style={{
        backgroundColor: STANFORD_COLORS.CARDINAL_RED,
        flexGrow: 1,
        flexDirection: "column",
      }}
    >
      <ArticlesView
        initPosts={post}
        displayLoadMore={false}
        displayCategory={false}
        excerptBool={false}
        dateAuthorBool={false}
        whiteHeadline={false}
      />
    </Section>
  );
};
