import { Box, Flex, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box bg="gray.800" color="gray.300" py={4} >
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" textAlign="center" fontSize="sm">
        <Text mr={{ base: 0, md: 8 }} mb={{ base: 2, md: 0 }}>
          5, Oloteru Street, Haruna Bus-stop, Lagos, Nigeria
        </Text>
        <Text mr={{ base: 0, md: 8 }} mb={{ base: 2, md: 0 }}>
          Phone: +234 808 149 4141 or +234 906 802 2226 
        </Text>
        <Text>
          Email: <Link href="mailto:newbbci@gmail.com" color="gray.100">newbbci@gmail.com</Link>
        </Text>
      </Flex>
      <Text textAlign="center" mt={4}>
        &copy; {currentYear} New Birth Baptist Church, Ikorodu, Lagos State.
      </Text>
      <Text textAlign="center" mt={4} color={'gray.500'}>
        Developed by RunIt Technologies
      </Text>
    </Box>
  );
}
