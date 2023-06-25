import {
  Container,
  Box,
  Flex,
  Spacer,
  Image,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon, EditIcon } from "@chakra-ui/icons";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import logoImg from "../assets/logo-white.png";
import ChangeThemeModal from "./ChangeThemeModal";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const color = useSelector((state) => state.colorTheme.color).toLowerCase();

  return (
    <Box
      as="header"
      backgroundColor={color + '.600'}
      color="white"
      padding="10px 0"
      boxShadow="xl"
    >
      <Container maxWidth="8xl">
        <Flex alignItems="center">
          <Link to="/">
            <Image width="200px" src={logoImg} alt="Brain Box logo" />
          </Link>

          <Spacer />

          <Flex alignItems="center" gap="20px">
            {pathname !== "/" && (
              <Button
                onClick={() => navigate(-1)}
                leftIcon={<ArrowBackIcon />}
                colorScheme="teal"
                variant="outline"
                color={color + '.50'}
                backgroundColor="transparent"
                borderColor={color + '.50'}
                fontWeight="500"
                _hover={{ color: "teal.700", bg: `${color + '.50'}` }}
                _active={{
                  transform: "scale(0.98)",
                }}
              >
                Go Back
              </Button>
            )}

            <NavLink to="/statistics">
              {({ isActive }) => (
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme="teal"
                  variant="outline"
                  color={isActive ? `${color + '.700'}` : `${color + '.50'}`}
                  backgroundColor={isActive ? `${color + '.50'}` : "transparent"}
                  borderColor={color + '.50'}
                  fontWeight="500"
                  isDisabled={isActive ? true : false}
                  _hover={{ color: `${color + '.700'}`, bg: `${color + '.50'}` }}
                  _active={{
                    transform: "scale(0.98)",
                  }}
                >
                  Statistics
                </Button>
              )}
            </NavLink>

            <Button
              onClick={onOpen}
              leftIcon={<EditIcon />}
              colorScheme="teal"
              variant="outline"
              color={color + '.50'}
              backgroundColor="transparent"
              borderColor={color + '.50'}
              fontWeight="500"
              _hover={{ color: `${color + '.700'}`, bg: `${color + '.50'}` }}
              _active={{
                transform: "scale(0.98)",
              }}
            >
              Change Theme
            </Button>
            <ChangeThemeModal isOpen={isOpen} onClose={onClose} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
