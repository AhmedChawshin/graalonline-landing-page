'use client';

import { Box, Flex, Image, Button, HStack, IconButton, useDisclosure, Collapse, Select } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; // Import i18n instance

const MotionButton = motion(Button);

export default function Header() {
  const { t } = useTranslation();
  const { isOpen, onToggle } = useDisclosure();

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Helper function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      as="header"
      bg="slate.800"
      color="slate.100"
      px={6}
      py={4}
      position="sticky"
      top={0}
      zIndex={10}
      boxShadow="lg"
      borderBottom="2px solid #57cbf8"
    >
      <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
      <Image
        src="/logograalonline.webp"
        alt="Graal Online"
        style={{
            objectFit: "contain",
            transition: "transform 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        draggable="false"
        />


        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          colorScheme="slate"
          aria-label="Toggle Navigation"
        />

        <HStack spacing={6} display={{ base: 'none', md: 'flex' }} alignItems="center">
          <MotionButton
            variant="ghost"
            colorScheme="slate"
            _hover={{ bg: 'rgb(83, 166, 199)' }}
            whileHover={{ scale: 1.05 }}
            as="a"
            href="https://www.graalonline.com/playerworlds/"
            target="_blank"
          >
            {t('header.support')}
          </MotionButton>
          <MotionButton
            variant="ghost"
            colorScheme="slate"
            _hover={{ bg: 'rgb(83, 166, 199)' }}
            whileHover={{ scale: 1.05 }}
            as="a"
            href="https://www.graalonline.com/playerworlds/downloads/"
            target="_blank"
          >
            {t('header.download')}
          </MotionButton>
          <MotionButton
            variant="ghost"
            colorScheme="slate"
            _hover={{ bg: 'rgb(83, 166, 199)' }}
            whileHover={{ scale: 1.05 }}
            as="a"
            href="https://www.graalonline.com/accounts/signup"
            target="_blank"
          >
            {t('header.signupLogin')}
          </MotionButton>
          <Select
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
            width="120px"
            bg="slate.700"
            color="slate.100"
            borderColor="slate.600"
            _hover={{ borderColor: 'brand.500' }}
            _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px #667eea' }}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </Select>
        </HStack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} pt={2} display={{ md: 'none' }}>
          <Flex direction="column" align="center" gap={2}>
            <MotionButton
              variant="ghost"
              colorScheme="slate"
              width="full"
              _hover={{ bg: 'rgb(83, 166, 199)' }}
              whileHover={{ scale: 1.05 }}
              as="a"
              href="https://www.graalonline.com/playerworlds/"
              target="_blank"
              onClick={onToggle}
            >
              {t('header.support')}
            </MotionButton>
            <MotionButton
              variant="ghost"
              colorScheme="slate"
              width="full"
              _hover={{ bg: 'rgb(83, 166, 199)' }}
              whileHover={{ scale: 1.05 }}
              as="a"
              href="https://www.graalonline.com/playerworlds/downloads/"
              target="_blank"
              onClick={onToggle}
            >
              {t('header.download')}
            </MotionButton>
            <MotionButton
              variant="ghost"
              colorScheme="slate"
              width="full"
              _hover={{ bg: 'rgb(83, 166, 199)' }}
              whileHover={{ scale: 1.05 }}
              as="a"
              href="https://www.graalonline.com/accounts/signup"
              target="_blank"
              onClick={onToggle}
            >
              {t('header.signupLogin')}
            </MotionButton>
            <Select
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
              width="full"
              bg="slate.700"
              color="slate.100"
              borderColor="slate.600"
              _hover={{ borderColor: 'brand.500' }}
              _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px #667eea' }}
              mt={2}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </Select>
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
}