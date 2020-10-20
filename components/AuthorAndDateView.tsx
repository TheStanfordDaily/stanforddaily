import React from "react";
import { Text, TextStyle, Platform } from "react-native";
import { Post } from "helpers/wpapi";
import { AuthorView } from "./pages/HomePage/AuthorView";
import DateView from "./DateView";

// Describes requirement of various properties of specific types
// https://www.typescriptlang.org/docs/handbook/interfaces.html
interface AuthorAndDateViewProps {
  post: Post;
  style?: TextStyle;
  authorStyle?: any;
  dateFormat?: string;
  dateStyle?: TextStyle;
  newLineBetweenAuthorAndDate?: boolean;
  noDate?: boolean;
}

// Author name(s) and date of publication for article shown on the
// home page and on article list pages
const AuthorAndDateView: React.ElementType<AuthorAndDateViewProps> = ({
  post,
  style,
  authorStyle,
  dateFormat,
  dateStyle,
  newLineBetweenAuthorAndDate = false,
  noDate = false,
}: AuthorAndDateViewProps) => {
  if (!noDate && newLineBetweenAuthorAndDate) {
    // Format name(s)/date like this:
    // FIRSTNAME LASTNAME
    // JUL 25 2020
    if (Platform.OS === "web") {
      return (
        <Text
          style={{
            ...style,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <AuthorView authors={post.tsdAuthors} style={authorStyle} />
          <DateView post={post} format={dateFormat} style={dateStyle} />
        </Text>
      );
    } else {
      return (
        <>
          <AuthorView authors={post.tsdAuthors} style={authorStyle} />
          <DateView post={post} format={dateFormat} style={dateStyle} />
        </>
      );
    }
  } else if (!noDate) {
    // Format name(s)/date like this: FIRSTNAME LASTNAME • JUL 25 2020
    return (
      <Text
        style={{
          ...style,
        }}
      >
        <AuthorView
          authors={post.tsdAuthors}
          containerStyle={{ display: "inline-flex" }}
          style={authorStyle}
        />
        {" • "}
        <DateView
          post={post}
          format={dateFormat}
          style={dateStyle}
          containerStyle={{ display: "inline-flex" }}
        />
      </Text>
    );
  } else {
    return (
      <Text
        style={{
          ...style,
        }}
      >
        <AuthorView
          authors={post.tsdAuthors}
          containerStyle={{ display: "inline-flex" }}
          style={authorStyle}
        />
      </Text>
    );
  }
};

export default AuthorAndDateView;
