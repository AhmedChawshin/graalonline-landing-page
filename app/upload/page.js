// pages/upload.js
"use client";

import { useState, useEffect } from "react";
import { Box, Heading, VStack, Button, SimpleGrid, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useToast } from "@chakra-ui/react";
import EraClassicForm from "../../components/upload/EraClassicForm";
import OlwestForm from "../../components/upload/OlwestForm";
import ZoneForm from "../../components/upload/ZoneForm";

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionHeading = motion(Heading);

export default function Upload() {
  const { t } = useTranslation();
  const toast = useToast();
  const [selectedGame, setSelectedGame] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    uploadcode: "",
    type: "head",
    personalupload: false,
    guild: "",
    file: null,
    transed: false,
    invalidCheck: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadPrices, setUploadPrices] = useState({});

  const games = [
    { value: "era", label: t("discover.games.graalEra.title", { defaultValue: "GraalOnline Era" }), endpoint: "https://eraupload.graalonline.com/upload-new.gs", icon: "/era.avif" },
    { value: "olwest", label: t("discover.games.graalOlwest.title", { defaultValue: "GraalOnline Ol'West" }), endpoint: "http://loginolwest1.graalonline.com:8080/upload.gs", icon: "/olwest.avif" },
    { value: "classic", label: t("discover.games.graalonlineClassic.title", { defaultValue: "GraalOnline Classic" }), endpoint: "https://classicupload.graalonline.com/upload.gs", icon: "/classic.avif" },
    { value: "zone", label: "GraalOnline Zone", endpoint: "./upload.gs", icon: "/zone.avif" },
  ];

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch("/uploadPrices.json");
        if (!response.ok) throw new Error("Failed to fetch upload prices");
        const data = await response.json();
        setUploadPrices(data);
      } catch (error) {
        console.error("Error fetching upload prices:", error);
      }
    };
    fetchPrices();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const game = games.find((g) => g.value === selectedGame);
    if (!game) return;

    setIsSubmitting(true);

    const data = new FormData();

    if (selectedGame === "era" || selectedGame === "classic") {
      // Era and Classic specific fields
      data.append("email", formData.email);
      data.append("uploadcode", formData.uploadcode);
      data.append("type", formData.type);
      data.append("type2", formData.type); // Mirror type for type2
      data.append("guild", formData.guild || ""); // Empty string if not provided
      data.append("file", formData.file);
      data.append("submit", uploadPrices[selectedGame]?.[formData.type] || "Upload"); // Price or "Upload"
    } else if (selectedGame === "olwest") {
      // Ol'West specific fields
      data.append("email", formData.email);
      data.append("file", formData.file);
      data.append("type", formData.type);
      data.append("submit", uploadPrices[selectedGame]?.[formData.type] || "Upload");
      if (formData.transed) data.append("transed", "on"); // Only include if checked
    } else if (selectedGame === "zone") {
      // Zone specific fields
      data.append("email", formData.email);
      data.append("file", formData.file);
      data.append("type", formData.type);
      data.append("submit", uploadPrices[selectedGame]?.[formData.type] || "Upload");
      if (formData.transed) data.append("transed", "on"); // Only include if checked
    }

    try {
      const response = await fetch(game.endpoint, {
        method: "POST",
        body: data,
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const htmlContent = await response.text();
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlContent;
      const messageElement = tempDiv.querySelector("#msg");
      const message = messageElement ? messageElement.textContent : "Message not found";

      if (
        message.includes("Please enter the correct Upload Code") ||
        message.includes("Unknown file type") ||
        message.includes("enough") ||
        message.includes("Message not found") ||
        message.includes("Sorry there was a problem with submitting the image!") ||
        message.includes("You need to specify a correct e-mail address or Graal ID!") ||
        message.includes("email") ||
        message.includes("There is no player with the account")
      ) {
        toast({
          title: t("upload.errorTitle", { defaultValue: "Upload Failed" }),
          description: message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      }

      toast({
        title: t("upload.successTitle", { defaultValue: "Upload Successful" }),
        description: message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setFormData({
        email: "",
        uploadcode: "",
        type: "head",
        personalupload: false,
        guild: "",
        file: null,
        transed: false,
        invalidCheck: false,
      });
    } catch (error) {
      toast({
        title: t("upload.errorTitle", { defaultValue: "Upload Failed" }),
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderGameSelection = () => (
    <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
      <Heading as="h1" size="xl" textAlign="center" color="white" fontWeight="bold" mb={10} textShadow="0 2px 4px rgba(0, 0, 0, 0.2)">
        {t("upload.selectGame", { defaultValue: "Select a Game to Upload" })}
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
            _hover={{ borderColor: "brand.400", bg: "gray.700", transform: "translateY(-2px)", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}
            transition="all 0.3s ease"
          >
            <Image src={game.icon} boxSize="50px" mb={3} draggable="false" />
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
      <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <VStack spacing={6} maxW="700px" mx="auto">
          <MotionHeading as="h1" size="xl" textAlign="center" color="white" fontWeight="bold">
            {selectedGameData.label}
          </MotionHeading>
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
            _hover={{ bg: "gray.700", borderColor: "brand.400", transform: "translateY(-2px)", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}
            transition="all 0.3s ease"
          >
            {t("upload.backToGames", { defaultValue: "Go Back to Games" })}
          </MotionButton>
          <Box w="full" bg="gray.800" p={8} borderRadius="md" boxShadow="0 4px 12px rgba(0, 0, 0, 0.3)" border="1px solid" borderColor="gray.700">
            {renderForm()}
          </Box>
        </VStack>
      </MotionBox>
    );
  };

  const renderForm = () => {
    switch (selectedGame) {
      case "era":
      case "classic":
        return (
          <EraClassicForm
            selectedGame={selectedGame}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            uploadPrices={uploadPrices[selectedGame] || {}}
          />
        );
      case "olwest":
        return (
          <OlwestForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            uploadPrices={uploadPrices[selectedGame] || {}}
          />
        );
      case "zone":
        return (
          <ZoneForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            uploadPrices={uploadPrices[selectedGame] || {}}
          />
        );
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
      <MotionBox position="absolute" top={0} left={0} right={0} bottom={0} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} />
      {selectedGame ? renderGameForm() : renderGameSelection()}
    </MotionBox>
  );
}