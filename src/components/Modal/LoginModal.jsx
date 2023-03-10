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
        <ModalHeader fontSize="3xl">Member Login</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleLoginSubmit}>
          <ModalBody>
            <FormControl display="flex" alignItems="center" marginTop="20px">
              <FormLabel>username</FormLabel>
              <Input type="text" name="name" width="150px" marginLeft="20px" />
            </FormControl>
            <FormControl display="flex" alignItems="center" marginTop="20px">
              <FormLabel>password</FormLabel>
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
            {submitted ? <Text>Invalid Credentials. Try Again.</Text> : null}
            <Button type="submit">Log In</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
