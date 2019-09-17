import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import RView from "emotion-native-media-query";
import { STANFORD_COLORS, FONTS, COLORS } from "helpers/constants";
import { Post } from "helpers/wpapi";
import { SECTION_PADDING } from "components/Section";
import { TextOnlyArticle } from "components/pages/HomePage/TextOnlyArticle";

interface ArticlesViewProps {
  initPosts: Post[];
  getExtraPosts: (pageNumber: number) => Promise<Post[]>;
}

const ArticlesView: React.ElementType<ArticlesViewProps> = ({
  initPosts,
  getExtraPosts,
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
        marginLeft: -SECTION_PADDING / 2,
        marginRight: -SECTION_PADDING / 2,
      }}
    >
      {initPosts.map(post => (
        <TextOnlyArticle key={post.id} post={post} />
      ))}
      {extraPosts.map(post => (
        <TextOnlyArticle key={post.id} post={post} />
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
              fontSize: 30,
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
