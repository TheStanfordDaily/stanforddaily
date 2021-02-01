const Page = () => {
  return null;
};

Page.getInitialProps = async ({ res }) => {
  res.writeHead(302, {
    Location:
      "https://www.notion.so/stanforddaily/e7d260241d5b4f9687e730b188df3fcc?v=4d5e0b699728427789aed09eb8302f3d",
  });
  res.end();
};

export default Page;
