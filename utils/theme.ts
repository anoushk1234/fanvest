import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
// Version 1: Using objects
const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        color: mode("whiteAlpha.900", "whiteAlpha.900")(props),
        bg: mode("#0B0B0B", "#0B0B0B")(props),
        lineHeight: "base",
      },
    }),
  },
});

export default theme;
