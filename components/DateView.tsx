import React from "react";
import { Text, TextStyle, View, ViewStyle } from "react-native";
import { FONTS } from "helpers/constants";
import { Post, getPostTimeString } from "helpers/wpapi";

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
        {getPostTimeString(post, format)}
      </Text>
    </View>
  );
};

export default DateView;
