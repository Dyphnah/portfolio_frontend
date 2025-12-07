import {
  Box,
  Flex,
  Text,
  Heading,
  Link,
  Stack,
  HStack,

} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.50" color="gray.800" px={{ base: 6, md: 20 }} py={10}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        wrap="wrap"
        gap={8}
      >
        <Box flex="1" w="100%" textAlign={{ base: "center", md: "left" }}>
          <Heading size="md" mb={4} textAlign={{ base: "center", md: "left" }}>
            Dyphnah Nyamongo
          </Heading>
          <Text mb={4} textStyle="body">
            Your tech-savvy virtual assistant. I bring clarity, efficiency, and
            creativity to every project. My mission is to lighten your load so
            you can focus on strategy, decisions, and impact.
          </Text>

          <Flex justify={{ base: "center", md: "flex-start" }} mt={4}>
            <HStack spacing={6} textStyle="body">
              <Link href="https://web.facebook.com/Dyphnah/" target="_blank">
                <FaFacebookF size={22} color="#1877F2" />
              </Link>

              <Link href="https://instagram.com" target="_blank">
                <FaInstagram size={22} color="#E1306C" />
              </Link>

              <Link href="https://www.linkedin.com/in/dyphnah/" target="_blank">
                <FaLinkedin size={22} color="#0A66C2" />
              </Link>
            </HStack>
          </Flex>
        </Box>

        <Box minW="150px" textAlign={{ base: "center", md: "left" }}>
          <Heading size="sm" mb={4} textAlign={{ base: "center", md: "left" }}>
            Quick Links
          </Heading>
          <Stack
            spacing={2}
            align={{ base: "center", md: "flex-start" }}
            textStyle="body"
          >
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/portfolio">Portfolio</Link>
          </Stack>
        </Box>

        <Box minW="150px" textAlign={{ base: "center", md: "left" }}>
          <Heading size="sm" mb={4} textAlign={{ base: "center", md: "left" }}>
            Solutions
          </Heading>
          <Stack
            spacing={2}
            align={{ base: "center", md: "flex-start" }}
            textStyle="body"
          >
            <Link
              as={RouterLink}
              to="/"
              color="brand.300"
              _hover={{ textDecoration: "underline" }}
            >
              Admin Support
            </Link>
            <Link
              as={RouterLink}
              to="/"
              color="brand.300"
              _hover={{ textDecoration: "underline" }}
            >
              Social Media Support
            </Link>
            <Link
              as={RouterLink}
              to="/"
              color="brand.300"
              _hover={{ textDecoration: "underline" }}
            >
              Web Development
            </Link>
          </Stack>
        </Box>

        <Box minW="200px" textAlign={{ base: "center", md: "left" }}>
          <Heading size="sm" mb={4} textAlign={{ base: "center", md: "left" }}>
            Contact Info
          </Heading>
          <Stack
            spacing={2}
            align={{ base: "center", md: "flex-start" }}
            textStyle="body"
          >
            <Text>Email: </Text>
            <Text>Whatsapp: </Text>
            <Text>Location: Nairobi, Kenya</Text>
          </Stack>
        </Box>
      </Flex>

      <Box my={8} h="1px" bg="gray.200" />

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        fontSize="sm"
        gap={4}
        textAlign={{ base: "center", md: "left" }}
      >
        <Text color="brand.200" textStyle="body">
          © 2025. Website designed and developed by Dyphnah Nyamongo. All
          rights reserved.
        </Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          align="center"
          color="brand.300"
        >
          <Link href="#" color="brand.200" textStyle="body">
            Media & Privacy Policy
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;
