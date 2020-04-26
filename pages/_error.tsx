import React from "react";
import { STRINGS } from "../helpers/constants";

const Page = () => {
  return null;
};

Page.getInitialProps = async ({ asPath, res }) => {
  res.writeHead(302, {
    Location: STRINGS.WEBSITE_URL,
  });
  res.end();
};

export default Page;
