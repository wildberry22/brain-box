import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Box, useRadio } from "@chakra-ui/react";

const RadioCard = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props);
  const color = useSelector((state) => state.colorTheme.color).toLowerCase();

  const input = getInputProps();
  const checkbox = getRadioProps();

  let textColor = color + ".700";
  switch (props.children) {
    case "Mixed":
      textColor = color + ".700";
      break;
    case "Easy":
      textColor = "green";
      break;
    case "Medium":
      textColor = "orange";
      break;
    case "Hard":
      textColor = "red";
      break;
    default:
      textColor = color;
      break;
  }

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        padding="15px"
        color={textColor}
        fontWeight="700"
        backgroundColor={color + ".50"}
        _checked={{
          borderColor: `${color + ".600"}`,
          borderWidth: "2px",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

RadioCard.propTypes = {
  children: PropTypes.node,
};

export default RadioCard;
