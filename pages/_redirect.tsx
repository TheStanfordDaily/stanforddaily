import { STRINGS } from "../helpers/constants";

const Page = () => {
  return null;
};

Page.getInitialProps = async ({ asPath, res }) => {
  res.writeHead(302, {
    Location: STRINGS.WP_URL + asPath,
  });
  res.end();
};

export default Page;
