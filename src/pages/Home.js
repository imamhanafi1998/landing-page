import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  AspectRatioBox,
  Skeleton,
  Heading,
  Flex,
  Image,
  Box
} from "@chakra-ui/core";
import cat from "../img/cat.gif";
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Flex align="center" flexDirection="column" h="100%">
      <Helmet>
        <title>Home - Imam Hanafi</title>
      </Helmet>
      <Flex
        mb={{ xs: "4", xl: "0" }}
        align="center"
        h="100%"
        direction={{ default: "column", md: "row" }}
      >
        <AspectRatioBox
          w={{ default: "40", md: "30", lg: "44" }}
          ratio={20 / 39.5} d="flex"
        >
          <LazyLoadImage
           alt="Imam Hanafi's comrade cat"
           effect="blur"
           style={{justifyContent: 'center', alignItems: 'center', borderRadius: '2%'}}
           src={cat} />
          {/* <Skeleton isLoaded={isLoaded}>
            <Image
              src={cat}
              alt="Imam Hanafi's cat"
              onLoad={() => {
                setIsLoaded(true);
              }}
            />
          </Skeleton> */}
        </AspectRatioBox>
        <Flex
          w="100%"
          py={{ lg: "0" }}
          ml={{ md: "10" }}
          direction="column"
          h="100%"
          justify="space-between"
        >
          <Heading as="h1" size="xl" pb={4} mt={{ sm: "6", md: "0" }}>
            Hello there, my name is Imam Hanafi
          </Heading>

          <Box>
            <Box py={2}>
              You can call me Imam. I do like to build website using php native,
              but for now I do try to focus on building modern website using
              MERN stack.
            </Box>

            <Box pt={2}>
              I studied on Information System Department at UPN "VETERAN" Jawa
              Timur, one on the state university at Surabaya City, Indonesia.
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Flex>
        <Box py={{ md: "2", xl: "4" }}>
          Sometimes I have decided to create random website whatever I want.
          Because of that, I spent so many time to learn it deeply. Actually it
          was 3 years since I was in Information System. In that of time, I hate
          and tired of writing code, but somehow I do love it as time goes by.
        </Box>
      </Flex>
    </Flex>
  );
}
