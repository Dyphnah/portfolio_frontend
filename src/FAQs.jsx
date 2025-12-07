import { Accordion, Span, Box } from "@chakra-ui/react";

export default function FAQs(){
  return (
    <Box
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 12 }}
      maxW="6xl"
      mx="auto"
    >
      <Accordion.Root collapsible defaultValue={["b"]}>
        {items.map((item, index) => (
          <Accordion.Item key={index} value={item.value}>
            <Accordion.ItemTrigger
              py={{ base: 3, md: 4 }}
              px={{ base: 2, md: 4 }}
              _hover={{ bg: "gray.50" }}
            >
              <Span
                flex="1"
                fontSize={{ base: "md", md: "lg" }}
                fontFamily = "Playfair Display, serif"
                fontWeight="semibold"
                textAlign="left"
              >
                {item.title}
              </Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>

            <Accordion.ItemContent>
              <Accordion.ItemBody
                px={{ base: 2, md: 4 }}
                pb={{ base: 4, md: 6 }}
                fontSize={{ base: "sm", md: "16px" }}
                color="gray.700"
              >
                {item.text}
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Box>
  );
};

const items = [
  {
    value: "a",
    title: "How do you handle working across different time zones?",
    text: " I adapt to your schedule by clearly agreeing on overlapping hours for meetings and urgent tasks. Most communication and deliverables are managed asynchronously, so you’ll always have updates waiting for you when you start your day.",
  },
  {
    value: "b",
    title: "What kind of tasks can I delegate to you?",
    text: "Clients typically rely on me for inbox and calendar management, research, content creation, website updates, and workflow automation. If a task can be done remotely, I’ll find a way to support it efficiently. I also provide a document that outlines common tasks you can delegate, making it easier to identify where I can add the most value to your workflow.",
  },
  {
    value: "c",
    title: "How do you ensure confidentiality and professionalism?",
    text: "I follow strict data‑handling practices, use secure tools, and maintain clear boundaries. Professional communication and reliability are at the core of my work, so you can trust that sensitive information stays protected.",
  },
  {
    value: "d",
    title: "How do you communicate and provide updates?",
    text: "I tailor communication to your preference — whether that’s email, Slack, WhatsApp, or project management tools. I provide regular updates and status reports so you always know what’s in progress and what’s completed.",
  },
  {
    value: "e",
    title: "What happens if you’re unavailable or on leave?",
    text: "I give advance notice of any planned time off and ensure all critical tasks are completed or delegated before then. For ongoing projects, I prepare clear documentation so there’s no disruption to your workflow.",
  },
];
