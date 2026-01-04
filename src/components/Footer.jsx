import { Box, Flex, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      bg="bg.surface" 
      color="text.secondary" 
      py={4}
      borderTop="1px"
      borderColor="border.subtle"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        textAlign={{ base: "center", md: "left" }}
        fontSize="sm"
        wrap="wrap"
        spacing={4}
      >
        <Text mb={{ base: 2, md: 0 }} mr={{ base: 0, md: 8 }}>
          5, Olateru Street, Haruna Bus-stop, Lagos, Nigeria
        </Text>
        <Text mb={{ base: 2, md: 0 }} mr={{ base: 0, md: 8 }}>
          Phone: +234 808 149 4141 or +234 906 802 2226
        </Text>
        <Text>
          Email: <Link href="mailto:newbbci@gmail.com" color="purple.600">newbbci@gmail.com</Link>
        </Text>
      </Flex>
      <Text textAlign="center" mt={4}>
        &copy; {currentYear} New Birth Baptist Church, Ikorodu, Lagos State.
      </Text>
    </Box>
  );
}
