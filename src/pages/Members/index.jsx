import {
  Box,
  Button,
  ButtonGroup,
  Image,
  Text,
  Fade,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import LogoBackground from "../../components/Background/LogoBackground";
import smallLogo from "../../assets/pngs/logo-small.png";
import ModeButton from "../../components/modeButton";
import { ArrowBackIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store";
import { useEffect } from "react";
import { LogoutModal } from "../../components/Modal/LogoutModal";

function Members() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { token } = useAuthStore();
  const navigate = useNavigate();
  const isAuthenticated = token !== "";
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);
  return (
    <Box
      display="flex"
      justifyContent="center"
      w="100vw"
      h="100vh"
      alignItems="center"
      flexDirection={["column", "row"]}
    >
      <LogoBackground />
      <IconButton
        icon={<ArrowBackIcon />}
        aria-label="Login Button"
        variant="outline"
        position="absolute"
        top="0"
        left="0"
        margin="20px"
        onClick={onOpen}
      >
        Home
      </IconButton>
      <ModeButton />
      <Fade in>
        <Box
          display="flex"
          justifyContent={["flex-start", "center"]}
          alignItems="center"
          flexDirection="column"
          textAlign="center"
        >
          <Image w={["80px", "200px"]} src={smallLogo} alt="DWPLLC Logo" />
          <Text
            fontSize={["4xl", "8xl"]}
            w={["90vw", "75vw"]}
            marginBottom="20px"
          >
            Members Area Under Construction
          </Text>
          <ButtonGroup direction="row" spacing={4}>
            <Button
              rightIcon={<ExternalLinkIcon />}
              variant="solid"
              onClick={() =>
                window.open("https://robertsspaceindustries.com/orgs/DWPLLC")
              }
            >
              RSI Page
            </Button>
            <Button
              rightIcon={<ExternalLinkIcon />}
              variant="solid"
              onClick={() => window.open("https://discord.gg/BmHpKK7")}
            >
              Discord
            </Button>
          </ButtonGroup>
        </Box>
      </Fade>
      <LogoutModal onClose={onClose} isOpen={isOpen} />
    </Box>
  );
}

export default Members;
