import { useState } from "react";
import { useSelector } from "react-redux";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import QuizStartScreen from "../components/QuizStartScreen";
import QuizScreen from "../components/QuizScreen";
import SkeletonScr from "../components/QuizScreen/SkeletonScr";

import { useGetQuestionsQuery } from "../redux/api/quizApiSlice";

const QuizPage = () => {
  const [quizStatus, setQuizStatus] = useState("start"); // start / game / end
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { topicItem, difficulty } = useSelector((state) => state.quizData);
  const color = useSelector((state) => state.colorTheme.color).toLowerCase();

  const {
    data: questionsList,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetQuestionsQuery({
    category: topicItem.category,
    difficulty: difficulty.toLowerCase(),
  });

  const content =
    quizStatus === "start" ? (
      <QuizStartScreen
        topicItem={topicItem}
        difficulty={difficulty}
        color={color}
        setQuizStatus={setQuizStatus}
      />
    ) : quizStatus === "game" ? (
      isLoading ? (
        <SkeletonScr />
      ) : isSuccess ? (
        <QuizScreen
          color={color}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          questionsList={questionsList.results}
        />
      ) : (
        ""
      )
    ) : (
      "hello game"
    );

  return (
    <Flex
      flexDirection="column"
      height="calc(100vh - 170px)"
      marginTop="40px"
      justifyContent="center"
      alignItems="center"
    >
      {!isError ? (
        content
      ) : (
        <>
          <Heading
            textAlign="center"
            marginTop="20px"
            fontSize="46px"
            maxWidth="800px"
            margin="0 auto"
            color={color + ".800"}
            marginBottom="80px"
          >
            Oops... Looks like we have some problems. Try again later!
          </Heading>
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
          {console.log(error)}
        </>
      )}
    </Flex>
  );
};

export default QuizPage;
