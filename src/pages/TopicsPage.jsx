import { Grid, Heading, Flex, Image } from "@chakra-ui/react";

const TopicsPage = () => {
  return (
    <Flex
      flexDirection="column"
      height="calc(100vh - 110px)"
      justifyContent="center"
      position="relative"
    >
      <Heading as="h2" textAlign="center">
        Choose the topic you want to play:
      </Heading>
      <Grid></Grid>
    </Flex>
  );
};

export default TopicsPage;
