import { Box, Flex, Text, Button, Textarea } from "@chakra-ui/react";
import Bg from "../assets/BG.png";

const PrayerRequest = () => {
  return (
    <Box
      position="relative"
      minH="80vh"
      backgroundImage={`url(${Bg})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      px={{ base: "5%", md: "8%" }}
      py={{ base: "10%", md: "8%" }}
      color="white"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      gap={10}
    >
      {/* Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex={1}
      />

      {/* Content */}
      <Box
        textAlign="left"
        maxW={{ base: "100%", md: "600px" }}
        mb={6}
        zIndex={2}
        position="relative"
      >
        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
          Let’s help you to grow?
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} mt={2}>
          Need guidance or a listening ear? Our pastoral counseling team is here
          to support you through life’s challenges. Schedule a confidential
          session today, and let us walk with you on your journey of faith and
          healing.
        </Text>
      </Box>
      
      {/* Form Content */}
      <Flex
        as="form"
        width={{ base: "100%", md: "80%" }}
        justifyContent="space-between"
        alignItems="start"
        flexDirection="column"
        zIndex={2}
        position="relative"
      >
        <Flex direction="column" width="100%" mb={{ base: 4, md: 0 }}>
          <label>Message:</label>
          <Textarea
            bg="white"
            color="black"
            width="100%"
            height={{ base: "20vh", md: "40vh" }}
            _placeholder={{ color: "gray.500" }}
            mb={4}
          />
        </Flex>
        
        <Flex width="100%" justifyContent={{ base: "center", md: "right" }}>
          <Button px={10} py={5} colorScheme="#A8518A;">
            Submit
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PrayerRequest;
