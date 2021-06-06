import React from "react";
import { Text, View, Platform } from "react-native";
import { FONTS } from "helpers/constants";
import { Author } from "helpers/wpapi";
import Link from "./Link";
import css from "@emotion/css";

// Used for byline within a post, NOT on homepage, ArticleList pages, etc.
export const AuthorsTextWithLink: React.ElementType = ({
  authors,
  linkToAuthor = true,
  aStyle,
  ...props
}: {
  authors: Author[];
  [key: string]: any;
}) => {
  const authorsTextWithLink = authors.map((author, index) => (
    <React.Fragment key={author.id}>
      {index > 0 &&
        (index === authors.length - 1
          ? " "
          : authors.length !== 2
          ? ", "
          : " ")}
      {index > 0 && index === authors.length - 1 && (
        <span style={{ textTransform: "none" }}>and </span>
      )}
      {linkToAuthor ? (
        <Link href="/author/[slug]" as={author.url}>
          <a
            title={author.displayName}
            rel="author"
            style={{
              color: "inherit",
              marginTop: ".5em",
              display: "inline-block",
              ...aStyle,
            }}
            css={css`
              &:focus {
                padding: 3px;
                outline: 2px solid black !important;
              }
            `}
            {...props}
          >
            {author.displayName}
          </a>
        </Link>
      ) : (
        author.displayName
      )}
    </React.Fragment>
  ));
  return <>{authorsTextWithLink}</>;
};

// Used in AuthorBox and AuthorAndDateView
export const AuthorView: React.ElementType = ({
  authors,
  style,
  containerStyle,
  aStyle,
  linkToAuthor = true,
  ...props
}: {
  authors: Author[];
  [key: string]: any;
}) => {
  if (Platform.OS === "web") {
    return (
      <View style={containerStyle}>
        <Text
          style={{
            fontSize: 12.5,
            ...FONTS.AUXILIARY,
            ...style,
          }}
        >
          <AuthorsTextWithLink
            authors={authors}
            aStyle={aStyle}
            linkToAuthor={linkToAuthor}
            {...props}
          />
        </Text>
      </View>
    );
  } else {
    return (
      <Text
        style={{
          ...FONTS.AUXILIARY,
          ...style,
        }}
        {...props}
      >
        {authors.map(author => author.displayName).join(", ")}
      </Text>
    );
  }
};
