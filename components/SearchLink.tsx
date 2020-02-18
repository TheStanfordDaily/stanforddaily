import RView, { MediaRule } from "emotion-native-media-query";
import { BREAKPOINTS, FONTS } from "helpers/constants";
import React from "react";

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
    width: 60,
  }),
)`
  ::placeholder {
    color: #f5f5f5;
  }
`;

export default () => (
  <RView
    rStyle={{
      [MediaRule.MaxWidth]: {
        [BREAKPOINTS.MAX_WIDTH.DESKTOP]: {
          // padding: "5px",
          // margin: "auto"
        },
      },
    }}
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
      />
      <button
        type="submit"
        style={{
          ...inputStyle,
          paddingLeft: 5,
          cursor: "pointer",
        }}
      >
        <IosSearch color="#f5f5f5" />
      </button>
    </form>
  </RView>
);
