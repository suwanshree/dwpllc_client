import { Box, Fade, IconButton, useDisclosure } from "@chakra-ui/react";
import LogoBackground from "../../components/Background/LogoBackground";
import ModeButton from "../../components/modeButton";
import { LoginModal } from "../../components/Modal/LoginModal";
import { LockIcon } from "@chakra-ui/icons";
import { useHomeStore } from "../../store";
import Landing from "./Landing";
import History from "./History";
import Charter from "./Charter";
import Manifesto from "./Manifesto";

const Home = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const view = useHomeStore((state) => state.view);
  let currentView;
  switch (view) {
    case 0:
      currentView = <Landing />;
      break;
    case 1:
      currentView = <Manifesto />;
      break;
    case 2:
      currentView = <Charter />;
      break;
    case 3:
      currentView = <History />;
      break;
    default:
      currentPage = <Landing />;
      break;
  }
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
      <IconButton
        icon={<LockIcon />}
        aria-label="Login Button"
        variant="outline"
        position="absolute"
        top="0"
        left="0"
        margin="20px"
        onClick={onOpen}
      >
        Member Login
      </IconButton>
      <Fade in>{currentView}</Fade>
      <LoginModal onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};

export default Home;
