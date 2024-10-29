import {
    Box,
    Flex,
    Heading,
    Image,
    Text,
  } from "@chakra-ui/react";
  import Cong from "../assets/417508389_810293604458017_6989036223118530371_n (1).png";

const Who = () => {
  return (
    <Flex>
        <Image src={Cong} width={"60vw"} height={"90vh"} />
        <Box bgColor={"#F4F7FA"} p={20}>
          <Heading mb={10}>Who are we...</Heading>
          <Text>
          Welcome to New Birth Baptist Church (NBBC) Ikorodu, a vibrant community of believers passionate about raising fruitful disciples for Christ. Our slogan, "Raising Fruitful Disciples" (John 15:16), embodies our commitment to nurturing followers of Jesus who bear lasting fruit.


          </Text>
        </Box>
      </Flex>
  )
}

export default Who