import {
  Box,
  Button,
  Flex,
  HStack,
  useColorModeValue as mode,
  VisuallyHidden,
  Heading,
} from "@chakra-ui/react";
import * as React from "react";
import { Logo } from "./navbarComponents/Logo";
import { MobileNav } from "./navbarComponents/MobileNav";
import { NavLink } from "./navbarComponents/NavLink";
import {Link} from "@remix-run/react";
import ColorMode from "../UI/ColorMode";

export const Navbar = () => {
    return (
      <Box>
        <Box as="header" bg={mode("white", "gray.800")} borderBottomWidth="1px">
          <Box
            maxW="7xl"
            mx="auto"
            py="2"
            px={{
              base: "6",
              md: "8",
            }}
          >
            <Flex as="nav" justify="space-between">
              <HStack spacing="8">
                <Box as="a" href="#" rel="home">
                  <VisuallyHidden>
                    <Heading fontSize={'md'}>PLACEHOLDER</Heading>
                  </VisuallyHidden>
                  <Logo  />
                </Box>
                <HStack
                  display={{
                    base: "none",
                    lg: "flex",
                  }}
                  spacing="8"
                >
                  <Link to="/AllFactions">
                    <NavLink.Desktop active={false}>
                      <Heading mt="2" fontSize={'5xl'}>PLACEHOLDER</Heading>
                    </NavLink.Desktop>
                  </Link>
                  <Link to="/Changelog">
                    <NavLink.Desktop active={false}>
                      <Heading mt="2" fontSize={'5xl'}>PLACEHOLDER</Heading>
                    </NavLink.Desktop>
                  </Link>
                  <ColorMode />
                </HStack>
              </HStack>
              <Flex align="center">
                <Box ml="5">
                  <MobileNav />
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    );
};
