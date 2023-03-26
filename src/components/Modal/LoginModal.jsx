import { ExternalLinkIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useColorMode,
  FormControl,
  FormLabel,
  Input,
  Text,
  Image,
  ButtonGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import smallLogo from "../../assets/pngs/logo-small.png";
import { useAuthStore } from "../../store/index";
import { useNavigate } from "react-router-dom";

export const LoginModal = ({ onClose, isOpen }) => {
  const { colorMode } = useColorMode();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const success = await login(username, password);
      onClose();
      navigate("/members");
    } catch (error) {
      setError("Login Failed. Try Again.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setError(""), 5000);
    }
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
          Member Login
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleLoginSubmit}>
          <ModalBody>
            <FormControl display="flex" alignItems="center" marginTop="20px">
              <FormLabel color={colorMode === "light" ? "black" : "silver"}>
                username
              </FormLabel>
              <Input
                type="text"
                name="name"
                width="150px"
                marginLeft="21px"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </FormControl>
            <FormControl display="flex" alignItems="center" marginTop="20px">
              <FormLabel color={colorMode === "light" ? "black" : "silver"}>
                password
              </FormLabel>
              <Input
                type="password"
                name="year"
                width="150px"
                marginLeft="24px"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>
          </ModalBody>
          {error && (
            <Text
              textAlign="center"
              color={colorMode === "light" ? "black" : "silver"}
            >
              {error}
            </Text>
          )}
          <ModalFooter
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap="2"
          >
            <ButtonGroup spacing={4}>
              <Button
                type="submit"
                variant="primary"
                isLoading={isLoading}
                rightIcon={<ArrowRightIcon />}
              >
                Log In
              </Button>
              <Button
                rightIcon={<ExternalLinkIcon />}
                variant="primary"
                onClick={() =>
                  window.open(
                    "https://robertsspaceindustries.com/orgs/DWPLLC/members"
                  )
                }
              >
                Apply
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
