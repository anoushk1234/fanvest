import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Head from "next/head";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { ButtonTheme } from "../utils/ButtonTheme";
export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}: any) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={4}
      mb={16}
      {...rest}
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          href="//db.onlinewebfonts.com/c/9ecec61376083fd290b75d94fdaca380?family=Baskerville+Old+Face"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Stack
        minW={{
          md: "560px",
        }}
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Image
          src="https://res.cloudinary.com/dev-connect/image/upload/v1638423459/img/Mask_Group_ro1u81.svg"
          alt="props"
          w="100%"
          h="100%"
          maxW="123.79px"
          maxH="110.38px"
          transform="rotate(-5.5deg)"
          objectFit="cover"
        />
        <Heading
          as="h1"
          size="80px"
          fontFamily="Baskerville Old Face"
          fontSize={{ base: "2.5rem", md: "3.5rem" }}
          // bgSize="100% 100%"
          bgRepeat="no-repeat"
          bgImage="https://res.cloudinary.com/dev-connect/image/upload/v1638424677/img/bgherofinal_kevywv.png"
          bgClip="text"
          letterSpacing="3%"
          lineHeight="84%"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="#FFFFFF80"
          opacity="0.8"
          fontFamily="Poppins"
          fontStyle="nprmal"
          font-size="22px"
          // font-weight="Light"
          fontWeight="300"
          line-height="28px"
          letter-spacing="0.035em"
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>

        <Button
          theme={extendTheme(ButtonTheme)}
          borderRadius="0px"
          variant="gradient"
          py="1.5rem"
          px="2rem"
          maxH="55px"
          maxW="161px"
          fromcolor="#A2116D"
          tocolor="#E0AD1F98"
          fontFamily="Baskerville Old Face"
          fontStyle="normal"
          lineHeight="84%"
          letterSpacing="3%"
          fontSize="36"
          onClick={() => {
            //open a new page with this link
            window.open(
              "https://metafan.notion.site/Fanvest-73c9002b30234c7982bd6f5ff90882bd",
              "_blank"
            );
          }}
        >
          <Box as="span">explore</Box>
        </Button>

        {/* <Text
          fontSize="xs"
          mt={2}
          textAlign="center"
          color="primary.800"
          opacity="0.6"
        >
          No credit card required.
        </Text> */}
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Image
          src="https://res.cloudinary.com/dev-connect/image/upload/v1638385089/img/vintagecam_bclhdj.svg"
          alt="img"
          size="100%"
          ml={{ base: 0, md: "6rem" }}
          shadow="2xl"
        />
      </Box>
    </Flex>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
};

Hero.defaultProps = {
  title: "a new era of filmmaking arrives.",
  subtitle:
    "Fanvest allows indie film makers to launch their film projects as fractional NFTs on Polygon and Solana that fans can mint and fund the film",
  image: "https://source.unsplash.com/collection/404339/800x600",
  ctaText: "Create your account now",
  ctaLink: "/signup",
};
