import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Paginate } from "react-paginate-chakra-ui";
import {
  Grid,
  Heading,
  Flex,
  Skeleton,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";

import TopicCard from "../components/TopicCard";

import {
  useGetTopicsQuery,
  useGetAllTopicsQuery,
} from "../redux/api/topicsApiSlice";

const TopicsPage = () => {
  const [scrW992] = useMediaQuery("(min-width: 992px)");
  const [scrW768] = useMediaQuery("(min-width: 768px)");
  const [scrW620] = useMediaQuery("(min-width: 620px)");
  const [scrW480] = useMediaQuery("(min-width: 480px)");

  const [scrH920] = useMediaQuery("(max-height: 920px)");
  const [scrH820] = useMediaQuery("(max-height: 820px)");
  const [scrH670] = useMediaQuery("(max-height: 670px)");
  // page & limit variables for pagination and request to server
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(15);
  // setting topics limit for different screens
  useEffect(() => {
    if (scrW992) {
      if (scrH670) {
        setLimit(6);
      } else if (scrH820) {
        setLimit(9);
      } else if (scrH920) {
        setLimit(12);
      } else {
        setLimit(15);
      }
    } else if (scrW768) {
      if (scrH670) {
        setLimit(4);
      } else if (scrH820) {
        setLimit(6);
      } else if (scrH920) {
        setLimit(8);
      } else {
        setLimit(10);
      }
    } else if (scrW620) {
      if (scrH670) {
        setLimit(8);
      } else if (scrH820) {
        setLimit(10);
      } else if (scrH920) {
        setLimit(12);
      } else {
        setLimit(14);
      }
    } else if (scrW480) {
      if (scrH670) {
        setLimit(6);
      } else if (scrH820) {
        setLimit(8);
      } else if (scrH920) {
        setLimit(10);
      } else {
        setLimit(12);
      }
    } else {
      if (scrH670) {
        setLimit(5);
      } else if (scrH820) {
        setLimit(6);
      } else if (scrH920) {
        setLimit(7);
      } else {
        setLimit(9);
      }
    }
  }, [scrH920, scrH820, scrH670, scrW992, scrW768, scrW620, scrW480]);
  // data from main request
  const {
    data: topicsList,
    isFetching,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTopicsQuery({ limit, page: page + 1 });
  // data from request to have all list of items
  const { data: fullTopicsList, isSuccess: isSuccessAll } =
    useGetAllTopicsQuery();
  // changing page
  const handlePageClick = (p) => setPage(p);
  // having active color
  const color = useSelector((state) => state.colorTheme.color).toLowerCase();

  return (
    <Flex
      marginTop={!isError ? { base: '30px', sm: "40px"} : { base: '-30px', sm: "-40px"}}
      flexDirection="column"
      height={{ base: "calc(100vh - 110px)", sm: "calc(100vh - 150px)"}}
      justifyContent={isError ? "center" : "flex-start"}
      position="relative"
    >
      {!isError ? (
        <>
          <Heading
            as="h2"
            maxWidth={{ base: "350px", sm: "initial" }}
            marginRight={{ base: "auto", sm: "0" }}
            marginLeft={{ base: "auto", sm: "0" }}
            marginBottom={{ base: "20px", sm: "30px", md: "40px" }}
            textAlign="center"
            fontSize={{ base: "28px", sm: "36px", md: "46px" }}
            lineHeight={{ base: "1.2", md: "1.33" }}
          >
            Choose the topic you want to play:
          </Heading>
          {topicsList?.length === 0 && (
            <Heading
              textAlign="center"
              marginTop="20px"
              fontSize="46px"
              maxWidth="800px"
              margin="0 auto"
              color="red.500"
            >
              Oops... Looks like we lost data. <br /> Try again later!
            </Heading>
          )}
          <Content
            limit={limit}
            topicsList={topicsList}
            isFetching={isFetching}
            isLoading={isLoading}
            isSuccess={isSuccess}
          />
          <Spacer />
          {isSuccessAll && topicsList?.length !== 0 && (
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
      ) : (
        <>
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
          {console.log(error)}
        </>
      )}
    </Flex>
  );
};

const Content = (props) => {
  const { limit, topicsList, isFetching, isLoading, isSuccess } = props;

  let content;

  if (isFetching || isLoading) {
    content = (
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={{ base: "10px", sm: "20px" }}
        marginBottom="20px"
      >
        {[...new Array(limit)].map((_, i) => (
          <Skeleton key={i}>
            <TopicCard />
          </Skeleton>
        ))}
      </Grid>
    );
  } else if (isSuccess) {
    content = (
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={{ base: "10px", sm: "20px" }}
        marginBottom="20px"
      >
        {topicsList.map((topicItem) => (
          <TopicCard key={topicItem.id} topicItem={topicItem} />
        ))}
      </Grid>
    );
  }

  return content;
};

export default TopicsPage;
