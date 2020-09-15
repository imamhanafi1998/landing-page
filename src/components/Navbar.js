import React from "react";
import { Flex, useColorMode, Avatar, Button, Icon } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import "../styles.css";
import rinnegan from "../img/rinnegan.png";

import { Helmet } from "react-helmet";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      position="fixed"
      top="0"
      w="100%"
      zIndex="999"
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
      as="nav"
      h={16}
      align="center"
      justify="space-between"
      px={[4, 6, 8, 10]}
      boxShadow="lg"
    >
      <Helmet>
        <meta
          name="theme-color"
          content={colorMode === "light" ? "#EDF2F7" : "#171923"}
        />
      </Helmet>
      <Flex align="center" justify="flex-start">
        <Link to="/">
          <Button bg={colorMode} m={1} px={0}>
            <Avatar
              size="sm"
              name="Imam Hanafi"
              src={rinnegan}
              borderWidth="2px"
              bg="white"
            />
          </Button>
        </Link>
      </Flex>

      <Flex align="center" justify="flex-end">
        <Link to="/about">
          <Button bg={colorMode} m={1} px={[1, 2, 2, 3]}>
            About
          </Button>
        </Link>

        <Link to="/works">
          <Button bg={colorMode} m={1} px={[1, 2, 2, 3]}>
            Works
          </Button>
        </Link>

        <Link to="/contacts">
          <Button bg={colorMode} m={1} px={[1, 2, 2, 3]}>
            Contacts
          </Button>
        </Link>

        <Button
          bg={colorMode}
          m={1}
          px={[1, 2, 2, 3]}
          onClick={toggleColorMode}
        >
          <Icon
            name={colorMode === "light" ? "moon" : "sun"}
            size={5}
            visibility="ghost"
          />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
