import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  useColorMode,
} from "@chakra-ui/react";

const Manifesto = () => {
  const { colorMode } = useColorMode();
  return (
    <Box w={["90vw", "30vw"]} textAlign="center">
      <Text
        fontSize={["2xl", "4xl"]}
        marginBottom="20px"
        color={colorMode === "light" ? "gray.800" : "silver"}
      >
        MANIFESTO
      </Text>
      <UnorderedList
        fontSize={["l", "xl"]}
        listStyleType="none"
        marginLeft="0"
        spacing="10px"
        color={colorMode === "light" ? "black" : "silver"}
      >
        <ListItem fontStyle="italic" fontWeight="bold" fontSize={["xl", "2xl"]}>
          Vision
        </ListItem>
        <ListItem color={colorMode === "light" ? "black" : "gray.400"}>
          Expand operations in multiple systems, engaging in profitable
          activities to the benefit of all stakeholders.
        </ListItem>
        <ListItem fontStyle="italic" fontWeight="bold" fontSize={["xl", "2xl"]}>
          Mission
        </ListItem>
        <ListItem color={colorMode === "light" ? "black" : "gray.400"}>
          Find profitable and engaging activities with each new iteration and
          facilitate them within the organization.
        </ListItem>
        <ListItem fontStyle="italic" fontWeight="bold" fontSize={["xl", "2xl"]}>
          Goal
        </ListItem>
        <ListItem color={colorMode === "light" ? "black" : "gray.400"}>
          Hold events with allied organizations followed up by commendations and
          awards.
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Manifesto;
