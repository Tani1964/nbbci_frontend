import {
  Box,
  Divider,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
  
  const Mission = () => {
    return (
      <Box py={10} px={5} maxW="1200px" mx="auto" textAlign="left">
        {/* Title Section */}
        <Box textAlign="center" mb={10}>
          <Heading fontSize="4xl" fontWeight="bold" mb={4}>
            Driven by Faith
          </Heading>
          <Divider orientation="horizontal" borderColor="#A8518A" borderWidth="2px" width="100px" mx="auto" />
        </Box>
  
        {/* Mission and Vision Sections */}
        <VStack align="start" spacing={10}>
          {/* Our Mission */}
          <Box>
            <Heading as="h3" fontSize="2xl" fontWeight="bold" mb={4}>
              Our Mission
            </Heading>
            <Text fontSize="md" lineHeight="tall">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. 
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis 
              tellus. Nulla quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur 
              pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. 
              Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci 
              facilisis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Box>
  
          {/* Our Vision */}
          <Box>
            <Heading as="h3" fontSize="2xl" fontWeight="bold" mb={4}>
              Our Vision
            </Heading>
            <Text fontSize="md" lineHeight="tall">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. 
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis 
              tellus. Nulla quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur 
              pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. 
              Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci 
              facilisis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Box>
        </VStack>
      </Box>
    );
  };
  
  export default Mission;
  