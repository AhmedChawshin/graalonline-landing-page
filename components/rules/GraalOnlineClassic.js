// pages/download.js
"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  ListItem,
  UnorderedList,
  AccordionIcon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

export default function GraalOnlineClassicRules() {
  const rulesPages = [
    {
      title: "General Conduct",
      content: (
        <>
          <Text fontWeight="bold">Inappropriate Behavior</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Using offensive nicknames, guild names, status, etc.</ListItem>
            <ListItem>Using vulgar/offensive language</ListItem>
            <ListItem>Bullying or harassing other players</ListItem>
            <ListItem>Talking about self-harm or harming others</ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Staff Impersonation</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Copying the look and name of an administrator</ListItem>
            <ListItem>Attempting to pass as an administrator</ListItem>
            <ListItem>Threatening to ban someone</ListItem>
            <ListItem>Using "Graal Police", "Admin", or similar in names</ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Game Exploitation</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Abusing lag, bugs, or unintended mechanics</ListItem>
            <ListItem>Blocking entrances by pausing/lagging</ListItem>
            <ListItem>Glitching into inaccessible areas</ListItem>
            <ListItem>Boosting stats (kills, spar wins, etc.) illegitimately</ListItem>
          </UnorderedList>
        </>
      )
    },
    {
      title: "Serious Violations",
      content: (
        <>
          <Text fontWeight="bold">Account Related</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Selling, trading, or giving away accounts</ListItem>
            <ListItem>Selling in-game items/services for real money</ListItem>
            <ListItem>Ban evasion using alternate accounts</ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Security & Cheating</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Using third-party software to cheat</ListItem>
            <ListItem>Sharing accounts for competitive advantage</ListItem>
            <ListItem>VPN or macro usage for unfair advantages</ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Severe Misconduct</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Hate speech, racism, or discrimination</ListItem>
            <ListItem>Threatening to leak private information</ListItem>
            <ListItem>Physical threats, DDoSing, or doxxing</ListItem>
            <ListItem>Encouraging self-harm</ListItem>
          </UnorderedList>
        </>
      )
    },
    {
      title: "Reporting & Enforcement",
      content: (
        <>
          <Text fontWeight="bold">Reporting Guidelines</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Do not spam the report system</ListItem>
            <ListItem>Avoid false reports with malicious intent</ListItem>
            <ListItem>Report bugs/exploits instead of abusing them</ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Prohibited Content</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Sexual activity or explicit roleplay</ListItem>
            <ListItem>Requesting/trading explicit images</ListItem>
            <ListItem>Pornographic guild images</ListItem>
            <ListItem>Any content involving minors</ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Advertising</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>No scam or malicious site advertising</ListItem>
            <ListItem>Personal sites (graphics, portfolios) are allowed</ListItem>
          </UnorderedList>
        </>
      )
    }
  ];

  return (
    <VStack spacing={8} maxW="800px" mx="auto" textAlign="left" align="start">
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
        <MotionBox
            as="img"
            src="/classiclowreslogo.webp" 
            alt="Ol'West Icon"
            dragable="false"
            width="30px"
            height="30px"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
        />
        GraalOnline Classic Rules
        </MotionHeading>
      
      <Box w="full">
        <Accordion allowMultiple>
          {rulesPages.map((rule, index) => (
            <AccordionItem key={index} border="none" mb={2}>
              <AccordionButton
                bg="gray.900"
                _hover={{ bg: "gray.800" }}
                borderRadius="md"
                p={4}
                transition="all 0.3s ease"
                _expanded={{ bg: "gray.800", borderBottomRadius: 0 }}
                border="1px solid"
                borderColor="gray.700"
              >
                <Box flex="1" textAlign="left">
                  <Text fontSize="md" fontWeight="medium" color="gray.100">
                    {rule.title}
                  </Text>
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
                <Box fontSize="sm" color="gray.300">
                  {rule.content}
                </Box>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <Text fontSize="xs" color="gray.400" mt={2}>
        Last Updated: April 29, 2024 - These rules and guidelines are subject to change and are to be checked regularly for revisions.
        </Text>
      </Box>       
    </VStack>
  );
}