import { Box, IconButton, useDisclosure } from "@chakra-ui/react";
import LogoBackground from "../../components/Background/LogoBackground";
import ModeButton from "../../components/modeButton";
import { LoginModal } from "../../components/Modal/LoginModal";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  LockIcon,
  UnlockIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { useAuthStore, useHomeStore } from "../../store";
import { useNavigate } from "react-router-dom";
import Landing from "./Landing";
import History from "./History";
import Charter from "./Charter";
import Manifesto from "./Manifesto";
import Video from "./Video";

const Home = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { view, prevView, nextView, resetView } = useHomeStore();
  const { token } = useAuthStore();
  const navigate = useNavigate();
  const isAuthenticated = token !== "";
  const leftIcon = isAuthenticated ? <UnlockIcon /> : <LockIcon />;
  const handleNextClick = () => {
    nextView();
  };
  const handlePrevClick = () => {
    prevView();
  };
  const handleHomeClick = () => {
    resetView();
  };
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
      currentView = <Video />;
      break;
    case 4:
      currentView = <History />;
      break;
    default:
      currentView = <Landing />;
      break;
  }
  return (
    <Box
      display="flex"
      justifyContent="center"
      w="100vw"
      h="100vh"
      alignItems="center"
      flexDirection="column"
    >
      <LogoBackground />
      <ModeButton />
      <IconButton
        icon={leftIcon}
        aria-label="Login Button"
        variant="outline"
        position="absolute"
        top="0"
        left="0"
        margin="20px"
        onClick={isAuthenticated ? () => navigate("/members") : onOpen}
      >
        Member Login
      </IconButton>
      {view !== 0 ? (
        <IconButton
          icon={<ChevronUpIcon />}
          fontSize="40px"
          aria-label="Color mode switcher"
          onClick={handlePrevClick}
          variant="outline"
          pos="absolute"
          top="0"
          w="80px"
          marginTop="20px"
        >
          Previous
        </IconButton>
      ) : null}
      {currentView}
      <IconButton
        icon={view === 4 ? <RepeatIcon /> : <ChevronDownIcon />}
        fontSize={view === 4 ? "22px" : "40px"}
        aria-label="Color mode switcher"
        onClick={view === 4 ? handleHomeClick : handleNextClick}
        variant="outline"
        pos="absolute"
        bottom="0"
        w="80px"
        marginBottom="20px"
      >
        Continue
      </IconButton>
      <LoginModal onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};

export default Home;
