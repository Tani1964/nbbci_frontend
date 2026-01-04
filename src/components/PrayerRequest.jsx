import { useForm } from '@formspree/react';
import { Box, Flex, Text, Button, Textarea } from "@chakra-ui/react";
import Bg from "../assets/BG.png";

const PrayerRequest = () => {
  const [state, handleSubmit] = useForm("myzyepdq"); // Replace with your actual Formspree form ID

  return (
    <Box
      position="relative"
      minH="80vh"
      // backgroundImage={`url(${Bg})`}
      // backgroundSize="cover"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
      // px={{ base: "5%", md: "8%" }}
      // px={{ base: 6, md: 10, lg: 20 }}

      py={{ base: "10%", md: "8%" }}
      color="white"
      display="flex"
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent="space-around"
      alignItems="center"
      // gap={4}
    >
      {/* Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        // bg="rgba(0, 0, 0, 0.5)"
        zIndex={1}
      />

      {/* Content */}
      <Box
        textAlign={{ base: "center", md: "left" }}
        maxW={{ base: "100%", md: "600px" }}
        mb={{ base: 6, lg: 0 }}
        zIndex={2}
        position="relative"
      >
        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
          Submit Your Prayer Request
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} mt={2}>
          We are here to pray with you. No matter what you’re going through, you
          are not alone. Please share your prayer needs with us, and our team
          will join you in prayer, lifting up your requests to God with faith
          and compassion.
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} mt={2}>
          Let us stand with you in this season. Just submit your request below,
          and trust that our hearts and prayers are with you.
        </Text>
      </Box>

      {/* Form Content */}
      <Flex
        as="form"
        onSubmit={handleSubmit}
        width={{ base: "100%", lg: "50%" }}
        justifyContent="space-between"
        alignItems="start"
        flexDirection="column"
        zIndex={2}
        position="relative"
      >
        <Flex direction="column" width="100%" mb={4}>
          <label style={{ color: "white" }}>Your Prayer Request:</label>
          <Textarea
            name="message"
            bg="bg.surface"
            color="text.primary"
            width="100%"
            height={{ base: "20vh", md: "30vh" }}
            placeholder="Share your prayer request here..."
            _placeholder={{ color: "text.muted" }}
            mb={4}
            required
          />
        </Flex>

        <Flex width="100%" justifyContent={{ base: "center", md: "flex-end" }}>
          <Button
            type="submit"
            px={8}
            py={4}
            colorScheme="pink"
            disabled={state.submitting}
          >
            Submit
          </Button>
        </Flex>
      </Flex>

      {/* Display success message */}
      {state.succeeded && (
        <Text color="green.500" textAlign="center" mt={4}>
          Thank you for sharing. We are praying with you.
        </Text>
      )}
    </Box>
  );
};

export default PrayerRequest;
