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

const MotionBox = motion.create(Box);
const MotionHeading = motion.create(Heading);

export default function GraalOnlineZoneRules() {
  const rulesPages = [
    {
      title: "Account & Trading Violations",
      content: (
        <>
          <Text fontWeight="bold">Intentional Scamming</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Intentionally selling an account</ListItem>
            <ListItem><Box as="span" fontStyle="italic">Example: Trying to sell an account for in-game items</Box></ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Account Sharing</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Letting other players access your account</ListItem>
            <ListItem><Box as="span" fontStyle="italic">Example: Sharing account details with others</Box></ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Cross-Server Trading</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Selling items for another server's items</ListItem>
            <ListItem><Box as="span" fontStyle="italic">Example: Trading Zone items for Era items</Box></ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Real Money Trading (USDing)</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Selling/buying items for real money/iTunes</ListItem>
            <ListItem><Box as="span" fontStyle="italic">Example: Offering items for iTunes gift cards</Box></ListItem>
          </UnorderedList>
        </>
      )
    },
    {
      title: "Game Exploitation",
      content: (
        <>
          <Text fontWeight="bold">Minor Glitching</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Exploiting minor glitches for small advantages</ListItem>
            <ListItem><Box as="span" fontStyle="italic">Example: Riding broom while using sword</Box></ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Severe Glitching</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Exploiting major glitches for significant advantages</ListItem>
            <ListItem>Any glitching during basing is considered severe</ListItem>
            <ListItem><Box as="span" fontStyle="italic">Example: Speed hacking</Box></ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Hacking</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Using third-party tools to gain unfair advantages</ListItem>
            <ListItem><Box as="span" fontStyle="italic">Example: Speed hacking</Box></ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Boosting Statistics</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Artificially inflating stats</ListItem>
            <ListItem><Box as="span" fontStyle="italic">Example: Killing alternate accounts repeatedly</Box></ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Teaming</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Coordinating unfairly in events</ListItem>
            <ListItem><Box as="span" fontStyle="italic">Example: Teaming in Showdown or BombSpar</Box></ListItem>
          </UnorderedList>
        </>
      )
    },
    {
      title: "Player Conduct",
      content: (
        <>
          <Text fontWeight="bold">Staff Impersonation</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Pretending to be staff</ListItem>
            <ListItem><Box as="span" fontStyle="italic">Example: Copying staff appearance or threatening bans</Box></ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Game Disruption</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Interfering with others' gameplay</ListItem>
            <ListItem><Box as="span" fontStyle="italic">Example: Using auto-fire in safe zones</Box></ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Harassment</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>General Harassment: Persistent bothering of players</ListItem>
            <ListItem><Box as="span" fontStyle="italic">Example: Excessive PMs or chat harassment</Box></ListItem>
            
            <ListItem mt={2}>Sexual Harassment: Unwanted sexual advances</ListItem>
            <ListItem><Box as="span" fontStyle="italic">Example: Sexual comments via chat/PMs or character movements</Box></ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Inappropriate Behavior</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Acting inappropriately in public spaces</ListItem>
            <ListItem><Box as="span" fontStyle="italic">Example: Drawing inappropriate images on whiteboards</Box></ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Racism</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Discriminatory remarks based on race/culture</ListItem>
            <ListItem><Box as="span" fontStyle="italic">Example: Racial slurs in chat/PMs</Box></ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Solicitation</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Requesting social media for sexual purposes</ListItem>
            <ListItem><Box as="span" fontStyle="italic">Example: Asking for Kik/Skype for sexual conversations</Box></ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Severe Vulgarity</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Excessive offensive language</ListItem>
            <ListItem><Box as="span" fontStyle="italic">Example: Continuous swearing in chat</Box></ListItem>
          </UnorderedList>

          <Text fontWeight="bold" mt={4}>Personal Information</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Sharing private details</ListItem>
            <ListItem><Box as="span" fontStyle="italic">Example: Revealing phone numbers or passwords</Box></ListItem>
          </UnorderedList>
        </>
      )
    },
    {
      title: "Penalty System",
      content: (
        <>
          <Text fontWeight="bold">Multiple Offenses</Text>
          <UnorderedList mt={2} spacing={1}>
            <ListItem>Repeated violations in short time</ListItem>
            <ListItem><Box as="span" fontStyle="italic">Example: Several jailings in one month</Box></ListItem>
          </UnorderedList>

          <Text mt={4}>
            Penalties escalate based on violation severity and frequency. Serious offenses may result in immediate account bans.
          </Text>
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
            src="/zone.avif" 
            alt="Ol'West Icon"
            dragable="false"
            width="30px"
            height="30px"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
        />
        GraalOnline Zone Rules
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