import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { Button, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import Link from "next/link";
import Head from "next/head";
import HeaderButtonGroup from "./headerButtonGroup";
import HeaderDrawer from "./headerDrawer";

const Header = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div css={headerContent}>
        <Button
          css={hiddenBig}
          onClick={onOpen}
          variant="ghost"
          colorScheme="teal"
          w={12}
        >
          <HamburgerIcon
            css={css`
              height: 28px;
              width: 28px;
            `}
          />
        </Button>
        <HeaderDrawer isOpen={isOpen} onClose={onClose} />
        <Link href="/" passHref>
          <a>
            <div css={titleContainer}>
              <img src="takaputo-icon.png" css={titleImageStyle} />
              <p css={titleStringStyle}>Watakablog</p>
            </div>
          </a>
        </Link>
        <div css={buttonGroupStyle}>
          <div css={hiddenSmall}>
            <HeaderButtonGroup direction={"row"} />
          </div>
          <Button
            onClick={() => router.push("/")}
            colorScheme="teal"
            variant="ghost"
            w={12}
          >
            <Search2Icon
              css={css`
                width: 22px;
                height: 22px;
              `}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

const headerContent = css`
  width: 100vw;
  height: 100%;
  padding: 10px 60px;
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0px 5px 0;
  @media (max-width: 1023px) {
    padding: 10px 16px;
  }
`;

const hiddenSmall = css`
  @media (max-width: 1023px) {
    display: none;
  }
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

const buttonGroupStyle = css`
  display: flex;
  gap: 50px;
`;

const hiddenBig = css`
  @media (min-width: 1024px) {
    display: none;
  }
`;

export default Header;
