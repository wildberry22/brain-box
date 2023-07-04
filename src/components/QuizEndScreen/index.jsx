import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";

import "./style.css";

const QuizEndScreen = ({ /* currentQuestion, */ color }) => {
  const currentQuestion = 10;
  const text =
    currentQuestion <= 3
      ? "You lost! Maybe try to choose another category or difficulty. Good luck next time!"
      : currentQuestion > 3 && currentQuestion <= 6
      ? "Not so bad! You are not at the bottom, but you can do better!"
      : currentQuestion > 6 && currentQuestion <= 9
      ? "A very good result! A little more and you will pass this quiz"
      : currentQuestion === 10
      ? "Congratulations! You completely passed this quiz! You have very good knowledge on this topic"
      : "";
  const numColor =
    currentQuestion <= 3
      ? "red.700"
      : currentQuestion > 3 && currentQuestion <= 6
      ? `${color + ".700"}`
      : currentQuestion > 6
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
              currentQuestion === 10
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
            currentQuestion === 10
              ? "win .5s linear infinite alternate-reverse"
              : ""
          }
        >
          {text}
        </Text>
      </CardBody>
      <CardFooter>
        {/* buttons */}
      </CardFooter>
    </Card>
  );
};

QuizEndScreen.propTypes = {
  color: PropTypes.string,
  currentQuestion: PropTypes.number,
};

export default QuizEndScreen;
