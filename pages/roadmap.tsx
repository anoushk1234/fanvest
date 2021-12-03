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
      flexDir="column"
      py={10}
      h="100%"
      // border="1px solid white"
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
      {its.map((it, i) => {
        return (
          <Flex
            key={i}
            justifyContent="flex-start"
            align="center"
            // border="1px solid white"
            mb={10}
            ml={20}
          >
            <Image
              src="https://res.cloudinary.com/dev-connect/image/upload/v1638547035/img/astrisk_grey_xlsyzx.svg"
              alt="astrisk"
              width={["10%", "10%", "10%", "10%"]}
              height={["10%", "10%", "10%", "10%"]}
            />
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "4rem" }}
              px={["10%", "10%", "10%", "10%"]}
              fontWeight="bold"
              fontFamily="Baskerville Old Face"
              noOfLines={1}
              textAlign="left"
            >
              {it}
            </Heading>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Roadmap;
