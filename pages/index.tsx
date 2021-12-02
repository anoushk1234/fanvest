import { Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fanvest</title>
        <meta name="description" content="Fanvest" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <Heading
        letterSpacing="3%"
        fontSize="80"
        fontWeight="Regular"
        className="hero-text"
        fontFamily="BaskervilleOldfaceBQ"
      >
        <style jsx>{`
          @font-face {
            font-family: "BaskervilleOldfaceBQ";

            src: url("/public/BaskervilleOldfaceBQ.otf");
          }
          .hero-text {
            font-family: "BaskervilleOldfaceBQ";
          }
        `}</style>
      </Heading>
      <Hero />
    </div>
  );
};

export default Home;
