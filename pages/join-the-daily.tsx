const Page = () => {
  return null;
};

Page.getInitialProps = async ({ res }) => {
  res.writeHead(302, {
    Location: "/join",
  });
  res.end();
};

export default Page;
