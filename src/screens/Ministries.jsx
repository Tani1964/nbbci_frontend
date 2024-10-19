import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MusicMinistry from '../components/MusicMinistry';
import EnvagelismMinistry from "../components/EnvagelismMinistry";
import HomeFellowship from "../components/HomeFellowship";
import MMU from '../components/MMU';
import WMU from '../components/WMU';
import Teens from '../components/Teens';
import Baptismal from '../components/Baptismal';
import Disciple from '../components/Disciple';
import Youths from '../components/Youths';
import SundaySchool from '../components/SundaySchool';

// Motion component for animation
const MotionBox = motion(Box);

const Ministries = () => {
  const animationSettings = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  // Create refs and inView state for each ministry component
  const { ref: musicRef, inView: musicInView } = useInView({ threshold: 0.1 });
  const { ref: evangelismRef, inView: evangelismInView } = useInView({ threshold: 0.1 });
  const { ref: sundaySchoolRef, inView: sundaySchoolInView } = useInView({ threshold: 0.1 });
  const { ref: homeFellowshipRef, inView: homeFellowshipInView } = useInView({ threshold: 0.1 });
  const { ref: baptismalRef, inView: baptismalInView } = useInView({ threshold: 0.1 });
  const { ref: discipleRef, inView: discipleInView } = useInView({ threshold: 0.1 });
  const { ref: teensRef, inView: teensInView } = useInView({ threshold: 0.1 });
  const { ref: youthsRef, inView: youthsInView } = useInView({ threshold: 0.1 });
  const { ref: wmuRef, inView: wmuInView } = useInView({ threshold: 0.1 });
  const { ref: mmuRef, inView: mmuInView } = useInView({ threshold: 0.1 });

  return (
    <Box py={10}>
      <MotionBox 
        ref={musicRef} 
        {...animationSettings} 
        animate={musicInView ? animationSettings.animate : animationSettings.initial}
      >
        <MusicMinistry />
      </MotionBox>
      
      <MotionBox 
        ref={evangelismRef} 
        {...animationSettings} 
        animate={evangelismInView ? animationSettings.animate : animationSettings.initial}
      >
        <EnvagelismMinistry />
      </MotionBox>
      
      <MotionBox 
        ref={sundaySchoolRef} 
        {...animationSettings} 
        animate={sundaySchoolInView ? animationSettings.animate : animationSettings.initial}
      >
        <SundaySchool />
      </MotionBox>
      
      <MotionBox 
        ref={homeFellowshipRef} 
        {...animationSettings} 
        animate={homeFellowshipInView ? animationSettings.animate : animationSettings.initial}
      >
        <HomeFellowship />
      </MotionBox>
      
      <MotionBox 
        ref={baptismalRef} 
        {...animationSettings} 
        animate={baptismalInView ? animationSettings.animate : animationSettings.initial}
      >
        <Baptismal />
      </MotionBox>
      
      <MotionBox 
        ref={discipleRef} 
        {...animationSettings} 
        animate={discipleInView ? animationSettings.animate : animationSettings.initial}
      >
        <Disciple />
      </MotionBox>
      
      <MotionBox 
        ref={teensRef} 
        {...animationSettings} 
        animate={teensInView ? animationSettings.animate : animationSettings.initial}
      >
        <Teens />
      </MotionBox>
      
      <MotionBox 
        ref={youthsRef} 
        {...animationSettings} 
        animate={youthsInView ? animationSettings.animate : animationSettings.initial}
      >
        <Youths />
      </MotionBox>
      
      <MotionBox 
        ref={wmuRef} 
        {...animationSettings} 
        animate={wmuInView ? animationSettings.animate : animationSettings.initial}
      >
        <WMU />
      </MotionBox>
      
      <MotionBox 
        ref={mmuRef} 
        {...animationSettings} 
        animate={mmuInView ? animationSettings.animate : animationSettings.initial}
      >
        <MMU />
      </MotionBox>
    </Box>
  );
};

export default Ministries;
