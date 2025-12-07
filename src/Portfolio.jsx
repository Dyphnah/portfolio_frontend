import Footer from "./Footer.jsx";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Stack,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://mywebsite-khi1.onrender.com/api/portfolio/")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Box
        px={{ base: 4, md: 8, lg: 16 }}
        py={{ base: 8, md: 12, lg: 20 }}
        maxW="7xl"
        mx="auto"
      >
        <Heading
          textStyle="h1"
          size="xl"
          mb={10}
          textAlign="center"
          color="brand.300"
        >
          Featured Projects
        </Heading>

        <SimpleGrid columns={{ base: 1 }} gap={10}>
          {projects.map((project) => (
            <Box
              key={project.id}
              bg="white"
              boxShadow="md"
              borderRadius="md"
              overflow="hidden"
              p={6}
            >
              <Box
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
                alignItems="flex-start"
                gap={6}
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    borderRadius="md"
                    boxSize={{ base: "100%", md: "200px" }}
                    objectFit="cover"
                    flexShrink={0}
                  />
                )}

                <Box flex="1">
                  <Heading textStyle="h3" mb={2}>
                    {project.title}
                  </Heading>

                  <Text textStyle="body" mb={4}>
                    {project.description}
                  </Text>

                  <Text
                    textStyle="body"
                    fontWeight="bold"
                    mb={4}
                    color="brand.200"
                  >
                    Technologies: {project.technologies}
                  </Text>

                  <Stack direction="row" spacing={4}>
                    {project.GitHublink && (
                      <Link href={project.GitHublink} isExternal>
                        <Button
                          leftIcon={<FaGithub />}
                          colorPalette="brand.300"
                          variant="outline"
                        >
                          GitHub
                        </Button>
                      </Link>
                    )}
                    {project.deployedlink && (
                      <Link href={project.deployedlink} isExternal>
                        <Button
                          leftIcon={<FaExternalLinkAlt />}
                          bg="brand.300"
                          _hover={{ bg: "brand.400", color: "neutral.white" }}
                        >
                          Live Link
                        </Button>
                      </Link>
                    )}
                  </Stack>
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
};

export default Portfolio;
