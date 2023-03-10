import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Image,
  Text,
  Fade,
  useDisclosure,
} from "@chakra-ui/react";
import LogoBackground from "../components/Background/LogoBackground";
import smallLogo from "../assets/pngs/logo-small.png";
import ModeButton from "../components/modeButton";
import { ExternalLinkIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { LoginModal } from "../components/Modal/LoginModal";
import { useState } from "react";

function Home() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [showText, setShowText] = useState(false);
  const handleClick = () => {
    setShowText(true);
    setTimeout(() => setShowText(false), 5000);
  };
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
      <ModeButton />
      <Button
        variant="outline"
        position="absolute"
        top="0"
        left="0"
        margin="20px"
        onClick={onOpen}
      >
        Member Login
      </Button>
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
            Dark Water Privateers LLC.
          </Text>
          <Text
            fontSize={["xl", "2xl"]}
            w={["90vw", "60vw"]}
            marginBottom="40px"
          >
            We are a PMC focused on civilian contracts, and specialized economic
            opportunities around the ‘verse. Constantly expanding and recruiting
            players for many play-styles.
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
          <IconButton
            icon={<ChevronDownIcon />}
            fontSize="40px"
            aria-label="Color mode switcher"
            onClick={handleClick}
            variant="outline"
            pos="absolute"
            bottom="0"
            w="80px"
            margin="40px"
          >
            Continue
          </IconButton>
          {showText && (
            <Text position="absolute" bottom="100px">
              Updates Coming Soon!
            </Text>
          )}
        </Box>
      </Fade>
      <LoginModal onClose={onClose} isOpen={isOpen} />
    </Box>
  );
}

export default Home;
