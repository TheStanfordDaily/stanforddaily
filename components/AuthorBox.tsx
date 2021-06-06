import React from "react";
import { View, Text } from "react-native";
import { Author } from "helpers/wpapi";
import { FONTS, COLORS, STANFORD_COLORS } from "helpers/constants";
import { AuthorView } from "./AuthorView";
import css from "@emotion/css";

// Describes requirement of having author property that is
// an Author and linkToAuthor property that is a boolean
// https://www.typescriptlang.org/docs/handbook/interfaces.html
interface AuthorBoxProps {
  author: Author;
  linkToAuthor?: boolean;
}

// Box containing author name, profile picture and bio at bottom of
// a post; author name links to their ArticleListPage
const AuthorBox: React.ElementType<AuthorBoxProps> = ({
  author,
  linkToAuthor = true,
}: AuthorBoxProps) => {
  const { description, avatarUrl } = author;
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 30,
        paddingVertical: 40,
        borderRadius: 5,
        backgroundColor: STANFORD_COLORS.LIGHT_SANDSTONE,
        marginBottom: 10,
      }}
      css={css`
        @media print {
          display: none;
        }
      `}
    >
      <View>
        <img
          src={
            avatarUrl ===
            "https://www.stanforddaily.com/wp-content/themes/thestanforddaily/img/placeholder-avatar.png"
              ? "/static/cardinal-red-daily-s-logo.png"
              : avatarUrl
          }
          alt="The author's profile picture"
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
          }}
        />
      </View>
      <View
        style={{
          marginLeft: 20,
          flex: 1,
          justifyContent: "center",
        }}
      >
        <AuthorView
          authors={[author]}
          style={{
            ...FONTS.ARTICLE_TITLE,
            fontSize: 24,
            textTransform: "none",
          }}
          aStyle={{
            ...(linkToAuthor ? { color: COLORS.LINK.DEFAULT } : {}),
          }}
          linkToAuthor={linkToAuthor}
        />
        {description ? (
          <Text
            style={{
              ...FONTS.CONTENT,
              marginTop: 10,
              fontSize: 18,
              lineHeight: "1.5em",
            }}
          >
            {description}
          </Text>
        ) : (
          undefined
        )}
      </View>
    </View>
  );
};

export default AuthorBox;
