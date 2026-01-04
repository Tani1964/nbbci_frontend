import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { 
  Box, 
  Image, 
  IconButton, 
  Text, 
  Heading,
  VStack,
  HStack,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon, ViewIcon } from "@chakra-ui/icons";
import Img1 from '../assets/bulletin/img1.jpeg'
import Img2 from '../assets/bulletin/img2.jpeg'
import Img3 from '../assets/bulletin/img3.jpeg'
import Img4 from '../assets/bulletin/img4.jpeg'
import Img5 from '../assets/bulletin/img5.jpeg'
import Img6 from '../assets/bulletin/img6.jpeg'

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
    title: "2026 Sunday School Annual Bible Study", 
    description: "Character Study (Daniel 1–6) — A systematic study of Daniel’s life, convictions, and faithfulness to strengthen Christian character in challenging times.",
    date: "Every Sunday in January 2026 | 8:30 AM – 9:25 AM"
  },
  { 
    image: Img2, 
    title: "Peniel 2026: 21 Days of Fasting & Prayer", 
    description: "Theme: Next Level — A season of corporate seeking of God for direction, strength, and advancement in the new year.",
    date: "January 5–24, 2026"
  },
  { 
    image: Img3, 
    title: "NBBC Workers’ Retreat 2026", 
    description: "Theme: Transformational Worker – An Agent of Exponential Church Growth. A strategic gathering for renewal, alignment, and equipping of church workers.",
    date: "Saturday, January 10, 2026 | 8:00 AM prompt"
  },
  { 
    image: Img4, 
    title: "Lagos East Baptist Conference Workers’ Retreat", 
    description: "Theme: Transformational Leaders – Becoming a Generous and Faithful Steward. Focused on leadership growth, stewardship, and kingdom responsibility.",
    date: "January 2026 | 9:00 AM | Venue: FBC Ikorodu"
  },
  { 
    image: Img5, 
    title: "Deacons’ Appreciation & Ordination Service", 
    description: "A special service to appreciate serving deacons and formally ordain new ones into the office.",
    date: "January 18, 2026 | 9:30 AM"
  },
  { 
    image: Img6, 
    title: "MMU & WMU Emphasis Sunday", 
    description: "Theme: Restoring the Broken Walls Through the Fruit and Gifts of the Holy Spirit (Nehemiah 1–2; Isaiah 58:12; Acts 1:8).",
    date: "January 25, 2026 | 9:30 AM"
  },
  { 
    image: Img6, 
    title: "Church Council Meeting", 
    description: "A leadership meeting to review progress and set direction for church administration and ministry.",
    date: "January 27, 2026 | 5:30 PM"
  },
  { 
    image: Img6, 
    title: "Radiant Couples Fellowship – Breakfast Fellowship", 
    description: "A fellowship gathering for couples to connect, refresh, and strengthen marital bonds in a relaxed setting.",
    date: "January 31, 2026 | Time: To Be Announced"
  }
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
    <VStack spacing={{ base: 4, md: 6 }} w="100%" maxW="1200px" mx="auto" px={{ base: 2, sm: 4, md: 6 }}>
      {/* Header */}
      <VStack spacing={2} textAlign="center" px={4}>
        <Heading 
          size={{ base: "md", md: "lg" }}
          fontWeight="600"
        >
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
        <ModalOverlay 
          bg="blackAlpha.800" 
          backdropFilter="blur(10px)"
        />
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
                  xl: "550px" 
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
                        transform: "scale(1.1)"
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
            w={currentSlide === index ? { base: "10px", md: "12px" } : { base: "6px", md: "8px" }}
            h={currentSlide === index ? { base: "10px", md: "12px" } : { base: "6px", md: "8px" }}
            borderRadius="full"
            bg={currentSlide === index ? "blue.500" : "gray.300"}
            cursor="pointer"
            transition="all 0.2s ease"
            _hover={{ 
              bg: currentSlide === index ? "blue.600" : "gray.400",
              transform: "scale(1.1)"
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
        boxShadow: "0 6px 16px rgba(0,0,0,0.2)"
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
        boxShadow: "0 6px 16px rgba(0,0,0,0.2)"
      }}
      _active={{ transform: "translateY(-50%) scale(0.95)" }}
    />
  );
};

export default Bulletin;