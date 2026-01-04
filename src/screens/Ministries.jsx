import { Box, Text, VStack, Button, Collapse, Container, Icon, Flex, Heading, Badge, useColorModeValue } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

// Motion component for animation
const MotionBox = motion(Box);
const MotionText = motion(Text);

const ministriesData = [
  {
    title: 'Worship Ministry',
    description: 'The Worship Ministry is at the heart of our church\'s spiritual life, focusing on leading the congregation into meaningful worship experiences. Through music, media, and drama, this ministry enriches our services, uplifting hearts and minds toward God.',
    image: 'path_to_worship_ministry_image.jpg',
    color: '#A8518A',
    childrenMinistries: [
      { 
        title: 'MEDIA', 
        description: 'The Media team provides vital support by managing audio-visual elements. They ensure sound quality, operate projectors for lyrics and scriptures, and handle livestreams, allowing worship to reach even those who cannot attend in person.' 
      },
      { 
        title: 'DRAMA', 
        description: 'This team brings the gospel to life through creative performances, staging plays, skits, and reenactments that highlight biblical lessons in a way that engages and resonates with all ages.' 
      },
      { 
        title: 'MUSIC', 
        description: 'The Music team leads worship songs, creating an atmosphere that helps congregants connect with God on a personal level through powerful and reverent praise.' 
      },
      { 
        title: 'USHERING / PROTOCOL', 
        description: 'This team plays a welcoming role by greeting and assisting churchgoers, helping them find seats, and ensuring that services flow smoothly with minimal distractions.' 
      },
      { 
        title: 'PRAISE TEAM', 
        description: 'Working alongside the Music team, the Praise Team energizes the congregation, leading vibrant and joyful expressions of worship that celebrate faith and community.' 
      },
      { 
        title: 'PRAYER & DELIVERANCE', 
        description: 'Dedicated to spiritual support, this team prays with and for the congregation, addressing specific needs and offering deliverance prayers as needed for healing and freedom.' 
      },
      { 
        title: 'COUNSELLING & FOLLOW UP', 
        description: 'This ministry provides emotional and spiritual guidance, reaching out to new members, offering counsel, and following up to ensure everyone feels connected and supported within the church family.' 
      },
    ],
  },
  {
    title: 'Missions & Outreaches',
    description: 'The Missions & Outreaches Ministry embodies our commitment to spreading the gospel beyond the church walls. Through local and international outreach efforts, this ministry works to bring hope and support to communities in need.',
    image: 'path_to_missions_ministry_image.jpg',
    color: '#6B46C1',
    childrenMinistries: [
      { 
        title: "MEN'S MISSIONARY UNION", 
        description: 'This group of dedicated men engages in community outreach activities, providing hands-on assistance and sharing the gospel with a focus on local needs and challenges.' 
      },
      { 
        title: "WOMEN'S MISSIONARY UNION", 
        description: 'Committed to compassionate outreach, the Women\'s Missionary Union reaches out to the community through programs aimed at women and children, offering support, guidance, and faith-based resources.' 
      },
      { 
        title: 'PREACHING STATIONS', 
        description: 'These small preaching stations are established in local areas to bring consistent spiritual support to neighborhoods, often in places with limited access to churches.' 
      },
      { 
        title: 'EVANGELISM TEAM', 
        description: 'The Evangelism Team actively shares the gospel through organized street evangelism, door-to-door outreach, and community events that invite people to learn about and experience God\'s love.' 
      },
    ],
  },
  {
    title: 'Fellowship Ministry',
    description: 'The Fellowship Ministry focuses on fostering relationships and spiritual growth among members. Through age- and life-stage-based groups, this ministry builds a supportive and faith-filled community.\n',
    image: 'path_to_fellowship_ministry_image.jpg',
    color: '#2C7A7B',
    childrenMinistries: [
      { 
        title: 'CHILDREN CHURCH', 
        description: 'An engaging and safe environment where young children learn biblical stories, moral values, and experience faith in ways they can understand and apply.' 
      },
      { 
        title: 'TEENS FELLOWSHIP', 
        description: 'This group caters to teenagers, providing them with a community where they can explore their faith, ask questions, and find guidance through Bible studies, mentorship, and social events.' 
      },
      { 
        title: 'YOUTH FELLOWSHIP', 
        description: 'Aimed at young adults, this fellowship focuses on building strong friendships, personal growth, and a deeper understanding of faith through discussions, events, and volunteer activities.' 
      },
      { 
        title: "SINGLE'S FELLOWSHIP", 
        description: 'Provides support and community for single adults, helping them grow spiritually, build friendships, and find encouragement in their faith journey.' 
      },
      { 
        title: "COUPLE'S FELLOWSHIP", 
        description: 'This group supports married couples, offering resources for relationship building, family guidance, and faith-centered activities to strengthen marriages.' 
      },
      { 
        title: "HOME FELLOWSHIP", 
        description: 'A network of small groups that meet in homes, fostering a close-knit community where members share meals, discuss faith, and support each other.' 
      },
    ],
  },
  {
    title: 'Education Ministry',
    description: 'The Education Ministry is dedicated to providing structured spiritual education and training to deepen members\' knowledge of the Bible and strengthen their faith.',
    image: 'path_to_education_ministry_image.jpg',
    color: '#C05621',
    childrenMinistries: [
      { 
        title: 'SUNDAY SCHOOL', 
        description: 'Weekly classes for all ages, teaching foundational biblical truths and helping members understand and apply scripture to daily life.' 
      },
      { 
        title: 'BAPTISMAL CLASS', 
        description: 'Prepares new believers for baptism through foundational teachings on faith, commitment, and the meaning of baptism as an important step in their spiritual journey.' 
      },
      { 
        title: 'DISCIPLESHIP', 
        description: 'A structured program designed to nurture and mentor new believers, helping them grow in faith and become active, mature members of the church community.' 
      },
    ],
  },
  {
    title: 'Secretariat/Administration',
    description: 'The Secretariat/Administration Ministry handles the organizational and operational needs of the church, ensuring efficient and transparent management of resources, people, and policies.',
    image: 'path_to_secretariat_ministry_image.jpg',
    color: '#2D3748',
    childrenMinistries: [
      { 
        title: 'FINANCE', 
        description: 'Manages all financial aspects of the church, including donations, expenses, and budget planning, to ensure financial transparency and accountability.' 
      },
      { 
        title: 'AUDIT', 
        description: 'Conducts regular financial audits to ensure proper use of church funds and adherence to financial policies, promoting integrity in all transactions.' 
      },
      { 
        title: 'MEMBERSHIP', 
        description: 'Maintains accurate records of the church membership and assists with member engagement initiatives to foster a sense of belonging.' 
      },
      { 
        title: 'SECRETARIAT', 
        description: 'Handles administrative tasks, including church communications, record-keeping, and supporting the smooth running of church events and meetings.' 
      },
      { 
        title: 'ASSET MANAGEMENT', 
        description: 'Oversees church property, equipment, and resources, ensuring that assets are well-maintained and responsibly utilized.' 
      },
      { 
        title: 'EMPOWERMENT', 
        description: 'Organizes programs to empower church members with skills, resources, and support, promoting self-sufficiency and community development.' 
      },
      { 
        title: 'LEGAL', 
        description: 'Advises the church on legal matters, ensuring compliance with relevant laws and protecting the church\'s interests.' 
      },
      { 
        title: 'HISTORY & LITERATURE', 
        description: 'Preserves the church\'s history and manages literature resources, documenting events, milestones, and teachings for current and future generations.' 
      },
      { 
        title: 'PERSONNEL', 
        description: 'Responsible for recruiting, training, and managing church staff and volunteers, fostering a supportive and productive work environment.' 
      },
    ],
  },
  {
    title: 'Welfare & Services',
    description: 'The Welfare & Services Ministry is dedicated to caring for the practical needs of members and the wider community, providing support in areas such as health, security, and general welfare.',
    image: 'path_to_welfare_ministry_image.jpg',
    color: '#38A169',
    childrenMinistries: [
      { 
        title: 'MEDICAL', 
        description: 'Offers medical assistance and health-related support, organizing health clinics, and providing care for members and the community in times of need.' 
      },
      { 
        title: 'VISITATION', 
        description: 'Ensures that members who are sick, elderly, or homebound receive visits, support, and encouragement from the church community.' 
      },
      { 
        title: 'SECURITY', 
        description: 'Responsible for maintaining a safe and secure environment during church services and events, ensuring the safety of all attendees.       ' 
      },
      { 
        title: 'CARE & WELFARE', 
        description: 'Provides food, clothing, and financial assistance to members and those in the community who are experiencing hardship, promoting a spirit of compassion and support.' 
      },
      { 
        title: 'MAINTENANCE', 
        description: 'Oversees the upkeep of church facilities, ensuring that all spaces are clean, functional, and welcoming for all who use them.' 
      },
    ],
  },
];

