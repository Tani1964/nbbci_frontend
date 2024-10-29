import { Box, Flex, Text, Icon, Stack, Button, Input } from "@chakra-ui/react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserAlt,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const Contact = () => {
  return (
    <Flex justify="center" py={10} px={5} bg="gray.50">
      <Box
        bg="white"
        p={8}
        rounded="lg"
        shadow="lg"
        w={{ base: "100%", md: "80%" }}
        maxW="1200px"
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
        >
          {/* Contact Details Section */}
          <Box flex={1} mb={{ base: 6, md: 0 }}>
            <Text fontSize="2xl" fontWeight="bold" mb={2}>
              Let’s get in touch!
            </Text>
            <Text color="gray.600" mb={4}>
              Have a question or need more information? We’re here to help!
              Reach out to us for any inquiries, and we’ll get back to you as
              soon as possible.
            </Text>

            <Stack spacing={4} mb={6}>
              {/* Phone */}
              <Flex align="center">
                <Icon as={FaPhoneAlt} color="#A8518A" boxSize={5} mr={3} />
                <Text color="gray.700">+234 808 149 4141 or +234 906 802 2226 </Text>
              </Flex>

              {/* Email */}
              <Flex align="center">
                <Icon as={FaEnvelope} color="#A8518A" boxSize={5} mr={3} />
                <Text color="gray.700">newbbcil@gmail.com</Text>
              </Flex>

              {/* Address */}
              <Flex align="center">
                <Icon as={FaMapMarkerAlt} color="#A8518A" boxSize={5} mr={3} />
                <Text color="gray.700">
                  5, Olutaiwo Street, Haruna Bus-stop, Lagos, Nigeria
                </Text>
              </Flex>
            </Stack>

            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Connect with us
            </Text>
            <Stack direction="row" spacing={4}>
              <Icon as={AiFillInstagram} boxSize={6} color="#A8518A" />
              <Icon as={AiFillFacebook} boxSize={6} color="#A8518A" />
            </Stack>
          </Box>

          {/* Form Section */}
          <Box flex={1} pl={{ md: 6 }}>
            <Stack spacing={4}>
              <Flex
                align="center"
                borderWidth={1}
                padding={4}
                borderRadius={20}
              >
                <Icon as={FaUserAlt} boxSize={5} mr={3} />
                <Input placeholder="Full Name" variant="unstyled" />
              </Flex>

              <Flex
                align="center"
                borderWidth={1}
                padding={4}
                borderRadius={20}
              >
                <Icon as={FiMail} boxSize={5} mr={3} />
                <Input placeholder="Email" variant="unstyled" />
              </Flex>
              <Flex direction={"row"} width={"100%"} justifyContent={"left"}>
                <Button paddingX={10} paddingY={5} colorScheme="#A8518A;">
                  Submit
                </Button>
              </Flex>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Contact;
