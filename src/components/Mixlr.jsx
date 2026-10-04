import { useState } from "react";
import { Box, Text, Spinner } from "@chakra-ui/react";

function Mixlr() {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <Box p={8} maxW="1200px" mx="auto" position="relative">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Our Radio page
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
        src="https://nbbciradio.ismyradio.com"
        frameBorder="0"
        width="100%"
        height="1000"
        style={{ border: "none", display: isLoading ? "none" : "block" }}
        title="Our Radio page"
        onLoad={handleIframeLoad}
      ></iframe>
    </Box>
  );
}

export default Mixlr;
