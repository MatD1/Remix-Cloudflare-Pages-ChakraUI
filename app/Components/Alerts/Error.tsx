import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
} from "@chakra-ui/react";

type alert = {
  alert_title: string;
  alert_desc: string;
}

export const ErrorAlert = (props: alert) => {
  return (
    <Box m={2}>
    <Alert status="error" borderRadius={'2xl'}>
      <AlertIcon />
      <AlertTitle mr={2} fontSize={['15px', '20px', '24px']}>{props.alert_title}</AlertTitle>
      <AlertDescription fontSize={['12px', '15px', '20px']} fontWeight={'semibold'}>
        {props.alert_desc}
      </AlertDescription>
    </Alert>
    </Box>
  );
};
