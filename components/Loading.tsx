import React from "react";
import { Text, View } from "react-native";

// Text to display on screen when page content is loading
export default function LoadingView(props: any): any {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        marginTop: 25,
      }}
    >
      <Text style={{ fontSize: 25 }}>Loading...</Text>
    </View>
  );
}
