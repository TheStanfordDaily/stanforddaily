import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import styled from "@emotion/native";
import { getPostPath, Post } from "../../../../helpers/wpapi";
import { STRINGS } from "../../../../helpers/constants";
import LoadingView from "../../../../components/Loading";

export function PostPageWrapper(props: any): any {
  const post: Post = props.navigation.state.params;
  return (
    <View style={{ overflow: "hidden", flex: 1, width: "100%" }}>
      <WebView
        source={{
          uri: `http://10.31.234.102:19006${getPostPath(post)}?${
            STRINGS._MAIN_ONLY_QUERY
          }`,
        }}
        originWhitelist={["*"]}
        applicationNameForUserAgent={STRINGS.TSD_APP_USERAGENT}
        startInLoadingState
        renderLoading={() => (
          <View
            style={{
              justifyContent: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <LoadingView />
          </View>
        )}
      />
    </View>
  );
}
