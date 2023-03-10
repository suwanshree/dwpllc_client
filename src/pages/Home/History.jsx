import {
  Box,
  IconButton,
  Text,
  Th,
  Tr,
  Td,
  Table,
  TableContainer,
  Thead,
  Tbody,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useHomeStore } from "../../store";

const History = () => {
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
        w={["90vw", "75vw"]}
        marginBottom="20px"
        textAlign="center"
      >
        History
      </Text>
      <TableContainer w={["90vw", "60vw"]}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Event</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>April 2950</Td>
              <Td>FatalAngel leaves Hurston in search of new opportunities.</Td>
            </Tr>
            <Tr>
              <Td>July 2950</Td>
              <Td>
                After gaining influence in Levski, FatalAngel decides to carve
                his own path.
              </Td>
            </Tr>
            <Tr>
              <Td>August 2950</Td>
              <Td>
                Fatal meets like-minded individuals, and they establish Dark
                Water Privateers LLC in Levski.
              </Td>
            </Tr>
            <Tr>
              <Td>August 17, 2950</Td>
              <Td>
                Dark Water Privateers LLC is established, led by FatalAngel and
                supported by CMDR_Despair.
              </Td>
            </Tr>
            <Tr>
              <Td>September 7, 2950</Td>
              <Td>
                The organization holds its first intra-org ground ops event,
                resulting in a loss for the defending force.
              </Td>
            </Tr>
            <Tr>
              <Td>October 18, 2950</Td>
              <Td>
                An inter-org FPS event is held, resulting in a tie and a planned
                tie-breaker event.
              </Td>
            </Tr>
            <Tr>
              <Td>February 15, 2951</Td>
              <Td>
                DWPLLC signs a 1-year mutually beneficial contract with Crusader
                Industries, details undisclosed.
              </Td>
            </Tr>
            <Tr>
              <Td>June 18, 2951</Td>
              <Td>
                DWPLLC members assist the CDF in pushing back Xenothreat and are
                rewarded by the Advocacy and CDF.
              </Td>
            </Tr>
            <Tr>
              <Td>December 26, 2951</Td>
              <Td>
                DWPLLC members participate in the 'Jumptown Wars' and battle to
                secure the ultimate profits..
              </Td>
            </Tr>
            <Tr>
              <Td>January 2952</Td>
              <Td>
                Several DWPLLC members are assigned to contracts in the Pyro
                system with news of organization expansion.
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
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

export default History;
