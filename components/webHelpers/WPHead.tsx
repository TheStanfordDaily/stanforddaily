import React from "react";
import { BaseProps } from "./baseTypes";

const WPHead: React.ElementType<BaseProps> = () => {
  // We don't need `wp_head()` in the native app.
  return <></>;
};

export default WPHead;
