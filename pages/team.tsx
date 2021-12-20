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
  HStack,
} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { ButtonTheme } from "../utils/ButtonTheme";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
export default function Team({ ...rest }: any) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column", md: "row" }}
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
      {[
        {
          name: "Anoushk Kharangate",
          image:
            "https://res.cloudinary.com/dev-connect/image/upload/v1638552023/img/https_3A_2F_2Fs3-us-west-2.amazonaws.com_2Fsecure.notion-static.com_2F765bfa38-063d-4558-84e0-1ab7b804db3e_2F48A78970-2517-4EC3-B0C1-6777263E16AC.jpeg_p7bbwy.jpg",
          designation: "Co-founder & Technical Lead",
          twitter: "https://twitter.com/anoushk77",
          email: "kharangateanoushk04@gmail.com",
        },
        {
          name: "Eshaan Gosalia",
          image:
            "https://res.cloudinary.com/dev-connect/image/upload/v1638594480/img/961dbf71-1f34-4f64-88ec-3b2f47e72287_heqmbg.jpg",
          designation: "Co-founder & COO",
          twitter: "https://twitter.com/GosaliaEshaan",
          email: "eshaangosa@gmail.com",
        },
      ].map((item, index) => {
        return (
          <Stack
            key={index}
            m={4}
            minW={{
              md: "560px",
            }}
            spacing={4}
            w={{ base: "80%", md: "40%" }}
            align={["center", "center", "flex-start", "flex-start"]}
          >
            <Box
              w={{ base: "80%", sm: "60%", md: "50%" }}
              mb={{ base: 12, md: 0 }}
              mt={index === 0 ? 0 : 2}
            >
              <Image
                src={item.image}
                alt="img"
                borderRadius="md"
                size="100%"
                ml={{ base: 0, md: "6rem" }}
                shadow="2xl"
              />
            </Box>
            <Heading
              as="h1"
              size="80px"
              fontFamily="Baskerville Old Face"
              fontWeight="300"
              fontSize={{ base: "2.5rem", md: "3.5rem" }}
              // bgSize="100% 100%"
              bgRepeat="no-repeat"
              bgImage="https://res.cloudinary.com/dev-connect/image/upload/v1638553516/img/pinkish_bg_wqijkp.svg"
              bgClip="text"
              bgPosition={["center", "center", "right", "right"]}
              letterSpacing="3%"
              lineHeight="100%"
              textAlign={["center", "center", "left", "left"]}
            >
              {item.name}
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
              {item.designation}
            </Heading>
            <HStack spacing={4}>
              <IconButton
                variant="no-outline"
                aria-label="Twitter"
                icon={<FaTwitter />}
                onClick={() => window.open(item.twitter)}
              />
              <a href={`https://opene.ml/s?email=${item.email}`}>
              <IconButton
                variant="no-outline"
                aria-label="Gmail"
                icon={<SiGmail />}
              /></a>
            </HStack>
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
        );
      })}
    </Flex>
  );
}
