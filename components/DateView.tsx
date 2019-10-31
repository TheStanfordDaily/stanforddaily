import React from "react";
import { Text, TextStyle, View, ViewStyle } from "react-native";
import { FONTS } from "helpers/constants";
import { Post, getPostTimeString, getPostLocalDate } from "helpers/wpapi";

interface DateWithAbbrProps {
  post: Post;
  format: string;
}

export const DateWithAbbr: React.ElementType<DateWithAbbrProps> = ({
  post,
  format,
}) => {
  const date = getPostLocalDate(post);
  return (
    <abbr title={date.format("LLLL")} style={{ textDecoration: "none" }}>
      <time dateTime={date.format()}>{getPostTimeString(date, format)}</time>
    </abbr>
  );
};

interface DateViewProps {
  post: Post;
  format?: string;
  style?: TextStyle;
  containerStyle?: any;
}

const DateView: React.ElementType<DateViewProps> = ({
  post,
  format = "MMM DD YYYY",
  containerStyle,
  style,
}: DateViewProps) => {
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
