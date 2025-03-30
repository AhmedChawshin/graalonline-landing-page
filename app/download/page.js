// pages/download.js
"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  Divider,
  UnorderedList,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

export default function Download() {
  return (
    <MotionBox
      minH="100vh"
      bgImage="url('https://i.imgur.com/oN8rCgO.png')"
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
          textAlign="center"
          fontWeight="bold"
          textShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Download GraalOnline
        </MotionHeading>

        {/* Account Info */}
        <Box>
          <Text fontSize="lg">
            While the client is downloading, you can{" "}
            <Link href="https://www.graalonline.com/playerworlds/accounts/signup" isExternal color="brand.400" fontWeight="bold">
              Register a new free account <ExternalLinkIcon mx="2px" />
            </Link>
            . Without an account, you can play as a guest.
          </Text>
          <Text fontSize="lg" mt={2}>
            Without a Gold membership, you can only play 5 hours per month. To know other advantages you have with Gold membership, go to{" "}
            <Link href="https://www.graalonline.com/playerworlds/stores/upgrade" isExternal color="brand.400" fontWeight="bold">
              this page <ExternalLinkIcon mx="2px" />
            </Link>
            . In order to play more, you have to{" "}
            <Link href="https://www.graalonline.com/playerworlds/stores/upgrade" isExternal color="brand.400" fontWeight="bold">
              subscribe to GraalOnline <ExternalLinkIcon mx="2px" />
            </Link>
            .
          </Text>
        </Box>

        {/* System Requirements */}
        <Box>
          <Text fontSize="lg">
            To install and play Graal, your computer system must meet the Minimum Requirement below. For smoother and more enjoyable gameplay, we highly suggest the Recommended System.
          </Text>
        </Box>

        {/* Download Links */}
        <Box w="full">
          <Heading as="h2" size="md" mb={4} fontWeight="bold" color="gray.200">
            Download GraalOnline Game Client
          </Heading>
          <UnorderedList spacing={3} pl={4}>
            <ListItem>
              <Link href="https://www.graalonline.com/playerworlds/downloads/file?name=GraalSetup.exe" isExternal color="brand.400" fontWeight="medium">
                GraalOnline Game Client for Windows <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.graalonline.com/playerworlds/downloads/file?name=Graal6_linux64.zip" isExternal color="brand.400" fontWeight="medium">
                Graal Game Client for Linux <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.graalonline.com/playerworlds/downloads/file?name=Graal6.dmg" isExternal color="brand.400" fontWeight="medium">
                GraalOnline Game Client for Mac <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>

        {/* DirectX Info */}
        <Box>
          <Text fontSize="sm" color="gray.400">
            Windows and DirectX are registered trademarks of Microsoft Corporation. Get the latest version of DirectX® from{" "}
            <Link
              href="http://www.microsoft.com/downloads/details.aspx?FamilyID=2da43d38-db71-4c1b-bc6a-9b6652cd92a3&displaylang=en"
              isExternal
              color="brand.400"
              fontWeight="medium"
            >
              Microsoft <ExternalLinkIcon mx="2px" />
            </Link>
            .
          </Text>
        </Box>

        {/* License Agreement */}
        <Box w="full">
          <Accordion allowToggle>
            <AccordionItem border="none">
              <AccordionButton
                bg="gray.800"
                _hover={{ bg: "gray.700" }}
                borderRadius="md"
                p={4}
                _expanded={{ bg: "gray.700", borderBottomRadius: 0 }}
              >
                <Box flex="1" textAlign="left">
                  <Heading as="h2" size="md" color="gray.200">
                    End User License Agreement
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel bg="gray.800" borderRadius="md" mt={-1} p={6} borderTop="1px solid" borderColor="gray.700">
                <VStack spacing={4} align="start" color="gray.300" fontSize="sm">
                  <Text fontWeight="bold">Account Registration</Text>
                  <Text fontWeight="bold">End User License Agreement</Text>

                  <Box>
                    <Text fontWeight="bold">Definitions.</Text>
                    <Text>
                      The following definitions apply to the terms as they appear in this License: "The Program" ("Program") means the computer programs and documentation included in the file(s) or package and is provided on an "AS IS" basis, for your private personal use only. Graal client means the combination of the client software.
                    </Text>
                  </Box>

                  <Box>
                    <Text fontWeight="bold">Terms of License.</Text>
                    <Text>
                      The Program is licensed by LINUX Cyberjoueurs to you subject to the terms of this Agreement. LINUX Cyberjoueurs grants you a nonexclusive license to: 1) Load the Program onto your computer's storage device from the media provided. 2) Allow others to run Program in standard Mode, unless or until requested by LINUX Cyberjoueurs not to do so. You are responsible for obtaining your own Internet access and any related long distance charges (if any).
                    </Text>
                  </Box>

                  <Box>
                    <Text fontWeight="bold">Copyright and Other Restrictions.</Text>
                    <Text>
                      The Program is owned by LINUX Cyberjoueurs and is protected by the local copyright laws and international treaty provisions. LINUX Cyberjoueurs retains all rights not expressly granted. None of the components of the Program (including the documentation) may be copied, removed or altered, in whole or part, for any unauthorized use.
                    </Text>
                  </Box>

                  <Box>
                    <Text fontWeight="bold">Rules of the Graal Online System.</Text>
                    <Text>
                      To ensure an enjoyable experience for as many people as possible, you agree to comply with generally accepted standards of proper online behavior. Any GraalOnline administrator and LINUX Cyberjoueurs reserves the right to determine, in its sole discretion, what constitutes generally accepted standards of online behavior and may, without notice and at any time, suspend or terminate your access to the Graal Online System. LINUX Cyberjoueurs does not warrant or guarantee that the Graal Services and Information and the functions or services performed by the administration team will be uninterrupted or error-free. You may not engage in conduct or communication while using the Graal Online System which is unlawful or which restricts or inhibits any other user from using or enjoying the Graal Online System. You agree to use the Graal Online System only for lawful purposes. Set forth below are some common examples of impermissible conduct. This list is not exhaustive. Graal Online administrators and LINUX Cyberjoueurs reserves the right, but does not assume the responsibility, to restrict conduct which any Graal Online administrator or LINUX Cyberjoueurs himself deems in its discretion to be harmful to individual users, damaging to the communities which use the Graal Online System, or in violation of any third party's rights. You acknowledge, however, that communication over the Graal Online System and the Internet often occurs in real-time and LINUX Cyberjoueurs cannot, and does not intend to, screen communication in advance.
                    </Text>
                  </Box>

                  <Box>
                    <Text fontWeight="bold">Agreement.</Text>
                    <Text>
                      This Agreement comprise the entire agreement between LINUX Cyberjoueurs and you, and supersedes any prior agreements between you and LINUX Cyberjoueurs with respect to the subject matter hereof or thereof. However, you are subject to any additional terms and conditions of which you are notified and/or which may apply when using third party content, software or Graal Online system. LINUX Cyberjoueurs may revise this Agreement at any time, and such revision shall be effective thirty (30) days after posting of the revised Agreement at this location. You agree to review the Agreement periodically to become aware of such revisions. If any such revision is unacceptable to you, you may terminate this license as provided below. Your continued use of the Graal Online system following posting of the revised Agreement on the Graal Online website (
                      <Link href="http://www.graalonline.com/docs/agreement.php" isExternal color="brand.400">
                        http://www.graalonline.com/docs/agreement.php <ExternalLinkIcon mx="2px" />
                      </Link>
                      ) shall be conclusively deemed to be acceptance of all such revisions. The term "User" in this Agreement refers to any person or entity, including you, that has entered into this Agreement with Cyberjoueur.
                    </Text>
                  </Box>

                  <Box>
                    <Text fontWeight="bold">User Information. Former Users.</Text>
                    <Text>
                      Users whose accounts have been terminated by any Graal Online administrator or LINUX Cyberjoueurs himself may not access the Graal Online system in any manner or for any reason without the express written permission of Cyberjoueur. Active Users may not knowingly allow former Users who have been terminated to use the active Users' accounts.
                    </Text>
                  </Box>

                  <Box>
                    <Text fontWeight="bold">Disclaimer of Warranty.</Text>
                    <Text>
                      To the maximum extent allowed by law, Cyberjoueur, its licensees and subcontractors do not warrant any connection to, transmission over, nor results or use of, any network connection or facilities provided (or failed to be provided) through the Graal Online system. User is responsible for assessing its own computer and transmission network needs, and the results to be obtained there from. YOU EXPRESSLY AGREE THAT USE OF THE PROGRAM, ALL SOFTWARE DISTRIBUTED BY THE GRAAL ONLINE WEBSITE, AND THE INTERNET ARE AT YOUR SOLE RISK. THE PROGRAM AND ALL SOFTWARE DISTRIBUTED BY THE GRAAL ONLINE WEBSITE ARE PROVIDED ON AN "AS IS", "AS AVAILABLE" BASIS, UNLESS SUCH WARRANTIES ARE LEGALLY INCAPABLE OF EXCLUSION. LINUX CYBERJOUEURS DISCLAIMS ALL WARRANTIES OR CONDITIONS, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT OF THIRD PARTY RIGHTS, AND THOSE ARISING FROM A COURSE OF DEALING OR USAGE OF TRADE, WITH RESPECT TO THE LINUX CYBERJOUEURS SYSTEM, ALL SOFTWARE DISTRIBUTED BY CYBERJOUEUR, AND THE INTERNET. LINUX CYBERJOUEURS ASSUMES NO RESPONSIBILITY FOR ANY DAMAGES SUFFERED BY THE USER, INCLUDING, BUT NOT LIMITED TO, LOSS OF DATA FROM DELAYS, NON DELIVERIES, ERRORS, SYSTEM DOWN TIME, MIS DELIVERIES OR SERVICE INTERRUPTIONS CAUSED BY THE NEGLIGENCE OF CYBERJOUEUR, ITS LICENSORS AND SUBCONTRACTORS, OR USER'S OWN ERRORS AND/OR OMISSIONS.
                    </Text>
                  </Box>

                  <Box>
                    <Text fontWeight="bold">Limitation of Liability.</Text>
                    <Text>
                      YOU ACKNOWLEDGE THAT LINUX CYBERJOUEURS SHALL NOT ASSUME OR HAVE ANY LIABILITY FOR ANY ACTION BY CYBERJOUEUR, ANY GRAAL ONLINE ADMINISTRATOR OR ITS OTHER LICENSEES WITH RESPECT TO CONDUCT, COMMUNICATION OR CONTENT ON THE GRAAL ONLINE SYSTEM. LINUX CYBERJOUEURS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES OR LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS INFORMATION, OR ANY OTHER PECUNIARY LOSS) IN CONNECTION WITH THE GRAAL ONLINE SYSTEM OR WITH ANY OTHER PRODUCT OR SERVICE PROVIDED BY THE GRAAL ONLINE WEBSITE. LINUX CYBERJOUEURS ENTIRE LIABILITY AND YOUR EXCLUSIVE REMEDY WITH RESPECT TO USE OF THE GRAAL ONLINE SYSTEM AND ALL SOFTWARE DISTRIBUTED BY THE LINUX CYBERJOUEURS SHALL BE THE REPLACEMENT OF ANY SOFTWARE DEVELOPED BY OR FOR LINUX CYBERJOUEURS WHICH IS FOUND TO BE DEFECTIVE, USING MEDIA CHOSEN BY CYBERJOUEUR. LINUX CYBERJOUEURS LIABILITY TO YOU FOR BREACH OF THIS AGREEMENT IS LIMITED SOLELY TO THE REGISTRATION FEE PAID BY YOU TO REGISTER THE PROGRAM AND ACCESS THE LINUX CYBERJOUEURS SYSTEM. BECAUSE SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CERTAIN DAMAGES, IN SUCH STATES CYBERJOUEUR'S LIABILITY IS LIMITED TO THE EXTENT PERMITTED BY LAW.
                    </Text>
                  </Box>

                  <Box>
                    <Text fontWeight="bold">Indemnification.</Text>
                    <Text>
                      Upon request of Cyberjoueur, you agree to defend, indemnify and hold harmless Cyberjoueur, its affiliated companies, licensees, and distributors from all liabilities, claims and expenses, including attorneys' fees, arising from breach of this Agreement by use of, or in connection with, the transmission by or through your User access of any Content on the Graal Online system. LINUX Cyberjoueurs reserves the right, at its own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you hereunder, and in such event, you shall have no further obligation to provide indemnification for such matter.
                    </Text>
                  </Box>

                  <Box>
                    <Text fontWeight="bold">Termination.</Text>
                    <Text>
                      Either you or LINUX Cyberjoueurs may terminate this Agreement at any time. Your only right with respect to any dissatisfaction with any Agreement term, or policy or practice of a Graal Online administrator or LINUX Cyberjoueurs in operating the Graal Online system or change therein is to terminate this Agreement by notifying Graal Online Support Staff of your desire to terminate and confirming such request in writing or electronically if requested. Your notice of termination will be effective upon receipt by the Graal Online Support Staff, or upon receipt of confirmation if confirmation is requested.
                    </Text>
                  </Box>

                  <Box>
                    <Text fontWeight="bold">Third Party Products and Graal Online system.</Text>
                    <Text>
                      LINUX Cyberjoueurs does not endorse, warrant or guarantee any product or service offered through the Graal Online system by any third party, will not be a party to or in any way monitor any transaction between you and third-party providers of products and will not bear any responsibility for their products, policies or actions.
                    </Text>
                  </Box>

                  <Box>
                    <Text fontWeight="bold">U.S. Government Restricted Rights.</Text>
                    <Text>
                      The Program and all accompanying written materials are provided with RESTRICTED RIGHTS. Use, duplication, or disclosure by the Government is subject to restrictions as set forth in Restricted Rights in Technical Data and Computer Software Clause at FAR 52.227-7013(c)(1)(ii) or FAR 52.227-19.
                    </Text>
                  </Box>

                  <Box>
                    <Text fontWeight="bold">General Provisions.</Text>
                    <Text>
                      You may not use, copy, modify, sublicense, rent, sell, assign or transfer the license granted pursuant to this Agreement except as expressly provided in this Agreement. Any assignment in violation of this Agreement is void. If any provision of this Agreement is held to be unenforceable for any reason, such provision shall be reformed only to the extent necessary to make it enforceable, and such decision shall not affect the enforceability; (i) of such provision under other circumstances, or (ii) of the remaining provisions hereof under all circumstances. The paragraph headings contained in this Agreement are for the purposes of convenience only and are not intended to define or limit the contents of said paragraphs. LINUX Cyberjoueurs and you are independent contractors under this Agreement. Cyberjoueur's failure to enforce at any time any of the provisions of this Agreement shall in no way be construed to be a present or future waiver of such provisions, nor in any way affect the right of any party to enforce each and every such provision thereafter. The express waiver by LINUX Cyberjoueurs of any provision, condition or requirement of this Agreement shall not constitute a waiver of any future obligation to comply with such provision, condition or requirement. Notwithstanding anything else in this Agreement, no default, delay or failure to perform on the part of LINUX Cyberjoueurs shall be considered a breach of this Agreement if such default, delay or failure to perform is shown to be due to causes beyond the reasonable control of Cyberjoueur. This Agreement represents the complete and exclusive statement of the agreements concerning the Program and supersedes all prior agreements between the parties.
                    </Text>
                  </Box>

                  <Box>
                    <Text fontWeight="bold">TRIAL VERSION ADDENDUM TO THE GENERAL LICENSE AGREEMENT.</Text>
                    <Text>
                      IF THIS PRODUCT IS IDENTIFIED AS A TRIAL VERSION, YOUR USE OF THE TRIAL VERSION PRODUCT IS GOVERNED BY THE TERMS OF THE GENERAL LICENSE AGREEMENT AS MODIFIED BY THE TERMS OF THIS TRIAL VERSION ADDENDUM. IN THE EVENT OF ANY CONFLICT BETWEEN THE TERMS OF THE GENERAL LICENSE AGREEMENT AND THIS TRIAL VERSION ADDENDUM, THE TERMS OF THE TRIAL VERSION ADDENDUM SHALL GOVERN. THE PRODUCT IS A TRIAL VERSION ONLY AND ENABLES LIMITED ACCESS TO GRAALONLINE CONTENT AND INCLUDES A SUBSET OF THE FEATURES INCLUDED IN THE RETAIL VERSION OF THE PRODUCT. YOU ARE GRANTED A LICENSE TO USE THE TRIAL VERSION OF THE PRODUCT ONLY. SUCH LICENSE SHALL IS NOT LIMITED IN DURATION, BUT LINUX CYBERJOUEURS RESERVES THE RIGHT TO DISCONTINUE SUPPORT FOR THE TRIAL VERSION AT ANY TIME. ANY ATTEMPT TO CIRCUMVENT THE ACCESS LIMITATIONS OR FEATURE RESTRICTIONS IS A VIOLATION OF THIS LICENSE. ANY SUCH ATTEMPTS SHALL RESULT IN THE IMMEDIATE TERMINATION OF YOUR LICENSE TO USE THE SOFTWARE.
                    </Text>
                  </Box>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        {/* Divider */}
        <Divider borderColor="gray.600" />
      </VStack>
    </MotionBox>
  );
}