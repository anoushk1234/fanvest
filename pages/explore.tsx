import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { NextPage } from "next";
import Head from "next/head";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  Box,
  Button,
  Flex,
  Image,
  Link as ChakraLink,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";

const Explore: NextPage = () => {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-around" }}
      direction={{ base: "column", md: "column" }}
      minH="70vh"
      px={4}
      mb={16}
      bgImage="https://res.cloudinary.com/dev-connect/image/upload/v1638424677/img/bgherofinal_kevywv.png"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgClip="border-box"
      py={10}
    >
      <Head>
        <title>Explore</title>
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
      <ChakraLink
        href="https://drive.google.com/file/d/1YQgWdSxfTxNloYKHD0UG5bG62PyQ-4xs/view?usp=sharing"
        mb={5}
        _hover={{
          filter: "invert(100%)",
        }}
        isExternal
      >
        <Flex justify="space-evenly">
          <Heading
            as="h1"
            size="3xl"
            fontWeight="bold"
            fontFamily="Baskerville Old Face"
            noOfLines={1}
          >
            Read our Deck
          </Heading>
          <Text ml={1} fontSize={["sm", "md", "xl", "2xl"]}>
            <FaExternalLinkAlt />
          </Text>
        </Flex>
      </ChakraLink>
      <ChakraLink
        mt={5}
        href="https://www.notion.so/metafan/Metafan-73c9002b30234c7982bd6f5ff90882bd"
        isExternal
        _hover={{
          filter: "invert(100%)",
        }}
      >
        <Flex justify="space-evenly">
          <Heading
            as="h1"
            size="2xl"
            fontWeight="bold"
            fontFamily="Baskerville Old Face"
            noOfLines={1}
          >
            Read our Notion
          </Heading>
          <Text ml={1} fontSize={["sm", "md", "xl", "2xl"]}>
            <FaExternalLinkAlt />
          </Text>
        </Flex>
      </ChakraLink>
    </Flex>
  );
};

export default Explore;
