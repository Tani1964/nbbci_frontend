import { Box, Flex, Text, Button, Input, Textarea } from "@chakra-ui/react";
import Bg from "../assets/BG.png";

const Help = () => {
  return (
    <Box
      position="relative"
      h="100vh"
      backgroundImage={Bg}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      paddingX={"8%"}
      paddingY={"8%"}
      color={"white"}  
    >
      {/* Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex={1}  
      />

      {/* Content */}
      <Box
        textAlign="left"
        maxW="600px"
        mb={6}
        zIndex={2}  
        color="white"  
        position="relative"  
      >
        <Text fontSize="2xl" fontWeight="bold" color="white">  {/* Explicit color */}
          Let’s help you to grow?
        </Text>
        <Text fontSize="lg" mt={2} color="white">  {/* Explicit color */}
          Need guidance or a listening ear? Our pastoral counseling team is here
          to support you through life’s challenges. Schedule a confidential
          session today, and let us walk with you on your journey of faith and
          healing.
        </Text>
      </Box>

      {/* Form Content */}
      <Flex
        as="form"
        width="100%"
        justifyContent={"space-between"}
        alignItems={"start"}
        zIndex={2}  
        position="relative"  
      >
        <Flex direction={"column"}>
          <label style={{ color: "white" }}>Email:</label>  {/* Ensure label is white */}
          <Input
            type="email"
            mb={4}
            bg="white"
            color="black"
            width={"30vw"}
            _placeholder={{ color: "gray.500" }}
          />
        </Flex>

        <Flex direction={"column"}>
          <label style={{ color: "white" }}>Message:</label>  {/* Ensure label is white */}
          <Textarea
            mb={4}
            bg="white"
            color="black"
            width={"40vw"}
            height={"40vh"}
            _placeholder={{ color: "gray.500" }}
          />
        </Flex>
      </Flex>

      <Flex direction={'row'} width={'100%'} justifyContent={'right'} zIndex={2} position="relative">
        <Button paddingX={10} paddingY={5} colorScheme="#A8518A;">
          Submit
        </Button>
      </Flex>
    </Box>
  );
};

export default Help;
