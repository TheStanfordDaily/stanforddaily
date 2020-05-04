import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import { getPostAsync, getPostPath, Post } from "helpers/wpapi";
import { STRINGS } from "helpers/constants";
import LoadingView from "components/Loading";
import ContentView from "components/ContentView";
import DonationForm from "components/DonationForm";

interface ArticlePageProps {
  post?: Post;
}

interface ArticlePageState {}

export default class ArticlePage extends React.Component<
  ArticlePageProps,
  ArticlePageState
> {
  static async getInitialProps({ query }): Promise<any> {
    const { year, month, day, slug } = query;
    const post = await getPostAsync(year, month, day, slug);
    return { post };
  }

  render(): React.ReactNode {
    const { post } = this.props;
    return <ContentView post={post} />;
  }
}

export function ArticlePageWrapper(props: any): any {
  const post: Post = props.navigation.state.params;
  return (
    <View style={{ overflow: "hidden", flex: 1, width: "100%" }}>
      <WebView
        source={{
          uri: `${STRINGS.WEBSITE_URL}${getPostPath(post)}?${
            STRINGS._MAIN_ONLY_QUERY
          }`,
        }}
        originWhitelist={["*"]}
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
