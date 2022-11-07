import {
  Box,
  Button,
  Center,
  Flex,
  Portal,
  SimpleGrid,
  useBoolean,
  useFocusOnShow,
  VStack,
  useColorModeValue as mode,
  Icon,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as React from "react";
import FocusLock from "react-focus-lock";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { RemoveScroll } from "react-remove-scroll";
import { Link } from "@remix-run/react";
import ColorMode from "../../UI/ColorMode";

const variants = {
  show: {
    display: "revert",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  hide: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: "easeIn",
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const Backdrop = ({ show }: { show: any }) => (
  <Portal>
    <motion.div
      initial={false}
      animate={show ? "show" : "hide"}
      transition={{
        duration: 0.1,
      }}
      variants={{
        show: {
          opacity: 1,
          display: "revert",
        },
        hide: {
          opacity: 0,
          transitionEnd: {
            display: "none",
          },
        },
      }}
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        background: "rgba(0,0,0,0.2)",
        inset: 0,
      }}
    />
  </Portal>
);

const Transition = (props: { [x: string]: any; in: any }) => {
  const { in: inProp, ...rest } = props;
  return (
    <motion.div
      {...rest}
      initial={false}
      variants={variants}
      animate={inProp ? "show" : "hide"}
      style={{
        transformOrigin: "top right",
        position: "absolute",
        width: "calc(100% - 32px)",
        top: "24px",
        left: "16px",
        margin: "0 auto",
        zIndex: 1,
      }}
    />
  );
};

export const MobileNav = () => {
  const [show, { toggle, off }] = useBoolean();
  const ref = React.useRef(null);
  useFocusOnShow(ref, {
    visible: show,
    shouldFocus: true,
  });

  return (
    <>
      <Box
        as="button"
        type="button"
        p="1"
        fontSize="2xl"
        color="gray.600"
        onClick={toggle}
        display={{
          base: "block",
          lg: "none",
        }}
      >
        <HiOutlineMenu />
      </Box>

      <Transition in={show}>
        <RemoveScroll enabled={show}>
          <Backdrop show={show} />
        </RemoveScroll>
        <FocusLock disabled={!show} returnFocus>
          <Box
            bg={mode("white", "gray.700")}
            shadow="lg"
            rounded="lg"
            ref={ref}
            tabIndex={0}
            outline={0}
          >
            <Box pt="5" pb="6" px="5">
              <Flex justify="space-between" align="center">
                <Box mr="-2" mt="-2">
                  <Center
                    as="button"
                    type="button"
                    onClick={off}
                    rounded="base"
                    p="1"
                    color={mode("gray.600", "gray.400")}
                    _hover={{
                      bg: mode("gray.100", "gray.600"),
                    }}
                  >
                    <Box srOnly>Close menu</Box>
                    <HiOutlineX aria-hidden fontSize="1.5rem" />
                  </Center>
                </Box>
              </Flex>
              <HStack as="nav" gap="2" mt="4">
                <Link to="/AllFactions">
                  <Button leftIcon={<Icon as={BsFillArrowRightSquareFill} />}>
                    <Heading fontSize={"3xl"}>PLACEHOLDER</Heading>
                  </Button>
                </Link>
                <Link to="/Changelog">
                  <Button leftIcon={<Icon as={BsFillArrowRightSquareFill} />}>
                    <Heading fontSize={"3xl"}>PLACEHOLDER</Heading>
                  </Button>
                </Link>
              </HStack>
              <Box m={5}>
                <ColorMode />
              </Box>
            </Box>
          </Box>
        </FocusLock>
      </Transition>
    </>
  );
};
