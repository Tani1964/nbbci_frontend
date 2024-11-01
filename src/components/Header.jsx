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
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

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
    <Box bg={useColorModeValue("white", "gray.800")} px={{ base: 4, md: 20 }}>
      <Flex alignItems="center" justifyContent="space-between" py={5}>
        {/* Logo */}
        <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Image src={Logo} alt="NBBC logo" w={{ base: "40px", md: "60px" }} />
        </MotionBox>

        {/* Hamburger Menu for Mobile */}
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          variant="outline"
          onClick={onOpen}
          display={{ base: "block", md: "none" }}
        />

        {/* Desktop Navigation Links */}
        <HStack spacing={8} alignItems="center" display={{ base: "none", md: "flex" }}>
          {navItems.map(({ label, path }) => (
            <MotionBox key={label} {...linkAnimation}>
              <Link
                href={path}
                fontSize="md"
                fontWeight="bold"
                color={location.pathname === path ? "#A8518A" : "inherit"}
                _hover={{ color: "#A8518A", textDecoration: "underline" }}
              >
                {label}
              </Link>
            </MotionBox>
          ))}
        </HStack>

        {/* Offering Button (Desktop) */}
        <MotionButton
          colorScheme="#A8518A;"
          size="md"
          paddingX={'5%'}
          display={{ base: "none", md: "inline-flex" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/resources")}
          as="a"
          
        >
          Give
        </MotionButton>
      </Flex>

      {/* Sidebar/Drawer for Mobile */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            {navItems.map(({ label, path }) => (
              <MotionBox key={label} {...linkAnimation}>
                <Link
                  href={path}
                  fontSize="md"
                  fontWeight="bold"
                  display="block"
                  my={2}
                  color={location.pathname === path ? "#A8518A" : "inherit"}
                  _hover={{ color: "#A8518A", textDecoration: "underline" }}
                  onClick={onClose}
                >
                  {label}
                </Link>
              </MotionBox>
            ))}
          </DrawerBody>
          <DrawerFooter>
            <MotionButton
              colorScheme="#A8518A;"
              size="md"
              paddingX={'5%'}
              width="100%"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                navigate("/resources");
                onClose();
              }}
            >
              Give
            </MotionButton>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
