const Page = () => {
  return null;
};

Page.getInitialProps = async ({ res }) => {
  res.writeHead(302, {
    Location:
      "https://www.notion.so/stanforddaily/For-Masthead-2be3566903ae49a9aeb58858513ce4c0",
  });
  res.end();
};

export default Page;
