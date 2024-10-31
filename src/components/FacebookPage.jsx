import { useState } from "react";
import { Box, Text, Spinner } from "@chakra-ui/react";

function FacebookPage() {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <Box p={8} maxW="1200px" mx="auto" position="relative">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Our Facebook Page
      </Text>

      {/* Loader */}
      {isLoading && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="1"
        >
          <Spinner size="xl" color="blue.500" />
        </Box>
      )}

      {/* Iframe */}
      <iframe
        src="https://widgets.sociablekit.com/facebook-page-posts/iframe/25481832"
        frameBorder="0"
        width="100%"
        height="1000"
        style={{ border: "none", display: isLoading ? "none" : "block" }}
        title="Facebook Page Posts"
        onLoad={handleIframeLoad}
      ></iframe>
    </Box>
  );
}

export default FacebookPage;
