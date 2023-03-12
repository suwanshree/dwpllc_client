import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  chakra,
  useColorMode,
} from "@chakra-ui/react";

const Charter = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      w={["90vw", "40vw"]}
    >
      <Text
        fontSize={["2xl", "4xl"]}
        marginBottom="20px"
        color={colorMode === "light" ? "gray.800" : "silver"}
      >
        CHARTER
      </Text>
      <UnorderedList
        fontSize={["l", "xl"]}
        spacing="10px"
        color={colorMode === "light" ? "black" : "gray.400"}
      >
        <ListItem>
          <chakra.span color={colorMode === "light" ? "gray.800" : "silver"}>
            DWPLLC
          </chakra.span>{" "}
          is a{" "}
          <chakra.span color={colorMode === "light" ? "gray.800" : "silver"}>
            PMC
          </chakra.span>{" "}
          with massive stake holdings in other verticals to maximize profit.
          Organization ethics are based around maximizing profit and minimizing
          churn.
        </ListItem>
        <ListItem>
          We hope to provide great gameplay experiences while building a helpful
          and supportive community that supports a strong protection of personal
          liberties and freedoms including diversity of thought and political
          discourse.
        </ListItem>
        <ListItem>
          We strongly oppose any kind of harassment of org members or other
          players in the ‘verse including any acts of trolling/griefing. Any
          such action may result in a permanent ban.
        </ListItem>
        <ListItem>
          We are NOT a pirate org, but we are focused on the financial profit of
          our members. Which sometimes means treading on dangerous lines.
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Charter;
