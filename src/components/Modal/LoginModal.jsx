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

export const LoginModal = ({ onClose, isOpen }) => {
  const { colorMode } = useColorMode();
  const [submitted, setSubmitted] = useState(false);
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
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
              <Input type="text" name="name" width="150px" marginLeft="21px" />
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
              />
            </FormControl>
          </ModalBody>
          <ModalFooter
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap="2"
          >
            {submitted ? (
              <Text color={colorMode === "light" ? "black" : "silver"}>
                Invalid Credentials. Try Again.
              </Text>
            ) : null}
            <ButtonGroup spacing={4}>
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
              <Button
                type="submit"
                variant="primary"
                rightIcon={<ArrowRightIcon />}
              >
                Log In
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
