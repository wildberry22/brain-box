import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";

import "./style.css";

const QuizEndScreen = ({
  currentQuestion,
  color,
  setCurrentQuestion,
  setQuizStatus,
  refetch,
  length,
}) => {
  const [animation, setAnimation] = useState(false);
  const [scrH750] = useMediaQuery("(max-height: 750px)");
  const [scrW700] = useMediaQuery("(min-wight: 700px)");

  const text =
    currentQuestion <= length / 3
      ? "You lost! Maybe try to choose another category or difficulty. Good luck next time!"
      : currentQuestion > length / 3 && currentQuestion <= length / 1.5
      ? "Not so bad! You are not at the bottom, but you can do better!"
      : currentQuestion > length / 1.5 && currentQuestion <= length - 1
      ? "A very good result! A little more and you will pass this quiz"
      : currentQuestion === length
      ? "Congratulations! You completely passed this quiz! You have very good knowledge on this topic"
      : "";
  const numColor =
    currentQuestion <= length / 3
      ? "red.700"
      : currentQuestion > length / 3 && currentQuestion <= length / 1.5
      ? `${color + ".700"}`
      : currentQuestion > length / 1.5
      ? "green.700"
      : "";

  return (
    <Box
      as={motion.div}
      width="100%"
      height="100%"
      initial={
        animation ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
      }
      animate={
        animation ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }
      }
      exit={animation ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
    >
      <Card
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        backgroundColor="white"
        border="5px solid"
        borderColor={color + ".700"}
      >
        <CardHeader
          maxWidth={{ base: "100%", md: "90%" }}
          textAlign="center"
          padding={{
            base: "10px 10px 0 10px",
            sm: "1.25rem 1.25rem 0 1.25rem",
            md: "1.25rem",
          }}
        >
          <Heading
            fontSize={{ base: "36px", sm: "42px", md: "60px", lg: "80px" }}
            lineHeight={{ base: "1.2", md: "1.33" }}
            color="black"
          >
            Number of points:{" "}
            <Text
              as="span"
              color={numColor}
              animation={
                currentQuestion === length
                  ? "win .5s linear infinite alternate-reverse"
                  : ""
              }
            >
              {currentQuestion}
            </Text>
          </Heading>
        </CardHeader>
        <CardBody
          flex="0"
          marginBottom={!(scrH750 && scrW700) ? { base: 0, lg: "40px" } : "0"}
          textAlign="center"
          maxWidth={{ base: "100%", md: "90%" }}
        >
          <Text
            fontSize={{ base: "24px", sm: "32px", md: "38px", lg: "46px" }}
            fontWeight="700"
            color={numColor}
            animation={
              currentQuestion === length
                ? "win .5s linear infinite alternate-reverse"
                : ""
            }
          >
            {text}
          </Text>
        </CardBody>
        <CardFooter>
          <Flex
            flexDirection={!(scrH750 && scrW700) ? "column" : "row"}
            gap={{ base: "20px", lg: "40px" }}
          >
            {currentQuestion < length && (
              <Button
                variant="outline"
                colorScheme={color}
                margin="0 auto"
                size="lg"
                fontSize={{ base: "24px", sm: "28px", lg: "40px" }}
                padding={{
                  base: "25px 30px 25px 30px",
                  lg: "35px 40px 35px 40px",
                }}
                _active={{
                  transform: "scale(0.98)",
                }}
                onClick={() => {
                  refetch();
                  setAnimation(!animation);
                  setTimeout(() => {
                    setCurrentQuestion(0);
                    setQuizStatus("start");
                  }, 300);
                }}
              >
                Try again
              </Button>
            )}
            <Link to="/topics" style={{ margin: "0 auto" }} onClick={refetch}>
              <Button
                leftIcon={<ArrowBackIcon />}
                colorScheme={color}
                margin="0 auto"
                size="lg"
                fontSize={{ base: "24px", sm: "28px", lg: "40px" }}
                padding={{
                  base: "25px 40px 25px 30px",
                  lg: "35px 50px 35px 40px",
                }}
                color={color + ".50"}
                _active={{
                  transform: "scale(0.98)",
                }}
              >
                Go to Topics
              </Button>
            </Link>
          </Flex>
        </CardFooter>
      </Card>
    </Box>
  );
};

QuizEndScreen.propTypes = {
  color: PropTypes.string,
  currentQuestion: PropTypes.number,
  setCurrentQuestion: PropTypes.func,
  setQuizStatus: PropTypes.func,
  refetch: PropTypes.func,
  length: PropTypes.number,
};

export default QuizEndScreen;
