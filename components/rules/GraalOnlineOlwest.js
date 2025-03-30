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

export default function GraalOnlineOlWestRules() {
  const rulesPages = [
    {
      title: "Account Security",
      content: (
        <>
          <Text fontWeight="bold">Account Protection</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Never share your email with other players</ListItem>
            <ListItem>Only identify with an email you own and control</ListItem>
            <ListItem>Only sign into devices you own</ListItem>
            <ListItem>Identify before game updates to prevent data loss</ListItem>
            <ListItem>Staff will never ask for your account information</ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Account Sharing</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Account sharing is strictly prohibited</ListItem>
            <ListItem>Shared accounts that get stolen won't be recovered</ListItem>
            <ListItem>Account sharing will result in warnings and jail time</ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Job Skills</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Identifying after gaining job skills will reset progress</ListItem>
            <ListItem>Identify before starting work to preserve progress</ListItem>
          </UnorderedList>

          <Text mt={4}>
            For account issues: <Link href="http://support.toonslab.com/" isExternal>Submit a support ticket</Link>
          </Text>
        </>
      )
    },
    {
      title: "General Rules",
      content: (
        <>
          <Text fontWeight="bold">Player Conduct</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Respect all players and staff</ListItem>
            <ListItem>Report issues instead of retaliating</ListItem>
            <ListItem>Block players who harass you</ListItem>
            <ListItem>Do not abuse the report system</ListItem>
            <ListItem>Stop contacting players who ask to be left alone</ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Language & Behavior</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Swearing at others is prohibited</ListItem>
            <ListItem>Toggle swear filter in settings as preferred</ListItem>
            <ListItem>Sexual harassment results in immediate jail</ListItem>
            <ListItem>Racism results in immediate jail</ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Game Integrity</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>No third-party programs or hacking</ListItem>
            <ListItem>No glitching into restricted areas</ListItem>
            <ListItem>No staff impersonation (warnings then jail)</ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Trading</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>No real-money trading (iTunes, PayPal, etc.)</ListItem>
            <ListItem>No cross-server trading</ListItem>
            <ListItem>Staff cannot help with trade scams</ListItem>
            <ListItem>No macroing (can result in jail or reset)</ListItem>
          </UnorderedList>
        </>
      )
    },
    {
      title: "Events",
      content: (
        <>
          <Text mt={2}>
            Events reward Horse Shoes (HS) for exclusive items. Be patient - winning takes practice!
          </Text>

          <Text fontWeight="bold" mt={4}>Event Types</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Race: First to finish line wins</ListItem>
            <ListItem>Chance: Random selection winner</ListItem>
            <ListItem>Team: Cooperative team play</ListItem>
            <ListItem>Skill: Competitive challenges</ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Event Rules</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Respect event hosts and participants</ListItem>
            <ListItem>Staff can only host 5 events daily</ListItem>
            <ListItem>No helping opposing teams in team events</ListItem>
            <ListItem>No glitches/hacks during events</ListItem>
          </UnorderedList>
        </>
      )
    },
    {
      title: "Staff Information",
      content: (
        <>
          <Text mt={2}>
            Staff roles include: Manager, Developer, Sheriff, Deputy, LAT, Gani, Graphics, and Gunsmith.
          </Text>

          <Text fontWeight="bold" mt={4}>Identifying Staff</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Staff names appear in gold color</ListItem>
            <ListItem>Emerald Saloon upstairs displays staff list</ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Contacting Staff</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Staff are here to help improve your experience</ListItem>
            <ListItem>Include your question in first PM to staff</ListItem>
            <ListItem>For staff complaints, contact high-ranking staff with evidence</ListItem>
          </UnorderedList>
        </>
      )
    },
    {
      title: "Sparring & Basing",
      content: (
        <>
          <Text fontWeight="bold">Stat Boosting</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>No spar win boosting (results in stat reset)</ListItem>
            <ListItem>No kill boosting (results in kill reset)</ListItem>
            <ListItem>Killing AFK players is permitted</ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Fair Play</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>No glitches/hacks in spar or basing</ListItem>
            <ListItem>Helping others boost results in punishment</ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Gang Rules</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>No selling gang rewards (130hr jail + penalties)</ListItem>
            <ListItem>No inappropriate guild names</ListItem>
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
            src="/olwest.avif"
            alt="Ol'West Icon"
            dragable="false"
            width="30px"
            height="30px"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
        />
        GraalOnline Ol'West Rules
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
          Last Updated: March 30, 2025
        </Text>
      </Box>       
    </VStack>
  );
}