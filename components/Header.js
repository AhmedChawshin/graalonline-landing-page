"use client";

import {
  Box,
  Flex,
  Image,
  Button,
  HStack,
  IconButton,
  useDisclosure,
  Collapse,
  Select,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const MotionButton = motion.create(Button);

export default function Header() {
  const { t } = useTranslation();
  const { isOpen, onToggle } = useDisclosure();
  const [language, setLanguage] = useState("en");
  const router = useRouter(); // Initialize router

  // Sync language with i18n on mount (client-side only)
  useEffect(() => {
    setLanguage(i18n.language || "en"); // Fallback to "en" if undefined
  }, []);

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng); // Update local state
  };

  // Navigation functions
  const navigateToHome = () => {
    router.push("/");
  };

  const navigateToUpload = () => {
    router.push("/upload");
  };

  const navigateToDownload = () => {
    router.push("/download");
  };
  
  return (
    <Box
      as="header"
      bg="slate.800"
      color="slate.100"
      px={6}
      py={4}
      position="sticky"
      top={0}
      zIndex={10}
      boxShadow="lg"
      borderBottom="2px solid #57cbf8"
    >
      <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
        <Image
          src="/logograalonline.webp"
          alt="Graal Online"
          style={{
            objectFit: "contain",
            transition: "transform 0.3s ease-in-out",
            cursor: "pointer", // Add cursor pointer to indicate it's clickable
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onClick={navigateToHome} // Add click handler
          draggable="false"
        />

        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          colorScheme="slate"
          aria-label="Toggle Navigation"
        />

        <HStack
          spacing={6}
          display={{ base: "none", md: "flex" }}
          alignItems="center"
        >
          <MotionButton
            variant="ghost"
            colorScheme="slate"
            _hover={{ bg: "rgb(83, 166, 199)" }}
            whileHover={{ scale: 1.05 }}
            onClick={navigateToUpload} // Add upload navigation
          >
            {t("header.upload")}
          </MotionButton>
          <MotionButton
            variant="ghost"
            colorScheme="slate"
            _hover={{ bg: "rgb(83, 166, 199)" }}
            whileHover={{ scale: 1.05 }}
            as="a"
            href="https://support.toonslab.com/"
            target="_blank"
          >
            {t("header.support")}
          </MotionButton>
          <MotionButton

            variant="ghost"
            colorScheme="slate"
            _hover={{ bg: "rgb(83, 166, 199)" }}
            whileHover={{ scale: 1.05 }}
            onClick={navigateToDownload} 
          >
            {t("header.download")}
          </MotionButton>
          <MotionButton
            variant="ghost"
            colorScheme="slate"
            _hover={{ bg: "rgb(83, 166, 199)" }}
            whileHover={{ scale: 1.05 }}
            as="a"
            href="https://www.graalonline.com/accounts/signup"
            target="_blank"
          >
            {t("header.signupLogin")}
          </MotionButton>
          <Select
            onChange={(e) => changeLanguage(e.target.value)}
            value={language}
            width="120px"
            bg="slate.700"
            color="slate.100"
            borderColor="slate.600"
            _hover={{ borderColor: "brand.500" }}
            _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px #667eea" }}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </Select>
        </HStack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} pt={2} display={{ md: "none" }}>
          <Flex direction="column" align="center" gap={2}>
            <MotionButton
              variant="ghost"
              colorScheme="slate"
              width="full"
              _hover={{ bg: "rgb(83, 166, 199)" }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                navigateToUpload();
                onToggle();
              }}
            >
              {t("header.upload")}
            </MotionButton>
            <MotionButton
              variant="ghost"
              colorScheme="slate"
              width="full"
              _hover={{ bg: "rgb(83, 166, 199)" }}
              whileHover={{ scale: 1.05 }}
              as="a"
              href="https://www.graalonline.com/playerworlds/"
              target="_blank"
              onClick={onToggle}
            >
              {t("header.support")}
            </MotionButton>
            <MotionButton
              variant="ghost"
              colorScheme="slate"
              width="full"
              _hover={{ bg: "rgb(83, 166, 199)" }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                navigateToDownload();
                onToggle();
              }}
            >
              {t("header.download")}
            </MotionButton>
            <MotionButton
              variant="ghost"
              colorScheme="slate"
              width="full"
              _hover={{ bg: "rgb(83, 166, 199)" }}
              whileHover={{ scale: 1.05 }}
              as="a"
              href="https://www.graalonline.com/accounts/signup"
              target="_blank"
              onClick={onToggle}
            >
              {t("header.signupLogin")}
            </MotionButton>
            <Select
              onChange={(e) => changeLanguage(e.target.value)}
              value={language}
              width="full"
              bg="slate.700"
              color="slate.100"
              borderColor="slate.600"
              _hover={{ borderColor: "brand.500" }}
              _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px #667eea" }}
              mt={2}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </Select>
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
}