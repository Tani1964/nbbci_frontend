import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Cong from "../assets/417508389_810293604458017_6989036223118530371_n (1).png";

const Who = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }} // Stack vertically on small screens
      align="center" // Center items
      justify="center" // Center items
      p={{ base: 4, md: 0 }} // Add padding for smaller screens
    >
      <Image
        src={Cong}
        width={{ base: "100%", md: "60vw" }} // Full width on small screens
        height={{ base: "40vh", md: "90vh" }} // Adjust height for smaller screens
        objectFit="cover" // Maintain aspect ratio
      />
      <Box
        bgColor={"#F4F7FA"}
        p={{ base: 4, md: 20 }} // Responsive padding
        width={{ base: "100%", md: "auto" }} // Full width on small screens
        height={{ base: "40vh", md: "90vh" }} 
        textAlign="center" // Center text on smaller screens
      >
        <Heading mb={10}>Who are we...</Heading>
        <Text>
          Welcome to New Birth Baptist Church (NBBC) Ikorodu, a vibrant
          community of believers passionate about raising fruitful disciples for
          Christ. Our slogan, "Raising Fruitful Disciples" (John 15:16),
          embodies our commitment to nurturing followers of Jesus who bear
          lasting fruit.
        </Text>
      </Box>
    </Flex>
  );
};

export default Who;
