import { useForm } from '@formspree/react';
import { Box, Flex, Text, Button, Input, Textarea } from "@chakra-ui/react";
import Bg from "../assets/BG.png";

const Help = () => {
  const [state, handleSubmit] = useForm("xvgokqba"); // Replace with your actual form ID

  return (
    <Box
    as="form"
        onSubmit={handleSubmit}
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
         // Ensure this is set
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
            name="email" // Add name attribute for Formspree
            mb={4}
            bg="white"
            color="black"
            _placeholder={{ color: "gray.500" }}
            required // Make it required
          />
        </Flex>

        <Flex direction="column" width={{ base: "100%", md: "45%" }}>
          <label style={{ color: "white" }}>Message:</label>
          <Textarea
            name="message" // Add name attribute for Formspree
            mb={4}
            bg="white"
            color="black"
            height={{ base: "20vh", md: "40vh" }}
            _placeholder={{ color: "gray.500" }}
            required // Make it required
          />
        </Flex>
      </Flex>

      <Flex width="100%" justifyContent={{ base: "center", md: "right" }} zIndex={2} position="relative">
        <Button
          type="submit" // Ensure this is set
          px={10}
          py={5}
          colorScheme="pink" // Make sure colorScheme is valid
          disabled={state.submitting} // Disable button during submission
        >
          Submit
        </Button>
      </Flex>

      {/* Display success message */}
      {state.succeeded && (
        <Text color="green.500" textAlign="center" mt={4}>Thanks for your message!</Text>
      )}
      {/* Display validation errors */}
      {/* {state.errors.length > 0 && (
        <Text color="red.500" textAlign="center" mt={4}>Please correct the errors above.</Text>
      )} */}
    </Box>
  );
};

export default Help;
