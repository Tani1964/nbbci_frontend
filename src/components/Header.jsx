import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useColorModeValue,
  Image,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Text,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionFlex = motion(Flex);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();

  const linkAnimation = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Ministries", path: "/ministries" },
    { label: "Resources", path: "/resources" },
    { label: "Media", path: "/media" },
  ];

  return (
    <Box 
      bg={useColorModeValue("white", "gray.800")} 
      px={{ base: 4, md: 20 }}
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={1000}
      backdropFilter="blur(10px)"
      borderBottom="1px"
      borderColor={useColorModeValue("gray.100", "gray.700")}
    >
      <Flex alignItems="center" justifyContent="space-between" py={5}>
        {/* Logo */}
        <MotionBox 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          cursor="pointer"
          onClick={() => navigate("/")}
        >
          <Image 
            src={Logo} 
            alt="NBBC logo" 
            w={{ base: "45px", md: "65px" }} 
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.05)" }}
          />
        </MotionBox>

        {/* Hamburger Menu for Mobile */}
        <IconButton
          icon={<HamburgerIcon boxSize={6} />}
          aria-label="Open Menu"
          variant="ghost"
          colorScheme="purple"
          onClick={onOpen}
          display={{ base: "flex", md: "none" }}
          _hover={{ bg: "#A8518A15" }}
          _active={{ bg: "#A8518A25" }}
          size="lg"
        />

        {/* Desktop Navigation Links */}
        <HStack spacing={8} alignItems="center" display={{ base: "none", md: "flex" }}>
          {navItems.map(({ label, path }, index) => (
            <MotionBox 
              key={label} 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={path}
                fontSize="md"
                fontWeight="600"
                color={location.pathname === path ? "#A8518A" : "gray.600"}
                _hover={{ 
                  color: "#A8518A", 
                  textDecoration: "none",
                  transform: "translateY(-2px)"
                }}
                transition="all 0.2s ease"
                position="relative"
                _after={{
                  content: '""',
                  position: "absolute",
                  bottom: "-4px",
                  left: 0,
                  width: location.pathname === path ? "100%" : "0%",
                  height: "2px",
                  bg: "#A8518A",
                  transition: "width 0.3s ease",
                }}
                sx={{
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {label}
              </Link>
            </MotionBox>
          ))}
        </HStack>

        {/* Offering Button (Desktop) */}
        <MotionButton
          bg="#A8518A"
          color="white"
          size="md"
          px={8}
          display={{ base: "none", md: "inline-flex" }}
          whileHover={{ scale: 1.05, boxShadow: "lg" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/resources")}
          _hover={{ bg: "#8E3E74" }}
          _active={{ bg: "#752D5F" }}
          borderRadius="md"
          fontWeight="600"
          boxShadow="md"
        >
          Give
        </MotionButton>
      </Flex>

      {/* Enhanced Sidebar/Drawer for Mobile */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="sm">
        <DrawerOverlay backdropFilter="blur(4px)" />
        <DrawerContent>
          <DrawerHeader 
            borderBottomWidth="1px" 
            pb={4}
            bgGradient="linear(to-r, #A8518A, #8E3E74)"
          >
            <Flex align="center" justify="space-between">
              <Flex align="center" gap={3}>
                <Image 
                  src={Logo} 
                  alt="NBBC logo" 
                  w="40px"
                  filter="brightness(0) invert(1)"
                />
                <Text color="white" fontSize="xl" fontWeight="bold">
                  Menu
                </Text>
              </Flex>
              <DrawerCloseButton color="white" position="relative" top={0} right={0} />
            </Flex>
          </DrawerHeader>

          <DrawerBody px={0} py={6}>
            <VStack spacing={2} align="stretch">
              {navItems.map(({ label, path }, index) => (
                <MotionFlex
                  key={label}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={path}
                    width="100%"
                    px={6}
                    py={4}
                    fontSize="md"
                    fontWeight="600"
                    display="flex"
                    alignItems="center"
                    gap={3}
                    color={location.pathname === path ? "#A8518A" : "gray.700"}
                    bg={location.pathname === path ? "#A8518A10" : "transparent"}
                    borderLeft={location.pathname === path ? "4px solid #A8518A" : "4px solid transparent"}
                    _hover={{ 
                      bg: "#A8518A10",
                      color: "#A8518A",
                      textDecoration: "none",
                      borderLeftColor: "#A8518A",
                    }}
                    transition="all 0.2s ease"
                    onClick={onClose}
                  >
                    <Box
                      w="6px"
                      h="6px"
                      borderRadius="full"
                      bg={location.pathname === path ? "#A8518A" : "gray.400"}
                      transition="all 0.2s ease"
                    />
                    {label}
                  </Link>
                </MotionFlex>
              ))}
            </VStack>
            
            <Divider my={6} />
            
            <Box px={6}>
              <MotionButton
                bg="#A8518A"
                color="white"
                size="lg"
                width="100%"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  navigate("/resources");
                  onClose();
                }}
                _hover={{ bg: "#8E3E74" }}
                _active={{ bg: "#752D5F" }}
                borderRadius="md"
                fontWeight="600"
                boxShadow="md"
                py={6}
              >
                Give an Offering
              </MotionButton>
            </Box>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px" bg="gray.50">
            <Text fontSize="sm" color="gray.500" textAlign="center" width="100%">
              © 2026 NBBC International
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
