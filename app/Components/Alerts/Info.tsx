import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
  } from '@chakra-ui/react'
import { motion } from 'framer-motion';

  type alert = {
    alert_title: string;
    alert_desc: string;
  }

  export const InfoAlert = (props : alert) => {
    return (
      <motion.div
     initial={{ scale: 0 }}  
     animate={{ scale: 1 }}
     transition={{
       type: "spring",
       stiffness: 260,
       damping: 20
     }}>
      <Box m={2}>
      <Alert status="info" borderRadius={'2xl'}>
        <AlertIcon />
        <AlertTitle mr={2} fontSize={['12px', '15px', '18px']}>{props.alert_title}</AlertTitle>
        <AlertDescription fontSize={['12px', '15px', '18px']}>
          {props.alert_desc}
        </AlertDescription>
      </Alert>
      </Box>
      </motion.div>
    );
  };