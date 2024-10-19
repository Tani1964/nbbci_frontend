import {
  Box,
  Grid,
  Heading,
  Image,
} from '@chakra-ui/react';

const Story = () => {
  const images = [
    // Replace these URLs with your actual image URLs
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ];

  return (
    <Box textAlign="center" p={5}>
      <Heading mb={5}>Our Stories In Pictures</Heading>
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={6}
      >
        {images.map((src, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={src} alt={`Story ${index + 1}`} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Story