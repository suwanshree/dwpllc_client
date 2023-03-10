import { IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      aria-label="Color mode switcher"
      onClick={toggleColorMode}
      variant="outline"
      pos="absolute"
      top="0"
      right="0"
      margin="20px"
    >
      Switch Mode
    </IconButton>
  );
};

export default ModeButton;
