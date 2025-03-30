"use client"

import { Box, Text, HStack, Link as ChakraLink, VStack, Icon } from '@chakra-ui/react';
import { FaTwitter, FaDiscord, FaFacebook, FaTiktok } from 'react-icons/fa';
import { TiSocialYoutube } from 'react-icons/ti';
import { useTranslation } from 'react-i18next';
import Link from 'next/link'; // Import Next.js Link

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box as="footer" bg="slate.800" color="slate.100" py={10} px={6} borderTop="2px solid #57cbf8">
      <VStack spacing={6}>
        <HStack spacing={8} justify="center">
          <ChakraLink href="https://twitter.com/GraalOnline" isExternal>
            <Icon as={FaTwitter} _hover={{ textColor: 'rgb(83, 166, 199)' }} transition="all 0.3s" w={6} h={6} />
          </ChakraLink>
          <ChakraLink href="https://discord.gg/graalians" isExternal>
            <Icon as={FaDiscord} _hover={{ textColor: 'rgb(83, 166, 199)' }} transition="all 0.3s" w={6} h={6} />
          </ChakraLink>
          <ChakraLink href="https://www.facebook.com/graalonline/" isExternal>
            <Icon as={FaFacebook} _hover={{ textColor: 'rgb(83, 166, 199)' }} transition="all 0.3s" w={6} h={6} />
          </ChakraLink>
          <ChakraLink href="https://www.youtube.com/@toonslab" isExternal>
            <Icon as={TiSocialYoutube} _hover={{ textColor: 'rgb(83, 166, 199)' }} transition="all 0.3s" w={6} h={6} />
          </ChakraLink>
          <ChakraLink href="https://www.tiktok.com/@graalonlineofficial" isExternal>
            <Icon as={FaTiktok} _hover={{ textColor: 'rgb(83, 166, 199)' }} transition="all 0.3s" w={6} h={6} />
          </ChakraLink>
        </HStack>
        <HStack spacing={6} justify="center" flexWrap="wrap">
          <ChakraLink href="https://support.toonslab.com/" isExternal>{t('footer.support')}</ChakraLink>
          <Link href="/rules" passHref legacyBehavior>
            <ChakraLink>{t('footer.rules')}</ChakraLink>
          </Link>
          <Link href="/faq" passHref legacyBehavior>
            <ChakraLink>Frequently Asked Questions</ChakraLink>
          </Link>
          <ChakraLink href="https://www.toonslab.com/" isExternal>{t('footer.toonslab')}</ChakraLink>
        </HStack>
        <Text fontSize="sm">{t('footer.copyright')}</Text>
      </VStack>
    </Box>
  );
}