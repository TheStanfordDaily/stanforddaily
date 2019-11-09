import React from "react";
import { Text, TextStyle, Platform } from "react-native";
import { Post } from "helpers/wpapi";
import { AuthorView } from "./pages/HomePage/AuthorView";
import DateView from "./DateView";

interface AuthorAndDateViewProps {
  post: Post;
  style?: TextStyle;
  authorStyle?: any;
  dateFormat?: string;
  dateStyle?: TextStyle;
  newLineBetweenAuthorAndDate?: boolean;
}

const AuthorAndDateView: React.ElementType<AuthorAndDateViewProps> = ({
  post,
  style,
  authorStyle,
  dateFormat,
  dateStyle,
  newLineBetweenAuthorAndDate = false,
}: AuthorAndDateViewProps) => {
  if (newLineBetweenAuthorAndDate) {
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
        {" • "}
        <DateView
          post={post}
          format={dateFormat}
          style={dateStyle}
          containerStyle={{ display: "inline-flex" }}
        />
      </Text>
    );
  }
};

export default AuthorAndDateView;
