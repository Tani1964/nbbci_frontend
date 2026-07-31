import { ArrowBackIcon, ArrowForwardIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Img1 from "../assets/bulletin/img1.jpeg";
import Img2 from "../assets/bulletin/img2.jpeg";
import Img3 from "../assets/bulletin/img3.jpeg";
import Img4 from "../assets/bulletin/img4.jpeg";
import Img5 from "../assets/bulletin/img5.jpeg";
import Img6 from "../assets/bulletin/img6.jpeg";

function Bulletin() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Color mode values for light/dark theme support
  const bgColor = "bg.surface";
  const arrowBg = "bg.emphasized";
  const arrowHoverBg = "border.emphasized";

const bulletinData = [
  {
    image: Img1,
    title: "Pre-Worship Encounter",
    description:
      "Begin each Sunday by seeking God together in prayer and expectation before worship service.",
    date: "Every Sunday, August 2026 | 8:00 AM - 8:30 AM | Church Auditorium",
  },

  {
    image: Img2,
    title: "Sunday School",
    description:
      "Grow deeper in God's Word through interactive Bible study designed for practical life transformation.",
    date: "Every Sunday, August 2026 | 8:30 AM - 9:30 AM | Church Auditorium",
  },

  {
    image: Img3,
    title: "Worship Service",
    description:
      "Join us for heartfelt worship, the Word, and rich fellowship in God's presence.",
    date: "Every Sunday, August 2026 | 9:30 AM - 11:30 AM | Church Auditorium",
  },

  {
    image: Img4,
    title: "Dew of Hermon - Early Morning Prayer",
    description:
      "Start your week in God's presence and power through focused early morning prayer.",
    date: "Every Monday, August 2026 | 6:00 AM - 6:30 AM | Virtual",
  },

  {
    image: Img5,
    title: "Business Men & Women Fellowship - Prayer Session",
    description:
      "Commit your work and business unto the Lord in prayer and seek divine direction for the marketplace.",
    date: "Every Tuesday, August 2026 | 5:00 AM - 6:00 AM | Virtual",
  },

  {
    image: Img6,
    title: "Midweek Service and Choir Rehearsal",
    description:
      "Midweek Service every Wednesday at 5:30 PM and Choir Rehearsal every Saturday at 12:00 Noon at the Church Auditorium.",
    date: "Weekly, August 2026 | Church Auditorium",
  },

  {
    image: Img1,
    title: "Let My Gate Be Opened",
    description:
      "Theme: More Space (Isaiah 49:20) - Enter into God's divine enlargement and breakthrough.",
    date: "August 1-3, 2026 | Aug 1 (12 Noon), Aug 2 (Home Fellowships), Aug 3 (5:30 PM)",
  },

  {
    image: Img2,
    title: "Monthly Thanksgiving Service",
    description:
      "Celebrate God's faithfulness with grateful hearts in worship and thanksgiving.",
    date: "Sunday, August 2, 2026 | 9:30 AM | Church Auditorium",
  },

  {
    image: Img3,
    title: "Discipleship and Sunday School Special Classes",
    description:
      "Discipleship Class at 8:00 AM and Sunday School Special Class at 10:00 AM to equip believers for effective Christian living.",
    date: "August 1 & 15, 2026",
  },

  {
    image: Img4,
    title: "Workers Breakfast and RALYD Day",
    description:
      "Workers Breakfast Fellowship on August 8 and RALYD Day on August 9 with the theme: The Keys of the Kingdom for Service Empowerment.",
    date: "August 8-9, 2026 | Church Auditorium",
  },

  {
    image: Img5,
    title: "BSF Week and Victory Night",
    description:
      "BSF Week topic: Harvesting the Nations (Matthew 9:35-38), followed by Victory Night: More and More (1 Chronicles 11:9).",
    date: "August 16 & 21, 2026 | 9:30 AM and 11:00 PM",
  },

  {
    image: Img6,
    title: "Baptism, New Members Induction and Family Week",
    description:
      "Baptism at 7:45 AM and Induction of New Members at 9:30 AM on August 23, then Family Week with Guest Minister Rev. Mike Babatunde.",
    date: "August 23 and August 30 - September 2, 2026 | Church Auditorium",
  },
];
  // Handle image click
  const handleImageClick = (item) => {
    setSelectedImage(item);
    onOpen();
  };

  const settings = {
    dots: false, // We'll create custom dots
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isAutoplayPaused,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true, // Smooth fade transition
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    nextArrow: <NextArrow bg={arrowBg} hoverBg={arrowHoverBg} />,
    prevArrow: <PrevArrow bg={arrowBg} hoverBg={arrowHoverBg} />,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <VStack
      spacing={{ base: 4, md: 6 }}
      w="100%"
      maxW="1200px"
      mx="auto"
      px={{ base: 2, sm: 4, md: 6 }}
    >
      {/* Header */}
      <VStack spacing={2} textAlign="center" px={4}>
        <Heading size={{ base: "md", md: "lg" }} fontWeight="600">
          Community Bulletin
        </Heading>
        <Text
          color="text.muted"
          fontSize={{ base: "sm", md: "md" }}
          textAlign="center"
        >
          Stay updated with the latest news and announcements
        </Text>
        {/* Image Modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
          <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(10px)" />
          <ModalContent
            bg="transparent"
            boxShadow="none"
            maxW="90vw"
            maxH="90vh"
          >
            <ModalHeader p={0}>
              <Flex justify="space-between" align="center" p={4}>
                {/* {selectedImage && (
                <VStack align="start" spacing={1} color="white">
                  <Heading size="lg" textShadow="0 2px 4px rgba(0,0,0,0.8)">
                    {selectedImage.title}
                  </Heading>
                  <Text fontSize="sm" opacity={0.9} textShadow="0 1px 2px rgba(0,0,0,0.8)">
                    {selectedImage.date}
                  </Text>
                </VStack>
              )} */}
                <ModalCloseButton
                  position="static"
                  color="white"
                  bg="blackAlpha.600"
                  _hover={{ bg: "blackAlpha.800" }}
                  size="lg"
                  borderRadius="full"
                />
              </Flex>
            </ModalHeader>

            <ModalBody p={4} pt={0}>
              {selectedImage && (
                <VStack spacing={4} align="center">
                  <Box
                    position="relative"
                    borderRadius="xl"
                    overflow="hidden"
                    boxShadow="0 25px 50px rgba(0,0,0,0.5)"
                    maxW="100%"
                    maxH="70vh"
                  >
                    <Image
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      maxW="100%"
                      maxH="70vh"
                      objectFit="contain"
                      borderRadius="xl"
                    />
                  </Box>

                  {/* <Box
                  bg="whiteAlpha.900"
                  color="gray.800"
                  p={6}
                  borderRadius="xl"
                  maxW="600px"
                  textAlign="center"
                  backdropFilter="blur(10px)"
                >
                  <VStack spacing={3}>
                    <Badge colorScheme="blue" px={3} py={1} borderRadius="full">
                      {selectedImage.date}
                    </Badge>
                    <Heading size="md" color="text.primary">
                      {selectedImage.title}
                    </Heading>
                    <Text color="text.secondary" lineHeight="tall">
                      {selectedImage.description}
                    </Text>
                  </VStack>
                </Box> */}
                </VStack>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </VStack>

      {/* Carousel Container */}
      <Box
        position="relative"
        w="100%"
        bg={bgColor}
        borderRadius={{ base: "xl", md: "2xl" }}
        overflow="hidden"
        boxShadow="md"
        border="1px solid"
        borderColor="border.subtle"
        onMouseEnter={() => setIsAutoplayPaused(true)}
        onMouseLeave={() => setIsAutoplayPaused(false)}
      >
        <Slider {...settings}>
          {bulletinData.map((item, index) => (
            <Box key={index} position="relative" role="group">
              <Box
                height={{
                  base: "300px",
                  sm: "350px",
                  md: "450px",
                  lg: "500px",
                  xl: "550px",
                }}
                position="relative"
                overflow="hidden"
                bg="bg.muted"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  objectPosition="center"
                  transition="transform 0.3s ease"
                  cursor="pointer"
                  _hover={{ transform: "scale(1.02)" }}
                  onClick={() => handleImageClick(item)}
                  fallback={
                    <Box
                      w="100%"
                      h="100%"
                      bg="gray.200"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text color="gray.500">Image Loading...</Text>
                    </Box>
                  }
                />

                {/* Click hint overlay */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  zIndex={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="blackAlpha.300"
                  opacity={0}
                  transition="opacity 0.3s ease"
                  _groupHover={{ opacity: 1 }}
                  cursor="pointer"
                  onClick={() => handleImageClick(item)}
                >
                  <VStack spacing={2} color="white">
                    <IconButton
                      icon={<ViewIcon />}
                      size="lg"
                      colorScheme="whiteAlpha"
                      variant="solid"
                      borderRadius="full"
                      aria-label="View Full Image"
                      bg="whiteAlpha.300"
                      backdropFilter="blur(10px)"
                      _hover={{
                        bg: "whiteAlpha.400",
                        transform: "scale(1.1)",
                      }}
                      boxShadow="0 8px 20px rgba(0,0,0,0.3)"
                      onClick={() => handleImageClick(item)}
                    />
                    <Text
                      fontSize="sm"
                      fontWeight="medium"
                      textShadow="0 2px 4px rgba(0,0,0,0.8)"
                    >
                      Click to enlarge
                    </Text>
                  </VStack>
                </Box>

                {/* Gradient Overlay */}
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  height={{ base: "70%", md: "60%" }}
                  bgGradient="linear(to-t, blackAlpha.900, blackAlpha.600, transparent)"
                  zIndex={1}
                />

                {/* Content Overlay */}
                {/* <VStack
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  p={{ base: 4, sm: 6, md: 8 }}
                  spacing={{ base: 2, sm: 3, md: 4 }}
                  align="start"
                  zIndex={2}
                  color="white"
                >
                  <Badge
                    colorScheme="blue"
                    variant="solid"
                    px={{ base: 2, md: 3 }}
                    py={1}
                    borderRadius="full"
                    fontSize={{ base: "xs", md: "sm" }}
                  >
                    {item.date}
                  </Badge>
                  
                  <Heading 
                    size={{ base: "lg", sm: "xl", md: "2xl" }}
                    fontWeight="bold"
                    textShadow="0 2px 4px rgba(0,0,0,0.7)"
                    lineHeight="shorter"
                    noOfLines={2}
                  >
                    {item.title}
                  </Heading>
                  
                  <Text 
                    fontSize={{ base: "sm", sm: "md", md: "lg" }}
                    maxW={{ base: "100%", md: "600px" }}
                    textShadow="0 1px 2px rgba(0,0,0,0.7)"
                    opacity={0.95}
                    lineHeight="normal"
                    noOfLines={{ base: 2, md: 3 }}
                    display={{ base: "none", sm: "block" }}
                  >
                    {item.description}
                  </Text>

                  <IconButton
                    icon={<ViewIcon />}
                    colorScheme="whiteAlpha"
                    variant="solid"
                    size={{ base: "md", md: "lg" }}
                    borderRadius="full"
                    aria-label="View Details"
                    _hover={{ 
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 16px rgba(0,0,0,0.4)"
                    }}
                    transition="all 0.2s ease"
                    mt={{ base: 1, md: 2 }}
                  />
                </VStack> */}
              </Box>
            </Box>
          ))}
        </Slider>

        {/* Loading Indicator */}
        <Box
          position="absolute"
          bottom="0"
          left="0"
          height="3px"
          bg="blue.500"
          width={`${((currentSlide + 1) / bulletinData.length) * 100}%`}
          transition="width 0.3s ease"
          zIndex={3}
        />
      </Box>

      {/* Custom Dots Indicator */}
      <HStack spacing={{ base: 2, md: 3 }} justify="center" flexWrap="wrap">
        {bulletinData.map((_, index) => (
          <Box
            key={index}
            w={
              currentSlide === index
                ? { base: "10px", md: "12px" }
                : { base: "6px", md: "8px" }
            }
            h={
              currentSlide === index
                ? { base: "10px", md: "12px" }
                : { base: "6px", md: "8px" }
            }
            borderRadius="full"
            bg={currentSlide === index ? "blue.500" : "gray.300"}
            cursor="pointer"
            transition="all 0.2s ease"
            _hover={{
              bg: currentSlide === index ? "blue.600" : "gray.400",
              transform: "scale(1.1)",
            }}
            onClick={() => {
              setCurrentSlide(index);
            }}
          />
        ))}
      </HStack>

      {/* Slide Counter */}
      <Text
        fontSize={{ base: "xs", md: "sm" }}
        color="text.muted"
        fontWeight="medium"
      >
        {currentSlide + 1} of {bulletinData.length}
      </Text>
    </VStack>
  );
}

// Enhanced Custom Next Arrow
const NextArrow = ({ bg, hoverBg, ...props }) => {
  const { onClick } = props;
  return (
    <IconButton
      icon={<ArrowForwardIcon />}
      position="absolute"
      right={{ base: "10px", md: "20px" }}
      top="50%"
      transform="translateY(-50%)"
      zIndex={10}
      onClick={onClick}
      aria-label="Next Slide"
      bg={bg}
      color="text.muted"
      boxShadow="0 4px 12px rgba(0,0,0,0.15)"
      size={{ base: "md", md: "lg" }}
      borderRadius="full"
      transition="all 0.2s ease"
      display={{ base: "none", sm: "flex" }}
      _hover={{
        bg: hoverBg,
        transform: "translateY(-50%) scale(1.05)",
        boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
      }}
      _active={{ transform: "translateY(-50%) scale(0.95)" }}
    />
  );
};

// Enhanced Custom Prev Arrow
const PrevArrow = ({ bg, hoverBg, ...props }) => {
  const { onClick } = props;
  return (
    <IconButton
      icon={<ArrowBackIcon />}
      position="absolute"
      left={{ base: "10px", md: "20px" }}
      top="50%"
      transform="translateY(-50%)"
      zIndex={10}
      onClick={onClick}
      aria-label="Previous Slide"
      bg={bg}
      color="text.muted"
      boxShadow="0 4px 12px rgba(0,0,0,0.15)"
      size={{ base: "md", md: "lg" }}
      borderRadius="full"
      transition="all 0.2s ease"
      display={{ base: "none", sm: "flex" }}
      _hover={{
        bg: hoverBg,
        transform: "translateY(-50%) scale(1.05)",
        boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
      }}
      _active={{ transform: "translateY(-50%) scale(0.95)" }}
    />
  );
};

export default Bulletin;
