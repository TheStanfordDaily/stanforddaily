import React from "react";
import { Text, View, Platform } from "react-native";
import Link from "next/link";
import { FONTS } from "helpers/constants";
import { Author } from "helpers/wpapi";

export const AuthorView: React.ElementType = ({
  authors,
  style,
  ...props
}: {
  authors: Author[];
  [key: string]: any;
}) => {
  if (Platform.OS === "web") {
    return (
      <View>
        <Text
          style={{
            ...FONTS.AUXILIARY,
            ...style,
          }}
        >
          {authors.map((author, index) => (
            <React.Fragment key={author.id}>
              {index > 0 && (authors.length !== 2 ? ", " : " ")}
              {index > 0 && index === authors.length - 1 && "and "}
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
          ))}
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
