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
// import "react-step-progress-bar/styles.css";
// import { ProgressBar, Step } from "react-step-progress-bar";
const About: NextPage = () => {
  return (
    <Box
      bgImage="https://res.cloudinary.com/dev-connect/image/upload/v1638424677/img/bgherofinal_kevywv.png"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgClip="border-box"
      m={10}
      p={10}
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
      <Heading
        as="h1"
        fontFamily="Poppins"
        color="black"
        size="3xl"
        fontWeight="bold"
        mb={4}
      >
        Creators get freedom {<br />}
        Fans get content
      </Heading>
      <Heading as="h2" size="xl" fontFamily="Poppins" mb={4}>
        {
          <Text
            _hover={{
              filter: "invert(100%)",
            }}
          >
            {" "}
            Our platform allows creators to launch their film projects as NFTs
            with information regarding the movie like script, potential cast
            maybe even a teaser etc and the budget required to make it.{<br />}
          </Text>
        }
        {
          <Text
            _hover={{
              filter: "invert(100%)",
            }}
          >
            Fans can buy a fraction of the movie NFT and contribute to the
            project using the platform coin. Once the project reaches its goal
            all the coins will be transferred to the creator so they can cash it
            out for fiat currency and make the movie.
            {<br />}
          </Text>
        }
        {
          <Text
            _hover={{
              filter: "invert(100%)",
            }}
          >
            Eventually to release it on the platform and only the users who
            bought the movie NFT will be able to see it.
          </Text>
        }
      </Heading>
    </Box>
  );
};

export default About;
