import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Transition = ({ component }) => {
  const color = useSelector((state) => state.colorTheme.color).toLowerCase();

  let colorBg;
  switch (color) {
    case "red":
      colorBg = "#F56565"; //done
      break;
    case "orange":
      colorBg = "#ED8936"; //done
      break;
    case "yellow":
      colorBg = "#ECC94B"; //done
      break;
    case "green":
      colorBg = "#48BB78"; //done
      break;
    case "teal":
      colorBg = "#38B2AC"; //done
      break;
    case "blue":
      colorBg = "#4299E1"; //done
      break;
    case "cyan":
      colorBg = "#76E4F7"; //done
      break;
    case "purple":
      colorBg = "#9F7AEA"; //done
      break;
    case "pink":
      colorBg = "#ED64A6";
      break;
    default:
      colorBg = "#CBD5E0";
      break;
  }

  return (
    <>
      {component}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: `${colorBg}`,
          transformOrigin: "left",
          zIndex: 1000000,
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: `${colorBg}`,
          transformOrigin: "right",
          zIndex: 1000000,
        }}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

Transition.propTypes = {
  component: PropTypes.func,
};

export default Transition;
