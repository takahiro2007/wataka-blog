import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Header = () => {
  const router = useRouter();
  return (
    <div css={headerContent}>
      <p>Watakablog</p>
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

export default Header;
