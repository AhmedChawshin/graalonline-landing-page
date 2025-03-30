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

export default function GraalOnlineEraRules() {
 

  const rulesPages = [
   
    {
        title: "General Rules",
        url: "http://www.graalonline.com/docs/conduct.php",
        content: (
          <>
            <Text fontWeight="bold">General Rules</Text>
            <Text mt={2}>
              GraalOnline Era generally follows the same conduct rules as the GraalOnline.com product.
            </Text>
            <Text mt={2}>
              To simplify and clarify specific activities for GraalOnline Era, please read through this entire document and abide by these rules. While playing GraalOnline Era, you are prohibited from doing any of the following:
            </Text>
            <Text fontWeight="bold" mt={4}>Vulgarity</Text>
            <Text mt={2}>
              This includes any attempt to use an alternate spelling of a swear word or phrase to avoid the swear filter, using abbreviations of a swear word or phrase, or using any word or phrase as an obscene or derogatory term. Excessive vulgarity of any kind is not tolerated.
            </Text>         
            <Text fontWeight="bold" mt={4}>Harassment</Text>
            <Text mt={2}>
              This includes bullying others, threatening, stalking, using abusive language, sexual advances, spamming private messages, hate speech, spamming long strings of characters in public chat or any other actions that disturb another player's gameplay experience.
            </Text>         
            <Text fontWeight="bold" mt={4}>Racism</Text>
            <Text mt={2}>
              Do not judge, insult, use racial slang, or any racist language towards others based on ethnic groups, cultural differences, or otherwise.
            </Text>          
            <Text fontWeight="bold" mt={4}>Staff Impersonation</Text>
            <Text mt={2}>
              Attempting to impersonate any current or retired GraalOnline Staff member such as having their nickname that includes an official staff tag such as "NICKNAME(Player Relations)", or writing in your status, in public chat, or in Private Messaging claiming to be staff. You will be warned, and your nickname/status reset as a result.
            </Text>         
            <Text fontWeight="bold" mt={4}>USD Transactions</Text>
            <Text mt={2}>
              Any attempt to buy, sell, trade, share, receive, or give away items or accounts in-game for any type of real money currency or gift card codes and vice versa.
            </Text>        
            <Text fontWeight="bold" mt={4}>Hacking</Text>
            <Text mt={2}>
              Attempting to alter game files, illegal purchases, or using tools (macros, changing movement speed, etc) to gain an advantage.
            </Text>         
            <Text fontWeight="bold" mt={4}>Abusing Glitches/Bugs</Text>
            <Text mt={2}>
              Exploiting or taking advantage of glitches that are not part of normal gameplay (lag glitching, glitching into otherwise inaccessible areas, etc). Bugs within GraalOnline Era should be reported to GraalOnline Era Staff.
            </Text>      
            <Box mt={4}>
              <Text fontWeight="bold">Boosting</Text>
              <Text mt={2}>
                <Box as="span" fontWeight="bold">Spar Stats:</Box> Asking other players to partake in spar matches and purposely lose with the intent on excessively increasing your spar wins.
              </Text>
              <Text mt={2}>
                <Box as="span" fontWeight="bold">Player Kills:</Box> Killing other players, or your alternate accounts continually to gain kills unfairly.
              </Text>    
            </Box>
            <Text fontWeight="bold" mt={4}>Additional Prohibitions</Text>
            <Text mt={2}>You are also prohibited from:</Text>
            <UnorderedList>
              <ListItem>Asking other players for accounts or any personal information (emails, passwords, or other personal/identifying details).</ListItem>
              <ListItem>Advertising websites or services which offer "free gralats", "free items", "free iTunes" or other GraalOnline Era-related scams.</ListItem>
              <ListItem>Attempting or offering to duplicate items.</ListItem>
              <ListItem>Trading in-game items from GraalOnline Era for items in other MMO games (cross-server trading).</ListItem>
              <ListItem>Attempting to steal other player accounts, or deceive someone into giving out their account information.</ListItem>
              <ListItem>Engaging in or promoting suggestive or explicit sexual conduct, illegal drugs, or alcoholism.</ListItem>
              <ListItem>Abusing the report system with pointless text. Excessive abuse of the report system will result in a warning.</ListItem>
              <ListItem>Continuously spamming messages to GraalOnline Era Staff with rude or pointless text.</ListItem>
              <ListItem>Engaging in or promoting religious, political, or cultural hate speech.</ListItem>
            </UnorderedList>
          </>
        )},{
        title: "Warning and Jailing Rules",
        url: "http://era-go.com/forum/showthread.php?Jailing-Rules",
        content: (
          <>
            <Text fontWeight="bold">Warning and Jailing Rules</Text>
            <Text mt={2}>
              For additional information, please see: 
              <Link href="http://era-go.com/forum/showthread.php?Jailing-Rules" isExternal>
                Jailing Rules
              </Link>
            </Text>
            <Text mt={2}>
              You may receive a warning for violating any of the GraalOnline Era rules. If you are warned, it will be recorded permanently on your account. According to the warning and jailing rules, receiving three warnings in a specific category will result in a 3-hour jail sentence. Each additional warning in the same category will increase the jail time by 1 hour.
            </Text>
            <Text mt={2}>
              Certain categories, such as USDing or hacking, are considered major violations and result in instant and longer jail times without notice. In extreme cases, this may lead to an account reset or a ban from all GraalOnline servers.
            </Text>
            <Text mt={2}>
              Be advised that GraalOnline Era Staff only warns players based on evidence or direct observations of rule violations, especially when investigating player reports. If you engage in or promote prohibited activity with a reported player, you may also receive a warning. When reporting a player, cease all communications with them and allow a Player Relations Team admin to handle the situation.
            </Text>
            <Text fontWeight="bold" mt={4}>Jail System</Text>
            <Text mt={2}>
              The jail system operates based on your IP address. If you are connected to WiFi with others (family, friends) and one of them is jailed, you will also be jailed. 
            </Text>
            <Text mt={2}>
              For example, Snake plays on his Android phone and follows the rules, but his brother Python, who plays on Facebook, is being vulgar and gets warned three times. Since they share a WiFi connection, both Snake and Python will be jailed.
            </Text>
            <Text mt={2} fontWeight="bold">
              Note: Being jailed due to shared WiFi will not affect your jail history.
            </Text>
          </>
        ),
      },
      {
        title: "Reporting Glitches and Offensive Behavior",
        url: "http://era-go.com/forum/showthread.php?Glitches-and-Offensive-Behavior",
        content: (
          <>
            <Text fontWeight="bold">Reporting Glitches</Text>
            <Text mt={2}>
              As a player, you are responsible for reporting any glitches and bugs you find to GraalOnline Era Staff. Please report glitches here:{" "} 
              <Link href="http://support.toonslab.com/" isExternal>
                Glitches & Bugs
              </Link>
            </Text>
            <Text mt={2}>
              Do not abuse any glitches or bugs you find. Reporting a glitch and seeing no immediate action taken does not mean you are allowed to continue abusing it. Allow a staff member to verify and correct the issue.
            </Text>
            <Text fontWeight="bold" mt={4}>Reporting Offensive Behavior</Text>
            <Text mt={2}>
              GraalOnline Era Staff's Player Relations Team strives to provide a safe and enjoyable experience for all players. To report a player violating these rules, go to their Profile `{'>'}`  More Actions `{'>'}` Report. Select the appropriate category (e.g., "offensive language" for vulgarity, "offensive name" for inappropriate nicknames) and provide a descriptive reason. A Player Relations Team admin will investigate the report as soon as possible.
            </Text>
            <Text mt={2}>
              Common reports that GraalOnline Era Staff will NOT take action on:
            </Text>
            <UnorderedList mt={2}>
              <ListItem>Trade scams: In-game item scamming is legal, except in cases of harassment, exploiting bugs, or attempting to "duplicate" items.</ListItem>
              <ListItem>Players not leaving a trade table, pizza table, etc.</ListItem>
              <ListItem>Players picking up shells, trash, mushrooms, etc.</ListItem>
              <ListItem>Players digging for shells in the same spot as you.</ListItem>
              <ListItem>Roleplaying drama.</ListItem>
              <ListItem>Using the word "noob." This is not considered vulgarity unless it involves excessive harassment.</ListItem>
              <ListItem>Being killed by another player (combat is part of the game).</ListItem>
            </UnorderedList>
            <Text mt={2}>
              If a player is harassing you via Private Messaging, you can block them by going to their Profile {'>'}  More Actions {'>'}  Report and Block PM.
            </Text>
            <Text mt={2}>
              If you find a player severely violating these rules (e.g., account selling, attempting to steal account information, hacking) and a Player Relations Team admin is not available, you may use the support system.

            </Text>
            <Text mt={2}>
              Please include screenshots or video proof when reporting severe rule violations.
            </Text>
          </>
        ),
      },      
      {
        title: "Account Rules, Guidelines and Safety",
        url: "http://support.toonslab.com/",
        content: (
          <>
            <Text fontWeight="bold">Account Rules, Guidelines and Safety</Text>
            <Text mt={2}>
              When you create an account on GraalOnline Era, it is entirely your responsibility to maintain its security and privacy. You may share your account at YOUR OWN RISK. Graal staff will not assist you in regaining access to your account if you give it away. You are not allowed to sell, buy, or trade accounts under any circumstances for any reason. If you are found to be doing any of these actions, your account will be jailed without notice and, in extreme cases, may be reset or banned from GraalOnline servers.
            </Text>
            <Text mt={2}>
              Never give out or ask for personal account information for any reason, including emails, Graal IDs, and passwords.
            </Text>
            <Text mt={2}>
              Accounts on GraalOnline Era are identified with an email address to allow a player to use their account on any device. For better security of your GraalOnline Era account, GraalOnline Era Staff recommends the following:
            </Text>
            <UnorderedList>
              <ListItem>Secure your email account using your email provider's security settings, such as text or voice call code options for authorization.</ListItem>
              <ListItem>Be careful who or where you share your email address and Graal ID outside of GraalOnline Era, such as Facebook, Twitter, etc. Keep your personal account information private at all times.</ListItem>
              <ListItem>Do not share email accounts with another person. Ensure you alone have full authorization.</ListItem>
              <ListItem>Revoke access in Identify options in-game to allow only the devices you currently have access to.</ListItem>
            </UnorderedList>
            <Text mt={2}>
              You are solely responsible for the safety and security of your GraalOnline Era account. If you are a victim of account theft and are found to have knowingly shared your account information with another player, GraalOnline Era Staff may not be able to assist you in retrieving your account. Ensure that your emails and passwords are safely stored.
            </Text>
            <Text mt={2}>
              For account issues, please use any ONE of the following solutions to contact Staff:
            </Text>
            <UnorderedList>
              <ListItem>
                <Link href="http://support.toonslab.com/" isExternal>
                  Submit a ticket via Toonslab Support
                </Link>
              </ListItem>
              <ListItem>Email: <Link href="mailto:era@graalonline.com">era@graalonline.com</Link></ListItem>
            </UnorderedList>
          </>
        ),
      }
  ];

  return (
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
      >
        GraalOnline Era Rules
      </MotionHeading>
      {/* Rules Section */}
      <Box w="full">
        <Accordion allowMultiple>
          {rulesPages.map((rule, index) => (
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
          Last Updated: October 21, 2015 - These rules and guidelines are subject to change and are to be checked regularly for revisions.
        </Text>
      </Box>       
    </VStack>
  );
}

