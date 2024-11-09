import { Box, Flex, Image, Text, Input, VStack } from "@chakra-ui/react";
import Bg from "../assets/894278709f902ac1761011fef8317f93.png";
import Hand from "../assets/Frame 50.png";

const Accounts2 = () => {
  return (
    <Box
      position="relative"
      minH="fit"
      backgroundImage={`url(${Bg})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      px={{ base: 6, md: 10, lg: 20 }}
      py={{ base: 10, md: 16, lg:30 }}
    >
      {/* Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.5)"
      />

      {/* Content */}
      <Flex
        position="relative"
        align="center"
        justify="space-around"
        height="100%"
        color="white"
        flexDirection={{ base: "column", lg: "row" }}
        gap={{ base: 8, lg: 16 }}
      >
        {/* Left Section */}
        <Box
          maxW={{ base: "100%", md: "600px" }}
          textAlign={{ base: "center", lg: "left" }}
          zIndex={2}
        >
          <Box
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={4}
            width={{ base: "80px", md: "100px" }}
            height={{ base: "80px", md: "100px" }}
            // bg="white"
          >
            <Image src={Hand} boxSize="80%" />
          </Box>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb={4}>
            Make free will giving and offering easily straight to our account
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }}>
            Support the mission and community by giving your tithes and
            offerings. Your generosity makes a difference. Give securely online
            or during our services.
          </Text>
        </Box>

        {/* Right Section - Form */}
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={8}
          zIndex={2}
          width="100%"
          maxW="1000px"
          justify="center"
        >
          {/* General Account Box */}
          <Box
            bg="white"
            borderRadius="md"
            p={6}
            boxShadow="lg"
            width={{ base: "100%", md: "45%" }}
            color="black"
          >
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              General Account: Offering & Tithe
            </Text>
            <VStack spacing={4} align="stretch">
              <Box>
                <Text mb={2} fontWeight="medium">
                  Bank Name
                </Text>
                <Input value="Access Bank" isReadOnly />
              </Box>
              <Box>
                <Text mb={2} fontWeight="medium">
                  Account Number
                </Text>
                <Input value="0023417883" isReadOnly />
              </Box>
              <Box>
                <Text mb={2} fontWeight="medium">
                  Account Name
                </Text>
                <Input value="New Birth Baptist Church Ikorodu" isReadOnly />
              </Box>
            </VStack>
          </Box>

          {/* Project Account Box */}
          <Box
            bg="white"
            borderRadius="md"
            p={6}
            boxShadow="lg"
            width={{ base: "100%", md: "45%" }}
            color="black"
          >
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Project Account
            </Text>
            <VStack spacing={4} align="stretch">
              <Box>
                <Text mb={2} fontWeight="medium">
                  Bank Name
                </Text>
                <Input value="Sterling Bank" isReadOnly />
              </Box>
              <Box>
                <Text mb={2} fontWeight="medium">
                  Account Number
                </Text>
                <Input value="0504899495" isReadOnly />
              </Box>
              <Box>
                <Text mb={2} fontWeight="medium">
                  Account Name
                </Text>
                <Input value="New Birth Baptist Church Ikorodu" isReadOnly />
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Accounts2;
