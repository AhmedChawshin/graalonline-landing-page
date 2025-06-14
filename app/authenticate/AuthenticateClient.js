"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  Alert,
  AlertIcon,
  AlertDescription,
  Flex,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaNetworkWired,
  FaMapMarkerAlt,
  FaClock,
  FaShieldAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);

export default function AuthenticateClient() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [authStatus, setAuthStatus] = useState("pending");
  const [geoData, setGeoData] = useState(null);
  const [secretId, setSecretId] = useState(null);
  const [requestDate, setRequestDate] = useState(null);

  const [deviceId, setDeviceId] = useState(null);

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const toast = useToast();

  // Colors
  const cardBg = "gray.800";
  const cardBorder = "gray.700";
  const textColor = "gray.100";
  const subtleTextColor = "gray.400";
  const successBg = "green.900";
  const successText = "green.200";
  const errorBg = "red.900";
  const errorText = "red.200";
  const warningBg = "yellow.900";
  const warningText = "yellow.200";

  // Utility to do IP lookup if location missing
  const fetchGeoFromIp = async (ip) => {
    try {
      // Using free IP lookup API, you can replace with your own service or API key if needed
      const res = await fetch(`https://ipapi.co/${ip}/json/`);
      if (!res.ok) throw new Error("Failed to fetch IP location");
      const data = await res.json();
      return {
        city: data.city || undefined,
        region: data.region || undefined,
        country: data.country_name || undefined,
      };
    } catch (error) {
      console.warn("IP lookup failed:", error);
      return {};
    }
  };

