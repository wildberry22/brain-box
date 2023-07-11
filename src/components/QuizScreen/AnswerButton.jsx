import PropTypes from "prop-types";
import { useState } from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";

import "./style.css";
import replaceCER from "../../utils/replaceCER";
import isTouchDevice from "../../utils/isTouchDevice";

const AnswerButton = ({
  color,
  currentQuestionItem,
  currentQuestion,
  setCurrentQuestion,
  setQuizStatus,
  idx,
  answer,
  setAnimation,
}) => {
  const [answerButtonState, setAnswerButtonState] = useState("initial"); // initial / clicked / correct / incorrect

  const isTouch = isTouchDevice();

  const correctAnswer = () => {
    setAnswerButtonState("correct");
    setTimeout(() => {
      document.querySelectorAll(".answer-button")?.forEach((button) => {
        button.disabled = false;
      });
      setAnswerButtonState("initial");
      if (currentQuestion !== 9) {
        setCurrentQuestion((question) => question + 1);
      } else {
        setAnimation((animation) => !animation);
        setTimeout(() => {
          setQuizStatus("end");
          setCurrentQuestion((question) => question + 1);
        }, 300);
      }
    }, 3000);
  };

  const incorrectAnswer = () => {
    setAnswerButtonState("incorrect");
    document.querySelectorAll(".answer-button")?.forEach((button) => {
      if (
        button.querySelector(".answer-button__text")?.textContent ===
        replaceCER(currentQuestionItem.correct_answer)
      ) {
        button.classList.remove("initial");
        button.classList.add("correct");
        setTimeout(() => {
          button.disabled = false;
          setAnswerButtonState("initial");
          button.classList.add("initial");
          button.classList.remove("correct");
          setAnimation((animation) => !animation);
          setTimeout(() => {
            setQuizStatus("end");
          }, 300);
        }, 3000);
      } else {
        setTimeout(() => {
          button.disabled = false;
        }, 3000);
      }
    });
  };

  const handleClick = (e) => {
    let answer = e.currentTarget.querySelector(
      ".answer-button__text"
    ).textContent;

    setAnswerButtonState("clicked");
    document.querySelectorAll(".answer-button")?.forEach((button) => {
      button.disabled = true;
    });

    setTimeout(() => {
      if (answer === replaceCER(currentQuestionItem.correct_answer)) {
        correctAnswer();
      } else {
        incorrectAnswer();
      }
    }, 3000);
  };

  return (
    <Button
      className={`answer-button ${answerButtonState}`}
      width="100%"
      height="auto"
      padding={{ base: "10px", md: "10px 20px" }}
      border="3px solid"
      borderColor={color + ".700"}
      borderRadius="var(--chakra-radii-md)"
      transition=".2s ease"
      onClick={handleClick}
      boxShadow="lg"
      cursor="pointer"
      color={color + ".700"}
      _hover={
        !isTouch
          ? {
              backgroundColor: `${color}.400`,
              color: "white",
            }
          : {}
      }
    >
      <Flex gap={{ base: "10px", md: "15px" }} width="100%" alignItems="center">
        <Box
          className="answer-button__letter"
          fontSize={{ base: "20px", md: "24px" }}
          backgroundColor={color + ".700"}
          width={{ base: "30px", md: "40px" }}
          height={{ base: "30px", md: "40px" }}
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="white"
          fontWeight="700"
        >
          {idx === 0
            ? "A"
            : idx === 1
            ? "B"
            : idx === 2
            ? "C"
            : idx === 3
            ? "D"
            : "N"}
        </Box>
        <Text
          className="answer-button__text"
          whiteSpace="wrap"
          flex="1"
          fontSize={{ base: "22px", md: "24px" }}
          textAlign="left"
        >
          {replaceCER(answer)}
        </Text>
      </Flex>
    </Button>
  );
};

AnswerButton.propTypes = {
  color: PropTypes.string,
  currentQuestionItem: PropTypes.object,
  currentQuestion: PropTypes.number,
  setCurrentQuestion: PropTypes.func,
  setQuizStatus: PropTypes.func,
  setAnimation: PropTypes.func,
  idx: PropTypes.number,
  answer: PropTypes.string,
};

export default AnswerButton;
