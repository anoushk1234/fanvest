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
  Checkbox,
  Text,
} from "@chakra-ui/react";

const Roadmap: NextPage = () => {
  const its = ["Launch of v1.0", "Launch of alpha", "Fanvest Token"];
  return (
    <Flex
      flexDir="row"
      // py={10}
      // h="100%"
      // border="1px solid white"
      justifyContent="center"
      mx={{ base: "2rem", md: "6rem" }}
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
      <Flex flexDir="column" justify="space-evenly" width="10%">
        {its.map((it, i) => {
          return (
            <>
              <Image
                key={i}
                src="https://res.cloudinary.com/dev-connect/image/upload/v1638547035/img/astrisk_grey_xlsyzx.svg"
                alt="astrisk"
                mb="3rem"
                // width={["10%", "10%", "10%", "10%"]}
                // height={["10%", "10%", "10%", "10%"]}
                _hover={{
                  filter: "invert(100%)",
                }}
              />
              {/* {i == 0 ? (
                <Box bgColor="gray.400" height="100%" width="1px"></Box>
              ) : null} */}
            </>
          );
        })}
      </Flex>
      <Flex
        justify="space-evenly"
        flexDir="column"
        // justifyContent="flex-start"

        // border="1px solid white"
        w="auto"

        // ml={{ base: 10, md: 40 }}
      >
        {its.map((it, i) => {
          return (
            <Heading
              as="h1"
              key={i}
              fontSize={{ base: "2rem", md: "4rem" }}
              ml="1rem"
              fontWeight="bold"
              fontFamily="Baskerville Old Face"
              noOfLines={1}
            >
              {it}
            </Heading>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Roadmap;
