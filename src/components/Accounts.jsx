import {
    Box,
    Flex,
    Heading,
    Image,
    Text,
    Icon,
    Link,
    Stack,
    Button,
    Input,
    Textarea,
    VStack,
    Grid,
  } from "@chakra-ui/react";
  import Bg from '../assets/894278709f902ac1761011fef8317f93.png'
  import Hand from '../assets/Frame 50.png'
 

const Accounts = () => {
  return (
    <Box
        position="relative"
        h="100vh"
        backgroundImage={Bg}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        paddingX={78}
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
          justify="space-between"
          height="100%"
          px={10}
          color="white"
        >
          {/* Left Section */}
          <Box maxW="500px">
              <Box
                // bg="white"
                color="black"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="left"
                mr={4}
                width={"100%"}
              >
                {/* Icon */}
                {/* <i className="fa fa-gift" aria-hidden="true"></i> */}
                <Image src={Hand} />
              </Box>
            <Flex align="center" mb={4}>
              <Text fontSize="2xl" fontWeight="bold">
                Make free will giving and offering easily straight to our
                account
              </Text>
            </Flex>
            <Text fontSize="lg">
              Support the mission and community by giving your tithes and
              offerings. Your generosity makes a difference. Give securely
              online or during our services.
            </Text>
          </Box>

          {/* Right Section - Form */}
          <Box
            bg="white"
            borderRadius="md"
            p={6}
            boxShadow="lg"
            width={'35%'}
            color="black"
          >
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Account Details
            </Text>
            <VStack spacing={4}>
              <Box w="100%">
                <Text mb={2} fontWeight="medium">
                  Bank Name
                </Text>
                <Input value="Access Bank" isReadOnly />
              </Box>
              <Box w="100%">
                <Text mb={2} fontWeight="medium">
                  Account Number
                </Text>
                <Input value="0023471883" isReadOnly />
              </Box>
              <Box w="100%">
                <Text mb={2} fontWeight="medium">
                  Account Name
                </Text>
                <Input value="New Birth Baptist Church Ikorodu" isReadOnly />
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Box>
  )
}

export default Accounts