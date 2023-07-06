import { Box, Button, Flex, Image, Heading } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import textTitle from "../assets/home-title.png";
import textBg from "../assets/main-bg.jpg";

const HomePage = () => {
  const color = useSelector((state) => state.colorTheme.color).toLowerCase();

  return (
    <Flex
      flexDirection="column"
      height="calc(100vh - 110px)"
      justifyContent="center"
      position="relative"
    >
      <Box margin="0 auto 40px" width="100%">
        <Image
          src={textBg}
          alt="Brain Box"
          height="65vh"
          width="100%"
          objectFit="cover"
        />
        <Box>
          <Image
            src={textTitle}
            alt="Brain Box"
            height="130px"
            objectFit="contain"
            position="absolute"
            top="20%"
            left="50%"
            transform="translateX(-50%)"
          />
          <Heading
            as='h2'
            position="absolute"
            top="43%"
            left="50%"
            transform="translateX(-50%)"
            maxWidth="800px"
            width="100%"
            color="#fff"
            fontSize="46px"
            fontWeight="700"
            textAlign="center"
          >
            Discover, challenge, and expand your knowledge with our engaging and
            interactive quiz platform
          </Heading>
        </Box>
      </Box>

      <Link to="/topics" style={{ margin: "0 auto" }}>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme={color}
          margin="0 auto"
          size="lg"
          fontSize="40px"
          padding="35px 40px 35px 50px"
          color={color + ".50"}
          _active={{
            transform: "scale(0.98)",
          }}
        >
          Start
        </Button>
      </Link>
    </Flex>
  );
};

export default HomePage;
