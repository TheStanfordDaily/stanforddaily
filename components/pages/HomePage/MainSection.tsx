import React from "react";
import { MediaRule, mergeRStyle } from "emotion-native-media-query";
import { BREAKPOINTS } from "helpers/constants";
import { Section, SECTION_PADDING } from "components/Section";
import { HeadlineArticle } from "./HeadlineArticle";
import { TopThumbnailArticle } from "./TopThumbnailArticle";
import { Column } from "./Column";
import { DesktopRow } from "./DesktopRow";
import { SectionTitleWithLink } from "./SectionTitle";
import { SectionProps } from "./SectionProps";

export const MainSection: React.ElementType<SectionProps> = ({
  content,
  category,
  sectionTitle,
  SectionTag = Section,
  style,
  rStyle,
}: SectionProps) => {
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
