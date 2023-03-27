import { useState, useEffect } from "react";
import {
  HStack,
  Stack,
  Text,
  Divider,
  Box,
  Image,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import scLogo from "../../assets/pngs/sc-main.png";
import { AddIcon } from "@chakra-ui/icons";
import dwpllcLogo from "../../assets/pngs/logo-small.png";

const Ships = () => {
  const { colorMode } = useColorMode();
  const [dots, setDots] = useState("...");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((dots) => {
        if (dots === "...") return ".";
        if (dots === "..") return "...";
        return "..";
      });
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Stack
      w={["100%", "80%"]}
      margin={["0px", "50px"]}
      marginBottom={["50px", "0px"]}
    >
      <HStack gap="20px" margin="10px">
        <Image src={scLogo} alt="DWPLLC Logo" h="80px" marginLeft="10px" />
        <Text
          fontSize="5xl"
          color={colorMode === "light" ? "gray.800" : "silver"}
        >
          Ships
        </Text>
        <IconButton
          icon={<AddIcon />}
          aria-label="Add Ship Button"
          variant="outline"
          onClick={() => alert("Stay tuned! Coming Soon!")}
        >
          Add Ship
        </IconButton>
      </HStack>
      <Divider
        borderColor={colorMode === "light" ? "black" : "cyan.200"}
        size="100"
      />
      <HStack gap="10px" margin="10px">
        <Image src={dwpllcLogo} alt="DWPLLC Logo" h="50px" marginLeft="10px" />
        <Text
          marginLeft="10px"
          fontSize="2xl"
          color={colorMode === "light" ? "black" : "cyan.200"}
        >
          Coming soon{dots}
        </Text>
        {/* {shipssToDisplay?.map((ship, i) => (
          <Fade in key={i}>
            <ShipCard id={ship.id} />
          </Fade>
        ))} */}
      </HStack>
      <Box h="2vh"></Box>
    </Stack>
  );
};

export default Ships;
