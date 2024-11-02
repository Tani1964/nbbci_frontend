import { Box, Flex, Image, Text, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

// Ensure that the image imports are correctly resolved
import PrimaryImg from "../assets/Frame 22.png"; // Ensure correct image path
import SecondaryImg from "../assets/Frame 221.png";

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);
const MotionText = motion(Text);

const PastorateI = () => {
  return (
    <Box py={10} px={20} textAlign="center">
      <MotionText
        fontSize="3xl"
        fontWeight="bold"
        mb={8}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Pastorate
      </MotionText>

      {/* First Pastor Block */}
      <MotionFlex
        direction={{ base: "column", md: "row" }}
        mb={12}
        align="center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Image Section */}
        <Stack
          direction="row"
          spacing={4}
          flex={1}
          justify="center"
          align="center"
        >
          <MotionImage
            src={PrimaryImg}
            alt="Our Pastor"
            borderRadius="lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </Stack>

        {/* Text Section */}
        <Box flex={1} textAlign={"left"} p={5}>
          <MotionText
            fontSize="2xl"
            fontWeight="bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Rev. Dr. Oyerinde Adegbogla
          </MotionText>
          <MotionText
            fontSize="lg"
            color="#A8518A"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Pastor
          </MotionText>
          <MotionText
            mt={4}
            color="gray.600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Rev. Dr. Emmanuel Oyerinde Adegbola is a trained Baptist pastor with a strong passion for discipleship and nurturing wholesome family life. He came to faith on November 30, 2007, and was baptized on March 8, 2008, at Ajegunle Baptist Church in Saki.
            <br />
            <br />
            Dr. Adegbola received his call to ministry in 2000, with a mandate rooted in Acts 26:18: “to open their eyes so that they may turn from darkness to light and from the power of Satan to God, that they may receive forgiveness of sins and a place among those who are sanctified by faith in me.” He fulfills this mission through the transformative power of God’s Word.

            <br />
            <br />
            A Pastor-Teacher with a shepherd's heart, Dr. Adegbola is dedicated to helping people discover, develop, and deploy their God-given gifts. As a devoted worshipper, he served as the Music and Youth Minister for five years at First Baptist Church Aguda, Lagos, before joining the ministry of New Birth Baptist Church as Resident Pastor in 2011
            <br />
            <br />
            Dr. Adegbola holds a Master of Arts degree in Social Ethics from Olabisi Onabanjo University, Ago-Ìwòye, and a Doctor of Philosophy in Religious Ethics from Crowther Theological Seminary, Abeokuta.
            <br />
            <br />
            He is happily married to Victoria Adebola Adegbola, and their union is blessed with two daughters, EriOluwa and Erimipo.
          </MotionText>
        </Box>
      </MotionFlex>

      {/* Second Pastor Block */}
      {/* <MotionFlex
        direction={{ base: "column", md: "row" }} // Keep the direction as row for alignment
        mb={12}
        align="center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      > */}
      {/* Text Section (now before the Image Section) */}
      {/* <Box flex={1} textAlign={"left"} p={5}>
          <MotionText fontSize="2xl" fontWeight="bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            Pastor Timothy Iyanda
          </MotionText>
          <MotionText fontSize="lg" color="#A8518A" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            Assistant Pastor
          </MotionText>
          <MotionText mt={4} color="gray.600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultricies lorem.
          </MotionText>
        </Box> */}

      {/* Image Section (now after the Text Section) */}
      {/* <Stack direction="row" spacing={4} flex={1} justify="center" align="center">
          <MotionImage src={SecondaryImg} alt="Assistant Pastor" borderRadius="lg" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} />
        </Stack>
      </MotionFlex> */}
    </Box>
  );
};

export default PastorateI;
