import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Card,
  CardHeader,
  Text,
  CardBody,
  Flex,
  Grid,
} from "@chakra-ui/react";

import shuffleArr from "../../utils/shuffleArr";
import AnswerButton from "./AnswerButton";
import replaceCER from "../../utils/replaceCER";

const QuizScreen = ({
  color,
  currentQuestion,
  setCurrentQuestion,
  setQuizStatus,
  questionsList,
}) => {
  const [animation, setAnimation] = useState(false);

  const currentQuestionItem = questionsList[currentQuestion];
  let answers = shuffleArr(
    currentQuestionItem.incorrect_answers.concat(
      currentQuestionItem.correct_answer
    )
  );
  //===========================================
  if (import.meta.env.NODE_ENV !== "production") {
    console.log(currentQuestionItem);
  } else {
    ("");
  }
  //===========================================

  const answersElems = answers.map((answer, i) => {
    return (
      <AnswerButton
        key={i}
        idx={i}
        color={color}
        answer={answer}
        currentQuestionItem={currentQuestionItem}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        setQuizStatus={setQuizStatus}
        setAnimation={setAnimation}
      />
    );
  });

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
        position="relative"
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        backgroundColor="white"
        border="5px solid"
        borderColor={color + ".700"}
      >
        <Box
          position="absolute"
          maxWidth="400px"
          top="20px"
          left="0"
          color="white"
          padding="5px 20px"
          backgroundColor={color + ".700"}
          borderRadius="var(--chakra-radii-md)"
          borderTopLeftRadius="0"
          borderBottomLeftRadius="0"
          fontSize="24px"
        >
          {currentQuestionItem.category}
        </Box>
        <Box
          position="absolute"
          top="20px"
          right="0"
          color="white"
          padding="5px 20px"
          backgroundColor={color + ".700"}
          borderRadius="var(--chakra-radii-md)"
          borderTopRightRadius="0"
          borderBottomRightRadius="0"
          fontSize="24px"
        >
          {currentQuestionItem.difficulty}
        </Box>
        <CardHeader
          padding="0"
          width="100%"
          position="absolute"
          top="0"
          left="0"
          right="0"
        >
          <Box
            width="100%"
            height="10px"
            backgroundColor={color + ".100"}
            marginBottom="20px"
          >
            <Box
              width={((currentQuestion + 1) * 100) / questionsList.length + "%"}
              height="10px"
              backgroundColor={color + ".700"}
              transition=".2s ease"
            ></Box>
          </Box>
          <Text textAlign="center" fontSize="20px" fontWeight="700">
            Question <Text as="span">{currentQuestion + 1}</Text>/
            {questionsList.length}
          </Text>
        </CardHeader>
        <CardBody width="100%" marginTop="40px">
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Box
              width="90%"
              marginBottom="80px"
              borderRadius="var(--chakra-radii-md)"
              bgColor={color + ".700"}
              padding="30px 50px"
            >
              <Text
                textAlign="center"
                color={color + ".50"}
                fontSize="36px"
                fontWeight="700"
              >
                {replaceCER(currentQuestionItem.question)}
              </Text>
            </Box>
            <Grid
              gridTemplateColumns="repeat(2, minmax(0, 1fr))"
              gap="20px"
              width="90%"
              margin="0 auto"
            >
              {answersElems}
            </Grid>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
};

QuizScreen.propTypes = {
  color: PropTypes.string,
  currentQuestion: PropTypes.number,
  setQuizStatus: PropTypes.func,
  setCurrentQuestion: PropTypes.func,
  questionsList: PropTypes.array,
};

export default QuizScreen;
