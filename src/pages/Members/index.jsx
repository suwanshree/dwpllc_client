import { Box, Divider, IconButton, useColorMode } from "@chakra-ui/react";
import LogoBackground from "../../components/Background/LogoBackground";
import ModeButton from "../../components/modeButton";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store";
import { useEffect } from "react";
import Users from "../../components/Hangar/Users";
import Ships from "../../components/Hangar/Ships";

function Members() {
  const { token } = useAuthStore();
  const navigate = useNavigate();
  const isAuthenticated = token !== "";
  const { colorMode } = useColorMode();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);
  return (
    <Box
      display="flex"
      justifyContent={["flex-start", "center"]}
      w="100vw"
      h="100vh"
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
        onClick={() => navigate("/")}
      >
        Home
      </IconButton>
      <ModeButton />
      <ModeButton />
      <Users />
      <Divider
        display={["none", "block"]}
        borderColor={colorMode === "light" ? "black" : "cyan.200"}
        orientation="vertical"
      />
      <Ships />
    </Box>
  );
}

export default Members;
