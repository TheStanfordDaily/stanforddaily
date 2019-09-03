import React from "react";
import { WebView } from "react-native-webview";
import styled from "@emotion/native";
import { getPostPath, Post } from "../../../../helpers/wpapi";
import { STRINGS } from "../../../../helpers/constants";

export function PostPageWrapper(props: any): any {
  const post: Post = props.navigation.state.params;
  return (
    <WebView
      source={{
        uri: `http://10.31.234.102:19006${getPostPath(post)}?${
          STRINGS._MAIN_ONLY_QUERY
        }`,
      }}
      originWhitelist={["*"]}
      applicationNameForUserAgent={STRINGS.TSD_APP_USERAGENT}
    />
  );
}
