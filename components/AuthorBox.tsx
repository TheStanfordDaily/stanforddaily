import React from "react";
import { View, Text } from "react-native";
import { Author } from "helpers/wpapi";
import { FONTS, COLORS, STANFORD_COLORS } from "helpers/constants";
import { AuthorView } from "./AuthorView";
import css from "@emotion/css";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import Email from "react-ionicons/lib/MdMail";

// Define logo icon type
const LogoIconWithLink: React.ElementType = ({ url, LogoComponent }: any) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-flex",
      marginTop: 20,
      marginRight: 15,
    }}
  >
    <LogoComponent className="headerLogoIcon" fontSize="25px" />
  </a>
);

// Describes requirement of having author property that is
// an Author and linkToAuthor property that is a boolean
// https://www.typescriptlang.org/docs/handbook/interfaces.html
interface AuthorBoxProps {
  author: Author;
  linkToAuthor?: boolean;
}

// Box containing author name, profile picture and bio at bottom of
// a post; author name links to their ArticleListPage
const AuthorBox: React.ElementType<AuthorBoxProps> = ({
  author,
  linkToAuthor = true,
}: AuthorBoxProps) => {
  const {
    description,
    avatarUrl,
    pronouns,
    title,
    dailyEmail,
    twitter,
  } = author;

  // set object returns to local variables
  const emailURL = "mailto:" + dailyEmail;
  const twitterURL = "https://www.twitter.com/" + encodeURIComponent(twitter);

  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 30,
        paddingVertical: 40,
        borderRadius: 5,
        backgroundColor: STANFORD_COLORS.LIGHT_SANDSTONE,
        marginBottom: 10,
      }}
      css={css`
        @media print {
          display: none;
        }
      `}
    >
      <View>
        <img
          src={
            avatarUrl ===
            "https://www.stanforddaily.com/wp-content/themes/thestanforddaily/img/placeholder-avatar.png"
              ? "/static/cardinal-red-daily-s-logo.png"
              : avatarUrl
          }
          alt="The author's profile picture"
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            marginLeft: 12.5,
          }}
        >
          {dailyEmail || twitter ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              {twitter ? (
                <LogoIconWithLink
                  url={twitterURL}
                  LogoComponent={LogoTwitter}
                />
              ) : null}
              {dailyEmail ? (
                <LogoIconWithLink url={emailURL} LogoComponent={Email} />
              ) : null}
            </div>
          ) : null}
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: -5,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              color: STANFORD_COLORS.BLACK,
              fontWeight: "bold",
            }}
          >
            {pronouns}
          </p>
        </View>
      </View>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          flex: 1,
          justifyContent: "center",
        }}
      >
        <AuthorView
          authors={[author]}
          style={{
            ...FONTS.ARTICLE_TITLE,
            fontSize: 24,
            textTransform: "none",
          }}
          aStyle={{
            ...(linkToAuthor ? { color: COLORS.LINK.DEFAULT } : {}),
          }}
          linkToAuthor={linkToAuthor}
        />
        {title ? (
          <View>
            <Text
              style={{
                ...FONTS.CONTENT,
                marginTop: 8,
                fontSize: 16,
                lineHeight: "1.5em",
                fontWeight: "bold",
              }}
            >
              {title}
            </Text>
          </View>
        ) : null}
        {description ? (
          <Text
            style={{
              ...FONTS.CONTENT,
              marginTop: 8,
              fontSize: 16,
              lineHeight: "1.5em",
            }}
          >
            {description}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default AuthorBox;
