import { Box } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import { useInView } from 'react-intersection-observer'; // Import useInView for scroll detection
import Who from '../components/Who';
import Mission from '../components/Mission';
import Connect from '../components/Connect';
import PastorateII from '../components/PastorateII';
import Deaconate from '../components/Deaconate';

// Motion component
const MotionBox = motion(Box);

// Animation settings for each component
const animationSettings = {
  initial: { opacity: 0, y: 20 }, // Initial state for animation
  animate: { opacity: 1, y: 0 },   // Animate to this state
  transition: { duration: 0.5 },     // Transition properties
};

const AboutUs = () => {
  // Create refs and inView state for each component
  const { ref: whoRef, inView: whoInView } = useInView({ threshold: 0.1 });
  const { ref: missionRef, inView: missionInView } = useInView({ threshold: 0.1 });
  const { ref: pastorateRef, inView: pastorateInView } = useInView({ threshold: 0.1 });
  const { ref: deaconateRef, inView: deaconateInView } = useInView({ threshold: 0.1 });
  const { ref: connectRef, inView: connectInView } = useInView({ threshold: 0.1 });

  return (
    <Box py={10}>
      <MotionBox 
        ref={whoRef} 
        {...animationSettings} 
        animate={whoInView ? animationSettings.animate : animationSettings.initial}
      >
        <Who />
      </MotionBox>

      <MotionBox 
        ref={missionRef} 
        {...animationSettings} 
        animate={missionInView ? animationSettings.animate : animationSettings.initial}
        transition={{ duration: 0.7 }} // Adjust duration for effect
      >
        <Mission />
      </MotionBox>

      <MotionBox 
        ref={pastorateRef} 
        {...animationSettings} 
        animate={pastorateInView ? animationSettings.animate : animationSettings.initial}
        transition={{ duration: 0.9 }} // Adjust duration for effect
      >
        <PastorateII />
      </MotionBox>

      <MotionBox 
        ref={deaconateRef} 
        {...animationSettings} 
        animate={deaconateInView ? animationSettings.animate : animationSettings.initial}
        transition={{ duration: 1.1 }} // Adjust duration for effect
      >
        <Deaconate />
      </MotionBox>

      <MotionBox 
        ref={connectRef} 
        {...animationSettings} 
        animate={connectInView ? animationSettings.animate : animationSettings.initial}
        transition={{ duration: 1.3 }} // Adjust duration for effect
      >
        <Connect />
      </MotionBox>
    </Box>
  );
};

export default AboutUs;
