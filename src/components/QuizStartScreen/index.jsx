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
} from "@chakra-ui/react";

const QuizStartScreen = ({ topicItem, difficulty, color, setQuizStatus }) => {
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

  const [animation, setAnimation] = useState(false);

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
        <CardHeader maxWidth="90%">
          <Heading
            as="h1"
            fontSize="80px"
            textAlign="center"
            color={color + ".700"}
          >
            {topicItem.title}
          </Heading>
        </CardHeader>
        <CardBody flex="0" marginBottom="40px">
          <Heading fontSize="46px">
            Difficulty:{" "}
            <Text as="span" color={difficultyColor}>
              {difficulty}
            </Text>
          </Heading>
        </CardBody>
        <CardFooter>
          <Button
            colorScheme={color}
            color="white"
            onClick={() => {
              setAnimation(!animation);
              setTimeout(() => {
                setQuizStatus("game");
              }, 300);
            }}
            fontSize="36px"
            padding="32px 60px"
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
