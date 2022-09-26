import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";

const Header = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
    <div css={headerContent}>
      <Link href="/" passHref>
        <a>
          <div css={titleContainer}>
            <img src="takaputo-icon.png" css={titleImageStyle} />
            <p css={titleStringStyle}>Watakablog</p>
          </div>
        </a>
      </Link>
      <ButtonGroup>
        <Button
          onClick={() => router.push("/")}
          colorScheme="teal"
          variant="ghost"
        >
          Category
        </Button>
        <Button
          onClick={() => router.push("/")}
          colorScheme="teal"
          variant="ghost"
        >
          All_Articles
        </Button>
        <Button
          onClick={() => router.push("/")}
          colorScheme="teal"
          variant="ghost"
        >
          About
        </Button>
      </ButtonGroup>
    </div>
    </div>
  );
};

const headerContent = css`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 60px;
  background-color: white;
  color: black;
  box-shadow: 0 0px 5px 0;
`;

const titleContainer = css`
  display: flex;
  gap: 10px;
`;

const titleStringStyle = css`
  font-size: 20px;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: auto;
`;

const titleImageStyle = css`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-top: auto;
  margin-bottom: auto;
`;

export default Header;
