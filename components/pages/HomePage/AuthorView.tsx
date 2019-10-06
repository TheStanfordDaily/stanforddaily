import React from "react";
import { Text, View, Platform } from "react-native";
import Link from "next/link";
import { FONTS } from "helpers/constants";
import { Author } from "helpers/wpapi";

export const AuthorsTextWithLink: React.ElementType = ({
  authors,
  ...props
}: {
  authors: Author[];
  [key: string]: any;
}) => {
  const authorsTextWithLink = authors.map((author, index) => (
    <React.Fragment key={author.id}>
      {index > 0 && (authors.length !== 2 ? ", " : " ")}
      {index > 0 && index === authors.length - 1 && (
        <span style={{ textTransform: "none" }}>and </span>
      )}
      <Link href="/author/[slug]" as={author.url}>
        <a
          title={author.displayName}
          rel="author"
          style={{ color: "inherit" }}
          {...props}
        >
          {author.displayName}
        </a>
      </Link>
    </React.Fragment>
  ));
  return <>{authorsTextWithLink}</>;
};

export const AuthorView: React.ElementType = ({
  authors,
  style,
  containerStyle,
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
            ...FONTS.AUXILIARY,
            ...style,
          }}
        >
          <AuthorsTextWithLink authors={authors} {...props} />
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
