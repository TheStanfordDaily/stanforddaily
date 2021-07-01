import React, { useState } from "react";
import { View, Text } from "react-native";
import { Author } from "helpers/wpapi";
import { FONTS, COLORS, STANFORD_COLORS } from "helpers/constants";
import { AuthorView } from "./AuthorView";
import css from "@emotion/css";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import Email from "react-ionicons/lib/MdMail";
import axios from "axios";

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
  const { description, avatarUrl, id } = author;

  // contains the following custom fields: email, twitter, pronouns, title
  const [additionalAuthorInfo, setAdditionalAuthorInfo] = useState(null);

  axios
    .get("https://wp.stanforddaily.com/wp-json/tsd/v1/authors/" + id + "/")
    .then(response => {
      setAdditionalAuthorInfo(response.data);
    });

  // set object returns to local variables
  const emailURL =
    "mailto:" +
    encodeURIComponent(
      additionalAuthorInfo ? additionalAuthorInfo.dailyEmail : "",
    );
  const twitterURL =
    "https://www.twitter.com/" +
    encodeURIComponent(
      additionalAuthorInfo ? additionalAuthorInfo.twitter : "",
    );
  const pronouns = additionalAuthorInfo ? additionalAuthorInfo.pronouns : "";
  const position = additionalAuthorInfo ? additionalAuthorInfo.title : "";

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
          {(additionalAuthorInfo && additionalAuthorInfo.dailyEmail) ||
          (additionalAuthorInfo && additionalAuthorInfo.twitter) ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              {twitterURL ? (
                <LogoIconWithLink
                  url={twitterURL}
                  LogoComponent={LogoTwitter}
                />
              ) : null}
              {emailURL ? (
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
            {position}
          </Text>
        </View>
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
        ) : (
          undefined
        )}
      </View>
    </View>
  );
};

export default AuthorBox;
