import React from "react";
import { View, Text } from "react-native";
import { getAuthorAsync, AuthorArchivePageData } from "helpers/wpapi";
import Wrapper from "components/Wrapper";
import { Section } from "components/Section";
import ArchivePage, {
  ArchivePageType,
  ArchivePageProps,
  ArchivePageState,
} from "./ArchivePage";

async function _getAuthorData(
  slug: string,
  pageNumber: number,
): Promise<AuthorArchivePageData> {
  return getAuthorAsync(slug, pageNumber);
}

interface AuthorArchivePageProps extends ArchivePageProps {
  initData: AuthorArchivePageData;
  slug: string;
}

export default class AuthorArchivePage extends React.Component<
  AuthorArchivePageProps,
  ArchivePageState
> {
  static async getInitialProps(param): Promise<any> {
    const { query } = param;
    const { slug } = query;
    const authorData = await _getAuthorData(slug, 1);

    return { initData: authorData, slug };
  }

  render(): React.ReactNode {
    const { initData, slug } = this.props;
    return (
      <Section
        style={{
          flexGrow: 1,
          flexDirection: "column",
        }}
      >
        <Text>{initData.tsdMeta.name}</Text>
        <ArchivePage
          initData={initData}
          type={ArchivePageType.Author}
          getExtraData={async pageNumber => {
            return _getAuthorData(slug, pageNumber);
          }}
          {...this.props}
        />
      </Section>
    );
  }
}

export function AuthorArchivePageWrapper(props: any): any {
  return (
    <Wrapper class={AuthorArchivePage} props={props} getInitialProps={{}} />
  );
}
