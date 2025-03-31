// pages/upload.js
"use client";

import { useState, useEffect, useRef } from "react";
import { Box, Heading, VStack, Button, SimpleGrid, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useToast } from "@chakra-ui/react";
import EraClassicForm from "../../components/upload/EraClassicForm";
import OlwestForm from "../../components/upload/OlwestForm";
import ZoneForm from "../../components/upload/ZoneForm";

const MotionBox = motion.create(Box);
const MotionButton = motion.create(Button);
const MotionHeading = motion.create(Heading);

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
  const fileInputRef = useRef(null);

  const games = [
    { value: "era", label: t("discover.games.graalEra.title", { defaultValue: "GraalOnline Era" }), endpoint: "https://eraupload.graalonline.com/upload-new.gs", icon: "/era.avif" },
    { value: "olwest", label: t("discover.games.graalOlwest.title", { defaultValue: "GraalOnline Ol'West" }), endpoint: "http://loginolwest1.graalonline.com:8080/upload.gs", icon: "/olwest.avif" },
    { value: "classic", label: t("discover.games.graalonlineClassic.title", { defaultValue: "GraalOnline Classic" }), endpoint: "https://classicupload.graalonline.com/upload.gs", icon: "/classic.png" },
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

    if (!formData.file) {
      toast({
        title: t("upload.errorTitle", { defaultValue: "Upload Failed" }),
        description: "Please select a file to upload.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);

    const data = new FormData();

    if (selectedGame === "era" || selectedGame === "classic") {
      data.append("email", formData.email);
      data.append("uploadcode", formData.uploadcode);
      data.append("type", formData.type);
      data.append("type2", formData.type);
      data.append("guild", formData.guild || "");
      data.append("file", formData.file);
      data.append("submit", uploadPrices[selectedGame]?.[formData.type] || "Upload");
      // Add personalupload for Era's shield and sword
      if (selectedGame === "era" && (formData.type === "shield" || formData.type === "sword")) {
        data.append("personalupload", formData.personalupload ? "on" : "off");
      }
    } else if (selectedGame === "olwest") {
      data.append("email", formData.email);
      data.append("file", formData.file);
      data.append("type", formData.type);
      data.append("submit", uploadPrices[selectedGame]?.[formData.type] || "Upload");
      data.append("transed", formData.transed ? "on" : "off");
    } else if (selectedGame === "zone") {
      data.append("email", formData.email);
      data.append("file", formData.file);
      data.append("type", formData.type);
      data.append("submit", uploadPrices[selectedGame]?.[formData.type] || "Upload");
      data.append("transed", formData.transed ? "on" : "off");
    }

    console.log([...data.entries()]);

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


      if (!message.toLowerCase().includes("thanks for submitting the file! it will be reviewed by admins soon.".toLowerCase())) {
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

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
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
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      py={12} // Increased vertical padding
      px={6}
    >
      <Heading
        as="h1"
        size="2xl" // Larger heading
        textAlign="center"
        color="white"
        fontWeight="extrabold"
        mb={12}
        textShadow="0 4px 6px rgba(0, 0, 0, 0.3)"
        letterSpacing="wide" // Slight letter spacing for elegance
      >
        {t("upload.selectGame", { defaultValue: "Select a Game to Upload" })}
      </Heading>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }} // Responsive columns: up to 4 on large screens
        spacing={8} // Increased spacing for breathing room
        maxW="1200px" // Wider max width for larger screens
        mx="auto"
      >
        {games.map((game, index) => (
          <MotionButton
            key={game.value}
            onClick={() => setSelectedGame(game.value)}
            bg="gray.800"
            color="white"
            border="2px solid"
            borderColor="gray.600"
            borderRadius="lg" 
            p={8} 
            height="200px" 
            width="100%" 
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            initial={{ scale: 0.85, y: 40 }} 
            animate={{ scale: 1, y: 0 }} 
            transition={{ 
              duration: 0.1, 
              ease: "easeOut", 
              delay: 0.1 * index 
            }}
            _hover={{
              borderColor: "brand.400",
              bg: "gray.700",
              transform: "translateY(-5px)", // Lift effect on hover
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.25)", // Stronger shadow
            }}
            whileHover={{ scale: 1.08 }} // Smooth hover scale
            whileTap={{ scale: 0.97 }} // Subtle tap feedback
            sx={{
              transition: "all 0.2s ease-out", // Smooth hover transition
            }}
          >
            <Image 
              src={game.icon} 
              boxSize="70px" // Larger icons
              mb={4} 
              draggable="false" 
              filter="drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))" // Icon shadow
            />
            <Text 
              fontSize="xl" // Larger text
              fontWeight="semibold"
              textShadow="0 1px 2px rgba(0, 0, 0, 0.1)"
            >
              {game.label}
            </Text>
          </MotionButton>
        ))}
      </SimpleGrid>
    </MotionBox>
  );

  const renderGameForm = () => {
    const selectedGameData = games.find((g) => g.value === selectedGame);
    if (!selectedGameData) return null;

    return (
      <MotionBox  initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <VStack spacing={6} maxW="1000px" mx="auto">
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
            fileInputRef={fileInputRef}
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
            fileInputRef={fileInputRef}
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
            fileInputRef={fileInputRef}
          />
        );
      default:
        return null;
    }
  };

  return (
    <MotionBox
      minH="80vh"
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