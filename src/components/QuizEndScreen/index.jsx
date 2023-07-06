import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";

import "./style.css";

const QuizEndScreen = ({
  currentQuestion,
  color,
  setCurrentQuestion,
  setQuizStatus,
  refetch,
  length
}) => {
  const text =
    currentQuestion <= length / 3
      ? "You lost! Maybe try to choose another category or difficulty. Good luck next time!"
      : currentQuestion > length / 3  && currentQuestion <= length / 1.5
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
    <Card
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
      border="5px solid"
      borderColor={color + ".700"}
    >
      <CardHeader maxWidth="90%" textAlign="center">
        <Heading fontSize="80px" color="black">
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
      <CardBody flex="0" marginBottom="40px" textAlign="center" maxWidth="90%">
        <Text
          fontSize="46px"
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
        <Flex flexDirection="column" gap="40px">
          {currentQuestion < length && (
            <Button
              variant="outline"
              colorScheme={color}
              margin="0 auto"
              size="lg"
              fontSize="40px"
              padding="35px 50px 35px 40px"
              _active={{
                transform: "scale(0.98)",
              }}
              onClick={() => {
                setCurrentQuestion(0);
                setQuizStatus("start");
                refetch();
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
              fontSize="40px"
              padding="35px 50px 35px 40px"
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
  );
};

QuizEndScreen.propTypes = {
  color: PropTypes.string,
  currentQuestion: PropTypes.number,
  setCurrentQuestion: PropTypes.func,
  setQuizStatus: PropTypes.func,
  refetch: PropTypes.func,
  length: PropTypes.number
};

export default QuizEndScreen;
