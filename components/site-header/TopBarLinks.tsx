import React from "react";
import { Text, ScrollView, Platform } from "react-native";
import { STANFORD_COLORS, FONTS, LINKS } from "helpers/constants";
import { Category } from "helpers/wpapi";
import { SECTION_PADDING } from "../Section";
import { CategoryLink } from "../CategoryLink";
import SearchLink from "./SearchLink";
import css from "@emotion/css";

enum LinkType {
  LINK,
  CATEGORY,
  SEARCH,
}

type CategoryLink = Category & {
  type: LinkType.CATEGORY;
};

type LinkLink = {
  type: LinkType.LINK;
  name: string;
  url: string;
};

type SearchLink = {
  type: LinkType.SEARCH;
  name: string;
};

// The list of links that appear in the top bar, NOT the footer,
// in order of display from left to right
export const TopBarLinks: React.ElementType = ({ itemStyle }: any) => {
  // https://www.stanforddaily.com/wp-json/tsd/json/v1/nav
  const categoryLinkList: (CategoryLink | LinkLink | SearchLink)[] = [
    {
      type: LinkType.SEARCH,
      name: "Search",
    } as SearchLink,
    {
      type: LinkType.CATEGORY,
      id: 3,
      name: "News",
      slug: "news",
      url: "/category/news/",
    },
    {
      type: LinkType.CATEGORY,
      id: 23,
      name: "Sports",
      slug: "sports",
      url: "/category/sports/",
    },
    // {
    //   type: LinkType.CATEGORY,
    //   id: 55043,
    //   name: "SPONSORED",
    //   slug: "sponsored",
    //   url: "/category/sponsored/",
    // },
    {
      type: LinkType.CATEGORY,
      id: 24,
      name: "Opinions",
      slug: "opinions",
      url: "/category/opinions/",
    },
    {
      type: LinkType.CATEGORY,
      id: 25,
      name: "Arts & Life",
      slug: "arts-life",
      url: "/category/arts-life/",
    },
    {
      type: LinkType.CATEGORY,
      id: 32278,
      name: "The Grind",
      slug: "thegrind",
      url: "/category/thegrind/",
    },
    {
      type: LinkType.CATEGORY,
      id: 55796,
      name: "Humor",
      slug: "humor",
      url: "/category/humor/",
    },
    // {
    //   type: LinkType.CATEGORY,
    //   id: 53462,
    //   name: "Magazine",
    //   slug: "magazine",
    //   url: "/category/magazine/",
    // },
    {
      type: LinkType.CATEGORY,
      id: 58277,
      name: "Data",
      slug: "94305",
      url: "/category/@94305/",
    },
    {
      type: LinkType.LINK,
      name: "Podcasts",
      url: LINKS.THE_DAILY_BREW_SPOTIFY,
    } as LinkLink,
    {
      type: LinkType.LINK,
      name: "Video",
      url: LINKS.YOUTUBE,
    } as LinkLink,
    // {
    //   type: LinkType.LINK,
    //   name: "Yearbook",
    //   url: "/yearbook/",
    // } as LinkLink,
    {
      type: LinkType.LINK,
      name: "Cartoons",
      url: "/category/cartoons/",
    } as LinkLink,
    {
      type: LinkType.LINK,
      name: "Resources",
      url:
        "https://docs.google.com/document/d/1qnj5jUz4HOvkyPf2wy8nBbUHYtk11jXng4VE2FugLXU/edit",
    } as LinkLink,
    {
      type: LinkType.LINK,
      name: "About Us",
      url: "/about/",
    } as LinkLink,
    {
      type: LinkType.LINK,
      name: "Alumni",
      url: "https://alumni.stanforddaily.com/",
    } as LinkLink,
    {
      type: LinkType.LINK,
      name: "Ads",
      url: "/advertise/",
    } as LinkLink,
    {
      type: LinkType.LINK,
      name: "Archives",
      url: LINKS.ARCHIVES,
    } as LinkLink,
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingLeft: SECTION_PADDING,
        paddingRight: SECTION_PADDING,
        margin: "auto",
      }}
    >
      {categoryLinkList.map((item, i) => {
        const _itemStyle = {
          ...itemStyle,
        };
        if (i === categoryLinkList.length - 1) {
          _itemStyle.marginRight = 0;
        }
        // We have to add `paddingTop` and `paddingBottom` here instead of in `contentContainerStyle`
        // because if we do that, the letter will get cut off at the bottom.
        const actualStyle = {
          ...FONTS.AUXILIARY,
          color: STANFORD_COLORS.WHITE,
          marginRight: 25,
          paddingTop: SECTION_PADDING,
          paddingBottom: SECTION_PADDING,
          fontSize: 12.5,
        };
        if (item.type === LinkType.SEARCH) {
          return <SearchLink />;
        } else if (item.type === LinkType.CATEGORY) {
          const category = item as CategoryLink;
          return (
            <CategoryLink
              key={category.id}
              category={category}
              style={actualStyle}
              hasCustomOutline={true}
              isInNav={true}
            />
          );
        } else {
          const link = item as LinkLink;
          if (Platform.OS !== "web") {
            // TODO: OPEN PAGE IN WEBVIEW
            return <></>;
          }
          return (
            <Text
              style={actualStyle}
              key={link.url}
              css={css`
                @media print {
                  display: none;
                }
              `}
            >
              <a
                href={link.url}
                style={{ color: "inherit" }}
                css={css`
                  &:focus {
                    padding: 3px;
                    outline: 2px solid yellow;
                  }
                `}
              >
                {link.name}
              </a>
            </Text>
          );
        }
      })}
    </ScrollView>
  );
};
