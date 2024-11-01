import { Box, Flex, Heading, Image, Text, VStack, Divider } from "@chakra-ui/react";
import SecondaryImg from '../assets/457098549_923812929772750_5850151176424433790_n.png';
import PrimaryImg from '../assets/_DSC0758.png';
import { motion } from "framer-motion";

const MotionText = motion(Text);

const PastorateII = () => {
  return (
    <Box py={10} px={5} maxW="1200px" mx="auto">
      {/* Title */}
      <Box textAlign="center" mb={10}>
        <Heading fontSize="3xl" fontWeight="bold" mb={4}>
          Our Pastoral Team
        </Heading>
        <Divider
          orientation="horizontal"
          borderColor="#A8518A"
          borderWidth="2px"
          width="150px"
          mx="auto"
        />
      </Box>

      {/* Pastor Section 1 */}
      <Flex direction={{ base: "column", md: "row" }} mb={10}>
        {/* Image */}
        <Box flex="1" mb={{ base: 4, md: 0 }}>
          <Image
            src={PrimaryImg} // Replace with actual image
            alt="Rev. Oyerinde Adegbola"
            borderRadius="md"
            boxShadow="lg"
          />
        </Box>
        {/* Content */}
        <VStack flex="2" align="start" pl={{ md: 8 }} spacing={4}>
          <Heading fontSize="2xl" fontWeight="bold">
            Rev. Oyerinde Adegbola
          </Heading>
          <Text fontSize="lg" color="#A8518A">
            Senior Pastor
          </Text>
          <MotionText
            mt={4}
            color="gray.600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Rev. Oyerinde Emmanuel Adegbola serves as the Resident Pastor of New
            Birth Baptist Church, Ikorodu, Lagos State. He brings a wealth of
            experience and passion to his role, guiding the church community
            toward spiritual growth and development.
            <br />
            <br />
            Rev. Oyerinde is blessed with a loving family. He is married to Sis.
            Adebola Adegbola, and together they have two beautiful daughters.
            <br />
            <br />
            As Resident Pastor, Rev. Oyerinde provides leadership to various
            aspects of church life. He leads the Family Meeting and Church in
            Council, chairs the Pastoral Ministry and Pastorate, and oversees
            the Administration and Secretariat group. Through these roles, Rev.
            Oyerinde fosters a sense of community and ensures the smooth
            operation of church activities.
          </MotionText>
        </VStack>
      </Flex>

      {/* Pastor Section 2 */}
      {/* <Flex direction={{ base: "column", md: "row" }}> */}
        {/* Image */}
        {/* <Box flex="1" mb={{ base: 4, md: 0 }}>
          <Image
            src={SecondaryImg} // Replace with actual image
            alt="Pastor Timothy Iyanda"
            borderRadius="md"
            boxShadow="lg"
          />
        </Box> */}
        {/* Content */}
        {/* <VStack flex="2" align="start" pl={{ md: 8 }} spacing={4}>
          <Heading fontSize="2xl" fontWeight="bold">
            Pastor Timothy Iyanda
          </Heading>
          <Text fontSize="lg" color="#A8518A">
            Assistant Pastor
          </Text> */}
          {/* <Text fontSize="md" lineHeight="tall">
            Pastor Timothy Iyanda Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
            hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nulla quis imperdiet augue.
          </Text>
          <Text fontSize="md" lineHeight="tall">
            Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
            ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
          </Text>
        </VStack>
      </Flex> */}
    </Box>
  );
};

export default PastorateII;
