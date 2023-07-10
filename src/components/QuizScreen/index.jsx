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
  useMediaQuery,
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
  const [scrH750] = useMediaQuery("(max-height: 750px)");

  const currentQuestionItem = questionsList[currentQuestion];
  let answers = shuffleArr(
    currentQuestionItem.incorrect_answers.concat(
      currentQuestionItem.correct_answer
    )
  );
  //===========================================
  if (!import.meta.env.PROD) {
    console.log(currentQuestionItem);
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
          maxWidth={{ base: "max-content", sm: "270px", lg: "400px" }}
          marginRight={{ base: "10px", sm: "0" }}
          top={{ base: "15px", sm: "10px", lg: "20px" }}
          left="0"
          color="white"
          padding={{ base: "5px", sm: "5px 20px" }}
          backgroundColor={color + ".700"}
          borderRadius="var(--chakra-radii-md)"
          borderTopLeftRadius="0"
          borderBottomLeftRadius="0"
          fontSize={{ base: "16px", sm: "20px", lg: "24px" }}
        >
          {currentQuestionItem.category}
        </Box>
        <Box
          position="absolute"
          top={{ base: "54px", sm: "10px", lg: "20px" }}
          right={{ base: "auto", sm: "0" }}
          left={{ base: "0", sm: "auto" }}
          color="white"
          padding={{ base: "5px", sm: "5px 20px" }}
          backgroundColor={color + ".700"}
          borderRadius="var(--chakra-radii-md)"
          borderTopRightRadius={{ base: "var(--chakra-radii-md)", sm: "0" }}
          borderBottomRightRadius={{ base: "var(--chakra-radii-md)", sm: "0" }}
          borderTopLeftRadius={{ base: "0", sm: "var(--chakra-radii-md)" }}
          borderBottomLeftRadius={{ base: "0", sm: "var(--chakra-radii-md)" }}
          fontSize={{ base: "16px", sm: "20px", lg: "24px" }}
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
            marginBottom={{ base: "0", md: "5px", lg: "20px" }}
          >
            <Box
              width={((currentQuestion + 1) * 100) / questionsList.length + "%"}
              height="10px"
              backgroundColor={color + ".700"}
              transition=".2s ease"
            ></Box>
          </Box>
          <Text
            textAlign="center"
            fontSize={{ base: "18px", md: "20px" }}
            fontWeight="700"
            marginTop={{ base: "-44px", md: "0px" }}
          >
            Question <Text as="span">{currentQuestion + 1}</Text>/
            {questionsList.length}
          </Text>
        </CardHeader>
        <CardBody
          width="100%"
          marginTop={{ base: "80px", sm: "40px" }}
          padding={{ base: "10px", sm: "1rem", md: "1.25rem" }}
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Box
              width={{ base: "100%", lg: "90%" }}
              marginBottom={
                !scrH750 ? { base: "40px", sm: "60px", lg: "80px" } : "20px"
              }
              borderRadius="var(--chakra-radii-md)"
              bgColor={color + ".700"}
              padding={
                !scrH750
                  ? { base: "10px", md: "20px 40px", lg: "30px 50px" }
                  : "10px"
              }
            >
              <Text
                textAlign="center"
                color={color + ".50"}
                fontSize={{ base: "24px", sm: "28px", md: "36px" }}
                fontWeight="700"
              >
                {replaceCER(currentQuestionItem.question)}
              </Text>
            </Box>
            <Grid
              gridTemplateColumns={{
                base: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
              }}
              gap={{ base: "5px", md: "20px" }}
              width={{ base: "100%", lg: "90%" }}
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
