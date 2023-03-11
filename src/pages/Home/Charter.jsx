import {
  Box,
  IconButton,
  Text,
  UnorderedList,
  ListItem,
  useColorMode,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useHomeStore } from "../../store";

const Charter = () => {
  const { nextView, prevView } = useHomeStore();
  const { colorMode } = useColorMode();
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
      w={["90vw", "40vw"]}
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
      <Text
        fontSize={["2xl", "4xl"]}
        marginBottom="20px"
        color={colorMode === "light" ? "black" : "silver"}
      >
        CHARTER
      </Text>
      <UnorderedList
        fontSize={["l", "xl"]}
        spacing="10px"
        color={colorMode === "light" ? "black" : "silver"}
      >
        <ListItem>
          DWPLLC is a PMC with massive stake holdings in other verticals to
          maximize profit. Organization ethics are based around maximizing
          profit and minimizing churn.
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

export default Charter;
