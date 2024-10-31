import { Box, Text, Image, Flex } from "@chakra-ui/react";

function Mixlr() {
  return (
    <Box p={8} maxW="1200px" mx="auto">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
      Our Mixlr page
      </Text>
      <iframe
        src="https://nbbcil.mixlr.com/"
        frameBorder="0"
        width="100%"
        height="1000"
        style={{ border: "none" }} // Optional: remove default border
        title="Our Mixlr page"
      ></iframe>
    </Box>
  );
}

export default Mixlr;
