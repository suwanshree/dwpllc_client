import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Button,
  useColorMode,
  Image,
  ButtonGroup,
} from "@chakra-ui/react";
import { useAuthStore } from "../../store/index";
import { useNavigate } from "react-router-dom";
import smallLogo from "../../assets/pngs/logo-small.png";

export const LogoutModal = ({ onClose, isOpen }) => {
  const { colorMode } = useColorMode();
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogoutSubmit = () => {
    logout();
    navigate("/");
  };

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay backdropFilter="blur(10px)" zIndex="1" />
      <ModalContent
        flexDir="column"
        padding="2"
        justifyContent="center"
        alignItems="center"
        borderRadius="20"
        bg={colorMode === "light" ? "gray.100" : "gray.900"}
        zIndex="2"
      >
        <Image w="60px" src={smallLogo} alt="DWPLLC Logo" />
        <ModalHeader
          fontSize="3xl"
          color={colorMode === "light" ? "black" : "silver"}
        >
          Confirm Log Out?
        </ModalHeader>
        <ModalCloseButton />
        <ModalFooter
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap="2"
        >
          <ButtonGroup spacing={4}>
            <Button
              variant="primary"
              rightIcon={<CheckIcon />}
              onClick={handleLogoutSubmit}
            >
              Log Out
            </Button>
            <Button
              rightIcon={<CloseIcon />}
              variant="primary"
              onClick={onClose}
            >
              Cancel
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
