import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
// Version 1: Using objects
const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        fontFamily: "body",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bgImage:
          "url('https://res.cloudinary.com/dev-connect/image/upload/v1637862655/img/Landing_Page_oyifso.png')",
        lineHeight: "base",
      },
    }),
  },
});

export default theme;
