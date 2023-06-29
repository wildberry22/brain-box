import { Container, Box  } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/Header";


const RootLayout = () => {
  const color = useSelector((state) => state.colorTheme.color).toLowerCase();
  
  return (
    <Box height="100vh" width="100vw" overflow='hidden' backgroundColor={color + '.50'}>
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
