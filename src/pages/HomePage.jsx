import { Helmet } from "react-helmet";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import textTitle from "../assets/home-title.png";
import textBg from "../assets/main-bg.jpg";

const HomePage = () => {
  const [scrH] = useMediaQuery("(max-height: 764px)");
  const [scrW] = useMediaQuery("(min-width: 998px)");

  const color = useSelector((state) => state.colorTheme.color).toLowerCase();

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="BrainBox. Discover, challenge, and expand your knowledge with our engaging and interactive quiz platform"
        />
        <title>BrainBox</title>
      </Helmet>
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
            height={{ base: "55vh", md: "60vh", lg: "65vh" }}
            width="100%"
            objectFit="cover"
          />
          <Box>
            <Image
              src={textTitle}
              alt="Brain Box"
              height={{ base: "15vw", md: "100px", lg: "130px" }}
              objectFit="contain"
              position="absolute"
              top={scrH && scrW ? "10%" : { base: "25%", sm: "20%" }}
              left="50%"
              transform="translateX(-50%)"
            />
            <Heading
              as="h2"
              position="absolute"
              top={scrH && scrW ? "35%" : { base: "40%", md: "43%" }}
              left="50%"
              transform="translateX(-50%)"
              padding="0 10px"
              maxWidth={{ base: "500px", md: "700px", lg: "800px" }}
              width="100%"
              color="#fff"
              fontSize={{ base: "24px", sm: "28px", md: "38px", lg: "46px" }}
              fontWeight="700"
              textAlign="center"
            >
              Discover, challenge, and expand your knowledge with our engaging
              and interactive quiz platform
            </Heading>
          </Box>
        </Box>

        <Link to="/topics" style={{ margin: "0 auto" }}>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme={color}
            margin="0 auto"
            fontSize={{ base: "28px", sm: "32px", md: "40px" }}
            padding={{ base: "30px 30px 30px 40px", md: "35px 40px 35px 50px" }}
            color={color + ".50"}
            _active={{
              transform: "scale(0.98)",
            }}
          >
            Start
          </Button>
        </Link>
      </Flex>
    </>
  );
};

export default HomePage;
