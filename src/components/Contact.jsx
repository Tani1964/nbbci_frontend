import { useForm, ValidationError } from '@formspree/react';
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
  const [state, handleSubmit] = useForm("xpwzpljq");

  return (
    <Flex justify="center" py={10} px={5} bg="bg.muted">
      <Box
        bg="bg.surface"
        p={8}
        rounded="lg"
        shadow="lg"
        w={{ base: "100%", md: "80%" }}
        maxW="1200px"
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="flex-start"
        >
          {/* Contact Details Section */}
          <Box flex={1} mb={{ base: 6, md: 0 }}>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb={2}>
              Let’s get in touch!
            </Text>
            <Text color="text.muted" mb={4}>
              Have a question or need more information? We’re here to help!
              Reach out to us for any inquiries, and we’ll get back to you as
              soon as possible.
            </Text>

            <Stack spacing={4} mb={6}>
              {/* Phone */}
              <Flex align="center">
                <Icon as={FaPhoneAlt} color="#A8518A" boxSize={5} mr={3} />
                <Text color="text.primary">+234 808 149 4141 or +234 906 802 2226</Text>
              </Flex>

              {/* Email */}
              <Flex align="center">
                <Icon as={FaEnvelope} color="#A8518A" boxSize={5} mr={3} />
                <Text color="text.primary">newbbcil@gmail.com</Text>
              </Flex>

              {/* Address */}
              <Flex align="center">
                <Icon as={FaMapMarkerAlt} color="#A8518A" boxSize={5} mr={3} />
                <Text color="text.primary">
                  5, Olateru Street, Haruna Bus-stop, Lagos, Nigeria
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
          <Box flex={1} pl={{ md: 6 }} width={{ base: "100%", md: "auto" }}>
            <Stack as="form" onSubmit={handleSubmit} spacing={4}>
              <Flex
                align="center"
                borderWidth={1}
                padding={4}
                borderRadius={20}
              >
                <Icon as={FaUserAlt} boxSize={5} mr={3} />
                <Input 
                  name="fullName" 
                  placeholder="Full Name" 
                  variant="unstyled" 
                  required
                />
              </Flex>

              <Flex
                align="center"
                borderWidth={1}
                padding={4}
                borderRadius={20}
              >
                <Icon as={FiMail} boxSize={5} mr={3} />
                <Input 
                  name="email" 
                  placeholder="Email" 
                  variant="unstyled" 
                  required
                />
              </Flex>
              
              <Flex
                align="center"
                borderWidth={1}
                padding={4}
                borderRadius={20}
              >
                <Input 
                  name="message" 
                  placeholder="Message" 
                  variant="unstyled" 
                  required 
                  as="textarea" 
                  rows={3} 
                />
              </Flex>

              <Flex width="100%" justifyContent="flex-start">
                <Button
                  type="submit"
                  paddingX={10}
                  paddingY={5}
                  colorScheme="#A8518A;" // Use a color scheme instead of a hex
                  disabled={state.submitting} // Disable button during submission
                >
                  Submit
                </Button>
              </Flex>
              {/* Display success message */}
              {state.succeeded && (
                <Text color="green.500">Thanks for contacting us!</Text>
              )}
              {/* Display validation errors */}
              {/* {state.errors?.length > 0 && (
                <Text color="red.500">Please correct the errors above.</Text>
              )} */}
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Contact;
