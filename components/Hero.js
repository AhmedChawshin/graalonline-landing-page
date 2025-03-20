import { useState, useEffect } from 'react';
import { Box, Heading, Text, Button, VStack, Fade, Flex, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function Hero() {
  const { t } = useTranslation();



  return (
    <Fade in>
      <MotionBox
        minH="100vh"
        bgImage="url('/background_graalwebsite.jpg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        px={6}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        position="relative"
      >
        {/* Dark overlay for better text visibility */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bg="blackAlpha.600"
        />

        {/* Content */}
        <Flex
          minH="100vh"
          justify="center"
          align="center"
          textAlign="center"
          px={4} // Optional padding for responsiveness
          position="relative"
        >
          <VStack spacing={6} zIndex={2} maxW="600px">
            <Heading
              as="h1"
              size="2xl"
              fontWeight="bold"
              color="white"
              textShadow="2px 2px 6px rgba(0, 0, 0, 0.7)"
            >
              {t('hero.title')}
            </Heading>
            <Text
              fontSize="xl"
              color="white"
              textShadow="1px 1px 4px rgba(0, 0, 0, 0.7)"
            >
              {t('hero.description')}
            </Text>
            <Button
              colorScheme="brand"
              size="lg"
              bg="brand.500"
              _hover={{
                bg: 'brand.600',
                transform: 'translateY(-2px)',
                boxShadow: 'xl',
              }}
              transition="all 0.2s"
              onClick={() =>
                document.getElementById('discover').scrollIntoView({ behavior: 'smooth' })
              }
            >
              {t('hero.discoverButton')}
            </Button>

            {/* Scroll Down Indicator */}
              <MotionFlex
                direction="column"
                align="center"
                mt={4}
                onClick={() =>
                  document.getElementById('discover').scrollIntoView({ behavior: 'smooth' })
                }
                cursor="pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  color="white"
                  textShadow="1px 1px 4px rgba(0, 0, 0, 0.7)"
                  mb={2}
                >
                  {t('hero.scrollDown')} {/* Add this to translations */}
                </Text>
                <MotionFlex
                  initial={{ y: 0 }}
                  animate={{ y: [0, 15, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: 'easeInOut',
                  }}
                >
                  <Icon
                    as={ChevronDownIcon}
                    w={10}
                    h={10}
                    color="white"
                    _hover={{ color: 'brand.500' }}
                    transition="color 0.2s"
                  />
                </MotionFlex>
              </MotionFlex>
          </VStack>
        </Flex>
      </MotionBox>
    </Fade>
  );
}