const Page = () => {
  return null;
};

Page.getInitialProps = async ({ res }) => {
  res.writeHead(302, {
    Location:
      "https://www.notion.so/stanforddaily/Historical-11a11152c8ab4b69b53cf668ca006962",
  });
  res.end();
};

export default Page;
