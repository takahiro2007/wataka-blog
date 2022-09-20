import { css } from "@emotion/react";

const Footer = () => {
  return (
    <div css={footerStyle}>
      <p>Copyright © 2022 Watakablog</p>
    </div>
  );
};

const footerStyle = css`
  background: lightgray;
  text-align: center;
  padding: 20px 0px;
  p {
    color: black;
  }
`;

export default Footer;
