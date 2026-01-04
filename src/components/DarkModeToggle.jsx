import { IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useTheme } from "../context/ThemeContext";

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useTheme();

  return (
    <IconButton
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      variant="ghost"
      size="lg"
      aria-label={`Toggle ${colorMode === "light" ? "dark" : "light"} mode`}
      colorScheme="purple"
      _hover={{ bg: "#A8518A15" }}
      _active={{ bg: "#A8518A25" }}
    />
  );
};

export default DarkModeToggle;
