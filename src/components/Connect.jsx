import {
    Box,
    Flex,
    Icon,
    Link,
    Text,
} from "@chakra-ui/react";
import { FaBroadcastTower, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiGmail, SiWhatsapp } from "react-icons/si";

const Connect = () => {
  return (
    <Flex flexDirection={'column'} alignItems={'center'} textAlign="center" py={10}>
      <Text fontSize="2xl" fontWeight="bold">
        Connect with us
      </Text>
      <Text fontSize="md" color="gray.500" mb={6}>
        Join the Christian train, don't get left out
      </Text>
      <Flex maxWidth={'50vw'} justify="center" gap={8} wrap="wrap">
        {/* Facebook */}
        <Link href="https://facebook.com/nbbcil" isExternal>
          <Flex direction="row" align="center" gap={4} alignItems={'center'}>
            <Icon as={FaFacebook} boxSize={8} color="blue.600" />
            <Text mt={2}>nbbcil</Text>
          </Flex>
        </Link>

        {/* WhatsApp */}
        <Link href="tel:+2348081494141 ">
          <Flex direction="row" align="center" gap={4} alignItems={'center'}>
            <Icon as={SiWhatsapp} boxSize={8} color="green.500" />
            <Text mt={2}>+234 808 149 4141 </Text>
          </Flex>
        </Link>

        {/* Instagram */}
        <Link href="https://instagram.com/nbbcil" isExternal>
          <Flex direction="row" align="center" gap={4} alignItems={'center'}>
            <Icon as={FaInstagram} boxSize={8} color="#A8518A" />
            <Text mt={2}>nbbcil</Text>
          </Flex>
        </Link>

        {/* Gmail */}
        <Link href="mailto:newbbcil@gmail.com">
          <Flex direction="row" align="center" gap={4} alignItems={'center'}>
            <Icon as={SiGmail} boxSize={8} color="red.500" />
            <Text mt={2}>newbbcil@gmail.com</Text>
          </Flex>
        </Link>

        {/* MixLR - Using a placeholder icon */}
        <Link href="https://mixlr.com/nbbcil" isExternal>
          <Flex direction="row" align="center" gap={4} alignItems={'center'}>
            <Icon as={FaBroadcastTower} boxSize={8} color="red.400" />
            <Text mt={2}>MixLR</Text>
          </Flex>
        </Link>

        {/* YouTube */}
        <Link href="http://www.youtube.com/@newbirthbaptistchurchikoro7592" isExternal>
          <Flex direction="row" align="center" gap={4} alignItems={'center'}>
            <Icon as={FaYoutube} boxSize={8} color="red.600" />
            <Text mt={2}>YouTube</Text>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Connect;
