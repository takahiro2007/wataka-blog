import { css } from "@emotion/react";
import { Button, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import type { HeaderButtonGroupProps } from "../types/props";

const HeaderButtonGroup = (props: HeaderButtonGroupProps) => {
  const router = useRouter();
  return (
    <Stack direction={props.direction}>
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
    </Stack>
  );
};

export default HeaderButtonGroup;
