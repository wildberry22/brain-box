// for chenging page and limits
import { useState } from "react";
// for having active color
import { useSelector } from "react-redux";
// chakra ui
import { Grid, Heading, Flex, Skeleton, Spacer } from "@chakra-ui/react";
// pagination library
import { Paginate } from "react-paginate-chakra-ui";
// requests to server
import {
  useGetTopicsQuery,
  useGetAllTopicsQuery,
} from "../redux/api/topicsApiSlice";
// card element
import TopicCard from "../components/TopicCard";

const TopicsPage = () => {
  // have error to show/hide some content
  const { isError } = useGetTopicsQuery();

  return (
    <Flex
      marginTop={isError ? "-40px" : "40px"}
      flexDirection="column"
      height="calc(100vh - 170px)"
      justifyContent={isError ? "center" : "flex-start"}
      position="relative"
    >
      {!isError ? (
        <Heading as="h2" textAlign="center" marginBottom="40px" fontSize="46px">
          Choose the topic you want to play:
        </Heading>
      ) : (
        ""
      )}
      <Content />
    </Flex>
  );
};

const Content = () => {
  // page & limit variables for pagination and request to server
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(15);
  // data from main request
  const {
    data: topicsList,
    isFetching,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTopicsQuery(
    { limit, page: page + 1 }
  );
  // data from request to have all list of items
  const { data: fullTopicsList, isSuccess: isSuccessAll } =
    useGetAllTopicsQuery();
  // changing page
  const handlePageClick = (p) => setPage(p);
  // having active color
  const color = useSelector((state) => state.colorTheme.color).toLowerCase();

  let content;

  if (isFetching || isLoading) {
    content = (
      <Grid gridTemplateColumns="repeat(3, 1fr)" gap="20px">
        {[...new Array(limit)].map((_, i) => (
          <Skeleton key={i}>
            <TopicCard />
          </Skeleton>
        ))}
      </Grid>
    );
  } else if (isSuccess) {
    content = (
      <>
        <Grid
          gridTemplateColumns="repeat(3, 1fr)"
          gap="20px"
          marginBottom="20px"
        >
          {topicsList.map((topicItem) => (
            <TopicCard key={topicItem.id} topicItem={topicItem} />
          ))}
        </Grid>
        <Spacer />
        {isSuccessAll && (
          <Paginate
            page={page}
            count={fullTopicsList.length}
            pageSize={limit}
            onPageChange={handlePageClick}
            colorScheme={color}
            shadow="md"
          />
        )}
      </>
    );
  } else if (isError) {
    content = (
      <Heading
        textAlign="center"
        marginTop="20px"
        fontSize="46px"
        maxWidth="800px"
        margin="0 auto"
        color="red.500"
      >
        Oops... Looks like we have some problems. Try again later!
      </Heading>
    );
    console.log(error);
  }

  return content;
};

export default TopicsPage;
