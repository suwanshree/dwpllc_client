import {
  HStack,
  Stack,
  Text,
  Button,
  Divider,
  Box,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import scLogo from "../../assets/pngs/sc-main.png";

const Ships = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack
      w={["100%", "80%"]}
      margin={["0px", "50px"]}
      marginBottom={["50px", "0px"]}
    >
      <HStack justifyContent="space-between" margin="10px">
        <HStack gap="20px">
          <Image src={scLogo} alt="DWPLLC Logo" h="80px" marginLeft="10px" />
          <Text
            fontSize="5xl"
            color={colorMode === "light" ? "black" : "cyan.200"}
          >
            Ships
          </Text>
          <Button
            variant="primary"
            onClick={() => alert("Stay tuned! Coming Soon!")}
          >
            Add Ship
          </Button>
        </HStack>
      </HStack>
      <Divider
        borderColor={colorMode === "light" ? "black" : "cyan.200"}
        size="100"
      />
      <Stack display="flex" overflow="auto" paddingTop="20px">
        <Text marginLeft="10px">Coming soon...</Text>
        {/* {shipssToDisplay?.map((ship, i) => (
          <Fade in key={i}>
            <ShipCard id={ship.id} />
          </Fade>
        ))} */}
        <Box h="2vh"></Box>
      </Stack>
    </Stack>
  );
};

export default Ships;
