import { Box, Text, Image, Flex } from "@chakra-ui/react";

function WomenMissionaryUnion() {
  return (
    <Box p={8} maxW="1200px" mx="auto">
      {/* Section Title */}
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Women Missionary Union
      </Text>

      <Flex direction={["column", "column", "row"]} align="flex-start">
        {/* Text Section */}
        <Box flex="2" pr={[0, 0, 8]} mb={[8, 8, 0]}>
          <Text fontSize="md" color="text.secondary" mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices massa. Maecenas vitae 
            mattis tellus. Nulla quis imperdiet augue. Vestibulum auctor nisl et accumsan vulputate.
          </Text>
          <Text fontSize="md" color="text.secondary" mb={4}>
            Nulla quis imperdiet augue. Vestibulum auctor nisl et accumsan vulputate. Duis non diam vel tortor 
            elementum commodo. Etiam convallis leo nec justo tristique, ac placerat nisi egestas.
          </Text>
          <Text fontSize="md" color="text.secondary" mb={4}>
            Cras rutrum, massa quis lacinia sagittis, libero ante rutrum enim, eu scelerisque sem turpis sit amet 
            lorem. Pellentesque cursus massa et lectus consequat, vitae ornare justo hendrerit sit amet.
          </Text>
          <Text fontSize="md" color="text.secondary" mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla.
          </Text>
        </Box>

        {/* Image Section */}
        <Box flex="1">
          <Image
            src="path-to-image-placeholder" // Replace with actual image path
            alt="Women Missionary Union Image"
            borderRadius="md"
            boxSize="100%"
            objectFit="cover"
            background="gray.300" // Placeholder background color
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default WomenMissionaryUnion;
