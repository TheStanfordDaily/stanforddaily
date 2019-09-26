import React from "react";
import ReactHtmlParser from "react-html-parser";
import { BaseProps } from "./baseTypes";

const WPFooter: React.ElementType<BaseProps> = ({ base }) => {
  if (base && base.tsdMeta && base.tsdMeta.wpFooter) {
    return ReactHtmlParser(base.tsdMeta.wpHead);
  } else {
    return <></>;
  }
};

export default WPFooter;
