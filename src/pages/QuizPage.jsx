import { useState } from "react";
import { useSelector } from "react-redux";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";

import QuizStartScreen from "../components/QuizStartScreen";
import QuizScreen from "../components/QuizScreen";
import QuizEndScreen from "../components/QuizEndScreen";
import SkeletonScr from "../components/QuizScreen/SkeletonScr";

import { useGetQuestionsQuery } from "../redux/api/quizApiSlice";
import { useGetTopicByCategoryQuery } from "../redux/api/topicsApiSlice";

const QuizPage = () => {
  const [quizStatus, setQuizStatus] = useState("start"); // start / game / end
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const color = useSelector((state) => state.colorTheme.color).toLowerCase();

  // request data from url
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category")
    ? searchParams.get("category")
    : "";
  const difficulty = searchParams.get("difficulty")
    ? searchParams.get("difficulty")
    : "Mixed";

  const {
    data: topicItemApi,
    isLoading: isLoadingTopic,
    isSuccess: isSuccessTopic,
  } = useGetTopicByCategoryQuery({ category });

  const {
    data: questionsList,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetQuestionsQuery({
    category,
    difficulty: difficulty.toLowerCase(),
  });

  if (isError || questionsList?.results?.length === 0) {
    return (
      <Flex
        flexDirection="column"
        height={{ base: "calc(100vh - 110px)", sm: "calc(100vh - 150px)" }}
        marginTop="40px"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          textAlign="center"
          marginTop="20px"
          fontSize="46px"
          maxWidth="800px"
          margin="0 auto"
          color={color + ".800"}
          marginBottom="80px"
        >
          {questionsList?.results?.length === 0
            ? "Oops... Looks like we don't have questions with this topic or this level of difficulty. Try choosing a different difficulty level or topic!"
            : "Oops... Looks like we have some problems. Try again later!"}
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
      </Flex>
    );
  }

  const content =
    quizStatus === "start" ? (
      isLoadingTopic ? (
        <SkeletonScr />
      ) : isSuccessTopic ? (
        <QuizStartScreen
          topicItem={topicItemApi[0]}
          difficulty={difficulty}
          color={color}
          setQuizStatus={setQuizStatus}
        />
      ) : (
        "Something gone wrong"
      )
    ) : quizStatus === "game" ? (
      isLoading ? (
        <SkeletonScr />
      ) : isSuccess ? (
        <QuizScreen
          color={color}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          questionsList={questionsList.results}
          setQuizStatus={setQuizStatus}
        />
      ) : (
        "Something gone wrong"
      )
    ) : quizStatus === "end" ? (
      <QuizEndScreen
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        setQuizStatus={setQuizStatus}
        color={color}
        refetch={refetch}
        length={questionsList.results.length}
      />
    ) : (
      ""
    );

  return (
    <Flex
      flexDirection="column"
      height={{ base: "calc(100vh - 110px)", sm: "calc(100vh - 150px)" }}
      marginTop="40px"
      justifyContent="center"
      alignItems="center"
    >
      {!isError && questionsList?.results?.length !== 0 ? (
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
            {questionsList.results.length === 0
              ? "Oops... Looks like we don't have questions with this topic or this level of difficulty. Try choosing a different difficulty level or topic!"
              : "Oops... Looks like we have some problems. Try again later!"}
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
