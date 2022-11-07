import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
  } from '@chakra-ui/react'

  type alert = {
    alert_title: string;
    alert_desc: string;
  }

  export const SuccessAlert = (props: alert) => {
    return (
      <Box m={2}>
      <Alert status="success" borderRadius={'2xl'}>
        <AlertIcon />
        <AlertTitle mr={2} fontSize={['12px', '15px', '18px']}>{props.alert_title}</AlertTitle>
        <AlertDescription fontSize={['12px', '15px', '18px']}>
          {props.alert_desc}
        </AlertDescription>
      </Alert>
      </Box>
    );
  };