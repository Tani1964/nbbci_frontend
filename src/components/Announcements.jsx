import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Announcement = () => {
  return (
    <Box 
      bg="#A8518A" 
      overflow="hidden" 
      whiteSpace="nowrap" 
      position="relative" 
      p="0" // Set padding to 0
      py="3" // Set padding to 0
      m="0" // Set margin to 0
      fontWeight="bold"
      textAlign="center"
    >
      <Box 
        as="div" 
        display="flex" // Use flex for better alignment
        alignItems="center" // Center align items
        animation="scroll 30s linear infinite"
      >
        <Text as="span" color="white" mx="1" lineHeight="1.2">|| 1-3: Let My Gate Be Opened – Continuous Praise. Psalm 34:1 – 5:30 pm daily</Text>
        <Text as="span" color="white" mx="1" lineHeight="1.2">|| 3: Church Building Dedication & Annual Thanksgiving – Testimonies of God’s Wonders. Psalm 126:3 – 9am</Text>
        <Text as="span" color="white" mx="1" lineHeight="1.2">|| 9: Alone With God – 10am</Text>
        <Text as="span" color="white" mx="1" lineHeight="1.2">|| 10: Singles & Useful Fellowship – Contact Peace – 12 Noon</Text>
        <Text as="span" color="white" mx="1" lineHeight="1.2">|| 15: Intercessory Night – Night Of Recovery. Gen 14:16 – 5:30 pm</Text>
        <Text as="span" color="white" mx="1" lineHeight="1.2">|| 16: Evangel Bi-Annual Session – @ First Baptist Church Aguda – 9am</Text>
        <Text as="span" color="white" mx="1" lineHeight="1.2">|| 17: MMU & WMU Meeting – 12noon</Text>
        <Text as="span" color="white" mx="1" lineHeight="1.2">|| 23: Radiant Couple – Contact the Coordinator – 12noon</Text>
        <Text as="span" color="white" mx="1" lineHeight="1.2">|| 24: Group Evangelism – 8:30am</Text>
        <Text as="span" color="white" mx="1" lineHeight="1.2">|| 29-30: Community Evangelism – 5:30am/8am</Text>
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
