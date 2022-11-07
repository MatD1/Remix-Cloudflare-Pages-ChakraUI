import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Divider,
  Heading,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import DevelopmentAlert from "~/Components/Alerts/DevelopmentAlert";
import { ErrorAlert } from "~/Components/Alerts/Error";
import { InfoAlert } from "~/Components/Alerts/Info";
import { WarningAlert } from "~/Components/Alerts/Warning";
import HomePage from "~/Components/Home/Home";

export default function Index() {
  const bgColor = useColorModeValue("gray.500", "gray.900");
  return (
    <VStack bg={bgColor}>
      {console.log(
        "Hey! Welcome To PLACEHOLDER!, If anyone has told you to enter something here, Don't do it! Unless you have any idea what your doing, you could be harmfully exposing yourself!"
      )}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <HomePage />
      </motion.div>
    </VStack>
  );
}
