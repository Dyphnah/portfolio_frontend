import { useState } from "react";
import {
  Button,
  Flex,
  HStack,
  Box,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Hamburger from "hamburger-react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "GET TO KNOW ME" },
    { to: "/portfolio", label: "PORTFOLIO" },
    { to: "/blog", label: "BLOG" },
  ];

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        p={4}
        px={{ base: 6, lg: 12 }}
        py={7}
        bg="brand.50"
        boxShadow="lg"
        fontFamily="Poppins, sans-serif"
      >
        <Box>
          <RouterLink to="/">
            <Text
              fontWeight="bold"
              letterSpacing="wide"
              color="brand.300"
              fontSize="lg"
            >
              DYPHNAH
            </Text>
          </RouterLink>
        </Box>

        {/* Desktop Menu */}
        <HStack display={{ base: "none", md: "flex" }} align="center">
          {navItems.map((item) => (
            <Link
              as={RouterLink}
              to={item.to}
              key={item.to}
              fontSize="lg"
              fontWeight="bold"
              color="brand.300"
              mr="34px"
              _hover={{ textDecoration: "underline", color: "brand.400" }}
            >
              {item.label}
            </Link>
          ))}

          <Button
            colorPalette="brand"
            fontWeight="bold"
            variant="solid"
            onClick={() =>
              window.open(
                "https://calendly.com/nyandukodyphnah4/30min",
                "_blank"
              )
            }
            _hover={{
              bg: "neutral.black",
              color: "neutral.white",
              transform: "scale(1.05)",
              transition: "all 0.2s ease-in-out",
            }}
          >
            BOOK A DISCOVERY CALL
          </Button>
        </HStack>

        {/* Mobile Hamburger Button */}
        <Box display={{ base: "flex", md: "none" }}>
          <Hamburger
            easing="ease-in"
            toggled={isOpen}
            toggle={setIsOpen}
            size={24}
            color="#255059"
          />
        </Box>
      </Flex>
      {/* Mobile Menu */}
      {isOpen && (
        <VStack
          bg="brand.50"
          py={4}
          display={{ md: "none" }}
          boxShadow="md"
          align="start"
          px={6}
        >
          {navItems.map((item) => (
            <Box w="100%" key={item.to}>
              <Link
                as={RouterLink}
                to={item.to}
                fontSize="lg"
                fontWeight="bold"
                color="brand.300"
                _hover={{ color: "brand.400" }}
                onClick={() => setIsOpen(false)}
                display="block"
                py={2}
              >
                {item.label}
              </Link>
            </Box>
          ))}

          <Box w="100%">
            <Button
              width="100%"
              colorScheme="brand"
              fontWeight="bold"
              onClick={() =>
                window.open(
                  "https://calendly.com/nyandukodyphnah4/30min",
                  "_blank"
                )
              }
            >
              BOOK A DISCOVERY CALL
            </Button>
          </Box>
        </VStack>
      )}
    </>
  );
};

export default Navbar;
