import React from "react";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import { BaseProps } from "./baseTypes";

const WPHead: React.ElementType<BaseProps> = ({ base }) => {
  if (base && base.tsdMeta && base.tsdMeta.wpHead) {
    return <Head>{ReactHtmlParser(base.tsdMeta.wpHead)}</Head>;
  } else {
    return <></>;
  }
};

export default WPHead;
