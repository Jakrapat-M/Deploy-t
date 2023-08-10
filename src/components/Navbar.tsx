import { useState } from "react";
import {
  Flex,
  IconButton,
  useColorMode,
  Box,
  Text,
  Link,
  Collapse,
  VStack,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      as="nav"
      position="fixed" // Set the position to fixed
      top={0} // Position at the top
      left={0} // Position at the left
      width="100%" // Full width
      zIndex={100} // Ensure the navbar is above other content
      color={colorMode === "light" ? "black" : "white"}
      boxShadow="md" // Add a shadow for separation
    >
      <Flex align="center" justify="space-between" wrap="wrap" padding="1.5rem">
        <Box>
          {/* Your logo or site title */}
          <Text fontSize="xl" fontWeight="bold">
            KASHI
          </Text>
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          {/* Hamburger icon for mobile */}
          <IconButton
            icon={<HamburgerIcon />}
            onClick={toggleCollapse}
            aria-label="Toggle mobile menu"
            variant="ghost"
          />
        </Box>
        <Box display={{ base: isOpen ? "block" : "none", md: "none" }}>
          {/* Mobile navigation links */}
          <Collapse in={isOpen}>
            <VStack
              spacing={4}
              align="flex-start" // Align links to the left
              mt={2}
              p={2}
              borderRadius="md"
            >
              <Link href="#about">About</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#contact">Contact</Link>
              {/* Color mode toggle button */}
              <IconButton
                icon={
                  colorMode === "light" ? (
                    <MoonIcon boxSize={5} />
                  ) : (
                    <SunIcon boxSize={5} />
                  )
                }
                onClick={toggleColorMode}
                aria-label="Toggle color mode"
                variant="ghost"
              />
            </VStack>
          </Collapse>
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          {/* Navigation Links */}
          <Flex align="center">
            <Link mr={4} href="#about">
              About
            </Link>
            <Link mr={4} href="#projects">
              Projects
            </Link>
            <Link mr={4} href="#contact">
              Contact
            </Link>
            {/* Toggle color mode */}
            <IconButton
              icon={
                colorMode === "light" ? (
                  <MoonIcon boxSize={5} />
                ) : (
                  <SunIcon boxSize={5} />
                )
              }
              onClick={toggleColorMode}
              aria-label="Toggle color mode"
              variant="ghost"
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
