import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  RadioGroup,
  useRadioGroup,
  Grid,
} from "@chakra-ui/react";

import { useLocalStorage } from "../../utils/useLocalSorage";
import { setActiveTheme } from "../../redux/slices/colorThemeSlice";

import RadioCard from "./RadioCard";
import { useEffect } from "react";

// available colors
const colorScheme = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Teal",
  "Blue",
  "Cyan",
  "Purple",
  "Pink",
];

// main component
const ChangeThemeModal = ({ isOpen, onClose }) => {
  // working with localHost
  const [colorThemeLC, setColorThemeLC] = useLocalStorage("colorTheme", "Teal");
  // working with state
  const dispatch = useDispatch();
  const color = useSelector((state) => state.colorTheme.color).toLowerCase();
  // function that set active color theme
  const onClickColor = (value) => {
    dispatch(setActiveTheme(value));
    setColorThemeLC(value);
  };
  // function for radio buttons
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "colorTheme",
    defaultValue: colorThemeLC,
    onChange: onClickColor,
  });
  const group = getRootProps();
  // set active color in state when starting
  useEffect(() => {
    dispatch(setActiveTheme(colorThemeLC))
    // eslint-disable-next-line
  }, [])

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent
        border="2px solid"
        borderColor={color + ".500"}
        paddingBottom="24px"
      >
        <ModalHeader>Change Theme</ModalHeader>
        <ModalCloseButton
          transition="all 0.1s linear"
          _hover={{
            backgroundColor: `${color + ".50"}`,
            border: "1px solid",
            borderColor: `${color + ".500"}`,
          }}
        />
        <ModalBody>
          <Text marginBottom="20px">Choose the color scheme you like:</Text>

          <RadioGroup>
            <Grid templateColumns="repeat(2, 1fr)" gap="10px" {...group}>
              {colorScheme.map((value) => {
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
      </ModalContent>
    </Modal>
  );
};

ChangeThemeModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default ChangeThemeModal;
