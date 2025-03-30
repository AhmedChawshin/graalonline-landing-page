// components/upload/EraClassicForm.js
"use client";

import { FormControl, FormLabel, Input, VStack, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import UploadTypeSelector from "./UploadTypeSelector";
import CustomCheckbox from "./CustomCheckbox";
import UploadRules from "./UploadRules";

export default function EraClassicForm({ selectedGame, formData, setFormData, handleSubmit, isSubmitting, uploadPrices, fileInputRef }) {
  const { t } = useTranslation();

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const submitButtonText = uploadPrices[formData.type] || t("upload.submit", { defaultValue: "Upload" });

  // Determine if transparency checkbox should be shown
  const showTransed = !(
    (selectedGame === "classic" && formData.type === "guild_logo") ||
    (selectedGame === "era" && formData.type === "ganglogo")
  );

  // Determine if personal upload checkbox should be shown
  const showPersonalUpload = selectedGame === "era" && (formData.type === "shield" || formData.type === "sword");

  return (
    <VStack spacing={6} align="stretch" as="form" onSubmit={handleSubmit} encType="multipart/form-data">
      <FormControl isRequired>
        <FormLabel color="gray.300" fontSize="sm" fontWeight="medium">
          {t("upload.accountInfo", { defaultValue: "Enter your account information" })}
        </FormLabel>
        <Input
          name="email"
          placeholder={selectedGame === "classic" ? t("upload.emailOrGraalId", { defaultValue: "Email address or Graal ID" }) : t("upload.graalId", { defaultValue: "Graal ID" })}
          value={formData.email}
          onChange={handleInputChange}
          bg="gray.800"
          color="white"
          border="1px solid"
          borderColor="gray.600"
          _hover={{ borderColor: "brand.500" }}
          _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px #667eea" }}
          borderRadius="md"
          size="lg"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel color="gray.300" fontSize="sm" fontWeight="medium">
          {t("upload.uploadCode", { defaultValue: "Enter your upload code" })}
        </FormLabel>
        <Input
          name="uploadcode"
          placeholder={t("upload.uploadCodePlaceholder", { defaultValue: "Upload Code" })}
          value={formData.uploadcode}
          onChange={handleInputChange}
          bg="gray.800"
          color="white"
          border="1px solid"
          borderColor="gray.600"
          _hover={{ borderColor: "brand.500" }}
          _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px #667eea" }}
          borderRadius="md"
          size="lg"
        />
      </FormControl>
      <UploadTypeSelector selectedGame={selectedGame} formData={formData} setFormData={setFormData} uploadPrices={uploadPrices} />
      {(selectedGame === "classic" && (formData.type === "guild_logo" || formData.type === "guild_hat" || formData.type === "guild_acc")) && (
        <FormControl>
          <FormLabel color="gray.300" fontSize="sm" fontWeight="medium">
            {t("upload.guildInfo", { defaultValue: "Enter your guild information" })}
          </FormLabel>
          <Input
            name="guild"
            placeholder={t("upload.guildName", { defaultValue: "Guild name" })}
            value={formData.guild}
            onChange={handleInputChange}
            bg="gray.800"
            color="white"
            border="1px solid"
            borderColor="gray.600"
            _hover={{ borderColor: "brand.500" }}
            _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px #667eea" }}
            borderRadius="md"
            size="lg"
          />
        </FormControl>
      )}
      {showPersonalUpload && (
        <FormControl>
          <CustomCheckbox name="personalupload" isChecked={formData.personalupload} onChange={handleInputChange}>
            {t("upload.makePersonal", { defaultValue: "Make personal?" })}
          </CustomCheckbox>
        </FormControl>
      )}
      <FormControl isRequired>
        <FormLabel color="gray.300" fontSize="sm" fontWeight="medium">
          {t("upload.selectFile", { defaultValue: "Select a file to upload" })}
        </FormLabel>
        <Input
          type="file"
          name="file"
          onChange={handleInputChange}
          ref={fileInputRef}
          bg="gray.800"
          color="white"
          border="1px solid"
          borderColor="gray.600"
          _hover={{ borderColor: "brand.500" }}
          _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px #667eea" }}
          borderRadius="md"
          size="lg"
          p={1}
        />
      </FormControl>
      {showTransed && (
        <FormControl>
          <CustomCheckbox name="transed" isChecked={formData.transed} onChange={handleInputChange}>
            {t("upload.setTransparency", { defaultValue: "Set transparency?" })}
          </CustomCheckbox>
        </FormControl>
      )}
      <UploadRules game={selectedGame} />
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