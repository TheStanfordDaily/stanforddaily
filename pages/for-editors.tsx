const Page = () => {
  return null;
};

Page.getInitialProps = async ({ res }) => {
  res.writeHead(302, {
    Location:
      "https://www.notion.so/stanforddaily/For-Editors-32108a27c14a4e389f9f877578ca0a6f",
  });
  res.end();
};

export default Page;
