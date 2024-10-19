import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import Two from "../assets/456603820_923813556439354_7572768511064555920_n.png";
import One from "../assets/456607803_923813013106075_8066032512367024936_n (1).png";

function Deaconate() {
  const members = [
    {
      name: "Mrs. Ifegebesan",
      title: "Deaconess",
      description:
        "Mrs. Ifegebesan Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa mi, aliquam id hendrerit lorem. Pellentesque et sem sapien fringilla maximus...",
      imageUrl: One, // Replace with actual image paths
    },
    {
      name: "Mrs. Gaddi",
      title: "Deaconess",
      description:
        "Mrs. Gadidi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa mi, aliquam id hendrerit lorem. Pellentesque et sem sapien fringilla maximus...",
      imageUrl: "path-to-placeholder-image", // Use a placeholder for now
    },
    {
      name: "Mr. Adeoye Rotimi",
      title: "Deacon",
      description:
        "Mr. Adeoye Rotimi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa mi, aliquam id hendrerit lorem. Pellentesque et sem sapien fringilla maximus...",
      imageUrl: Two, // Replace with actual image paths
    },
  ];

  return (
    <Box py={10} px={6}>
      <Text fontSize="3xl" fontWeight="bold" mb={8}>
        Members of the Deaconates
      </Text>

      <VStack spacing={8} align="stretch">
        {members.map((member, index) => (
          <Flex
            key={index}
            borderWidth="1px"
            borderRadius="md"
            p={6}
            boxShadow="sm"
            direction={{ base: "column", md: "row" }}
          >
            <Box flexShrink={0} mb={{ base: 4, md: 0 }} mr={{ md: 6 }}>
              <Image
                borderRadius="md"
                width="200px"
                height="200px"
                objectFit="cover"
                src={member.imageUrl}
                alt={member.name}
                fallbackSrc="https://via.placeholder.com/200" // Placeholder image if not loaded
              />
            </Box>
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                {member.name}
              </Text>
              <Text color="#A8518A" fontSize="lg" fontWeight="semibold">
                {member.title}
              </Text>
              <Text mt={4} fontSize="md" color="gray.600">
                {member.description}
              </Text>
            </Box>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
}

export default Deaconate;
