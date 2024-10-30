import { Box, Heading, AspectRatio } from "@chakra-ui/react";

const Story = () => {
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  return (
    <Box textAlign="center" p={5}>
      <Heading mb={5}>Our Stories In Pictures</Heading>
      <Box minW="80vw" maxW="80vw" mx="auto">
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://widgets.sociablekit.com/facebook-photo-albums/iframe/25481799"
            frameBorder="0"
            width="100%"
            height="100%"
            style={{ borderRadius: "8px" }}
          ></iframe>
        </AspectRatio>
      </Box>
    </Box>
  );
};

export default Story;
