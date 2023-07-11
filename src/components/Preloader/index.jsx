import PropTypes from "prop-types";
import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import logo from "../../assets/logo-black.png";

const Preloader = ({ animation }) => {
  return (
    <Box
      as={motion.div}
      position="absolute"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize="80px"
      transition=".4s ease"
      initial={
        animation ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
      }
      animate={
        animation ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }
      }
      exit={animation ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
    >
      <Image
        src={logo}
        alt={logo}
        width={{ base: "250px", sm: "350px", md: "450px", lg: "650px" }}
      />
    </Box>
  );
};

Preloader.propTypes = {
  animation: PropTypes.bool
};

export default Preloader;
