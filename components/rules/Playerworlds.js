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

export default function GraalOnlinePlayerWorldsRules() {
  const rulesPages = [
    {
      title: "General Responsibilities",
      content: (
        <>
          <Text mt={2}>
            All Graal servers must follow these rules to maintain a safe environment. Servers violating these rules may face penalties including removal of Classic/Hosted status or shutdown.
          </Text>
          
          <Text fontWeight="bold" mt={4}>Manager Responsibilities</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Must enforce all GraalOnline agreements and policies</ListItem>
            <ListItem>Responsible for all server content and staff behavior</ListItem>
            <ListItem>Must be proactive in enforcing rules</ListItem>
            <ListItem>Must clearly communicate server-specific rules to players</ListItem>
          </UnorderedList>
        </>
      )
    },
    {
      title: "Content & Files",
      content: (
        <>
          <Text fontWeight="bold">A. Files and Content</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>No copyrighted material allowed</ListItem>
            <ListItem>All content must be age-appropriate and non-offensive</ListItem>
            <ListItem>Radio content must be suitable for all ages</ListItem>
            <ListItem>No stealing content/ideas from other servers</ListItem>
            <ListItem>Server-specific content can only be used on its original server</ListItem>
            <ListItem>Player graphics require artist permission for multi-server use</ListItem>
            <ListItem>All uploaded files become GraalOnline property</ListItem>
            <ListItem>Server staff must maintain proper backups</ListItem>
            <ListItem>Classic servers cannot reset user data without PWA approval</ListItem>
          </UnorderedList>
        </>
      )
    },
    {
      title: "Staff Management",
      content: (
        <>
          <Text fontWeight="bold">B. Staff Requirements</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>All staff must follow GraalOnline agreements</ListItem>
            <ListItem>No honorary staff positions allowed</ListItem>
            <ListItem>Staff tags must clearly indicate roles</ListItem>
            <ListItem>RC names must be professional and identifiable</ListItem>
            <ListItem>Staff tools must be designed to prevent abuse</ListItem>
            <ListItem>Staff should only receive necessary rights/tools</ListItem>
            <ListItem>RC access must be IP/PCID restricted</ListItem>
            <ListItem>Full RC rights should be limited to Server Admins+</ListItem>
            <ListItem>File write/delete access should be minimized</ListItem>
            <ListItem>Only managers should access server logs</ListItem>
            <ListItem>Mass messages should be for important info only</ListItem>
          </UnorderedList>
        </>
      )
    },
    {
      title: "Guilds & Systems",
      content: (
        <>
          <Text fontWeight="bold">C. Local Guilds</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>No impersonating privilege/staff guilds</ListItem>
            <ListItem>No offensive/copyrighted/threatening guild names</ListItem>
            <ListItem>No unofficial guilds in staff lists</ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>D. System Abuse</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>No scripts to imitate other players</ListItem>
            <ListItem>Scripts must not interfere with core Graal functions</ListItem>
            <ListItem>Player tracking limited to account/nick/community names</ListItem>
            <ListItem>Storing player IPs/PCIDs is strictly forbidden</ListItem>
          </UnorderedList>
        </>
      )
    },
    {
      title: "External Communities",
      content: (
        <>
          <Text fontWeight="bold">E. External Community</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Third-party sites must enforce in-game behavior standards</ListItem>
            <ListItem>Sites must notify users to use unique passwords</ListItem>
            <ListItem>Passwords must be securely hashed</ListItem>
            <ListItem>No claiming "official" status without permission</ListItem>
            <ListItem>No questionable/illegal/adult content</ListItem>
            <ListItem>PWA judges third-party site legitimacy</ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Policy Notes</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>GraalOnline reserves right to amend rules</ListItem>
            <ListItem>Players must stay updated on rule changes</ListItem>
            <ListItem>PWA enforces rules case-by-case</ListItem>
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
      >
        GraalOnline PlayerWorlds Rules
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
          Last Updated: January 24, 2015
        </Text>
      </Box>       
    </VStack>
  );
}