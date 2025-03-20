import { useState, useEffect } from 'react';
import { Box, Text, Button, VStack, Fade, Flex, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Image from 'next/image';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

export default function Hero() {
  const { t } = useTranslation();
  const [userCount, setUserCount] = useState(1500); // Starting user count

  // Simulate user count fluctuation
  useEffect(() => {
    const fluctuateUserCount = () => {
      const change = Math.floor(Math.random() * 101) - 50; // Random change between -50 and +50
      setUserCount((prev) => {
        const newCount = prev + change;
        // Ensure the count stays within a reasonable range (e.g., 1450-1550)
        if (newCount < 1450) return 1450;
        if (newCount > 1550) return 1550;
        return newCount;
      });
    };

    // Update every 5 seconds
    const interval = setInterval(fluctuateUserCount, 5000);
    return () => clearInterval(interval);
  }, []);

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
        {/* Gradient Overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bgGradient="linear(to-b, rgba(0, 0, 0, 0.7), rgba(102, 126, 234, 0.3))" // Gradient overlay
          zIndex={1}
        />

        {/* Content */}
        <Flex
          minH="100vh"
          justify="center"
          align="center"
          textAlign="center"
          px={4}
          position="relative"
          zIndex={2}
        >
          <VStack spacing={8} maxW="600px">
            {/* Glowing Heading */}
          <Image
            src="/logograalonline.webp"
            style={{
                objectFit: "contain",
                transition: "transform 0.3s ease-in-out",
                maxWidth: '100%',
                height: 'auto'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            draggable="false"
            alt="Landing page logo"
            width={200}
            height={120}
            quality={100}
            priority
            sizes="(max-width: 768px) 200px, 300px"
             />
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="white"
              textShadow="1px 1px 6px rgba(0, 0, 0, 0.7)"
            >
              {t('hero.description')}
            </Text>

            {/* User Count */}
            <MotionText
              fontSize="lg"
              fontWeight="medium"
              color="white"
              bg="rgba(255, 255, 255, 0.1)"
              px={4}
              py={2}
              borderRadius="md"
              boxShadow="0 0 15px rgba(102, 126, 234, 0.4)"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {t('hero.playersOnline', { count: userCount, defaultValue: '{{count}} Players Online' })}
            </MotionText>

            {/* Discover Button */}
            <Button
              colorScheme="brand"
              size="lg"
              bg="brand.500"
              color="white"
              _hover={{
                bg: 'brand.600',
                transform: 'translateY(-3px)',
                boxShadow: '0 0 15px rgba(102, 126, 234, 0.6)',
              }}
              transition="all 0.3s"
              boxShadow="0 0 10px rgba(102, 126, 234, 0.4)"
              onClick={() =>
                document.getElementById('discover').scrollIntoView({ behavior: 'smooth' })
              }
              fontWeight="bold"
              px={8}
            >
              {t('hero.discoverButton')}
            </Button>

            {/* Scroll Down Indicator */}
            <MotionFlex
              direction="column"
              align="center"
              mt={6}
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
                {t('hero.scrollDown')}
              </Text>
              <MotionFlex
                initial={{ y: 0 }}
                animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: 'easeInOut',
                }}
              >
                <Icon
                  as={ChevronDownIcon}
                  w={12}
                  h={12}
                  color="white"
                  p={2}
                  _hover={{ color: 'brand.500',   }}
                  transition="all 0.3s"
                />
              </MotionFlex>
            </MotionFlex>
          </VStack>
        </Flex>
      </MotionBox>
    </Fade>
  );
}