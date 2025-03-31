// pages/faq.js
"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
  Select,
  Tag,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion.create(Box);
const MotionHeading = motion.create(Heading);

const faqData = [
  {
    question: "Support for playerworlds",
    answer:
      "Please only contact this email playerworlds@graalonline.com with server support questions such as locking yourself out of ServerOps.",
    category: "GraalOnline PlayerWorlds",
  },
  {
    question: "Ban assistance",
    answer:
      "To get proper and fast replies from support regarding bans:<br /><br />1. Use support.toonslab.com to inquire about a ban.<br />2. Provide your BanID.<br />3. Please keep the request short and to the point.",
    category: "Everything",
  },
  {
    question: "Payment issues.",
    answer:
    "There are multiple ways to get reimbursed if you didn’t receive Gralats from a purchase:<br /><br /><strong>Primary Method:</strong> Create a ticket with the following details: Your GraalID (found in the in-game feedback tab)The entire purchase receipt<br /><strong>Alternative Method:</strong> Request a refund directly through: Google Play Store or Apple App Store<br />For either method, please provide all relevant information to ensure a smooth reimbursement process.",    category: "Everything",
  },
  {
    question: "Apple refund Instructions",
    answer:
      "https://support.apple.com/en-ca/HT204084",
    category: "Everything",
  },
  {
    question: "Google Play Store Instructions",
    answer:
      "https://support.google.com/googleplay/answer/2479637?hl=en",
    category: "Everything",
  },
];

// Sorting options
const categories = [
  "Everything",
  "GraalOnline Era",
  "GraalOnline Classic",
  "GraalOnline Ol'West",
  "GraalOnline Zone",
  "GraalOnline PlayerWorlds",
];

// Define category colors
const categoryColors = {
  "Everything": "green",
  "GraalOnline Era": "red",
  "GraalOnline Classic": "blue",
  "GraalOnline Ol'West": "orange",
  "GraalOnline Zone": "purple",
  "GraalOnline PlayerWorlds": "gray",
};

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Everything");

  // Filter FAQ based on search term and selected category
  const filteredFaq = faqData.filter((item) => {
    const matchesSearch = item.question
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Everything" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <MotionBox
      minH="100vh"
      bgRepeat="repeat"
      bgSize="auto"
      color="white"
      px={{ base: 4, md: 8 }}
      py={12}
      position="relative"
      overflow="hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <VStack spacing={8} maxW="800px" mx="auto" textAlign="left" align="start">
        {/* Header */}
        <MotionHeading
          as="h1"
          size="xl"
          mt={10}
          textAlign="center"
          fontWeight="bold"
          textShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          Frequently Asked Questions
        </MotionHeading>

        {/* Search and Sort Controls */}
        <Box w="full">
          <Input
            placeholder="Search for a question..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            bg="gray.700"
            color="white"
            borderColor="gray.600"
            _hover={{ borderColor: "gray.500" }}
            _focus={{ borderColor: "brand.400", boxShadow: "none" }}
            mb={4}
          />
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            bg="gray.700"
            color="white"
            borderColor="gray.600"
            _hover={{ borderColor: "gray.500" }}
            _focus={{ borderColor: "brand.400", boxShadow: "none" }}
            mb={6}
          >
            {categories.map((category) => (
              <option key={category} value={category} style={{ color: "white" }}>
                {category}
              </option>
            ))}
          </Select>
        </Box>

        {/* FAQ Accordion */}
        <Box w="full">
          <Accordion allowMultiple>
            {filteredFaq.length > 0 ? (
              filteredFaq.map((faq, index) => (
                <AccordionItem key={index} border="none" mb={2}>
                  <AccordionButton
                    bg="gray.900"
                    _hover={{
                      bg: "gray.800",
                    }}
                    borderRadius="md"
                    p={4}
                    transition="all 0.3s ease"
                    _expanded={{ bg: "gray.800", borderBottomRadius: 0 }}
                    border="1px solid"
                    borderColor="gray.700"
                  >
                    <Box flex="1" textAlign="left" display="flex" alignItems="center" gap={2}>
                      <Text
                        fontSize="md"
                        fontWeight="medium"
                        color="gray.100"
                      >
                        {faq.question}
                      </Text>
                      <Tag
                        size="sm"
                        variant="solid"
                        colorScheme={categoryColors[faq.category]}
                        borderRadius="full"
                        px={2}
                        py={1}
                        textTransform="uppercase"
                        boxShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
                      >
                        {faq.category}
                      </Tag>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel
                    bg="gray.900"
                    borderRadius="md"
                    mt={-1}
                    p={4}
                    borderTop="1px solid"
                    borderColor="gray.700"
                    borderBottom="1px solid"
                    borderBottomColor="gray.700"
                  >
                    <Box
                      fontSize="sm"
                      color="gray.300"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </AccordionPanel>
                </AccordionItem>
              ))
            ) : (
              <Text color="gray.400" fontSize="lg">
                No questions match your search or category.
              </Text>
            )}
          </Accordion>
        </Box>
      </VStack>
    </MotionBox>
  );
}