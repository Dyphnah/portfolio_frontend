import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Stack,
  Image,
  Heading,
  Text,
  Link,
  Flex,
  Container,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";

const truncateWords = (text, wordLimit = 50) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://mywebsite-khi1.onrender.com/api/blog/"
      );
      setBlogs(response.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setError("Failed to fetch blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) return <Text>Loading blogs...</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <Container maxW="6xl" py={10}>
      <Heading textStyle="h1" color="brand.200" textAlign="center">
        Latest Blog Posts
      </Heading>

      <Stack spacing={8}>
        {blogs.map((blog) => (
          <Flex
            key={blog.id}
            direction={{ base: "column", md: "row" }}
            align="flex-start"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            p={4}
            bg="white"
            boxShadow="sm"
          >
            {blog.image && (
              <Image
                src={blog.image}
                alt={blog.title}
                w={{ base: "100%", md: "200px" }}
                h={{ base: "200px", md: "200px" }}
                objectFit="cover"
                borderRadius="md"
                mr={{ md: 6 }}
                mb={{ base: 4, md: 0 }}
              />
            )}

            <Box flex="1">
              <Heading
                fontFamily="Playfair Display, serif"
                fontSize={{ base: "md", md: "xl" }}
                mb={2}
              >
                {blog.title}
              </Heading>
              <Text textStyle="body" mb={2}>
                By {blog.author}
              </Text>
              {blog.category && <Text fontSize="sm">{blog.category}</Text>}
              <Text
                textStyle="body"
                mt={2}
                mb={4}
              >
                {truncateWords(String(blog.content || ""), 49)}
              </Text>

              <Link
                as={RouterLink}
                to={`/blog/${blog.slug}`}
                fontWeight="600"
                textDecoration="underline"
                _hover={{ textDecoration: "underline" }}
              >
                <Flex align="center">
                  <Text textStyle="body" fontSize={{ base: "sm", md: "md" }}>
                    Read More
                  </Text>
                  <RiArrowRightLine size={22} style={{ marginLeft: "6px" }} />
                </Flex>
              </Link>
            </Box>
          </Flex>
        ))}
      </Stack>
    </Container>
  );
};

export default Blog;


