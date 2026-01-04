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
            alt="Rev. Dr. Oyerinde Adegbola"
            borderRadius="md"
            boxShadow="lg"
          />
        </Box>
        {/* Content */}
        <VStack flex="2" align="start" pl={{ md: 8 }} spacing={4}>
          <Heading fontSize="2xl" fontWeight="bold">
            Rev. Dr. Oyerinde Adegbola
          </Heading>
          <Text fontSize="lg" color="#A8518A">
            Our Pastor
          </Text>
          <MotionText
            mt={4}
            color="text.secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <b>Rev. Dr. Emmanuel Oyerinde Adegbola</b> is a trained Baptist pastor with a strong passion for discipleship and nurturing wholesome family life. He came to faith on November 30, 2007, and was baptized on March 8, 2008, at Ajegunle Baptist Church in Saki.
            <br />
            <br />
            He received his call to ministry in 2000, with a mandate rooted in Acts 26:18: “to open their eyes so that they may turn from darkness to light and from the power of Satan to God, that they may receive forgiveness of sins and a place among those who are sanctified by faith in me.” He fulfills this mission through the transformative power of God’s Word.

            <br />
            <br />
            A Pastor-Teacher with a shepherd's heart, Pst. Oyerinde is dedicated to helping people discover, develop, and deploy their God-given gifts. As a devoted worshipper, he served as the Music and Youth Minister for five years at First Baptist Church Aguda, Lagos, before joining the ministry of New Birth Baptist Church as Resident Pastor in 2011
            <br />
            <br />
            He holds a Master of Arts degree in Social Ethics from Olabisi Onabanjo University, Ago-Ìwòye, and a Doctor of Philosophy in Religious Ethics from Crowther Theological Seminary, Abeokuta.
            <br />
            <br />
            Pastor Oyerinde is happily married to Victoria Adebola Adegbola, and their union is blessed with two daughters, EriOluwa and Erimipo.
          
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
