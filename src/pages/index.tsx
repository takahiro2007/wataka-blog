import { css } from "@emotion/react";
import Layout from "../components/layout";

const Home = () => {
  return (
  <Layout>
<div css={helloStyle}>
      <h1>Hello!</h1>
      <h1>Hello!</h1>
      <h1>Hello!</h1>
    </div>
  </Layout>
  );
};

const helloStyle = css`
  font-size: 100px;
`;

export default Home;