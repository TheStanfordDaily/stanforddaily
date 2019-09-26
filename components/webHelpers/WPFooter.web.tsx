import React from "react";
import ReactHtmlParser from "react-html-parser";
import { BaseProps } from "./baseTypes";

const WPFooter: React.ElementType<BaseProps> = ({ base }) => {
  if (base && base.meta && base.meta.wpFooter) {
    return ReactHtmlParser(base.meta.wpHead);
  } else {
    return <></>;
  }
};

export default WPFooter;
