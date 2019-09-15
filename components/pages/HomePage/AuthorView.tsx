import React from "react";
import { Text, View, Platform } from "react-native";
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

              <a
                href={`https://www.stanforddaily.com/author/${author.userNicename}/`}
                rel="author"
                {...props}
              >
                {author.displayName}
              </a>
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
