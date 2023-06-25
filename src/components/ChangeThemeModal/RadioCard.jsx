import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  Box,
  useRadio,
} from "@chakra-ui/react";


const RadioCard = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props);
  const color = useSelector((state) => state.colorTheme.color).toLowerCase();

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        padding="20px"
        fontWeight="700"
        color={props.children.toLowerCase() + ".700"}
        backgroundColor={props.children.toLowerCase() + ".300"}
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