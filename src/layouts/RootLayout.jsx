import { Container, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import bgImage from "../assets/bg.png";

const RootLayout = () => {
  const color = useSelector((state) => state.colorTheme.color).toLowerCase();

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
