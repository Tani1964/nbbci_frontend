import { Box, Divider, Heading, Text, VStack } from "@chakra-ui/react";

const Mission = () => {
  return (
    <Box py={10} px={5} maxW="1200px" mx="auto" textAlign="left">
      {/* Title Section */}
      <Box textAlign="center" mb={10}>
        <Heading fontSize="4xl" fontWeight="bold" mb={4}>
          Driven by Faith
        </Heading>
        <Divider
          orientation="horizontal"
          borderColor="#A8518A"
          borderWidth="2px"
          width="150px"
          mx="auto"
        />
      </Box>

      {/* Mission and Vision Sections */}
      <VStack align="start" spacing={10}>
        {/* Our Mission */}
        <Box>
          <Heading as="h3" fontSize="4xl" fontWeight="bold" mb={4}>
            Our Mission
          </Heading>
          <Text fontSize="md" lineHeight="tall">
            Empowered by the Holy Spirit, we exist to:
          </Text>
          <ul style={{"paddingLeft":"20px", "listStyleType":"disc"}}>
            <li>Win Souls</li>
            <li>Make True Worshippers</li>
            <li>Integrate into the Family</li>
            <li>Train into Maturity</li>
            <li>Equip for Service</li>
          </ul>
          <Text>
            Acronym <bold>W.M.I.T.E</bold>
          </Text>
        </Box>

        {/* Our Vision */}
        <Box>
          <Heading as="h3" fontSize="4xl" fontWeight="bold" mb={4}>
            Our Vision
          </Heading>
          <Text fontSize="md" lineHeight="tall">
            Raising a community of people with Christ-like nature.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Mission;
