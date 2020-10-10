import React from "react";
import { Text, TextStyle, View, Platform } from "react-native";
import { FONTS } from "helpers/constants";
import { Post, getPostTimeString, getPostLocalDate } from "helpers/wpapi";

// Describes requirement of various properties of specific types
// https://www.typescriptlang.org/docs/handbook/interfaces.html
interface DateWithAbbrProps {
  post: Post;
  format: string;
}

// Generates date with abbreviation; used in DateView component below
export const DateWithAbbr: React.ElementType<DateWithAbbrProps> = ({
  post,
  format,
}) => {
  const date = getPostLocalDate(post);

  if (Platform.OS !== "web") {
    return <>{getPostTimeString(date, format)}</>;
  }

  return (
    // format('LLLL') gives us Saturday, July 25, 2020 9:36 AM,
    // but our website hides day of week and time of publication
    <abbr title={date.format("LLLL")} style={{ textDecoration: "none" }}>
      <time dateTime={date.format()}>{getPostTimeString(date, format)}</time>
    </abbr>
  );
};

// Describes requirement of various properties of specific types
// https://www.typescriptlang.org/docs/handbook/interfaces.html
interface DateViewProps {
  post: Post;
  format?: string;
  style?: TextStyle;
  containerStyle?: any;
}

// Shows dates like "Jul 25 2020"
const DateView: React.ElementType<DateViewProps> = ({
  post,
  format = "MMM DD YYYY",
  containerStyle,
  style,
}: DateViewProps) => {
  if (Platform.OS !== "web") {
    return (
      <Text
        style={{
          ...FONTS.AUXILIARY,
          ...style,
        }}
      >
        <DateWithAbbr post={post} format={format} />
      </Text>
    );
  }

  return (
    <View style={containerStyle}>
      <Text
        style={{
          ...FONTS.AUXILIARY,
          ...style,
        }}
      >
        <DateWithAbbr post={post} format={format} />
      </Text>
    </View>
  );
};

export default DateView;
