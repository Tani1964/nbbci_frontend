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
        <Text as="span" color="white" mx="1" lineHeight="1.2">Loading... </Text>
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
