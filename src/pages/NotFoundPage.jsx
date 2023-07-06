import { Box, Button, Flex, Text, Heading } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  const color = useSelector((state) => state.colorTheme.color).toLowerCase();

  return (
    <Flex
      flexDirection="column"
      height="calc(100vh - 110px)"
      justifyContent="center"
      position="relative"
    >
      <Box margin="0 auto 100px" width="100%">
        <Flex flexDirection="column" alignItems="center">
          <Heading
            as='h1'
            maxWidth="800px"
            width="100%"
            color={color + '.800'}
            fontSize="120px"
            fontWeight="700"
            textAlign="center"
          >
            404
          </Heading>
          <Text
            maxWidth="800px"
            width="100%"
            color={color + '.600'}
            fontSize="46px"
            fontWeight="700"
            textAlign="center"
          >
            Looks like you&apos;re lost
          </Text>
          <Text
            maxWidth="800px"
            width="100%"
            color={color + '.600'}
            fontSize="36px"
            fontWeight="700"
            textAlign="center"
          >
            the page you are looking for not avaible!
          </Text>
        </Flex>
      </Box>

      <Link to="/" style={{ margin: "0 auto" }}>
        <Button
          leftIcon={<ArrowBackIcon />}
          colorScheme={color}
          margin="0 auto"
          size="lg"
          fontSize="40px"
          padding="35px 50px 35px 40px"
          color={color + ".50"}
          _active={{
            transform: "scale(0.98)",
          }}
        >
          Go to Home
        </Button>
      </Link>
    </Flex>
  );
};

export default NotFoundPage;
