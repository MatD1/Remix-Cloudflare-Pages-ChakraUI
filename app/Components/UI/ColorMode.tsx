import { useColorModeValue, useColorMode, Button, Icon, DarkMode, Switch } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RiMoonLine, RiSunLine } from 'react-icons/ri'

export default function ColorMode () {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <DarkMode>
            <motion.div
            initial={{ scale: 0 }}  
            animate={{ scale: 1 }}
            transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
            }}>
                <Switch aria-label="Change Color Mode" size="lg" colorScheme={'blue'} onChange={toggleColorMode}>
                    <Icon w="25px" h="25px" as={colorMode === 'light' ? RiSunLine : RiMoonLine} />
                </Switch>
            </motion.div>
        </DarkMode>
    )
}