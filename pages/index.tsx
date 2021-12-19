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
        <meta property="og:title" content="Colby Fayock - A UX Designer &amp; Front-end Developer Blog" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://res.cloudinary.com/dev-connect/image/upload/v1638594969/img/ogtitle_y055c2.svg" />
<meta property="og:url" content="https://fanvest.in" />

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
