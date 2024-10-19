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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
            quaerat accusantium esse commodi similique itaque? Illum fugiat, qui
            accusamus expedita facere autem. Sint voluptas eius doloribus
            quisquam molestiae omnis culpa. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consequatur tempora eveniet quisquam
            voluptatum quia at neque vel aperiam architecto. Vel, nihil hic id
            minus at inventore eum. Illum, aliquid ad.
          </Text>
        </Box>
      </Flex>
  )
}

export default Who