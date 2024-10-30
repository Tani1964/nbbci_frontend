import { Box, Text, Image, Flex } from "@chakra-ui/react";

function FacebookPage() {
  return (
    <Box p={8} maxW="1200px" mx="auto">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Our Facebook Page
      </Text>
      <iframe
        src="https://widgets.sociablekit.com/facebook-page-posts/iframe/25481832"
        frameBorder="0"
        width="100%"
        height="1000"
        style={{ border: "none" }} // Optional: remove default border
        title="Facebook Page Posts"
      ></iframe>
    </Box>
  );
}

export default FacebookPage;
