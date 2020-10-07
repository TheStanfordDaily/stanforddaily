import React from "react";
import { Global } from "@emotion/core";
import { STANFORD_COLORS } from "helpers/constants";

// Implements styling and logo for Satire pages
const SatireGlobal: React.ElementType = () => {
  return (
    <Global
      styles={{
        "#tsd-navbar, #site-footer": {
          backgroundColor: STANFORD_COLORS.BLACK,
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
          backgroundImage: "url(/static/soc.jpg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        },
      }}
    />
  );
};

export default SatireGlobal;
