import {
  Box,
  Text,
  Th,
  Tr,
  Td,
  Table,
  TableContainer,
  Thead,
  Tbody,
  chakra,
  useColorMode,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const History = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Text
        fontSize={["2xl", "4xl"]}
        w={["90vw", "75vw"]}
        marginBottom="20px"
        textAlign="center"
        color={colorMode === "light" ? "gray.800" : "silver"}
      >
        HISTORY
      </Text>
      <UnorderedList
        display={["block", "none"]}
        fontSize={["m", "xl"]}
        listStyleType="none"
        marginLeft="0"
        spacing="5px"
        width="90vw"
        color={colorMode === "light" ? "black" : "silver"}
      >
        <ListItem color={colorMode === "light" ? "black" : "gray.400"}>
          <chakra.span fontStyle="italic" fontWeight="bold">
            April 2950:{" "}
          </chakra.span>
          FatalAngel leaves Hurston in search of new opportunities.
        </ListItem>
        <ListItem color={colorMode === "light" ? "black" : "gray.400"}>
          <chakra.span fontStyle="italic" fontWeight="bold">
            July 2950:{" "}
          </chakra.span>
          After gaining influence in Levski, FatalAngel decides to carve his own
          path.
        </ListItem>
        <ListItem color={colorMode === "light" ? "black" : "gray.400"}>
          <chakra.span fontStyle="italic" fontWeight="bold">
            August 2950:{" "}
          </chakra.span>
          Fatal meets like-minded individuals, and they establish Dark Water
          Privateers LLC in Levski.
        </ListItem>
        <ListItem color={colorMode === "light" ? "black" : "gray.400"}>
          <chakra.span fontStyle="italic" fontWeight="bold">
            August 17, 2950:{" "}
          </chakra.span>
          Dark Water Privateers LLC is established, led by FatalAngel and
          supported by CMDR_Despair.
        </ListItem>
        <ListItem color={colorMode === "light" ? "black" : "gray.400"}>
          <chakra.span fontStyle="italic" fontWeight="bold">
            September 7, 2950:{" "}
          </chakra.span>
          The organization holds its first intra-org ground ops event, resulting
          in a loss for the defending force.
        </ListItem>
        <ListItem color={colorMode === "light" ? "black" : "gray.400"}>
          <chakra.span fontStyle="italic" fontWeight="bold">
            October 18, 2950:{" "}
          </chakra.span>
          An inter-org FPS event is held, resulting in a tie and a planned
          tie-breaker event.
        </ListItem>
        <ListItem color={colorMode === "light" ? "black" : "gray.400"}>
          <chakra.span fontStyle="italic" fontWeight="bold">
            February 15, 2951:{" "}
          </chakra.span>
          DWPLLC signs a 1-year mutually beneficial contract with Crusader
          Industries, details undisclosed.
        </ListItem>
        <ListItem color={colorMode === "light" ? "black" : "gray.400"}>
          <chakra.span fontStyle="italic" fontWeight="bold">
            June 18, 2951:{" "}
          </chakra.span>
          DWPLLC members assist the CDF in pushing back Xenothreat and are
          rewarded by Advocacy and CDF.
        </ListItem>
        <ListItem color={colorMode === "light" ? "black" : "gray.400"}>
          <chakra.span fontStyle="italic" fontWeight="bold">
            December 26, 2951:{" "}
          </chakra.span>
          DWPLLC members participate in the 'Jumptown Wars' and battle to secure
          the ultimate profits..
        </ListItem>
        <ListItem color={colorMode === "light" ? "black" : "gray.400"}>
          <chakra.span fontStyle="italic" fontWeight="bold">
            January 2952:{" "}
          </chakra.span>
          Several DWPLLC members are assigned to contracts in the Pyro system
          with news of organization expansion.
        </ListItem>
      </UnorderedList>
      <TableContainer w={["90vw", "80vw"]} display={["none", "block"]}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Event</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td color={colorMode === "light" ? "gray.800" : "silver"}>
                April 2950
              </Td>
              <Td color={colorMode === "light" ? "black" : "gray.400"}>
                FatalAngel leaves Hurston in search of new opportunities.
              </Td>
            </Tr>
            <Tr>
              <Td color={colorMode === "light" ? "gray.800" : "silver"}>
                July 2950
              </Td>
              <Td color={colorMode === "light" ? "black" : "gray.400"}>
                After gaining influence in Levski, FatalAngel decides to carve
                his own path.
              </Td>
            </Tr>
            <Tr>
              <Td color={colorMode === "light" ? "gray.800" : "silver"}>
                August 2950
              </Td>
              <Td color={colorMode === "light" ? "black" : "gray.400"}>
                Fatal meets like-minded individuals, and they establish Dark
                Water Privateers LLC in Levski.
              </Td>
            </Tr>
            <Tr>
              <Td color={colorMode === "light" ? "gray.800" : "silver"}>
                August 17, 2950
              </Td>
              <Td color={colorMode === "light" ? "black" : "gray.400"}>
                Dark Water Privateers LLC is established, led by FatalAngel and
                supported by CMDR_Despair.
              </Td>
            </Tr>
            <Tr>
              <Td color={colorMode === "light" ? "gray.800" : "silver"}>
                September 7, 2950
              </Td>
              <Td color={colorMode === "light" ? "black" : "gray.400"}>
                The organization holds its first intra-org ground ops event,
                resulting in a loss for the defending force.
              </Td>
            </Tr>
            <Tr>
              <Td color={colorMode === "light" ? "gray.800" : "silver"}>
                October 18, 2950
              </Td>
              <Td color={colorMode === "light" ? "black" : "gray.400"}>
                An inter-org FPS event is held, resulting in a tie and a planned
                tie-breaker event.
              </Td>
            </Tr>
            <Tr>
              <Td color={colorMode === "light" ? "gray.800" : "silver"}>
                February 15, 2951
              </Td>
              <Td color={colorMode === "light" ? "black" : "gray.400"}>
                DWPLLC signs a 1-year mutually beneficial contract with Crusader
                Industries, details undisclosed.
              </Td>
            </Tr>
            <Tr>
              <Td color={colorMode === "light" ? "gray.800" : "silver"}>
                June 18, 2951
              </Td>
              <Td color={colorMode === "light" ? "black" : "gray.400"}>
                DWPLLC members assist the CDF in pushing back Xenothreat and are
                rewarded by the Advocacy and CDF.
              </Td>
            </Tr>
            <Tr>
              <Td color={colorMode === "light" ? "gray.800" : "silver"}>
                December 26, 2951
              </Td>
              <Td color={colorMode === "light" ? "black" : "gray.400"}>
                DWPLLC members participate in the 'Jumptown Wars' and battle to
                secure the ultimate profits..
              </Td>
            </Tr>
            <Tr>
              <Td color={colorMode === "light" ? "gray.800" : "silver"}>
                January 2952
              </Td>
              <Td color={colorMode === "light" ? "black" : "gray.400"}>
                Several DWPLLC members are assigned to contracts in the Pyro
                system with news of organization expansion.
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default History;
