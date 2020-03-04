import React from "react";
import Head from "next/head";

import { Global } from "@emotion/core";
import { STANFORD_COLORS, COLORS } from "helpers/constants";

const SatireGlobal: React.ElementType = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global
        styles={{
          "#tsd-navbar, #site-footer": {
            backgroundColor: COLORS.DATA_RED,
          },
          "#tsd-logo img": {
            display: "none",
          },
          "#tsd-logo::after": {
            content: '" "',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            height: 87.5,
            backgroundImage: "url(/static/DailyIcon.svg)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          },
          ".tsd-article h2, .tsd-article a, .tsd-article time, #main-article-content": {
            fontFamily: "'Roboto', sans-serif !important",
          },
          ".tsd-article": {
            // backgroundColor: "#fee",
            borderRadius: "10px",
            padding: "24px",
          },
          ".small-section-podcasts": {
            // display: "none"
          },
        }}
      />
    </>
  );
};

export default SatireGlobal;
