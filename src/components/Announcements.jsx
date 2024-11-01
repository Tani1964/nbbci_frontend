import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Announcement = () => {
  return (
    <Box 
      bg="#A8518A" 
      overflow="hidden" 
      whiteSpace="nowrap" 
      position="relative" 
      p="2"
      fontWeight="bold"
      textAlign="center"
    >
      <Box 
        as="div" 
        display="inline-block" 
        animation="scroll 30s linear infinite"
      >
        <Text as="span" color="white" mx="1">1-3: Let My Gate Be Opened – Continuous Praise. Psalm 34:1 – 5:30 pm daily</Text>
        <Text as="span" color="white" mx="1">3: Church Building Dedication & Annual Thanksgiving – Testimonies of God’s Wonders. Psalm 126:3 – 9am</Text>
        <Text as="span" color="white" mx="1">9: Alone With God – 10am</Text>
        <Text as="span" color="white" mx="1">10: Singles & Useful Fellowship – Contact Peace – 12 Noon</Text>
        <Text as="span" color="white" mx="1">15: Intercessory Night – Night Of Recovery. Gen 14:16 – 5:30 pm</Text>
        <Text as="span" color="white" mx="1">16: Evangel Bi-Annual Session – @ First Baptist Church Aguda – 9am</Text>
        <Text as="span" color="white" mx="1">17: MMU & WMU Meeting – 12noon</Text>
        <Text as="span" color="white" mx="1">23: Radiant Couple – Contact the Coordinator – 12noon</Text>
        <Text as="span" color="white" mx="1">24: Group Evangelism – 8:30am</Text>
        <Text as="span" color="white" mx="1">29-30: Community Evangelism – 5:30am/8am</Text>
      </Box>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </Box>
  );
};

export default Announcement;
