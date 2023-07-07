import { Container, Box, Text, useMediaQuery } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import bgImage from "../assets/bg.png";

const RootLayout = () => {
  const [scrH] = useMediaQuery("(max-height: 585px)");
  const [scrW] = useMediaQuery("(min-width: 600px)");

  const color = useSelector((state) => state.colorTheme.color).toLowerCase();

  if (scrH && scrW) {
    return (
      <Box
        height="100vh"
        width="100vw"
        overflow="hidden"
        backgroundColor={color + ".50"}
        backgroundImage={bgImage}
        backgroundRepeat="no-repeat"
        backgroundPosition="50% 0"
        backgroundSize="cover"
      >
        <Text
          position="absolute"
          top="50%"
          left="50%"
          textAlign="center"
          fontSize="24px"
          color={color + ".700"}
          transform="translate(-50%, -50%)"
        >
          The height of the screen is too small for convenient display of the
          site. Please turn your device over or try accessing the site from
          another device
        </Text>
      </Box>
    );
  }

  return (
    <Box
      height="100vh"
      width="100vw"
      overflow="hidden"
      backgroundColor={color + ".50"}
      backgroundImage={bgImage}
      backgroundRepeat="no-repeat"
      backgroundPosition="50% 0"
      backgroundSize="cover"
    >
      <Header />

      <Box as="main" marginTop="20px">
        <Container maxWidth="8xl">
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default RootLayout;
