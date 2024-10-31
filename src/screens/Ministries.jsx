import { Box, Text, VStack, Button, Collapse, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Motion component for animation
const MotionBox = motion(Box);

const ministriesData = [
  {
    title: 'Worship Ministry',
    description: 'This is the description for the Music Ministry.',
    image: 'path_to_music_ministry_image.jpg', // Add your image path here
    childrenMinistries: [
      { title: 'MEDIA', description: 'This is the description for the Choir.' },
      { title: 'DRAMA', description: 'This is the description for the Band.' },
      { title: 'MUSIC', description: 'This is the description for the Worship Team.' },
      { title: 'USHERING /PROTOCOL', description: 'This is the description for the Worship Team.' },
      { title: 'PRAISE TEAM', description: 'This is the description for the Worship Team.' },
      { title: 'PRAYER & DELIVERANCE', description: 'This is the description for the Worship Team.' },
      { title: 'COUNSELLING & FOLLOW UP', description: 'This is the description for the Worship Team.' },
    ],
  },
  {
    title: 'Missions & Outreaches',
    description: 'This is the description for the Evangelism Ministry.',
    image: 'path_to_evangelism_ministry_image.jpg', // Add your image path here
    childrenMinistries: [
      { title: 'Street Evangelism', description: 'This is the description for Street Evangelism.' },
      { title: 'Online Outreach', description: 'This is the description for Online Outreach.' },
      { title: 'Community Events', description: 'This is the description for Community Events.' },
    ],
  },
  {
    title: 'Fellowship Ministry',
    description: 'This is the description for the Discipleship Ministry.',
    image: 'path_to_discipleship_ministry_image.jpg', // Add your image path here
    childrenMinistries: [
      { title: 'Bible Study Groups', description: 'This is the description for Bible Study Groups.' },
      { title: 'Mentorship Programs', description: 'This is the description for Mentorship Programs.' },
      { title: 'Prayer Meetings', description: 'This is the description for Prayer Meetings.' },
    ],
  },
  {
    title: 'Education Ministry',
    description: 'This is the description for the Discipleship Ministry.',
    image: 'path_to_discipleship_ministry_image.jpg', // Add your image path here
    childrenMinistries: [
      { title: 'Bible Study Groups', description: 'This is the description for Bible Study Groups.' },
      { title: 'Mentorship Programs', description: 'This is the description for Mentorship Programs.' },
      { title: 'Prayer Meetings', description: 'This is the description for Prayer Meetings.' },
    ],
  },
  {
    title: 'Secretariat/Administration',
    description: 'This is the description for the Discipleship Ministry.',
    image: 'path_to_discipleship_ministry_image.jpg', // Add your image path here
    childrenMinistries: [
      { title: 'Bible Study Groups', description: 'This is the description for Bible Study Groups.' },
      { title: 'Mentorship Programs', description: 'This is the description for Mentorship Programs.' },
      { title: 'Prayer Meetings', description: 'This is the description for Prayer Meetings.' },
    ],
  },
  {
    title: 'Welfare & Services',
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

        // Use the useInView hook to detect when the ministry is in view
        const { ref, inView } = useInView({ threshold: 0.1 });

        return (
          <MotionBox
            key={index}
            ref={ref}
            mb={6}
            borderWidth={1}
            borderRadius="md"
            p={4}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <VStack align="start" spacing={2}>
              <Text fontSize="xl" fontWeight="bold">{title}</Text>
              <Text>{description}</Text>
              {/* {image && <Image src={image} alt={title} boxSize="150px" objectFit="cover" />} */}
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
