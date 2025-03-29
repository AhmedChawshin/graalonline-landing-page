// components/upload/UploadTypeSelector.js
'use client';

import { FormControl, FormLabel, SimpleGrid, Image, Text, Button, VStack, Input } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function UploadTypeSelector({ selectedGame, formData, setFormData, uploadPrices }) {
  const { t } = useTranslation();

  const uploadTypes = [
    { value: 'head', label: t('upload.head', { defaultValue: 'Head' }), icon: 'https://classiccachecloud.quattroplay.com/images4/dcicon_menu_head0.png' },
    { value: 'body', label: t('upload.body', { defaultValue: 'Body' }), icon: 'https://classiccachecloud.quattroplay.com/images4/dcicon_menu_body0.png' },
    { value: 'shield', label: t('upload.shield', { defaultValue: 'Shield' }), icon: 'https://classiccachecloud.quattroplay.com/images4/dcicon_menu_shield0.png' },
    { value: 'sword', label: t('upload.sword', { defaultValue: 'Sword' }), icon: 'https://classiccachecloud.quattroplay.com/images4/dcicon_menu_sword0.png', hidden: selectedGame === 'era' },
    { value: 'ganglogo', label: t('upload.gangLogo', { defaultValue: 'Gang Logo' }), icon: 'https://classiccachecloud.quattroplay.com/images4/dcicon_menu_logos0.png', hidden: selectedGame === 'classic' },
    { value: 'guild_logo', label: t('upload.guildLogo', { defaultValue: 'Guild Logo' }), icon: 'https://classiccachecloud.quattroplay.com/images4/dcicon_menu_logos0.png', hidden: selectedGame === 'era' },
    { value: 'guild_hat', label: t('upload.guildHat', { defaultValue: 'Guild Hat' }), icon: 'https://classiccachecloud.quattroplay.com/images4/dcicon_menu_hat0.png', hidden: selectedGame === 'era' },
    { value: 'guild_acc', label: t('upload.guildAcc', { defaultValue: 'Guild Accessory' }), icon: 'https://classiccachecloud.quattroplay.com/images4/dcicon_menu_accessory2.png', hidden: selectedGame === 'era' },
  ];

  return (
    <FormControl>
      <FormLabel color="gray.200" fontSize="sm" fontWeight="medium">
        {t('upload.selectUploadType', { defaultValue: 'Select an upload type' })}
      </FormLabel>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={3}>
        {uploadTypes.map((option) => (
          !option.hidden && (
            <Button
              key={option.value}
              onClick={() => setFormData((prev) => ({ ...prev, type: option.value }))}
              variant={formData.type === option.value ? 'solid' : 'outline'}
              colorScheme="brand"
              size="md"
              borderRadius="md"
              bg={formData.type === option.value ? 'brand.500' : 'gray.700'}
              color="white"
              border="1px solid"
              borderColor={formData.type === option.value ? 'brand.500' : 'gray.600'}
              _hover={{
                bg: formData.type === option.value ? 'brand.600' : 'gray.600',
                borderColor: 'brand.400',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              }}
              transition="all 0.3s ease"
              leftIcon={<Image src={option.icon} boxSize="24px" />}
              height="70px"
            >
              <VStack spacing={1} align="start">
                <Text fontSize="sm" fontWeight="medium">{option.label}</Text>
                <Text fontSize="xs" color="gray.300">{uploadPrices[option.value] || 'Upload'}</Text>
              </VStack>
            </Button>
          )
        ))}
      </SimpleGrid>
      <Input type="hidden" name="type2" value={formData.type} />
    </FormControl>
  );
}