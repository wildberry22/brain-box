import {
  Container,
  Box,
  Flex,
  Spacer,
  Image,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowBackIcon, EditIcon } from "@chakra-ui/icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
      padding="5px 0"
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
                colorScheme={color}
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
                Go Back
              </Button>
            )}

            <Button
              onClick={onOpen}
              leftIcon={<EditIcon />}
              colorScheme={color}
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
