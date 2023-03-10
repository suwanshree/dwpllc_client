import {
  Box,
  IconButton,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useHomeStore } from "../../store";

const Manifesto = () => {
  const { nextView, prevView } = useHomeStore();
  const handleNextClick = () => {
    nextView();
  };
  const handlePrevClick = () => {
    prevView();
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      w={["90vw", "30vw"]}
    >
      <IconButton
        icon={<ChevronUpIcon />}
        fontSize="40px"
        aria-label="Color mode switcher"
        onClick={handlePrevClick}
        variant="outline"
        pos="sticky"
        top="0"
        w="80px"
        margin="40px"
      >
        Continue
      </IconButton>
      <Text fontSize={["2xl", "4xl"]} marginBottom="20px">
        Manifesto
      </Text>
      <UnorderedList fontSize={["l", "xl"]} listStyleType="none" spacing="10px">
        <ListItem fontWeight="bold" fontSize={["xl", "2xl"]}>
          Vision
        </ListItem>
        <ListItem>
          Expand operations in multiple systems, engaging in profitable
          activities to the benefit of all stakeholders.
        </ListItem>
        <ListItem fontWeight="bold" fontSize={["xl", "2xl"]}>
          Mission
        </ListItem>
        <ListItem>
          Find profitable and engaging activities with each new iteration and
          facilitate them within the organization.
        </ListItem>
        <ListItem fontWeight="bold" fontSize={["xl", "2xl"]}>
          Goal
        </ListItem>
        <ListItem>
          Hold events with allied organizations followed up by commendations and
          awards.
        </ListItem>
      </UnorderedList>
      <IconButton
        icon={<ChevronDownIcon />}
        fontSize="40px"
        aria-label="Color mode switcher"
        onClick={handleNextClick}
        variant="outline"
        pos="sticky"
        bottom="0"
        w="80px"
        margin="40px"
      >
        Continue
      </IconButton>
    </Box>
  );
};

export default Manifesto;
