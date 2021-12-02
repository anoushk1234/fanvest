import React from "react";
import Link from "next/link";
import { Image, Flex } from "@chakra-ui/react";

export default function Logo({ w, color }: any) {
  return (
    <Link href="/">
      <Flex
        ml={{ md: "1rem" }}
        mr={{ md: "2.5rem" }}
        mb={["1rem"]}
        maxWidth={"md"}
      >
        <Image
          maxH="4rem"
          src="https://res.cloudinary.com/dev-connect/image/upload/v1637389107/img/finallogo_fzlrzm.png"
          alt="logo"
        />
      </Flex>
    </Link>
  );
}
