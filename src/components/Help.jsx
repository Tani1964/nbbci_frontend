import { Box, Flex, Text, Button, Input, Textarea } from "@chakra-ui/react";
import Bg from "../assets/BG.png";

const Help = () => {
  return (
    <Box
      position="relative"
      minH="fit"
      backgroundImage={`url(${Bg})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      px={{ base: "5%", md: "8%" }}
      py={{ base: "10%", md: "8%" }}
      color="white"
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
        direction={{ base: "column", md: "row" }}
        width="100%"
        justifyContent="space-between"
        alignItems="flex-start"
        zIndex={2}
        position="relative"
        mb={4}
      >
        <Flex direction="column" width={{ base: "100%", md: "45%" }} mb={{ base: 4, md: 0 }}>
          <label style={{ color: "white" }}>Email:</label>
          <Input
            type="email"
            mb={4}
            bg="white"
            color="black"
            _placeholder={{ color: "gray.500" }}
          />
        </Flex>

        <Flex direction="column" width={{ base: "100%", md: "45%" }}>
          <label style={{ color: "white" }}>Message:</label>
          <Textarea
            mb={4}
            bg="white"
            color="black"
            height={{ base: "20vh", md: "40vh" }}
            _placeholder={{ color: "gray.500" }}
          />
        </Flex>
      </Flex>

      <Flex width="100%" justifyContent={{ base: "center", md: "right" }} zIndex={2} position="relative">
        <Button px={10} py={5} colorScheme="#A8518A;">
          Submit
        </Button>
      </Flex>
    </Box>
  );
};

export default Help;
