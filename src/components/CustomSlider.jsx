import React from "react";
import Slider from "react-slick";
import { Box, Image, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Img1 from '../assets/slider/PIC 1.png'
import Img2 from '../assets/slider/PIC 2.png'
import Img3 from '../assets/slider/PIC 3.png'
import Img4 from '../assets/slider/PIC 4.png'
import Img5 from '../assets/slider/PIC 5.png'

function CustomSlider() {
  const images = [
    Img1,Img2,Img3,Img4,Img5
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Speed of autoplay (3 seconds)
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box maxW="90%" mx="auto" position="relative">
      <Slider  {...settings}>
        {images.map((img, index) => (
          <Box key={index} p={4}>
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              borderRadius="md"
              objectFit="cover"
              boxSize="100%"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      icon={<ArrowForwardIcon />}
      position="absolute"
      right="-35px"
      top="50%"
      transform="translateY(-50%)"
      zIndex={1}
      onClick={onClick}
      aria-label="Next Slide"
      bg="white"
      boxShadow="md"
      _hover={{ bg: "gray.300" }}
    />
  );
};

// Custom Prev Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      icon={<ArrowBackIcon />}
      position="absolute"
      left="-35px"
      top="50%"
      transform="translateY(-50%)"
      zIndex={1}
      onClick={onClick}
      aria-label="Previous Slide"
      bg="white"
      boxShadow="md"
      _hover={{ bg: "gray.300" }}
    />
  );
};

export default CustomSlider;
