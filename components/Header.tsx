import React from "react";
import Link from "next/link";
import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import Logo from "./Logo";

import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import Head from "next/head";

const MenuItems = (props: any) => {
  const { children, isLast, to = "/", ...rest } = props;
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Text
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
        bgImage="https://res.cloudinary.com/dev-connect/image/upload/v1638381084/img/Group_11_yd6g58.png"
        bgClip="text"
        className="nee"
        fontSize={{ base: "sm", sm: "lg" }}
        display="block"
        fontFamily="Poppins"
        fontStyle="Light"
        lineHeight="112%"
        {...rest}
      >
        <Link href={to}>{children}</Link>
      </Text>
    </>
  );
};

const Header = (props: any) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <IoCloseOutline /> : <FiMenu />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="/">about us</MenuItems>
          <MenuItems to="/how">plans </MenuItems>
          <Flex align="center">
            <Logo
              w={["100px", "100px", "150px", "150px"]}
              color={["white", "white", "primary.500", "primary.500"]}
            />
          </Flex>
          <MenuItems to="/features">faq </MenuItems>
          <MenuItems to="/pricing">team </MenuItems>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