useEffect(() => {
  const b64data = new URLSearchParams(window.location.search).get("data");
  if (b64data) {
    try {
      // Convert URL-safe base64 to standard base64
      let base64 = b64data.replace(/-/g, '+').replace(/_/g, '/');

      // Add padding if missing
      const pad = base64.length % 4;
      if (pad) base64 += '='.repeat(4 - pad);

      const jsonStr = atob(base64);
      const parsed = JSON.parse(jsonStr);

      if (!parsed.ip || !parsed.secretId) {
        throw new Error("Missing required fields in data");
      }

      // Decode secretId and devideid if URL encoded
      parsed.secretId = decodeURIComponent(parsed.secretId);
      parsed.DeviceId = decodeURIComponent(parsed.deviceId);
      parsed.Date = decodeURIComponent(parsed.date);

      setRequestDate(parsed.Date);
      setSecretId(parsed.secretId);
      setDeviceId(parsed.DeviceId)
      fetchGeoFromIp(parsed.ip).then((loc) => {
        setGeoData({
          ip: parsed.ip,
          ...loc,
        });
        setIsLoading(false);  // done loading here
      });
    } catch (error) {
      console.error("Failed to parse base64 data:", error);
      setIsLoading(false); // done loading, but failed
    }
  } else {
    // No data param at all
    setIsLoading(false);
  }
}, []);




  const handleConfirm = async () => {
    if (!secretId || !geoData) return;

    try {
      const response = await fetch(`http://url7039.graalmail.com/ls/click?upn=${secretId.toString()}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      setAuthStatus("confirmed");
      setIsConfirmOpen(false);
      toast({
        title: t("authenticate.authConfirmed"),
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      console.error("Failed to confirm authentication:", error);
      toast({
        title: t("authenticate.authDenied"),
        description: error instanceof Error ? error.message : String(error),
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      setAuthStatus("denied");
      setIsConfirmOpen(false);
    }
  };

  const handleDeny = () => {
    setAuthStatus("denied");
    toast({
      title: t("authenticate.authDenied"),
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

 if (isLoading) {
  return (
    <Center minH="100vh" px={4} bg="gray.900">
      <Text color="gray.400" fontSize="md">
        Loading...
      </Text>
    </Center>
  );
}

if (!secretId || !geoData || !deviceId) {
  return (
    <Center minH="100vh" px={4} bg="gray.900">
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        maxW="sm"
        w="full"
        p={6}
        bg={cardBg}
        borderWidth="1px"
        borderColor={cardBorder}
        borderRadius="lg"
        boxShadow="xl"
        textAlign="center"
      >
        <Icon as={FaTimesCircle} boxSize={8} color="red.400" mb={3} />
        <Heading size="md" mb={2} color={textColor}>
          {t("authenticate.invalidRequest")}
        </Heading>
        <Text fontSize="sm" color={subtleTextColor}>
          {t("authenticate.invalidRequestDescription")}
        </Text>
      </MotionBox>
    </Center>
  );
}


  return (
    <Center minH="100vh" px={4} bg="gray.900">
      <MotionBox
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        maxW="sm"
        w="full"
        p={6}
        bg={cardBg}
        borderWidth="1px"
        borderColor={cardBorder}
        borderRadius="lg"
        boxShadow="xl"
      >
        <VStack spacing={5} align="stretch">
          <VStack spacing={1}>
            <Icon as={FaShieldAlt} boxSize={6} color="blue.400" />
            <Heading as="h1" size="md" color={textColor}>
              {t("authenticate.authDevice")}
            </Heading>
            <Text fontSize="sm" color={subtleTextColor}>
              {t("authenticate.verifyLoginAttempt")}
            </Text>
          </VStack>

          <Alert
            status="warning"
            borderRadius="md"
            bg={warningBg}
            color={warningText}
            fontSize="sm"
            py={2}
            borderWidth="1px"
            borderColor="yellow.700"
          >
            <AlertIcon
              as={FaExclamationTriangle}
              boxSize={5}
              color={warningText}
            />
            <AlertDescription fontWeight="medium">
              {t("authenticate.securityWarningMessage")}
            </AlertDescription>
          </Alert>

          <Box borderWidth="1px" borderColor={cardBorder} borderRadius="md" p={4}>
            <VStack spacing={2} fontSize="sm" align="stretch">
              <Flex align="center" gap={2}>
                <Icon as={FaNetworkWired} color={subtleTextColor} boxSize={4} />
                <Text color={subtleTextColor}>{t("authenticate.ip")}</Text>
                <Text color={textColor} fontWeight="medium" ml="auto">
                  {geoData.ip}
                </Text>
              </Flex>
              {geoData.city && geoData.region && (
                <Flex align="center" gap={2}>
                  <Icon as={FaMapMarkerAlt} color={subtleTextColor} boxSize={4} />
                  <Text color={subtleTextColor}>{t("authenticate.location")}</Text>
                  <Text color={textColor} fontWeight="medium" ml="auto">
                    {geoData.city}, {geoData.region}
                    {geoData.country ? `, ${geoData.country}` : ""}
                  </Text>
                </Flex>
              )}
              <Flex align="center" gap={2}>
                <Icon as={FaClock} color={subtleTextColor} boxSize={4} />
                <Text color={subtleTextColor}>{t("authenticate.time")}</Text>
                <Text color={textColor} fontWeight="medium" ml="auto">
                  {new Date(requestDate).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                  })}
                </Text>
              </Flex>
              <Flex align="center" gap={2}>
                <Icon as={FaShieldAlt} color={subtleTextColor} boxSize={4} />
                <Text color={subtleTextColor}>{t("authenticate.deviceId")}</Text>
                <Text
                  color={textColor}
                  fontWeight="medium"
                  fontFamily="mono"
                  ml="auto"
                  wordBreak="break-all"
                >
                  {deviceId}
                </Text>
              </Flex>
            </VStack>
          </Box>

          {authStatus === "pending" ? (
            <Flex gap={2}>
              <Button
                variant="outline"
                flex={1}
                onClick={handleDeny}
                colorScheme="red"
                leftIcon={<FaTimesCircle />}
              >
                {t("authenticate.deny")}
              </Button>
              <Button
                flex={1}
                onClick={() => setIsConfirmOpen(true)}
                colorScheme="blue"
                leftIcon={<FaCheckCircle />}
              >
                {t("authenticate.confirm")}
              </Button>
            </Flex>
          ) : (
            <Center
              py={2}
              borderRadius="md"
              bg={authStatus === "confirmed" ? successBg : errorBg}
              color={authStatus === "confirmed" ? successText : errorText}
            >
              <Icon
                as={authStatus === "confirmed" ? FaCheckCircle : FaTimesCircle}
                mr={2}
              />
              <Text fontWeight="medium">
                {authStatus === "confirmed"
                  ? t("authenticate.authConfirmed")
                  : t("authenticate.authDenied")}
              </Text>
            </Center>
          )}
        </VStack>
      </MotionBox>

      <Modal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        size="sm"
      >
        <ModalOverlay />
        <ModalContent borderRadius="lg" bg={cardBg} mx={4}>
          <ModalHeader fontSize="md" color={textColor}>
            {t("authenticate.confirmAuthentication")}
          </ModalHeader>
          <ModalCloseButton color={subtleTextColor} />
          <ModalBody>
            <Text fontSize="sm" color={subtleTextColor}>
              {t("authenticate.confirmPrompt")}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Flex gap={2} w="full">
              <Button variant="outline" flex={1} onClick={() => setIsConfirmOpen(false)}>
                {t("authenticate.cancel")}
              </Button>
              <Button
                flex={1}
                onClick={handleConfirm}
                colorScheme="blue"
                leftIcon={<FaCheckCircle />}
              >
                {t("authenticate.confirm")}
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}
