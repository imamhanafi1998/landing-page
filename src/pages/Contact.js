import React, {useEffect} from "react";
import { Helmet } from "react-helmet";
import {
  Link,
  Flex,
  Heading,
  List,
  ListItem,
  ListIcon,
  Icon
} from "@chakra-ui/core";

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <Flex direction="column" w="100%">
      <Helmet>
        <title>Contacts - Imam Hanafi</title>
      </Helmet>
      <Heading mb="10" w="100%">
        My Contacts
      </Heading>
      <Flex align="flex-start" w="100%" direction="column">
        <Flex direction="column" mb="30px">
          <Heading w="100%" fontSize="1.25rem" mb="2">
            <ListIcon icon="email" mb="1" />
            Email
          </Heading>
          <List mx={{ default: "6", md: "0" }}>
            <Flex direction={{ default: "column", md: "row" }}>
              <Flex direction="column">
                <ListItem>
                  <ListIcon mb="1" icon="chevron-right" />
                  Personal ( GMail )
                </ListItem>
                <Link
                  fontWeight="bold"
                  color="teal.400"
                  isExternal
                  href="mailto:h.imam1998@gmail.com"
                  flexWrap="none"
                >
                  h.imam1998
                  <Icon name="external-link" mx="2px" />
                </Link>
              </Flex>
              <Flex direction="column" ml={{ md: "8" }}>
                <ListItem>
                  <ListIcon mb="1" icon="chevron-right" />
                  Academic ( Edu Mail )
                </ListItem>
                <Link
                  fontWeight="bold"
                  color="teal.400"
                  isExternal
                  href="mailto:17082010032@student.upnjatim.ac.id"
                  flexWrap="none"
                >
                  17082010032
                  <Icon name="external-link" mx="2px" />
                </Link>
              </Flex>
            </Flex>
          </List>
        </Flex>
        <Flex direction="column" mb="30px">
          <Heading w="100%" fontSize="1.25rem" mb="2">
            <ListIcon icon="up-down" mb="1" />
            Development
          </Heading>
          <List mx={{ default: "6", md: "0" }}>
            <Flex direction={{ default: "column", md: "row" }}>
              <Flex direction="column">
                <ListItem>
                  <ListIcon mb="1" icon="chevron-right" />
                  GitHub
                </ListItem>
                <Link
                  fontWeight="bold"
                  color="teal.400"
                  isExternal
                  href="https://github.com/imamhanafi1998/"
                  flexWrap="none"
                >
                  imamhanafi1998
                  <Icon name="external-link" mx="2px" />
                </Link>
              </Flex>
            </Flex>
          </List>
        </Flex>
        <Flex direction="column">
          <Heading w="100%" fontSize="1.25rem" mb="2">
            <ListIcon icon="chat" mb="1" />
            Social
          </Heading>
          <List mx={{ default: "6", md: "0" }}>
            <Flex direction={{ default: "column", md: "row" }}>
              <Flex direction="column">
                <ListItem>
                  <ListIcon mb="1" icon="chevron-right" />
                  Instagram
                </ListItem>
                <Link
                  fontWeight="bold"
                  color="teal.400"
                  isExternal
                  href="https://instagram.com/myth_hanafi/"
                  flexWrap="none"
                >
                  myth_hanafi
                  <Icon name="external-link" mx="2px" />
                </Link>
              </Flex>
              <Flex direction="column" ml={{ md: "8" }}>
                <ListItem>
                  <ListIcon mb="1" icon="chevron-right" />
                  Line
                </ListItem>
                <Link
                  fontWeight="bold"
                  color="teal.400"
                  isExternal
                  href="https://line.me/ti/p/~h.imam1998"
                  flexWrap="none"
                >
                  h.imam1998
                  <Icon name="external-link" mx="2px" />
                </Link>
              </Flex>
              <Flex direction="column" ml={{ md: "8" }}>
                <ListItem>
                  <ListIcon mb="1" icon="chevron-right" />
                  Telegram
                </ListItem>
                <Link
                  fontWeight="bold"
                  color="teal.400"
                  isExternal
                  href="https://t.me/secdet98"
                  flexWrap="none"
                >
                  secdet98
                  <Icon name="external-link" mx="2px" />
                </Link>
              </Flex>
            </Flex>
          </List>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
