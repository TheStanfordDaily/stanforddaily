import React from "react";
import { MediaRule, mergeRStyle } from "emotion-native-media-query";
import { BREAKPOINTS } from "helpers/constants";
import { Section, SECTION_PADDING } from "components/Section";
import { HeadlineArticle } from "../../article-links-and-thumbnails/HeadlineArticle";
import { TopThumbnailArticle } from "./TopThumbnailArticle";
import { Column } from "./Column";
import { DesktopRow } from "./DesktopRow";
import { SectionTitleWithLink } from "./SectionTitle";
import { SectionProps } from "./SectionProps";

// Currently used for the Featured section on homepage and for
// the center three posts in the Sports section on homepage
export const MainSection: React.ElementType<SectionProps> = ({
  content,
  category,
  sectionTitle,
  SectionTag = Section,
  style,
  rStyle,
}: SectionProps) => {
  console.log(category);
  return (
    <Column
      style={{
        flexGrow: 7,
        order: 1,
        ...style,
      }}
      rStyle={mergeRStyle(
        {
          [MediaRule.MinWidth]: {
            [BREAKPOINTS.TABLET]: {
              order: 2,
            },
          },
        },
        rStyle,
      )}
    >
      <SectionTag>
        {sectionTitle && <SectionTitleWithLink category={category} />}
        <HeadlineArticle post={content[0]} style={{ marginBottom: 20 }} />
        <DesktopRow>
          <Column
            rStyle={{
              [MediaRule.MinWidth]: {
                [BREAKPOINTS.TABLET]: {
                  paddingRight: SECTION_PADDING / 2,
                },
              },
            }}
          >
            <TopThumbnailArticle post={content[1]} />
          </Column>
          <Column
            rStyle={{
              [MediaRule.MinWidth]: {
                [BREAKPOINTS.TABLET]: {
                  paddingLeft: SECTION_PADDING / 2,
                },
              },
            }}
          >
            <TopThumbnailArticle post={content[2]} />
          </Column>
        </DesktopRow>
      </SectionTag>
    </Column>
  );
};
