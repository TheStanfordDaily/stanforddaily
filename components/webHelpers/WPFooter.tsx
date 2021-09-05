import React from "react";
import { BaseProps } from "./baseTypes";

const WPFooter: React.ElementType<BaseProps> = () => {
  // We don't need `wp_footer()` in the native app.
  return (
    /* Parse.ly analytics tracking */
    <script
      id="parsely-cfg"
      src="//cdn.parsely.com/keys/sandbox.stanforddaily.com/p.js"
    />
  );
};

export default WPFooter;
