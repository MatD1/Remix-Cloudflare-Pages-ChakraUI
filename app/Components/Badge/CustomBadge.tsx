import { Badge, Heading } from "@chakra-ui/react";

export const CustomBadge = (props: { Badge_Text: string; }) => {
  return (
    <Badge variant="solid" colorScheme="cyan" borderRadius="xl">
      <Heading color="black" fontSize="30px">
        {props.Badge_Text}
      </Heading>
    </Badge>
  );
};
