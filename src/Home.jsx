
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FaQuoteLeft } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFileContract,
  FaFolderOpen,
  FaTasks,
  FaCheckCircle,
  FaHandsHelping,
} from "react-icons/fa";
import { RiArrowDownLine, RiArrowRightLine, } from "react-icons/ri";
import {
  SimpleGrid,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Link,
  VStack,
  HStack,
  Avatar,
  Icon,
} from "@chakra-ui/react";
import FAQs from "./FAQs";
import Footer from "./Footer.jsx";

export default function Home() {
  const servicesRef = useRef(null);
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

    const bookCall = () => {
    window.open("https://calendly.com/nyandukodyphnah4/30min", "_blank");
    };
  
  useEffect(() => {
    axios
      .get("https://mywebsite-khi1.onrender.com/api/testimonials/")
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "https://mywebsite-khi1.onrender.com/api/services/"
        );
        setServices(response.data.slice(0, 6)); 
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      <Box
        position="relative"
        h={{ base: "90vh", md: "100vh" }}
        overflow="hidden"
      >
        <Image
          src="/pic-1.jpg"
          alt="Background"
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          objectFit="cover"
          zIndex={0}
        />

        {/* Overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="blackAlpha.800"
          zIndex={1}
        />

        <Flex
          direction="column"
          align={{ base: "center", md: "flex-start" }}
          justify="center"
          h="100%"
          position="relative"
          zIndex={2}
          color="white"
          textAlign={{ base: "center", md: "left" }}
          px={{ base: 2, md: 12 }}
        >
          <Heading
            textStyle="h1"
            className="typewriter"
            maxW={{ base: "95%", md: "5xl" }}
            fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
            lineHeight={{ base: "1.2em", md: "1.3em" }}
            mb={4}
          >
            From Admin Chaos to Clarity.{" "}
            <Text as="span" color="brand.400">
              Scale Without Distractions.
            </Text>
          </Heading>

          <Text
            fontFamily="Poppins, sans-serif"
            color="neutral.white"
            fontSize={{ base: "sm", sm: "md", md: "20px" }}
            mt={3}
            maxW={{ base: "95%", md: "4xl" }}
            lineHeight={{ base: "1.4em", md: "37px" }}
          >
            I help CEOs and scaling businesses eliminate admin bottlenecks and
            reclaim 10–30 hours a week so they can close more deals, lead their
            teams, and grow revenue without drowning in operations.
          </Text>
          {/*           <Text
            fontFamily="Poppins, sans-serif"
            color="neutral.white"
            fontSize={{ base: "sm", sm: "md", md: "20px" }}
            mt={3}
            maxW={{ base: "95%", md: "4xl" }}
            lineHeight={{ base: "1.4em", md: "37px" }}
          >
            As your dedicated Virtual Assistant, I manage the tasks that slow
            you down—administrative work, content creation, web development,
            social media, and more—so you can focus on strategy, growth, and
            high-impact decisions.
          </Text> */}

          <HStack
            mt={6}
            wrap="wrap"
            spacing={4}
            justify={{ base: "center", md: "flex-start" }}
          >
            <Button
              bg="brand.300"
              px={{ base: 6, md: 12 }}
              py={{ base: 4, md: 6 }}
              fontSize={{ base: "14px", md: "18px" }}
              fontFamily="Poppins"
              color="white"
              _hover={{ bg: "brand.400", color: "neutral.white" }}
              onClick={scrollToServices}
            >
              Explore My Services <RiArrowDownLine />
            </Button>

            <Button
              variant="outline"
              borderColor="brand.50"
              color="brand.50"
              px={{ base: 6, md: 12 }}
              py={{ base: 4, md: 6 }}
              fontSize={{ base: "14px", md: "18px" }}
              fontFamily="Poppins"
              _hover={{ bg: "brand.200", color: "white" }}
              onClick={bookCall}
            >
              Book a Call
            </Button>
          </HStack>
        </Flex>
      </Box>
      <Flex direction="column" align="center" textAlign="center">
        <Heading
          textStyle="h3"
          mt={{ base: "40px", md: "80px" }}
          mb={{ base: "30px", md: "60px" }}
          fontSize={{ base: "2xl", md: "4xl" }}
        >
          Picture this...
        </Heading>
      </Flex>

      <VStack
        spacing={{ base: 4, md: 6 }}
        maxW="6xl"
        mx="auto"
        align="stretch"
        px={{ base: 4, md: 0 }}
      >
        {[
          "📥 Your inbox is overflowing, deadlines keep slipping, and every “quick task” steals another hour from your day.",
          "😓 Your business is growing and the admin pile is growing with it. Now, you’re working overtime just to keep up.",
          "💻 Your website is outdated, but hiring a full‑time frontend or backend developer isn’t in your budget.",
          "📝 You need clear documentation, blogs, proposals, or technical guides, and yet a dedicated writer feels out of reach.",
          "📣 Your digital marketing campaigns stall because you don’t have the resources to hire a full‑time strategist.",
          "⏰ Instead of strategizing for growth, you’re stuck chasing invoices, scheduling meetings, and updating spreadsheets late into the night.",
        ].map((text, idx) => (
          <Flex align="flex-start" key={idx}>
            <Text textStyle="body" fontSize={{ base: "sm", md: "md" }}>
              {text}
            </Text>
          </Flex>
        ))}

        <Flex
          direction="column"
          align="center"
          textAlign={{ base: "center", md: "left" }}
          mt={{ base: 6, md: 8 }}
        >
          <Heading
            textStyle="h3"
            mb={{ base: 4, md: 6 }}
            color="brand.200"
            fontSize={{ base: "lg", md: "2xl" }}
          >
            If this feels familiar,{" "}
            <Text as="span" color="brand.400">
              you’re not alone.
            </Text>{" "}
            Many entrepreneurs get buried in busywork that stalls growth.
          </Heading>
          <Text
            as="span"
            textStyle="body"
            color="brand.400"
            fontSize={{ base: "xs", md: "md" }}
          >
            But that doesn’t have to be your story. With my support, you’ll
            reclaim time, stay focused, and finally work on your business—not in
            it. I’ll handle the details so you can scale with clarity and
            confidence.
          </Text>
        </Flex>
      </VStack>
      <Flex direction="column" align="center" textAlign="center">
        <Box ref={servicesRef}>
          <Heading
            textStyle="h2"
            fontSize={{ base: "md", md: "2xl", lg: "3xl" }}
          >
            Here's how I can support you.
          </Heading>
        </Box>
      </Flex>

      <Box mx={{ base: 2, md: 12 }} mb={16}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 8, md: 14 }}>
          {services.map((service) => (
            <Box
              key={service.id}
              textAlign="left"
              p={{ base: 2, md: 6 }}
              m={{ base: 3, md: 5 }}
              border="1px solid"
              borderColor="brand.400"
              borderRadius="md"
              bg="white"
              boxShadow="sm"
            >
              {service.image && (
                <Image
                  src={service.image}
                  alt={service.title}
                  h={{ base: "150px", md: "200px" }}
                  w="100%"
                  objectFit="cover"
                  borderRadius="md"
                  mb={4}
                />
              )}

              <Heading
                textStyle="h3"
                fontSize={{ base: "lg", md: "xl" }}
                mt={2}
              >
                {service.title}
              </Heading>

              <Text fontSize={{ base: "sm", md: "md" }} mt={2} textStyle="body">
                {service.description}
              </Text>

              <Link
                as="button"
                onClick={bookCall}
                mt={4}
                color="brand.950"
                fontWeight="600"
                textDecoration="underline"
                _hover={{ textDecoration: "underline" }}
              >
                <Flex align="center">
                  <Text fontSize={{ base: "sm", md: "md" }}>Let’s connect</Text>
                  <RiArrowRightLine size={22} style={{ marginLeft: "6px" }} />
                </Flex>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Box px={{ base: 4, md: 8, lg: 8 }} maxW="8xl" mx="auto">
        <Heading textStyle="h2" mb={8}>
          My Work Process
        </Heading>

        <Text textStyle="body" mb={10}>
          A clear and collaborative approach to deliver reliable admin support,
          systems, content, and websites that support your growth.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10} bg="brand.50">
          <Box
            bg="white"
            boxShadow="md"
            borderRadius="md"
            p={{ base: 6, md: 8 }}
          >
            <Icon as={FaPhoneAlt} boxSize={6} color="brand.500" mb={4} />
            <Heading textStyle="h3" mb={2}>
              Discovery Call
            </Heading>
            <Text textStyle="body">
              We'll start with a friendly Zoom call to explore your goals,
              challenges, and priorities. I'll listen, ask questions, and help
              you clarify what support you need.
            </Text>
          </Box>

          <Box
            bg="white"
            boxShadow="md"
            borderRadius="md"
            p={{ base: 6, md: 8 }}
          >
            <Icon as={FaFileContract} boxSize={6} color="brand.500" mb={4} />
            <Heading textStyle="h3" mb={2}>
              Contract
            </Heading>
            <Text textStyle="body">
              If you choose to move forward, BA Enterprises will reach out with
              a contract. You’ll have time to review everything, ask questions,
              and make sure it aligns with your goals. If it feels like the
              right fit, you can sign the contract.
            </Text>
          </Box>

          <Box
            bg="white"
            boxShadow="md"
            borderRadius="md"
            p={{ base: 6, md: 8 }}
          >
            <Icon as={FaFolderOpen} boxSize={6} color="brand.500" mb={4} />
            <Heading textStyle="h3" mb={2}>
              Onboarding
            </Heading>
            <Text textStyle="body">
              After signing, we’ll hop on a quick onboarding call to align on
              first tasks, tools, and communication. I’ll gather your brand
              assets, set up folders and calendars, and get workflows running
              smoothly from day one.
            </Text>
          </Box>

          <Box
            bg="white"
            boxShadow="md"
            borderRadius="md"
            p={{ base: 6, md: 8 }}
          >
            <Icon as={FaTasks} boxSize={6} color="brand.500" mb={4} />
            <Heading textStyle="h3" mb={2}>
              Execution & Updates
            </Heading>
            <Text textStyle="body">
              I’ll deliver your content, tasks, website, or admin support in
              phases — including calendar management when needed — with regular
              updates and check‑ins. You stay informed and in control every step
              of the way.
            </Text>
          </Box>

          <Box
            bg="white"
            boxShadow="md"
            borderRadius="md"
            p={{ base: 6, md: 8 }}
          >
            <Icon as={FaCheckCircle} boxSize={6} color="brand.500" mb={4} />
            <Heading textStyle="h3" mb={2}>
              Review & Refine
            </Heading>
            <Text textStyle="body">
              We review together, refine based on feedback, and polish the final
              deliverables. I make sure everything aligns with your brand and
              goals.
            </Text>
          </Box>

          <Box
            bg="white"
            boxShadow="md"
            borderRadius="md"
            p={{ base: 6, md: 8 }}
          >
            <Icon as={FaHandsHelping} boxSize={6} color="brand.500" mb={4} />
            <Heading textStyle="h3" mb={2}>
              Ongoing Support
            </Heading>
            <Text textStyle="body">
              Need updates, new content, or extra help? I’m here for ongoing
              support, flexible tasks, and scalable solutions as your business
              grows.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Flex direction="column" align="center" textAlign="center">
        <Box>
          <Heading
            textStyle="h2"
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          >
            What You Can Expect When Working With Me.
          </Heading>
        </Box>
      </Flex>

      <Box mx={{ base: 4, md: 12, lg: 32 }} mb={16}>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 6, md: 8, lg: 10 }}
        >
          {/*           <Box
            gridRow={{ base: "span 1", md: "span 2" }}
            bgImage="url('/pic-1.jpg')"
            bgSize="cover"
            bgPos="center"
            borderRadius="md"
            p={{ base: 6, md: 10, lg: 15 }}
            color="white"
            position="relative"
          >

            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              bg="blackAlpha.600"
              borderRadius="md"
            />
            <Box position="relative" zIndex={1}>
              <Box fontSize={{ base: "2xl", md: "3xl", lg: "40px" }} mb="18px">
                🌟
              </Box>
              <Heading size={{ base: "md", md: "lg" }} mb={4} textStyle="h4">
                Reliable Admin & Social Media Support
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                textStyle="body"
                color="neutral.white"
              >
                Meetings scheduled, reminders sent, documents organized, posts
                published. I keep your calendar, tasks, and online presence
                running smoothly so you can reclaim time and focus on meaningful
                work.
              </Text>
            </Box>
          </Box> */}

          <Box
            bg="brand.300"
            p={{ base: 6, md: 10, lg: 12 }}
            borderRadius="md"
            ml={{ base: 0, md: 6 }}
            mt={{ base: 6, md: 0 }}
            color="neutral.white"
          >
            <Heading size={{ base: "sm", md: "md" }} mb={4} textStyle="h4">
              Clarity in Communication
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              textStyle="body"
              color="neutral.white"
            >
              Whether it’s technical documentation, social media captions, or
              long‑form articles, expect content that’s accurate, engaging, and
              aligned with your brand voice. I transform ideas into words that
              inform, inspire, and connect.
            </Text>
          </Box>

          <Box
            bg="brand.200"
            p={{ base: 6, md: 10, lg: 12 }}
            borderRadius="md"
            ml={{ base: 0, md: 6 }}
            mt={{ base: 6, md: 0 }}
            color="neutral.white"
          >
            <Heading size={{ base: "sm", md: "md" }} mb={4} textStyle="h4">
              Professional Web Development
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              textStyle="body"
              color="neutral.white"
            >
              From sleek, responsive frontends to powerful backends, I build
              websites that are fast, scalable, and aligned with your brand’s
              story. Expect digital products that work beautifully for you and
              your audience.
            </Text>
          </Box>

          <Box
            bg="brand.400"
            p={{ base: 6, md: 10, lg: 12 }}
            borderRadius="md"
            ml={{ base: 0, md: 6 }}
            mt={{ base: 6, md: 0 }}
          >
            <Heading
              size={{ base: "sm", md: "md" }}
              textStyle="h4"
              mb={4}
              color="neutral.white"
            >
              Consistency & Support
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              textStyle="body"
              color="neutral.white"
            >
              From admin systems to content workflows, I ensure everything runs
              reliably and stays on track. You’ll have ongoing guidance, timely
              updates, and flexible support for additional tasks that keep your
              operations focused and stress-free.
            </Text>
          </Box>

          {/*           <Box
            bg="brand.200"
            p={{ base: 6, md: 10, lg: 20 }}
            borderRadius="md"
            ml={{ base: 0, md: 6 }}
            mt={{ base: 6, md: 7 }}
            color="neutral.white"
          >
            <Heading size={{ base: "sm", md: "md" }} mb={4} textStyle="h4">
              Done‑for‑You Execution
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              textStyle="body"
              color="neutral.white"
            >
              No need to wrestle with tech or juggle admin. I handle the details
              and deliver polished results you can trust.
            </Text>
          </Box> */}
        </SimpleGrid>
      </Box>

      <Box px={{ base: 4, md: 8, lg: 16 }}>
        <Heading size="lg" mb={8} textAlign="center" textStyle="h3">
          Don't take my word for it! Hear from my clients.
        </Heading>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing={8}
          gap={8}
        >
          {testimonials.map((t) => (
            <Box
              key={t.id}
              bg="neutral.white"
              boxShadow="md"
              borderRadius="md"
              p={8}
              position="relative"
            >
              <Icon
                as={FaQuoteLeft}
                boxSize={6}
                color="brand.200"
                position="absolute"
                top={4}
                left={4}
              />
              <Text
                textStyle="body"
                fontSize="xs"
                mt={8}
                mb={4}
                color="gray.700"
              >
                {t.content}
              </Text>
              <Box mt={4} display="flex" alignItems="center">
                {t.image && (
                  <Avatar src={t.image} name={t.name} size="sm" mr={3} />
                )}
                <Box>
                  <Text fontWeight="bold" fontFamily="Playfair Display, serif">
                    {t.name}
                  </Text>
                  <Text
                    fontSize="xs"
                    color="gray.500"
                    fontFamily="Poppins, sans-serif"
                  >
                    {t.company || "Client"}
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Flex direction="column" align="center" textAlign="center" mt={10}>
        <Box>
          <Heading
            textStyle="h2"
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          >
            Frequently Asked Questions.
          </Heading>
        </Box>
      </Flex>

      <FAQs />
      <Footer />
    </>
  );
}


