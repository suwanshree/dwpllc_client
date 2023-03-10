import { Box, Image } from "@chakra-ui/react";
import smallLogo from "../../assets/pngs/logo-small.png";

function LogoBackground() {
  return (
    <Box
      display="flex"
      justifyContent={["center", "center"]}
      w="100vw"
      h="100vh"
      flexDirection={["column", "row"]}
      position="absolute"
      zIndex="-1"
    >
      <Image opacity="0.1" src={smallLogo} alt="DWPLLC Logo" />
    </Box>
  );
}

export default LogoBackground;
