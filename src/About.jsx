
import Footer from "./Footer.jsx";
import {
  Box,
  Heading,
  Text,
  Link,
  HStack,
  Icon,
  Image,
} from "@chakra-ui/react";
import { FaFileDownload, FaExternalLinkAlt } from "react-icons/fa";

const AboutMe = () => {
  return (
    <>
      <Box
        px={{ base: 4, md: 8, lg: 16 }}
        py={{ base: 8, md: 12, lg: 20 }}
        maxW="7xl"
        mx="auto"
      >
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          gap={{ base: 8, md: 12 }}
        >
          <Box flexShrink={0}>
            <Image
              src="/bio_image.jpg"
              alt="Dyphnah Nyamongo"
              borderRadius="md"
              boxSize={{ base: "200px", md: "300px" }}
              objectFit="cover"
            />
          </Box>

          <Box flex="1" >
            <Heading textStyle="h2" mb={6}>
              About Me
            </Heading>

            <Text
              textStyle="body"
              mb={6}
              lineHeight={{ base: "lg", md: "base", lg: "tall" }}
            >
              Hi, I’m Dyphnah, a tech‑savvy virtual assistant and brand‑driven
              web developer. I empower entrepreneurs, executives, coaches, and
              consultants by simplifying operations and building scalable
              systems. With expertise in JavaScript/React and Python/Django, I
              design responsive websites, custom integrations, and digital tools
              that align with your brand’s story.
            </Text>
            <Text
              textStyle="body"
              mb={6}
              lineHeight={{ base: "lg", md: "base", lg: "tall" }}
            >
              {" "}
              Beyond coding, I provide admin and social media support, craft
              engaging content, and create workflows that keep businesses
              organized, credible, and future‑proof. My mission is to help
              impact‑driven professionals overcome tech overwhelm and scale with
              confidence.
            </Text>

            <HStack spacing={8}>
              {/*               <Link
                href="/Dyphnah-CV.pdf"
                isExternal
                display="flex"
                alignItems="center"
              >
                <Icon as={FaFileDownload} mr={2} />
                <Text textStyle="body">Download My CV</Text>
              </Link> */}

              <Link href="/portfolio" display="flex" alignItems="center">
                <Icon as={FaExternalLinkAlt} mr={2} />
                <Text textStyle="body">See My Portfolio</Text>
              </Link>
            </HStack>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default AboutMe;
