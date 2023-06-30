import PropTypes from "prop-types";
import { useState } from "react";
import { Card, CardBody, Text, useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import TopicCardModal from "../TopicCardModal";

const TopicCard = (props) => {
  const { topicItem } = props;
  const color = useSelector((state) => state.colorTheme.color).toLowerCase();

  const [active, setActive] = useState(false);

  // for modal window
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card
        onClick={() => {
          onOpen();
          setActive(true);
        }}
        padding="8px"
        position="relative"
        cursor="pointer"
        overflow="hidden"
        border="5px solid"
        borderColor={active ? color + ".400" : color + ".50"}
        transition=".2s ease"
        _hover={{
          borderColor: `${color + ".400"}`,
        }}
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `url(${topicItem?.image}) center center/cover no-repeat`,
          filter: "brightness(70%) contrast(120%)",
        }}
      >
        <CardBody position="relative">
          <Text
            display="inline"
            padding="0 10px"
            borderRadius="3px"
            backgroundColor={"rgba(0, 0, 0, 0.7)"}
            color="white"
            fontWeight="700"
            fontSize="24px"
          >
            {topicItem?.title}
          </Text>
        </CardBody>
      </Card>
      <TopicCardModal
        topicItem={topicItem || {}}
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setActive(false);
        }}
      />
    </>
  );
};

TopicCard.propTypes = {
  topicItem: PropTypes.object,
};

export default TopicCard;
