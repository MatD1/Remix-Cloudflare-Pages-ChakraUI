import { Alert, AlertIcon, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "@remix-run/react";

const DevelopmentAlert = () => {
  return (
    <Alert status="error" variant="left-accent">
      <AlertIcon />
     We've made a major change to the site, checkout the update <Link to="/MajorUpdate"><Button size={'sm'} ml={1} mr={1} >Here</Button></Link> for more information.
    </Alert>
  );
};

export default DevelopmentAlert;
