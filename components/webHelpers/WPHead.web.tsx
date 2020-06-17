import React from "react";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import { BaseProps } from "./baseTypes";

const WPHead: React.ElementType<BaseProps> = ({ base }) => {
  if (base && base.tsdMeta && base.tsdMeta.wpHead) {
    // Fix to replace "Untitled" on the home page
    return (
      <Head>
        {ReactHtmlParser(
          base.tsdMeta.wpHead.replace(
            /Untitled \| The Stanford Daily/g,
            "Homepage | The Stanford Daily",
          ),
        )}
      </Head>
    );
  } else {
    return <></>;
  }
};

export default WPHead;
