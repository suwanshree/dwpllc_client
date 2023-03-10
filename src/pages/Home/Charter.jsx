import {
  Box,
  IconButton,
  Text,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import { RepeatIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useHomeStore } from "../../store";

const Charter = () => {
  const { resetView, prevView } = useHomeStore();
  const handleHomeClick = () => {
    resetView();
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
        Charter
      </Text>
      <UnorderedList fontSize={["l", "xl"]} spacing="10px">
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
        icon={<RepeatIcon />}
        fontSize="20px"
        aria-label="Color mode switcher"
        onClick={handleHomeClick}
        variant="outline"
        pos="sticky"
        top="0"
        w="80px"
        margin="40px"
      >
        Home
      </IconButton>
    </Box>
  );
};

export default Charter;
