import {
  Container,
  Box,
  Flex,
  Spacer,
  Image,
  Button,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { ArrowBackIcon, EditIcon } from "@chakra-ui/icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import logoImg from "../assets/logo-white.png";
import ChangeThemeModal from "./ChangeThemeModal";

const Header = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 480px)");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const color = useSelector((state) => state.colorTheme.color).toLowerCase();

  return (
    <Box
      as="header"
      backgroundColor={color + ".600"}
      color="white"
      padding={{ base: "0", sm: "5px 0" }}
      boxShadow="xl"
    >
      <Container maxWidth="8xl">
        <Flex alignItems="center">
          <Link to="/">
            <Image
              width={{ base: "150px", sm: "160px", md: "200px" }}
              src={logoImg}
              alt="Brain Box logo"
            />
          </Link>

          <Spacer />

          <Flex alignItems="center" gap={{ base: "10px", md: "20px" }}>
            {pathname !== "/" && (
              <Button
                onClick={() => navigate(-1)}
                size={{ base: "sm", md: "md" }}
                leftIcon={<ArrowBackIcon />}
                colorScheme={color}
                variant="outline"
                color={color + ".50"}
                backgroundColor="transparent"
                borderColor={color + ".50"}
                fontWeight="500"
                paddingInlineEnd={isSmallScreen ? "3px!important" : "initial"}
                _hover={{ color: `${color + ".700"}`, bg: `${color + ".50"}` }}
                _active={{
                  transform: "scale(0.98)",
                }}
              >
                {isSmallScreen ? "" : "Go Back"}
              </Button>
            )}

            <Button
              onClick={onOpen}
              size={{ base: "sm", md: "md" }}
              leftIcon={<EditIcon />}
              colorScheme={color}
              variant="outline"
              color={color + ".50"}
              backgroundColor="transparent"
              borderColor={color + ".50"}
              fontWeight="500"
              paddingInlineEnd={isSmallScreen ? "3px!important" : "initial"}
              _hover={{ color: `${color + ".700"}`, bg: `${color + ".50"}` }}
              _active={{
                transform: "scale(0.98)",
              }}
            >
              {isSmallScreen ? "" : "Change Theme"}
            </Button>
            <ChangeThemeModal isOpen={isOpen} onClose={onClose} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
