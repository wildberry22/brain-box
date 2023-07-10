import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";

const QuizStartScreen = ({ topicItem, difficulty, color, setQuizStatus }) => {
  const [scrH700] = useMediaQuery("(max-height: 700px)");
  const [animation, setAnimation] = useState(false);

  let difficultyColor = color;
  switch (difficulty) {
    case "Mixed":
      difficultyColor = color + ".700";
      break;
    case "Easy":
      difficultyColor = "green";
      break;
    case "Medium":
      difficultyColor = "orange";
      break;
    case "Hard":
      difficultyColor = "red";
      break;
    default:
      difficultyColor = color;
      break;
  }

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
          maxWidth="90%"
          padding={{
            base: "10px 10px 0 10px",
            sm: "1.25rem 1.25rem 0 1.25rem",
            md: "1.25rem",
          }}
        >
          <Heading
            as="h1"
            fontSize={{ base: "38px", sm: "52px", md: "80px" }}
            lineHeight={{ base: "1.2", md: "1.33" }}
            textAlign="center"
            color={color + ".700"}
          >
            {topicItem.title}
          </Heading>
        </CardHeader>
        <CardBody
          flex="0"
          marginBottom={
            scrH700 ? { base: "0px", md: "10px" } : { base: "0px", md: "40px" }
          }
        >
          <Heading
            fontSize={{ base: "28px", sm: "36px", md: "46px" }}
            lineHeight={{ base: "1.2", md: "1.33" }}
          >
            Difficulty:{" "}
            <Text as="span" color={difficultyColor}>
              {difficulty}
            </Text>
          </Heading>
        </CardBody>
        <CardFooter>
          <Button
            colorScheme={color}
            onClick={() => {
              setAnimation(!animation);
              setTimeout(() => {
                setQuizStatus("game");
              }, 300);
            }}
            color="white"
            fontSize={{ base: "28px", sm: "32px", md: "36px" }}
            padding={{ base: "25px 50px", sm: "30px 50px", md: "32px 60px" }}
            variant="solid"
          >
            Start
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
};

QuizStartScreen.propTypes = {
  topicItem: PropTypes.object,
  difficulty: PropTypes.string,
  color: PropTypes.string,
  setQuizStatus: PropTypes.func,
};

export default QuizStartScreen;
