import { 
  Box, 
  Image, 
  VStack 
} from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import framer-motion
import Banner from "../assets/banner.png";
import Announcements from "../components/Announcements";
import Who from "../components/Who";
import Connect from "../components/Connect";
import PastorateI from "../components/PastorateI";
import Upcoming from "../components/Upcoming";
import Story from "../components/Story";
import Accounts from "../components/Accounts";
import Contact from "../components/Contact";
import Help from "../components/Help";
import Bulletin from "../components/Bulletin"

// Motion components
const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionVStack = motion(VStack);

const animationSettings = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 }, // Triggers only once when 30% of the component is in view
  transition: { duration: 0.8, ease: "easeOut" },
};

const Home = () => {
  return (
    <Box className="flex flex-col gap-10">
      {/* Fade-in Image Animation */}
      <MotionImage
      width={'100vw'}
        src={Banner}
        {...animationSettings} // Spread animation settings for reusability
      />

      {/* Announcements Section */}
      <MotionBox {...animationSettings}>
        <Announcements/>
      </MotionBox>

      {/* Who Section */}
      <MotionBox {...animationSettings}>
        <Who />
      </MotionBox>

      {/* Connect Section */}
      <MotionBox
        {...animationSettings}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <Connect />
      </MotionBox>

      {/* PastorateI Section */}
      <MotionBox {...animationSettings}>
        <PastorateI />
      </MotionBox>

       <MotionBox {...animationSettings} className={'max-h-[60vh]'}>
        <Bulletin />
      </MotionBox>

      {/* Swipe-in Left for Upcoming Section */}
      <MotionBox
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Upcoming />
      </MotionBox>

      {/* Story Section with Fade-In */}
      <MotionVStack {...animationSettings}>
        <Story />
      </MotionVStack>

      {/* Accounts Section */}
      <MotionBox {...animationSettings}>
        <Accounts />
      </MotionBox>

      {/* Contact Section */}
      <MotionBox {...animationSettings}>
        <Contact />
      </MotionBox>

      {/* Help Section */}
      <MotionBox {...animationSettings}>
        <Help />
      </MotionBox>
    </Box>
  );
};

export default Home;
