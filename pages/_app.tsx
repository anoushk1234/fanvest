import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import LandingLayout from "../components/Layout";
import theme from "../utils/theme";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LandingLayout>
        <Component {...pageProps} />
      </LandingLayout>
    </ChakraProvider>
  );
}

export default MyApp;
