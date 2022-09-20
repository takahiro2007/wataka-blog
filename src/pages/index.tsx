import { css } from "@emotion/react";

const Home = () => {
  return (
    <div css={helloStyle}>
      <h1>Hello!</h1>
      <h1>Hello!</h1>
      <h1>Hello!</h1>
    </div>
  );
};

const helloStyle = css`
  font-size: 100px;
`;

export default Home;
