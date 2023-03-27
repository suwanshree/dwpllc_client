import {
  HStack,
  Stack,
  Text,
  useColorMode,
  Divider,
  Box,
  Image,
} from "@chakra-ui/react";
import scLogo from "../../assets/pngs/sc-main.png";

const UserCard = ({ username }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      position="relative"
      _hover={{
        cursor: "pointer",
        boxShadow: `0px 3px 20px rgba(${
          colorMode === "light" ? "121, 121, 121" : "0, 188, 212"
        }, 0.40)`,
        "& > button": {
          visibility: "visible",
        },
      }}
    >
      <Stack>
        <HStack display="flex" alignItems="center" padding="10px">
          <Image src={scLogo} alt="DWPLLC Logo" h="22px" marginLeft="10px" />
          <Text
            paddingLeft="10px"
            fontSize="xl"
            color={colorMode === "light" ? "black" : "cyan.200"}
          >
            {username}
          </Text>
        </HStack>
        <Divider
          borderColor={colorMode === "light" ? "black" : "cyan.200"}
          variant="dashed"
          size="100"
        />
      </Stack>
    </Box>
  );
};

export default UserCard;
