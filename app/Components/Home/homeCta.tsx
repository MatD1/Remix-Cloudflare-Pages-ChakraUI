import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { Link } from "@remix-run/react";

const HomeCTA = () => {
  return (
    <Box as="section">
      <Box
        maxW="3xl"
        mx="auto"
        px={{
          base: "6",
          lg: "8",
        }}
        py={{
          base: "16",
          sm: "20",
        }}
        textAlign="center"
      >
        <Heading
          my="4"
          as="h2"
          fontSize={{
            base: "4xl",
            md: "6xl",
          }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="1.2"
        >
          
         PLACEHOLDER{" "}
          </Heading>
          <Heading color="squadYellow" fontSize={'8xl'} display={'inline'}>
            PLACEHOLDER
          </Heading>  
          <Text display={'inline'} sx={{ fontSize: "15px", display: "inline" }}>©</Text>
          {" "}
        <Stack
          direction={{
            base: "column",
            sm: "row",
          }}
          mt="10"
          justify="center"
          spacing={{
            base: "3",
            md: "5",
          }}
          maxW="md"
          mx="auto"
        >
          <Link to="/AllFactions">
            <Button
              as="a"
              href="#"
              size="lg"
              h="16"
              px="10"
              colorScheme="blue"
              fontWeight="bold"
              flex={{
                md: "1",
              }}
            >
              Find out more.
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default HomeCTA;
