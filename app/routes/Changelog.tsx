import { Heading, Box, Text, Badge, Divider } from "@chakra-ui/react"
import React from "react"
import Moment from "react-moment";
import { json, LoaderFunction } from "@remix-run/cloudflare";
import 'moment-timezone';
import { useLoaderData } from "@remix-run/react";


export const loader: LoaderFunction = async () => {
    const res = await fetch(`Grab External Data`);
    return json(await res.json());
  }

type data = {
    id: string;
    UpdateName: string;
    body: string;
    createdat: string;
}

function index() {
    const changelog = useLoaderData();
  return (
    <>
      <React.Fragment>
          <Box ml={10} mr={10} mt={5}>
            {/* {changelog.map((changelog : data) => (
              <>
              <Box key={changelog.id}>
                <Badge><Moment withTitle={true} local interval={0} format="D MMM YYYY hh:mm">{changelog.createdat}</Moment></Badge>
                <Heading size="lg" fontWeight="light" mb={2}>{changelog.UpdateName}</Heading>
                <Text fontSize="sm" color="gray.500" mb={2}>
                 - {changelog.body}
                </Text>
              </Box>
              <Divider variant={'dashed'} mt={1} mb={1} />
              </>
            ))} */}
          </Box>
      </React.Fragment>
    </>
  )
}


export default index