'use client';

import { Button, FormControl, FormLabel, SimpleGrid, Image, Text, Input } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function UploadTypeSelector({ selectedGame, formData, setFormData }) {
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
              variant="outline"
              bg={formData.type === option.value ? 'brand.500' : 'gray.800'}
              color={formData.type === option.value ? 'white' : 'gray.200'}
              border="1px solid"
              borderColor={formData.type === option.value ? 'brand.400' : 'gray.500'}
              _hover={{ bg: 'brand.500', color: 'white', borderColor: 'brand.400' }}
              onClick={() => setFormData((prev) => ({ ...prev, type: option.value }))}
              display="flex"
              flexDirection="row"
              alignItems="center"
              p={2}
              borderRadius="md"
              height="60px"
            >
              <Image src={option.icon} boxSize="24px" mr={2} />
              <Text fontSize="sm">{option.label}</Text>
            </Button>
          )
        ))}
      </SimpleGrid>
      <Input type="hidden" name="type2" value={formData.type} />
    </FormControl>
  );
}