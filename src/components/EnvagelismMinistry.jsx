import { Box, Text, Image, SimpleGrid, Flex, Icon } from "@chakra-ui/react";
import { FaFacebook, FaYoutube } from "react-icons/fa";

function EnvagelismMinistry() {
  return (
    <Box p={8}>
      {/* Section Title */}
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={6}>
        Envagelism Ministry
      </Text>

      {/* Section Description */}
      <Text fontSize="md" textAlign="center" color="gray.600" mb={10} maxW="600px" mx="auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
        urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices massa. 
        Vestibulum auctor nisl et accumsan vulputate...
      </Text>

      {/* Featured Image */}
      <Flex justify="center" mb={10}>
        <Image
          src="path-to-featured-image" // Replace with actual image path
          alt="Featured Image"
          borderRadius="md"
          boxSize="200px"
          objectFit="cover"
        />
      </Flex>

      {/* Video Thumbnails */}
      <SimpleGrid columns={[1, 1, 3]} spacing={8}>
        {/* Video Item 1 */}
        <Box textAlign="center">
          <Image
            src="path-to-video-image-1" // Replace with actual image path
            alt="2026 Easter Concert"
            borderRadius="md"
            mb={4}
          />
          <Text fontSize="lg" fontWeight="bold">
            2026 Easter Concert
          </Text>
          <Icon as={FaFacebook} color="blue.600" boxSize={6} mt={2} />
        </Box>

        {/* Video Item 2 */}
        <Box textAlign="center">
          <Image
            src="path-to-video-image-2" // Replace with actual image path
            alt="2024 Crossover"
            borderRadius="md"
            mb={4}
          />
          <Text fontSize="lg" fontWeight="bold">
            2024 Crossover
          </Text>
          <Icon as={FaYoutube} color="red.600" boxSize={6} mt={2} />
        </Box>

        {/* Video Item 3 */}
        <Box textAlign="center">
          <Image
            src="path-to-video-image-3" // Replace with actual image path
            alt="2025 Retreat"
            borderRadius="md"
            mb={4}
          />
          <Text fontSize="lg" fontWeight="bold">
            2025 Retreat
          </Text>
          <Icon as={FaYoutube} color="red.600" boxSize={6} mt={2} />
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default EnvagelismMinistry;
