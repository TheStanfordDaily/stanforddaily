import React from "react";

const Page = () => {
  return null;
};

Page.getInitialProps = async ({ res }) => {
  res.writeHead(302, {
    Location:
      "https://www.notion.so/stanforddaily/The-Stanford-Daily-0f3a6c6c6335486885e9544878f3f684",
  });
  res.end();
};

export default Page;
