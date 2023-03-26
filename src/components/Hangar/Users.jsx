import {
  Stack,
  HStack,
  Text,
  Box,
  useColorMode,
  Divider,
  Image,
} from "@chakra-ui/react";
import dwpllcLogo from "../../assets/pngs/logo-small.png";

const Users = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack
      w={["100%", "20%"]}
      margin={["0px", "50px"]}
      marginBottom={["50px", "0px"]}
      marginTop={["80px", "50px"]}
    >
      <HStack justifyContent="space-between" margin="10px">
        <HStack gap="10px">
          <Image
            src={dwpllcLogo}
            alt="DWPLLC Logo"
            h="80px"
            marginLeft="10px"
          />
          <Text
            fontSize="5xl"
            color={colorMode === "light" ? "black" : "cyan.200"}
          >
            Users
          </Text>
        </HStack>
      </HStack>
      <Divider
        borderColor={colorMode === "light" ? "black" : "cyan.200"}
        size="100"
      />
      <Stack display="flex" overflow="auto" paddingTop="20px">
        <Text marginLeft="10px">Coming soon...</Text>
        {/* {userList?.map((user, i) => (
          <Fade in key={i}>
            <UserCard id={user.id} />
          </Fade>
        ))} */}
        <Box h="2vh"></Box>
      </Stack>
    </Stack>
  );
};

export default Users;
