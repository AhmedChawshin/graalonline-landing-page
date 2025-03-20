import { Box, Heading, SimpleGrid, Text, Button, VStack, Fade, Image, HStack, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

export default function Discover() {
  const { t } = useTranslation();

  const games = [
    {
      title: t('discover.games.graalZone.title'),
      description: t('discover.games.graalZone.description'),
      gif: '/discover/zone.gif',
      links: {
        steam: 'https://store.steampowered.com/app/2698140/Graalonline_Worlds/',
        web: 'https://era.graalonline.com/play',
        ios: 'https://apps.apple.com/app/graalonline-zone/id284976684',
        android: 'https://play.google.com/store/apps/details?id=com.quattroplay.GraalZone',
      },
    },
    {
      title: t('discover.games.graalonlineClassic.title'),
      description: t('discover.games.graalonlineClassic.description'),
      gif: '/discover/classic.gif',
      links: {
        steam: 'https://store.steampowered.com/app/2698140/Graalonline_Worlds/',
        web: 'https://era.graalonline.com/play',
        ios: 'https://apps.apple.com/app/graalonline-classic/id350608510',
        android: 'https://play.google.com/store/apps/details?id=com.quattroplay.GraalClassic',
      },
    },
    {
      title: t('discover.games.graalOlwest.title'),
      description: t('discover.games.graalOlwest.description'),
      gif: '/discover/olwest.gif',
      links: {
        steam: 'https://store.steampowered.com/app/2698140/Graalonline_Worlds/',
        web: 'https://era.graalonline.com/play',
        ios: 'https://apps.apple.com/app/graalonline-olwest/id736611273',
        android: 'https://play.google.com/store/apps/details?id=com.quattroplay.GraalOlwest',
      },
    },
    {
      title: t('discover.games.graalEra.title'),
      description: t('discover.games.graalEra.description'),
      gif: '/discover/era.gif',
      links: {
        steam: 'https://store.steampowered.com/app/2358050/GraalOnline_Era/',
        web: 'https://era.graalonline.com/play',
        ios: 'https://apps.apple.com/app/graalonline-era/id406674031',
        android: 'https://play.google.com/store/apps/details?id=com.quattroplay.GraalEra',
      },
    },
  ];

  return (
    <Fade in>
    <Box
      w="full"
      bgImage={"discover/gamebg.webp"}
      minH="100vh"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 6 }}
      backdropFilter="blur(20px)"
      position="relative"
      borderTop="2px solid white"    // Adds a top border
      borderBottom="2px solid white" // Adds a bottom border
      pb={10}

    >
  {/* Overlay Image */}
        <Image
          src="discover/overlay.webp"
          alt="Game Preview"
          position="absolute"
          draggable={false}
          right={0}
          top="50%"
          transform="translateY(-50%)"
          height="100%" // Makes the image as tall as the Box
          width="auto"  // Ensures aspect ratio is maintained
          objectFit="contain"
          zIndex={-1}
          filter="drop-shadow(0 0 15px rgba(0, 0, 0, 0.7))"
          display={{ base: 'none', lg: 'block' }} // Hide on smaller screens
        />

        <VStack spacing={12} maxW="1400px" mx="auto">
        <Heading
            mt={100}
            as="h2"
            size={{ base: 'lg', md: 'xl' }}
            color="white"
            textShadow="2px 2px 8px rgba(0, 0, 0, 0.8)"
            textAlign="center"
            px={6}
            py={4}
            borderRadius="lg"
          >
            {t('discover.title')}
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 6, md: 8 }}>
            {games.map((game, index) => (
              <MotionBox
                key={index}
                bgGradient="linear(to-b, gray.800, gray.900)"
                borderRadius="xl"
                p={{ base: 4, md: 6 }}
                textAlign="center"
                boxShadow="2xl"
                border="2px solid"
                borderColor="brand.500"
                position="relative"
                overflow="hidden"
                _hover={{
                  transform: 'scale(1.08)',
                  boxShadow: '0 0 20px rgba(102, 126, 234, 0.5)', // Glow effect
                  borderColor: '#57cbf8',
                }}
                transition="all 0.3s ease"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Hover Overlay */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="rgba(0, 0, 0, 0.3)"
                  opacity={0}
                  _hover={{ opacity: 1 }}
                  transition="opacity 0.3s ease"
                  zIndex={0}
                />

                <MotionImage
                  src={game.gif}
                  alt={game.title}
                  borderRadius="lg"
                  mb={4}
                  draggable={false}
                  maxH={{ base: '120px', md: '180px' }} // Larger GIFs for better visibility
                  w="100%"
                  objectFit="cover"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ duration: 0.3 }}
                  zIndex={1}
                />
                <Heading
                  as="h3"
                  size={{ base: 'md', md: 'lg' }}
                  color="white"
                  mb={3}
                  textShadow="1px 1px 5px rgba(0, 0, 0, 0.8)"
                  zIndex={1}
                >
                  {game.title}
                </Heading>
                <Text
                  fontSize={{ base: 'sm', md: 'md' }}
                  color="gray.200"
                  mb={4}
                  textShadow="1px 1px 3px rgba(0, 0, 0, 0.5)"
                  zIndex={1}
                  px={2}
                >
                  {game.description}
                </Text>
                <VStack spacing={4} zIndex={1}>
                  {/* Primary CTA: Play Now */}
                  <Button
                    as="a"
                    href={game.links.web}
                    target="_blank"
                    size="md"
                    bg="brand.500"
                    color="white"
                    _hover={{
                      bg: 'brand.600',
                      transform: 'translateY(-3px)',
                      boxShadow: 'lg',
                    }}
                    transition="all 0.2s"
                    fontWeight="bold"
                    px={6}
                  >
                    {t('discover.playNow', { defaultValue: 'Play Now' })} 
                  </Button>
                  {/* Platform Buttons */}
                  <HStack spacing={2} justify="center" flexWrap="wrap">
                    <Button
                      as="a"
                      href={game.links.steam}
                      target="_blank"
                      size="sm"
                      variant="outline"
                      borderColor="gray.400"
                      color="gray.200"
                      _hover={{ bg: 'gray.600', color: 'white', borderColor: 'gray.600' }}
                      transition="all 0.2s"
                    >
                      {t('discover.platforms.steam')}
                    </Button>
                    <Button
                      as="a"
                      href={game.links.ios}
                      target="_blank"
                      size="sm"
                      variant="outline"
                      borderColor="gray.400"
                      color="gray.200"
                      _hover={{ bg: 'gray.600', color: 'white', borderColor: 'gray.600' }}
                      transition="all 0.2s"
                    >
                      {t('discover.platforms.ios')}
                    </Button>
                    <Button
                      as="a"
                      href={game.links.android}
                      target="_blank"
                      size="sm"
                      variant="outline"
                      borderColor="gray.400"
                      color="gray.200"
                      _hover={{ bg: 'gray.600', color: 'white', borderColor: 'gray.600' }}
                      transition="all 0.2s"
                    >
                      {t('discover.platforms.android')}
                    </Button>
                  </HStack>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
    </Fade>
  );
}