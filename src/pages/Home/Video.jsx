import { Box, Text, useColorMode } from "@chakra-ui/react";
import ReactPlayer from "react-player";

const Video = () => {
  const { colorMode } = useColorMode();
  return (
    <Box textAlign="center">
      <Text
        fontSize={["2xl", "4xl"]}
        marginBottom="20px"
        color={colorMode === "light" ? "gray.800" : "silver"}
      >
        VIDEO
      </Text>
      <Box maxW="auto" mx="auto" h={["215px", "565px"]} w={["380px", "1000px"]}>
        <ReactPlayer
          url="https://youtu.be/cF9qWH1-oDM"
          controls={true}
          width="100%"
          height="100%"
        />
      </Box>
    </Box>
  );
};

export default Video;
