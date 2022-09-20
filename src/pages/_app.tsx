import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/header";
import Footer from "../components/footer";
import { css } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <div css={css``}>
        <Header />
        <Component {...pageProps} />
        <Footer
          css={css`
            position: absolute;
            bottom: 0;
          `}
        />
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
