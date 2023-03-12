import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import smallLogo from "../../assets/pngs/logo-small.png";
import { ExternalLinkIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useHomeStore } from "../../store";

const Landing = () => {
  const { nextView } = useHomeStore();
  const { colorMode } = useColorMode();
  return (
    <Box
      display="flex"
      justifyContent={["flex-start", "center"]}
      alignItems="center"
      flexDirection="column"
      textAlign="center"
    >
      <Image w={["80px", "200px"]} src={smallLogo} alt="DWPLLC Logo" />
      <Text
        fontSize={["4xl", "8xl"]}
        w={["90vw", "75vw"]}
        marginBottom="20px"
        color={colorMode === "light" ? "black" : "silver"}
      >
        Dark Water Privateers LLC.
      </Text>
      <Text
        fontSize={["xl", "2xl"]}
        w={["90vw", "60vw"]}
        marginBottom="40px"
        color={colorMode === "light" ? "black" : "silver"}
      >
        We are a PMC focused on civilian contracts, and specialized economic
        opportunities around the ‘verse. Constantly expanding and recruiting
        players for many play-styles.
      </Text>
      <ButtonGroup direction="row" spacing={4}>
        <Button
          rightIcon={<ExternalLinkIcon />}
          variant="primary"
          onClick={() =>
            window.open(
              "https://robertsspaceindustries.com/orgs/DWPLLC/members"
            )
          }
        >
          Apply
        </Button>
        <Button
          rightIcon={<ExternalLinkIcon />}
          variant="primary"
          onClick={() =>
            window.open("https://robertsspaceindustries.com/orgs/DWPLLC")
          }
        >
          RSI Page
        </Button>
        <Button
          rightIcon={<ExternalLinkIcon />}
          variant="primary"
          onClick={() => window.open("https://discord.gg/BmHpKK7")}
        >
          Discord
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Landing;
