import ArticlePage from "components/pages/WordPress Post";

// Don't include runtime next js code on article pages --
// this fixes issues with Ezoic integration and Uber Grid
export const config = {
  unstable_runtimeJS: false
};

export default ArticlePage;
