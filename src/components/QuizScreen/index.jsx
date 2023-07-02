import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardHeader,
  Text,
  CardBody,
  Flex,
  Grid,
} from "@chakra-ui/react";

const QuizScreen = ({
  color,
  currentQuestion,
  setCurrentQuestion,
  questionsList,
}) => {
  const currentQuestionItem = questionsList[currentQuestion];
  console.log(currentQuestionItem);
  return (
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
        maxWidth='500px'
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
              {currentQuestionItem.question}
            </Text>
          </Box>
          <Grid
            gridTemplateColumns="repeat(2, minmax(250px, max-content))"
            gap="20px"
          >
            <Flex
              gap="15px"
              alignItems="center"
              padding="10px 20px"
              border="3px solid"
              borderColor={color + ".700"}
              borderRadius="var(--chakra-radii-md)"
              color={color + ".700"}
              boxShadow="lg"
              cursor="pointer"
              transition=".2s ease"
              _hover={{
                backgroundColor: `${color}.400`,
                color: "white",
              }}
            >
              <Box
                fontSize="24px"
                backgroundColor={color + ".700"}
                width="40px"
                height="40px"
                borderRadius="50%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
                fontWeight="700"
              >
                A
              </Box>
              <Text flex="1" fontSize="24px">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Text>
            </Flex>
            <Flex
              gap="15px"
              alignItems="center"
              padding="10px 20px"
              cursor="pointer"
              border="3px solid"
              borderColor={color + ".700"}
              borderRadius="var(--chakra-radii-md)"
              color={color + ".700"}
              boxShadow="lg"
              transition=".2s ease"
              _hover={{
                backgroundColor: `${color}.400`,
                color: "white",
              }}
            >
              <Box
                fontSize="24px"
                backgroundColor={color + ".700"}
                width="40px"
                height="40px"
                borderRadius="50%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
                fontWeight="700"
              >
                B
              </Box>
              <Text flex="1" fontSize="24px">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Text>
            </Flex>
            <Flex
              gap="15px"
              alignItems="center"
              padding="10px 20px"
              cursor="pointer"
              border="3px solid"
              borderColor={color + ".700"}
              borderRadius="var(--chakra-radii-md)"
              color={color + ".700"}
              boxShadow="lg"
              transition=".2s ease"
              _hover={{
                backgroundColor: `${color}.400`,
                color: "white",
              }}
            >
              <Box
                fontSize="24px"
                backgroundColor={color + ".700"}
                width="40px"
                height="40px"
                borderRadius="50%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
                fontWeight="700"
              >
                C
              </Box>
              <Text flex="1" fontSize="24px">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Text>
            </Flex>
            <Flex
              gap="15px"
              alignItems="center"
              padding="10px 20px"
              cursor="pointer"
              border="3px solid"
              borderColor={color + ".700"}
              borderRadius="var(--chakra-radii-md)"
              color={color + ".700"}
              boxShadow="lg"
              transition=".2s ease"
              _hover={{
                backgroundColor: `${color}.400`,
                color: "white",
              }}
            >
              <Box
                fontSize="24px"
                backgroundColor={color + ".700"}
                width="40px"
                height="40px"
                borderRadius="50%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
                fontWeight="700"
              >
                D
              </Box>
              <Text flex="1" fontSize="24px">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Text>
            </Flex>
          </Grid>
        </Flex>
      </CardBody>
    </Card>
  );
};

QuizScreen.propTypes = {
  color: PropTypes.string,
  currentQuestion: PropTypes.number,
  setCurrentQuestion: PropTypes.func,
  questionsList: PropTypes.array,
};

export default QuizScreen;
