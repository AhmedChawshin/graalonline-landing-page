'use client';

import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function GameSelector({ selectedGame, setSelectedGame, games }) {
  const { t } = useTranslation();

  return (
    <FormControl>
      <FormLabel color="gray.200" fontSize="sm" fontWeight="medium">
        {t('upload.selectGame', { defaultValue: 'Select a Game' })}
      </FormLabel>
      <Select
        value={selectedGame}
        onChange={(e) => setSelectedGame(e.target.value)}
        bg="gray.800"
        color="white"
        border="1px solid"
        borderColor="gray.500"
        _hover={{ borderColor: 'brand.400' }}
        _focus={{ borderColor: 'brand.400', boxShadow: '0 0 0 1px #7f9cf5' }}
        borderRadius="md"
        size="lg"
      >
        {games.map((game) => (
          <option key={game.value} value={game.value} style={{ backgroundColor: '#1a202c', color: 'white' }}>
            {game.label}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}