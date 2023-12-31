import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  RadioGroup,
  useRadioGroup,
  Image,
  Grid,
  Button,
} from "@chakra-ui/react";

import RadioCard from "./RadioCard";

// variables for radio buttons
const difficulty = ["Mixed", "Easy", "Medium", "Hard"];

const TopicCardModal = ({ isOpen, onClose, topicItem }) => {
  const [currentDifficulty, setCurrentDifficulty] = useState("Mixed");

  const color = useSelector((state) => state.colorTheme.color).toLowerCase();

  const navigate = useNavigate();

  // function for radio buttons
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "difficulty",
    defaultValue: "Mixed",
    onChange: setCurrentDifficulty,
  });
  const group = getRootProps();

  const onClickStart = () => {
    navigate(
      `/quiz?category=${topicItem.category}&difficulty=${currentDifficulty}`
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "full", sm: "lg", md: "xl" }}
    >
      <ModalOverlay />
      <ModalContent
        border="2px solid"
        borderColor={color + ".500"}
        paddingBottom="24px"
      >
        <ModalHeader position="relative" padding="0">
          <Image
            src={topicItem.image}
            alt={topicItem.title}
            width="100%"
            height="200px"
            objectFit="cover"
            filter="brightness(60%) contrast(120%)"
          />
          <Heading
            maxWidth="500px"
            width="100%"
            textAlign="center"
            fontSize={{ base: "28px", sm: "30px" }}
            color="white"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textShadow="1px 1px 10px black"
          >
            {topicItem.title}
          </Heading>
        </ModalHeader>
        <ModalCloseButton
          transition="all 0.1s linear"
          backgroundColor={color + ".50"}
          border="1px solid"
          borderColor={color + ".500"}
          _hover={{
            backgroundColor: `${color + ".100"}`,
          }}
          _active={{
            transform: "scale(0.98)",
          }}
        />
        <ModalBody pt="20px">
          <Heading fontSize={{ base: "22px", sm: "24px" }} marginBottom="20px">
            Select difficulty:
          </Heading>
          <RadioGroup>
            <Grid gridTemplateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }} gap="10px" {...group}>
              {difficulty.map((value) => {
                const radio = getRadioProps({ value });
                return (
                  <RadioCard key={value} {...radio}>
                    {value}
                  </RadioCard>
                );
              })}
            </Grid>
          </RadioGroup>
        </ModalBody>
        <ModalFooter margin="0 auto" padding="20px 0 0">
          <Button
            colorScheme={color}
            color="white"
            onClick={onClickStart}
            fontSize="24px"
            padding="25px 45px"
            variant="solid"
          >
            Start
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

TopicCardModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  topicItem: PropTypes.object,
};

export default TopicCardModal;
