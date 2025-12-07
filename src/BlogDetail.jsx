
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Heading,
  Text,
  Image,
  Spinner,
  Box,
} from "@chakra-ui/react";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/blog/${slug}/`)
      .then((res) => setBlog(res.data))
      .catch(() => setError("Blog not found."))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <Spinner size="xl" mt={10} />;
  if (error) return <Text mt={10}>{error}</Text>;
  if (!blog) return null;

  return (
    <Container maxW="8xl" py={10}>
      {blog.image && (
        <Image
          src={blog.image}
          alt={blog.title}
          w="100%"
          h={{ base: "200px", md: "400px" }}
          objectFit="cover"
          borderRadius="md"
          mb={6}
        />
      )}

      <Heading textStyle="h2" mb={4}>
        {blog.title}
      </Heading>

      <Text fontSize="sm" color="brand.400" mb={2}>
        By {blog.author} • {new Date(blog.created_at).toLocaleDateString()}
      </Text>

      {blog.category && (
        <Box
          as="span"
          display="inline-block"
          px={3}
          py={1}
          bg="brand.300"
          color="neutral.white"
          fontSize="xs"
          borderRadius="md"
          mb={6}
        >
          {blog.category}
        </Box>
      )}

      <Text
        textStyle="body"
        whiteSpace="pre-line"
      >
        {blog.content}
      </Text>
    </Container>
  );
};

export default BlogDetail;