const Ministries = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { ref: heroRef, inView: heroInView } = useInView({ 
    threshold: 0.1,
    triggerOnce: true 
  });

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} minH="100vh">
      {/* Hero Section */}
      <Box
        ref={heroRef}
        bgGradient="linear(to-br, #A8518A, #6B46C1)"
        color="white"
        py={{ base: 16, md: 24 }}
        px={{ base: 4, md: 8 }}
        position="relative"
        overflow="hidden"
      >
        {/* Decorative Background Elements */}
        <Box
          position="absolute"
          top="-10%"
          right="-5%"
          width="300px"
          height="300px"
          borderRadius="full"
          bg="whiteAlpha.100"
          filter="blur(60px)"
        />
        <Box
          position="absolute"
          bottom="-10%"
          left="-5%"
          width="250px"
          height="250px"
          borderRadius="full"
          bg="whiteAlpha.100"
          filter="blur(60px)"
        />
        
        <Container maxW="container.xl" position="relative" zIndex={1}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            textAlign="center"
          >
            <Badge
              colorScheme="purple"
              bg="whiteAlpha.200"
              color="white"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="600"
              mb={4}
              backdropFilter="blur(10px)"
            >
              Serve With Us
            </Badge>
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
              fontWeight="800"
              mb={6}
              letterSpacing="tight"
            >
              Our Ministries
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              maxW="3xl"
              mx="auto"
              lineHeight="1.8"
              opacity={0.95}
            >
              Discover how you can serve and grow in faith through our diverse ministries. 
              Each ministry is dedicated to building God's kingdom and nurturing His people.
            </Text>
          </MotionBox>
        </Container>
      </Box>

      {/* Ministries Grid */}
      <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
        <Box className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {ministriesData.map((ministry, index) => {
          const { title, description, childrenMinistries, color } = ministry;
          const isOpen = openIndex === index;

          const { ref, inView } = useInView({ 
            threshold: 0.1,
            triggerOnce: true 
          });

          return (
            <MotionBox
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              bg="white"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="md"
              border="1px"
              borderColor="gray.100"
              _hover={{ 
                boxShadow: '2xl',
                transform: 'translateY(-8px)',
                borderColor: color,
                transition: 'all 0.4s ease'
              }}
              transition="all 0.4s ease"
              // h="fit-content"
              h="100%"
            >
              {/* Header Section with Gradient */}
              <Box
                bgGradient={`linear(135deg, ${color} 0%, ${color}CC 100%)`}
                p={8}
                color="white"
                position="relative"
                overflow="hidden"
              >
                {/* Decorative corner element */}
                <Box
                  position="absolute"
                  top="-20px"
                  right="-20px"
                  width="100px"
                  height="100px"
                  borderRadius="full"
                  bg="whiteAlpha.200"
                  filter="blur(30px)"
                />
                
                <Flex align="center" justify="space-between" mb={3} position="relative">
                  <Badge
                    bg="whiteAlpha.300"
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="md"
                    fontSize="xs"
                    fontWeight="600"
                    backdropFilter="blur(10px)"
                  >
                    Ministry {index + 1}
                  </Badge>
                  <Box
                    w="8px"
                    h="8px"
                    borderRadius="full"
                    bg="white"
                    boxShadow="0 0 20px rgba(255,255,255,0.6)"
                  />
                </Flex>
                
                <Text fontSize="2xl" fontWeight="800" lineHeight="1.3" position="relative">
                  {title}
                </Text>
              </Box>

              {/* Content Section */}
              <VStack align="stretch" spacing={0} className="justify-between" >
                <Box p={7}>
                  <Text color="gray.700" lineHeight="1.8" fontSize="md">
                    {description}
                  </Text>
                </Box>

                {/* Sub-ministries count badge */}
                {childrenMinistries && childrenMinistries.length > 0 && (
                  <Flex 
                    px={7} 
                    pb={4} 
                    align="center" 
                    gap={2}
                  >
                    <Box
                      w="6px"
                      h="6px"
                      borderRadius="full"
                      bg={color}
                    />
                    <Text fontSize="sm" color="gray.600" fontWeight="600">
                      {childrenMinistries.length} Sub-Ministries
                    </Text>
                  </Flex>
                )}

                {/* Toggle Button */}
                <Button
                  onClick={() => handleToggle(index)}
                  bg={isOpen ? `${color}` : 'gray.50'}
                  color={isOpen ? 'white' : color}
                  _hover={{ 
                    bg: isOpen ? `${color}DD` : `${color}15`,
                    transform: 'none'
                  }}
                  _active={{ 
                    bg: `${color}CC` 
                  }}
                  borderRadius="none"
                  h="60px"
                  rightIcon={isOpen ? <ChevronUpIcon boxSize={6} /> : <ChevronDownIcon boxSize={6} />}
                  fontWeight="700"
                  fontSize="md"
                  transition="all 0.3s ease"
                  borderTop="1px"
                  borderColor="gray.200"
                  letterSpacing="wide"
                >
                  {isOpen ? 'Hide Details' : 'Explore Sub-Ministries'}
                </Button>

                {/* Collapsible Content */}
                <Collapse in={isOpen} animateOpacity>
                  <Box 
                    bgGradient={`linear(to-b, ${color}05, ${color}10)`}
                    borderTop="2px" 
                    borderColor={color}
                  >
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <VStack align="stretch" spacing={0}>
                            {childrenMinistries.map((child, childIndex) => (
                              <motion.div
                                key={childIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                  duration: 0.4, 
                                  delay: childIndex * 0.05 
                                }}
                              >
                                <Box 
                                  p={6}
                                  borderBottom={childIndex < childrenMinistries.length - 1 ? '1px' : 'none'}
                                  borderColor="gray.200"
                                  _hover={{ 
                                    bg: 'white',
                                    borderLeft: '4px solid',
                                    borderColor: color,
                                    pl: '22px',
                                    transition: 'all 0.3s ease'
                                  }}
                                  transition="all 0.3s ease"
                                  position="relative"
                                >
                                  {/* Decorative number */}
                                  <Box
                                    position="absolute"
                                    top={4}
                                    right={4}
                                    w="32px"
                                    h="32px"
                                    borderRadius="md"
                                    bg={`${color}15`}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    fontWeight="800"
                                    fontSize="xs"
                                    color={color}
                                  >
                                    {childIndex + 1}
                                  </Box>
                                  
                                  <Flex align="center" mb={3}>
                                    <Box
                                      w="4px"
                                      h="24px"
                                      bg={color}
                                      mr={3}
                                      borderRadius="full"
                                    />
                                    <Text 
                                      fontWeight="800" 
                                      fontSize="sm"
                                      color={color}
                                      letterSpacing="wider"
                                      textTransform="uppercase"
                                    >
                                      {child.title}
                                    </Text>
                                  </Flex>
                                  <Text 
                                    color="gray.700" 
                                    fontSize="sm"
                                    lineHeight="1.7"
                                    pl={7}
                                    mt={8}
                                  >
                                    {child.description}
                                  </Text>
                                </Box>
                              </motion.div>
                            ))}
                          </VStack>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Box>
                </Collapse>
              </VStack>
            </MotionBox>
          );
        })}
      </Box>
    </Container>
    </Box>
  );
};

export default Ministries;