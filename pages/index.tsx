import { Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fanvest</title>
        <meta name="description" content="Fund your film with crypto" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
        <meta property="og:title" content="Fanvest - Fund your film with crypto" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://res.cloudinary.com/dev-connect/image/upload/v1638594969/img/ogtitle_y055c2.svg" />
<meta property="og:url" content="https://fanvest.in" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@fanvest" />
<meta name="twitter:title" content="Fanvest" />
<meta name="twitter:description" content="Fund your film with crypto" />
<meta name="twitter:image" content="https://res.cloudinary.com/dev-connect/image/upload/v1638594969/img/ogtitle_y055c2.svg" />
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
