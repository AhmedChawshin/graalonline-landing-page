'use client';

import { FormControl, FormLabel, Input, VStack, Button, Link, RadioGroup, Radio, Text, Box, HStack, Icon, Image } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import CustomCheckbox from './CustomCheckbox';
import UploadRules from './UploadRules';
import { InfoIcon } from '@chakra-ui/icons';

export default function ZoneForm({ formData, setFormData, handleSubmit }) {
  const { t } = useTranslation();

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  return (
    <VStack spacing={6} align="stretch" as="form" onSubmit={handleSubmit} encType="multipart/form-data">
      <FormControl isRequired>
        <FormLabel color="gray.200" fontSize="sm" fontWeight="medium">
          {t('upload.email', { defaultValue: 'E-mail address' })}
        </FormLabel>
        <Input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          bg="gray.800"
          color="white"
          border="1px solid"
          borderColor="gray.500"
          _hover={{ borderColor: 'brand.400' }}
          _focus={{ borderColor: 'brand.400', boxShadow: '0 0 0 1px #7f9cf5' }}
          borderRadius="md"
          size="lg"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel color="gray.200" fontSize="sm" fontWeight="medium">
          {t('upload.imageFile', { defaultValue: 'Image File' })}
        </FormLabel>
        <Input
          type="file"
          name="file"
          onChange={handleInputChange}
          bg="gray.800"
          color="white"
          border="1px solid"
          borderColor="gray.500"
          _hover={{ borderColor: 'brand.400' }}
          _focus={{ borderColor: 'brand.400', boxShadow: '0 0 0 1px #7f9cf5' }}
          borderRadius="md"
          size="lg"
          p={1}
        />
      </FormControl>
      <FormControl>
        <FormLabel color="gray.200" fontSize="sm" fontWeight="medium">
          {t('upload.fileType', { defaultValue: 'File Type' })}
        </FormLabel>
        <RadioGroup
          name="type"
          value={formData.type}
          onChange={(value) => setFormData((prev) => ({ ...prev, type: value }))}
        >
          <HStack spacing={4} flexWrap="wrap">
            <Radio
              value="head"
              color="gray.200"
              borderColor="gray.500"
            >
              {t('upload.head', { defaultValue: 'Head' })}
            </Radio>
            <Radio
              value="body"
              color="gray.200"
              borderColor="gray.500"
            >
              {t('upload.body', { defaultValue: 'Body' })}
            </Radio>
            <Radio
              value="shield"
              color="gray.200"
              borderColor="gray.500"
            >
              {t('upload.personalShield', { defaultValue: 'Personal Shield' })}
            </Radio>
            <Radio
              value="shieldpublic"
              color="gray.200"
              borderColor="gray.500"
            >
              {t('upload.publicShield', { defaultValue: 'Public Shield' })}
            </Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <CustomCheckbox
          name="transed"
          isChecked={formData.transed}
          onChange={handleInputChange}
        >
          {t('upload.setTransparency', { defaultValue: 'Set Transparency' })}
        </CustomCheckbox>
        <Text fontSize="sm" color="gray.400" mt={1}>
          {t('upload.transparencyHelp', { defaultValue: 'It sets the transparent color as the same color in the top left corner of the image' })}
        </Text>
      </FormControl>
      <UploadRules />
      <Button
        type="submit"
        colorScheme="brand"
        size="lg"
        bg="brand.500"
        _hover={{ bg: 'brand.600', transform: 'translateY(-2px)', boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)' }}
        transition="all 0.3s"
        borderRadius="md"
        fontWeight="medium"
      >
        {t('upload.submitZone', { defaultValue: 'Upload' })}
      </Button>
    </VStack>
  );
}