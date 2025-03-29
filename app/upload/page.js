'use client';

import { useState } from 'react';
import { Box, Heading, VStack, Button, SimpleGrid, Image, Text, Divider } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useToast } from '@chakra-ui/react';
import EraClassicForm from '../../components/upload/EraClassicForm';
import OlwestForm from '../../components/upload/OlwestForm';
import ZoneForm from '../../components/upload/ZoneForm';

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionHeading = motion(Heading);

export default function Upload() {
  const { t } = useTranslation();
  const toast = useToast();
  const [selectedGame, setSelectedGame] = useState(null); // Initially null, no game selected
  const [formData, setFormData] = useState({
    email: '',
    uploadcode: '',
    type: 'head',
    uploadType: 'head',
    personalupload: false,
    guild: '',
    file: null,
    transed: false,
    invalidCheck: false,
  });

  const games = [
    {
      value: 'era',
      label: t('discover.games.graalEra.title', { defaultValue: 'GraalOnline Era' }),
      endpoint: 'https://eraupload.graalonline.com/upload-new.gs',
      icon: '/era.avif', // Icon for game selection button
    },
    {
      value: 'olwest',
      label: t('discover.games.graalOlwest.title', { defaultValue: "GraalOnline Ol'West" }),
      endpoint: 'upload.gs',
      icon: '/olwest.avif',
    },
    {
      value: 'classic',
      label: t('discover.games.graalonlineClassic.title', { defaultValue: 'GraalOnline Classic' }),
      endpoint: 'https://classicupload.graalonline.com/upload.gs',
      icon: '/classic.avif',
    },
    {
      value: 'zone',
      label: 'GraalOnline Zone',
      endpoint: './upload.gs',
      icon: '/zone.avif',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const game = games.find((g) => g.value === selectedGame);
    if (!game) return;

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'type2') data.append('type', formData[key]);
      else if (key === 'uploadType') data.append('type', formData[key]);
      else if (formData[key] !== null && formData[key] !== undefined) data.append(key, formData[key]);
    });

    try {
      const response = await fetch(game.endpoint, {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        toast({
          title: t('upload.successTitle', { defaultValue: 'Upload Successful' }),
          description: t('upload.successDescription', { defaultValue: 'Your custom graphic has been uploaded successfully!' }),
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      toast({
        title: t('upload.errorTitle', { defaultValue: 'Upload Failed' }),
        description: t('upload.errorDescription', { defaultValue: 'There was an error uploading your graphic. Please try again.' }),
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const renderGameSelection = () => (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Heading
        as="h1"
        size="xl"
        textAlign="center"
        color="white"
        fontWeight="bold"
        mb={10}
        textShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
      >
        {t('upload.selectGame', { defaultValue: 'Select a Game to Upload' })}
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} maxW="700px" mx="auto">
        {games.map((game) => (
          <MotionButton
            key={game.value}
            onClick={() => setSelectedGame(game.value)}
            bg="gray.800"
            color="white"
            border="1px solid"
            borderColor="gray.600"
            borderRadius="md"
            p={6}
            height="150px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            _hover={{
              borderColor: 'brand.400',
              bg: 'gray.700',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            }}
            transition="all 0.3s ease"
          >
            <Image src={game.icon} boxSize="50px" mb={3} draggable="false"/>
            <Text fontSize="lg" fontWeight="medium">{game.label}</Text>
          </MotionButton>
        ))}
      </SimpleGrid>
    </MotionBox>
  );

  const renderGameForm = () => {
    const selectedGameData = games.find((g) => g.value === selectedGame);
    if (!selectedGameData) return null;

    return (
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <VStack spacing={6} maxW="700px" mx="auto">
          {/* Game Title */}
          <MotionHeading
            as="h1"
            size="xl"
            textAlign="center"
            color="white"
            fontWeight="bold"
          >
            {selectedGameData.label}
          </MotionHeading>

          {/* Go Back Button */}
          <MotionButton
            onClick={() => setSelectedGame(null)}
            bg="transparent"
            color="white"
            border="1px solid"
            borderColor="gray.600"
            borderRadius="md"
            px={6}
            py={3}
            fontSize="md"
            fontWeight="medium"
            _hover={{
              bg: 'gray.700',
              borderColor: 'brand.400',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            }}
            transition="all 0.3s ease"
          >
            {t('upload.backToGames', { defaultValue: 'Go Back to Games' })}
          </MotionButton>

          {/* Form Container */}
          <Box
            w="full"
            bg="gray.800"
            p={8}
            borderRadius="md"
            boxShadow="0 4px 12px rgba(0, 0, 0, 0.3)"
            border="1px solid"
            borderColor="gray.700"
          >
            {renderForm()}
          </Box>
        </VStack>
      </MotionBox>
    );
  };

  const renderForm = () => {
    switch (selectedGame) {
      case 'era':
      case 'classic':
        return <EraClassicForm selectedGame={selectedGame} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />;
      case 'olwest':
        return <OlwestForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />;
      case 'zone':
        return <ZoneForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

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
    >
      <MotionBox
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      {selectedGame ? renderGameForm() : renderGameSelection()}
    </MotionBox>
  );
}