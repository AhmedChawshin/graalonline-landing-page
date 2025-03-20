import { Box, Text, HStack, Link, VStack, Icon } from '@chakra-ui/react';
import { FaTwitter, FaDiscord, FaFacebook } from 'react-icons/fa';
import { TiSocialYoutube } from 'react-icons/ti';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box as="footer" bg="slate.800" color="slate.100" py={10} px={6}>
      <VStack spacing={6}>
        <HStack spacing={8} justify="center">
          <Link href="https://twitter.com/GraalOnline" isExternal>
            <Icon as={FaTwitter} _hover={{ textColor: 'rgb(83, 166, 199)' }} transition="all 0.3s" w={6} h={6} />
          </Link>
          <Link href="https://discord.gg/graalians" isExternal>
            <Icon as={FaDiscord} _hover={{ textColor: 'rgb(83, 166, 199)' }} transition="all 0.3s" w={6} h={6} />
          </Link>
          <Link href="https://www.facebook.com/graalonline/" isExternal>
            <Icon as={FaFacebook} _hover={{ textColor: 'rgb(83, 166, 199)' }} transition="all 0.3s" w={6} h={6} />
          </Link>
          <Link href="https://www.youtube.com/@toonslab" isExternal>
            <Icon as={TiSocialYoutube} _hover={{ textColor: 'rgb(83, 166, 199)' }} transition="all 0.3s" w={6} h={6} />
          </Link>
        </HStack>
        <HStack spacing={6} justify="center" flexWrap="wrap">
          <Link href="https://support.toonslab.com/" isExternal>{t('footer.support')}</Link>
          <Link href="https://www.graalonline.com/accounts/licence.php" isExternal>{t('footer.licence')}</Link>
          <Link href="https://www.graalonline.com/accounts/rules.php" isExternal>{t('footer.rules')}</Link>
          <Link href="https://www.toonslab.com/" isExternal>{t('footer.toonslab')}</Link>
        </HStack>
        <Text fontSize="sm">{t('footer.copyright')}</Text>
      </VStack>
    </Box>
  );
}