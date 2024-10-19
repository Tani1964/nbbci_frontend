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
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom"; // Import useLocation for getting the current path
import Logo from "../assets/logo.png";

// Motion components
const MotionBox = motion(Box);
const MotionButton = motion(Button);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation(); // Get current location

  const linkAnimation = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <Box bg={useColorModeValue("white", "gray.800")} px={20}>
      <Flex alignItems="center" justifyContent="space-between" py={5}>
        {/* Logo */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image src={Logo} alt="NBBC logo" />
        </MotionBox>

        {/* Hamburger Menu for Mobile View */}
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          variant="outline"
          onClick={onOpen}
          display={{ base: "block", md: "none" }}
        />

        {/* Desktop Navigation Links */}
        <HStack
          spacing={8}
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          {["Home", "About Us", "Ministries", "Resources", "Media"].map(
            (label) => {
              const path = `/${label.toLowerCase().replace(/\s/g, "-")}`;
              const isActive = location.pathname === path; // Check if the link is active
              return (
                <MotionBox
                  key={label}
                  {...linkAnimation}
                >
                  <Link
                    href={path}
                    fontSize="md"
                    fontWeight="bold"
                    color={isActive ? "#A8518A" : "inherit"} // Change color if active
                  >
                    {label}
                  </Link>
                </MotionBox>
              );
            }
          )}
        </HStack>

        {/* Offering Button on Desktop */}
        <MotionButton
          colorScheme="#A8518A"
          size="md"
          padding="10px"
          width={150}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
         <Button
          colorScheme=" #A8518A;
"
          size="md"
          padding={"10px"}
          width={150}
        >
          Offering
        </Button>
        </MotionButton>
      </Flex>

      {/* Sidebar/Drawer for Mobile View */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            {["Home", "About Us", "Ministries", "Resources", "Media"].map(
              (label) => {
                const path = `/${label.toLowerCase().replace(/\s/g, "-")}`;
                const isActive = location.pathname === path; // Check if the link is active
                return (
                  <MotionBox
                    key={label}
                    {...linkAnimation}
                  >
                    <Link
                      href={path}
                      fontSize="md"
                      fontWeight="bold"
                      display="block"
                      my={2}
                      color={isActive ? "#A8518A" : "inherit"} // Change color if active
                      onClick={onClose} // Close drawer on link click
                    >
                      {label}
                    </Link>
                  </MotionBox>
                );
              }
            )}
          </DrawerBody>
          <DrawerFooter>
            {/* Offering Button in the Drawer */}
            <MotionButton
              colorScheme="#A8518A"
              size="md"
              padding="10px"
              width={150}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
            >
              Offering
            </MotionButton>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
