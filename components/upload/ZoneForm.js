// components/upload/ZoneForm.js
"use client";

import { FormControl, FormLabel, Input, VStack, Button, HStack, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import CustomCheckbox from "./CustomCheckbox";
import UploadRules from "./UploadRules";

export default function ZoneForm({ formData, setFormData, handleSubmit, isSubmitting, uploadPrices, fileInputRef }) {
  const { t } = useTranslation();

  const uploadTypes = [
    { value: "head", label: t("upload.head", { defaultValue: "Head" }), icon: "https://classiccachecloud.quattroplay.com/images4/dcicon_menu_head0.png" },
    { value: "body", label: t("upload.body", { defaultValue: "Body" }), icon: "https://classiccachecloud.quattroplay.com/images4/dcicon_menu_body0.png" },
    { value: "shield", label: t("upload.personalShield", { defaultValue: "Personal Shield" }), icon: "https://classiccachecloud.quattroplay.com/images4/dcicon_menu_shield0.png" },
    { value: "shieldpublic", label: t("upload.publicShield", { defaultValue: "Public Shield" }), icon: "https://classiccachecloud.quattroplay.com/images4/dcicon_menu_shield0.png" },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleTypeChange = (value) => {
    setFormData((prev) => ({ ...prev, type: value }));
  };

  const submitButtonText = uploadPrices[formData.type] || t("upload.submitZone", { defaultValue: "Upload" });

  return (
    <VStack spacing={6} align="stretch" as="form" onSubmit={handleSubmit} encType="multipart/form-data">
      <FormControl isRequired>
        <FormLabel color="gray.200" fontSize="sm" fontWeight="medium">
          {t("upload.email", { defaultValue: "E-mail address" })}
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
          _hover={{ borderColor: "brand.400" }}
          _focus={{ borderColor: "brand.400", boxShadow: "0 0 0 1px #7f9cf5" }}
          borderRadius="md"
          size="lg"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel color="gray.200" fontSize="sm" fontWeight="medium">
          {t("upload.imageFile", { defaultValue: "Image File" })}
        </FormLabel>
        <Input
          type="file"
          name="file"
          onChange={handleInputChange}
          ref={fileInputRef} // Attach ref here
          bg="gray.800"
          color="white"
          border="1px solid"
          borderColor="gray.500"
          _hover={{ borderColor: "brand.400" }}
          _focus={{ borderColor: "brand.400", boxShadow: "0 0 0 1px #7f9cf5" }}
          borderRadius="md"
          size="lg"
          p={1}
        />
      </FormControl>
      <FormControl>
        <FormLabel color="gray.200" fontSize="sm" fontWeight="medium">
          {t("upload.fileType", { defaultValue: "File Type" })}
        </FormLabel>
        <HStack spacing={4} flexWrap="wrap">
          {uploadTypes.map((type) => (
            <Button
              key={type.value}
              onClick={() => handleTypeChange(type.value)}
              variant={formData.type === type.value ? "solid" : "outline"}
              colorScheme="brand"
              size="md"
              borderRadius="md"
              bg={formData.type === type.value ? "brand.500" : "gray.700"}
              color="white"
              border="1px solid"
              borderColor={formData.type === type.value ? "brand.500" : "gray.600"}
              _hover={{
                bg: formData.type === type.value ? "brand.600" : "gray.600",
                borderColor: "brand.400",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
              transition="all 0.3s ease"
              leftIcon={<Image src={type.icon} boxSize="24px" />}
              height="70px"
            >
              <VStack spacing={1} align="start">
                <Text fontSize="sm" fontWeight="medium">{type.label}</Text>
                <Text fontSize="xs" color="gray.300">{uploadPrices[type.value] || "Upload"}</Text>
              </VStack>
            </Button>
          ))}
        </HStack>
      </FormControl>
      <FormControl>
        <CustomCheckbox name="transed" isChecked={formData.transed} onChange={handleInputChange}>
          {t("upload.setTransparency", { defaultValue: "Set Transparency" })}
        </CustomCheckbox>
        <Text fontSize="sm" color="gray.400" mt={1}>
          {t("upload.transparencyHelp", { defaultValue: "It sets the transparent color as the same color in the top left corner of the image" })}
        </Text>
      </FormControl>
      <UploadRules game={"zone"} />
      <FormControl isRequired>
        <CustomCheckbox name="invalidCheck" isChecked={formData.invalidCheck} onChange={handleInputChange}>
          {t("upload.agreeRules", { defaultValue: "Do you agree with the upload rules?" })}
        </CustomCheckbox>
      </FormControl>
      <Button
        type="submit"
        colorScheme="brand"
        size="lg"
        isDisabled={!formData.invalidCheck || isSubmitting}
        isLoading={isSubmitting}
        bg="brand.500"
        _hover={{ bg: "brand.600", transform: "translateY(-2px)", boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)" }}
        transition="all 0.3s"
        borderRadius="md"
        fontWeight="medium"
      >
        Upload For {submitButtonText}
      </Button>
    </VStack>
  );
}