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
        <Text as="span" color="white" mx="1" lineHeight="1.2">|| Cross Over Night - Tuesday 31st Dec. - 10:00pm - Theme: Strategic crossing </Text>
        <Text as="span" color="white" mx="1" lineHeight="1.2">|| Christmas Service - 25th Dec. - 08:30am - What Are You Seeking? - Text: Matthew 2:2 </Text>
        <Text as="span" color="white" mx="1" lineHeight="1.2">|| Christmas Carol - Sunday 22nd Dec. 08:30am </Text>
        <Text as="span" color="white" mx="1" lineHeight="1.2">|| Family Meeting - 15th Dec. 08:30am </Text>
        <Text as="span" color="white" mx="1" lineHeight="1.2">|| Unveil 2025 (Fasting and Prayer) - 8th - 14th Dec. 05:30pm - Theme: Lift Up Your Heads - Text: Psalm 24:7 </Text>
        <Text as="span" color="white" mx="1" lineHeight="1.2">|| Singles & Useful Fellowship - 8th Dec. - 12 noon </Text>
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
