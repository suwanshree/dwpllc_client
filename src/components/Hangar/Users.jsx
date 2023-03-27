import { LockIcon } from "@chakra-ui/icons";
import {
  Stack,
  HStack,
  Text,
  Box,
  useColorMode,
  Divider,
  Image,
  Fade,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { useEffect } from "react";
import dwpllcLogo from "../../assets/pngs/logo-small.png";
import { useAuthStore } from "../../store";
import { LogoutModal } from "../Modal/LogoutModal";
import UserCard from "./UserCard";

const Users = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { user, users, token, getUsers } = useAuthStore();
  useEffect(() => {
    getUsers(token);
  }, []);
  const sortedUsers = [...users].sort((a, b) => {
    if (a.username === user.username) return -1;
    if (b.username === user.username) return 1;
    return 0;
  });
  return (
    <Stack
      w={["100%", "20%"]}
      margin={["0px", "50px"]}
      marginBottom={["50px", "0px"]}
      marginTop={["80px", "50px"]}
    >
      <HStack margin="10px" gap="20px">
        <Image src={dwpllcLogo} alt="DWPLLC Logo" h="80px" marginLeft="10px" />
        <Text
          fontSize="5xl"
          color={colorMode === "light" ? "gray.800" : "silver"}
        >
          Users
        </Text>
        <IconButton
          icon={<LockIcon />}
          aria-label="Log Out Button"
          variant="outline"
          onClick={onOpen}
        >
          Add Ship
        </IconButton>
      </HStack>
      <Divider
        borderColor={colorMode === "light" ? "black" : "cyan.200"}
        size="100"
      />
      <Stack display="flex" overflow="auto">
        {sortedUsers?.map((user, i) => (
          <Fade in key={i}>
            <UserCard username={user.username} />
          </Fade>
        ))}
        <Box h="2vh"></Box>
      </Stack>
      <LogoutModal onClose={onClose} isOpen={isOpen} />
    </Stack>
  );
};

export default Users;
