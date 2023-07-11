import { Helmet } from "react-helmet";
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
    isError: isErrorTopic,
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

  if (isError || isErrorTopic || questionsList?.results?.length === 0) {
    return (
      <>
        <Helmet>
          <meta
            name="description"
            content={`BrainBox. Page with quiz. Category: ${category}. Difficulty: ${difficulty}`}
          />
          <title>{`BrainBox - Quiz`}</title>
        </Helmet>
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
            fontSize={{ base: "28px", sm: "36px", md: "46px" }}
            maxWidth="800px"
            margin="0 auto"
            color={color + ".800"}
            marginBottom={{ base: "40px", sm: "60px", md: "80px" }}
          >
            {questionsList?.results?.length === 0
              ? "Oops... Looks like we don't have questions with this topic or this level of difficulty. Try choosing a different difficulty level or topic!"
              : "Oops... Looks like we have some problems. Try again later!"}
          </Heading>
          <Link to="/topics" style={{ margin: "0 auto" }}>
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
          {console.log(error)}
        </Flex>
      </>
    );
  }

  const content =
    quizStatus === "start" ? (
      isLoadingTopic ? (
        <SkeletonScr />
      ) : isSuccessTopic && topicItemApi.length !== 0 ? (
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
    <>
      <Helmet>
        <meta
          name="description"
          content={`BrainBox. Page with quiz. Category: ${category}. Difficulty: ${difficulty}`}
        />
        <title>{`BrainBox - Quiz | ${category} - ${difficulty}`}</title>
      </Helmet>
      <Flex
        flexDirection="column"
        height={{ base: "calc(100vh - 110px)", sm: "calc(100vh - 150px)" }}
        marginTop="40px"
        justifyContent="center"
        alignItems="center"
      >
        {content}
      </Flex>
    </>
  );
};

export default QuizPage;
