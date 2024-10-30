import { Box, Text, VStack, Button, Collapse, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Motion component for animation
const MotionBox = motion(Box);

const ministriesData = [
  {
    title: 'Music Ministry',
    description: 'This is the description for the Music Ministry.',
    image: 'path_to_music_ministry_image.jpg', // Add your image path here
    childrenMinistries: [
      { title: 'Choir', description: 'This is the description for the Choir.' },
      { title: 'Band', description: 'This is the description for the Band.' },
      { title: 'Worship Team', description: 'This is the description for the Worship Team.' },
    ],
  },
  {
    title: 'Evangelism Ministry',
    description: 'This is the description for the Evangelism Ministry.',
    image: 'path_to_evangelism_ministry_image.jpg', // Add your image path here
    childrenMinistries: [
      { title: 'Street Evangelism', description: 'This is the description for Street Evangelism.' },
      { title: 'Online Outreach', description: 'This is the description for Online Outreach.' },
      { title: 'Community Events', description: 'This is the description for Community Events.' },
    ],
  },
  {
    title: 'Discipleship Ministry',
    description: 'This is the description for the Discipleship Ministry.',
    image: 'path_to_discipleship_ministry_image.jpg', // Add your image path here
    childrenMinistries: [
      { title: 'Bible Study Groups', description: 'This is the description for Bible Study Groups.' },
      { title: 'Mentorship Programs', description: 'This is the description for Mentorship Programs.' },
      { title: 'Prayer Meetings', description: 'This is the description for Prayer Meetings.' },
    ],
  },
  // Add more ministries as needed
];

const Ministries = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box py={10}>
      {ministriesData.map((ministry, index) => {
        const { title, description, image, childrenMinistries } = ministry;
        const isOpen = openIndex === index;

        return (
          <MotionBox key={index} mb={6} borderWidth={1} borderRadius="md" p={4}>
            <VStack align="start" spacing={2}>
              <Text fontSize="xl" fontWeight="bold">{title}</Text>
              <Text>{description}</Text>
              {image && <Image src={image} alt={title} boxSize="150px" objectFit="cover" />}
              <Button
                onClick={() => handleToggle(index)}
                variant="outline"
                width="100%"
                textAlign="left"
                borderRadius="md"
                colorScheme="#A8518A;"
              >
                {isOpen ? 'Hide Details' : 'View Details'}
              </Button>
              <Collapse in={isOpen}>
                <Box pl={4} mt={2}>
                  {childrenMinistries.map((child, childIndex) => (
                    <Box key={childIndex} pl={4} mt={2}>
                      <Text fontWeight="semibold">{child.title}</Text>
                      <Text>{child.description}</Text>
                    </Box>
                  ))}
                </Box>
              </Collapse>
            </VStack>
          </MotionBox>
        );
      })}
    </Box>
  );
};

export default Ministries;
