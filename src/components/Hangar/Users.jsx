import {
  Stack,
  HStack,
  Text,
  Box,
  useColorMode,
  Divider,
  Image,
  Fade,
} from "@chakra-ui/react";
import { useEffect } from "react";
import dwpllcLogo from "../../assets/pngs/logo-small.png";
import { useAuthStore } from "../../store";

const Users = () => {
  const { colorMode } = useColorMode();
  const { user, users, token, getUsers } = useAuthStore();
  useEffect(() => {
    getUsers(token);
  }, []);
  const sortedUsers = [...users].sort((a, b) => {
    if (a.username === user.username) return -1;
    if (b.username === user.username) return 1;
    return 0;
  });
  console.log(sortedUsers);
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
        {sortedUsers?.map((user, i) => (
          <Fade in key={i}>
            {user.username}
            {/* <UserCard id={user.id} /> */}
          </Fade>
        ))}
        <Box h="2vh"></Box>
      </Stack>
    </Stack>
  );
};

export default Users;
