import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  SimpleGrid,
  Link,
  Stack,
  Box,
  Image,
  Flex,
  Heading,
  List,
  ListItem,
  Skeleton,
  AspectRatioBox
} from "@chakra-ui/core";
import myBackHead from "../img/myBackHead.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Flex align="center" direction="column" w="100%">
      <Helmet>
        <title>About - Imam Hanafi</title>
      </Helmet>
      <Heading mb="10" w="100%">
        About Me
      </Heading>
      <Flex
        mb={{ xs: "4", xl: "0" }}
        align="center"
        direction="column"
        w="100%"
      >
        <AspectRatioBox
          ratio={1}
          w={{ default: "100%", lg: "60%" }}
          style={{ display: "flex" }}
        >
          {/* <Skeleton isLoaded={isLoaded}> */}
          <LazyLoadImage
            alt="Imam Hanafi photo"
            effect="blur"
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "2%"
            }}
            src={myBackHead}
          />
          {/* <Image
              rounded="lg"
              borderWidth="2px"
              src={myBackHead}
              alt="Imam Hanafi"
              align="center"
              justify="center"
              onLoad={() => {
                setIsLoaded(true);
              }}
            />
            </Skeleton> */}
        </AspectRatioBox>
      </Flex>
      <Stack>
        <Box pb={{ md: "2" }} pt={{ md: "4" }}>
          I'm 21 years old. I lived at Surabaya, one of the biggest city in
          Indonesia.
        </Box>
        <Box py={{ md: "2" }}>
          I'm interested in developing modern web, especially on MERN stack. So
          I decided to learn it slowly, part by part, starts with React as this
          website made with.
        </Box>
        <Box py={{ md: "2" }}>
          I'm not an expert developer, I'm still learning too.
        </Box>
        <Box py={{ md: "2" }}>
          In a "real-life", sometimes I am playing mobile games or some old
          video games on my Laptop, visiting{" "}
          <Link
            fontWeight="bold"
            color="teal.400"
            href="http://1cak.com/"
            isExternal
          >
            1CAK
          </Link>{" "}
          ( local meme site ) and watching YouTube too.
        </Box>
        <Box py={{ md: "2" }}>
          Sometimes I do like to share some of my personal experiences to my
          close friends, such as academics, loves, films, video games and many
          more. Sometimes I write it on my{" "}
          <Link
            fontWeight="bold"
            color="teal.400"
            href="https://instagram.com/myth_hanafi"
            isExternal
          >
            Instagram
          </Link>
          . Because with writing, it can speak whatever I can not.
        </Box>
      </Stack>
      <Heading w="100%" fontSize="1.5rem" mt="8">
        Knowledge
      </Heading>
      <Heading mb="4" w="100%" fontSize="1.375rem" mt="8">
        Web
      </Heading>
      <SimpleGrid columns={{ default: "2", md: "3" }} spacing={15} w="100%">
        <List styleType="disc">
          <Heading w="100%" fontSize="1.25rem" mb="2">
            Languange
          </Heading>
          <ListItem>PHP</ListItem>
          <ListItem>JavaScript</ListItem>
          <ListItem>C#</ListItem>
        </List>
        <List styleType="disc">
          <Heading w="100%" fontSize="1.25rem" mb="2">
            Frontend
          </Heading>
          <ListItem>ReactJS</ListItem>
          <ListItem>jQuery</ListItem>
        </List>
        <List styleType="disc">
          <Heading w="100%" fontSize="1.25rem" mb="2">
            Backend
          </Heading>
          <ListItem>Laravel</ListItem>
          <ListItem>NodeJS</ListItem>
          <ListItem>ASP.NET</ListItem>
        </List>
        <List styleType="disc">
          <Heading w="100%" fontSize="1.25rem" mb="2">
            Databases
          </Heading>
          <ListItem>MySQL</ListItem>
          <ListItem>MongoDB</ListItem>
          <ListItem>SQL Server</ListItem>
        </List>
        <List styleType="disc">
          <Heading w="100%" fontSize="1.25rem" mb="2">
            CSS
          </Heading>
          <ListItem>Bootstrap</ListItem>
          <ListItem>Materialize</ListItem>
          <ListItem>Chakra UI</ListItem>
        </List>
        <List styleType="disc">
          <Heading w="100%" fontSize="1.25rem" mb="2">
            Tools
          </Heading>
          <ListItem>VS Code</ListItem>
          <ListItem>Atom</ListItem>
          <ListItem>Codesandbox</ListItem>
          <ListItem>Postman</ListItem>
        </List>
      </SimpleGrid>

      <Heading mb="4" w="100%" fontSize="1.375rem" mt="8">
        Desktop ( Windows )
      </Heading>
      <SimpleGrid columns={{ default: "2", md: "3" }} spacing={15} w="100%">
        <List styleType="disc">
          <Heading w="100%" fontSize="1.25rem" mb="2">
            Languange
          </Heading>
          <ListItem>VB</ListItem>
        </List>
        <List styleType="disc">
          <Heading w="100%" fontSize="1.25rem" mb="2">
            Frontend
          </Heading>
          <ListItem>Razor</ListItem>
        </List>
        <List styleType="disc">
          <Heading w="100%" fontSize="1.25rem" mb="2">
            Databases
          </Heading>
          <ListItem>Oracle</ListItem>
          <ListItem>SQL Server</ListItem>
        </List>
        <List styleType="disc">
          <Heading w="100%" fontSize="1.25rem" mb="2">
            Tools
          </Heading>
          <ListItem>Visual Studio</ListItem>
        </List>
      </SimpleGrid>
    </Flex>
  );
};

export default About;
