import React from "react";
import { BaseProps } from "./baseTypes";

const WPFooter: React.ElementType<BaseProps> = () => {
  // We don't need `wp_footer()` in the native app.
  return <></>;
};

export default WPFooter;
