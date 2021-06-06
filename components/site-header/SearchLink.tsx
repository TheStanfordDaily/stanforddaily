import RView from "emotion-native-media-query";
import { FONTS } from "helpers/constants";
import React from "react";
import css from "@emotion/css";

import styled from "@emotion/styled";
import IosSearch from "react-ionicons/lib/IosSearch";

const inputStyle = {
  display: "inline-flex",
  color: "#f5f5f5",
  fontSize: 14,
  padding: 0,
  border: 0,
  outline: 0,
  boxShadow: "none",
  background: "0 0",
};

const SearchInput = styled(
  styled.input({
    ...inputStyle,
    ...FONTS.AUXILIARY,
    width: 65,
  }),
)`
  ::placeholder {
    color: #f5f5f5;
  }
`;

const SearchButton = styled.button`
  &:focus {
    padding: 3px !important;
    border: 2px solid yellow !important;
  }
`;

export default () => (
  <RView
    style={{
      marginRight: 20,
    }}
    css={css`
      @media print {
        display: none;
      }
    `}
  >
    <form
      role="search"
      method="get"
      action="/"
      style={{
        display: "flex",
        margin: "auto",
      }}
    >
      <SearchInput
        type="search"
        placeholder="Search…"
        defaultValue=""
        name="s"
        id="s"
        required
        style={{ fontSize: 12.5 }}
        css={css`
          &:focus {
            padding: 3px;
            outline: 2px solid yellow;
          }
        `}
      />
      <SearchButton
        type="submit"
        style={{
          ...inputStyle,
          paddingLeft: 5,
          cursor: "pointer",
        }}
      >
        <IosSearch color="#f5f5f5" />
      </SearchButton>
    </form>
  </RView>
);
