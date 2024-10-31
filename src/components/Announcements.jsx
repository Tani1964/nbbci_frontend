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
        <Text as="span" color="white" mx="1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit animi voluptatum rem quasi quam, quis, accusantium totam officia iure fugiat et, unde earum ex! Hic adipisci assumenda deleniti quaerat labore!</Text>
        <Text as="span" color="white" mx="1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit animi voluptatum rem quasi quam, quis, accusantium totam officia iure fugiat et, unde earum ex! Hic adipisci assumenda deleniti quaerat labore!</Text>
        <Text as="span" color="white" mx="1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit animi voluptatum rem quasi quam, quis, accusantium totam officia iure fugiat et, unde earum ex! Hic adipisci assumenda deleniti quaerat labore!</Text>
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
