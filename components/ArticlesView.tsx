import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import RView, { MediaRule, mergeRStyle } from "emotion-native-media-query";
import { STANFORD_COLORS, FONTS, COLORS, BREAKPOINTS } from "helpers/constants";
import { Post } from "helpers/wpapi";
import { SECTION_PADDING } from "components/Section";
import { TextOnlyArticle } from "components/pages/HomePage/TextOnlyArticle";

const EachArticleView: React.ElementType = ({
  children,
  style,
  rStyle = {},
}) => {
  return (
    <RView
      style={{
        width: "100%",
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 250,
        marginLeft: SECTION_PADDING,
        marginRight: SECTION_PADDING,
        marginBottom: SECTION_PADDING,
        ...style,
      }}
      rStyle={mergeRStyle(
        {
          [MediaRule.MinWidth]: {
            [BREAKPOINTS.TABLET]: {
              minHeight: 340,
            },
          },
        },
        rStyle,
      )}
    >
      {children}
    </RView>
  );
};

interface ArticlesViewProps {
  initPosts: Post[];
  getExtraPosts: (pageNumber: number) => Promise<Post[]>;
  displayCategory?: boolean;
}

const ArticlesView: React.ElementType<ArticlesViewProps> = ({
  initPosts,
  getExtraPosts,
  displayCategory = true,
}: ArticlesViewProps) => {
  const [extraPosts, setExtraPosts]: [Post[], any] = React.useState([]);
  const [extraPageNumber, setExtraPageNumber]: [number, any] = React.useState(
    1,
  );
  const [loading, setLoading]: [boolean, any] = React.useState(false);

  const LoadMoreTag = Platform.OS === "web" ? "a" : View;
  let LoadMoreNativeColor = loading ? "black" : COLORS.LINK.DEFAULT;
  if (Platform.OS === "web") {
    LoadMoreNativeColor = loading ? "black" : "inherit";
  }
  return (
    <RView
      style={{
        flexWrap: "wrap",
        flexDirection: "row",
        // Offset the leftmost and rightmost articles' margin
        marginLeft: -SECTION_PADDING,
        marginRight: -SECTION_PADDING,
      }}
    >
      {initPosts.concat(extraPosts).map(post => (
        <EachArticleView key={post.id}>
          <TextOnlyArticle post={post} displayCategory={displayCategory} />
        </EachArticleView>
      ))}
      {[...Array(6)].map(value => (
        // Make sure the last row of articles will not stretch.
        // https://jsfiddle.net/7yr86aow/3/
        // It has 6 elements because 1, 2, 3, 4, 6 are all factors of 6.
        <EachArticleView
          key={value}
          style={{
            height: 0,
            marginBottom: 0,
          }}
          rStyle={{
            [MediaRule.MinWidth]: {
              [BREAKPOINTS.TABLET]: {
                minHeight: 0,
              },
            },
          }}
        />
      ))}
      <LoadMoreTag
        style={{
          width: "100%",
          paddingLeft: SECTION_PADDING / 2,
          paddingRight: SECTION_PADDING / 2,
        }}
      >
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 100,
            backgroundColor: STANFORD_COLORS.LIGHT_SANDSTONE,
          }}
          disabled={loading}
          onPress={async () => {
            setLoading(true);
            const newPosts = await getExtraPosts(extraPageNumber + 1);
            setExtraPosts(extraPosts.concat(newPosts));
            setExtraPageNumber(extraPageNumber + 1);
            setLoading(false);
          }}
        >
          <Text
            style={{
              ...FONTS.AUXILIARY,
              fontSize: 20,
              color: LoadMoreNativeColor,
            }}
          >
            {loading ? "Loading..." : "Load more"}
          </Text>
        </TouchableOpacity>
      </LoadMoreTag>
    </RView>
  );
};

export default ArticlesView;
