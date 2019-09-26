import React from "react";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import { BaseProps } from "./baseTypes";

const WPHead: React.ElementType<BaseProps> = ({ base }) => {
  if (base && base.meta && base.meta.wpHead) {
    return <Head>{ReactHtmlParser(base.meta.wpHead)}</Head>;
  } else {
    return <></>;
  }
};

export default WPHead;
