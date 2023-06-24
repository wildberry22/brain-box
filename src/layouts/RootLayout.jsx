import { Container, Box, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Box minHeight="100vh" minWidth="100vw" backgroundColor="teal.50">
      <Box backgroundColor="teal.600" color="white">
        <Heading padding="20px">header</Heading>
      </Box>
      <Box as="main" marginTop="20px">
        <Container maxWidth="6xl">
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default RootLayout;
