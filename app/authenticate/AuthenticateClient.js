
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
import { FaNetworkWired, FaMapMarkerAlt, FaClock, FaShieldAlt, FaCheckCircle, FaTimesCircle, FaExclamationTriangle } from "react-icons/fa";

const mockGeolocationData = {
  ip: "192.168.1.1",
  city: "New York",
  region: "NY",
  country: "USA",
};

const MotionBox = motion(Box);

export default function AuthenticateClient() {
  const [authStatus, setAuthStatus] = useState("pending");
  const [geoData, setGeoData] = useState(mockGeolocationData);
  const [secretId, setSecretId] = useState(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const toast = useToast();

  // Dark mode colors
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

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("auth");
    if (id) {
      setSecretId(id);
      setGeoData(mockGeolocationData);
    }
  }, []);

  const handleConfirm = () => {
    setAuthStatus("confirmed");
    setIsConfirmOpen(false);
    toast({
      title: "Authentication Confirmed",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  const handleDeny = () => {
    setAuthStatus("denied");
    toast({
      title: "Authentication Denied",
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  if (!secretId) {
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
            Invalid Request
          </Heading>
          <Text fontSize="sm" color={subtleTextColor}>
            Please verify your link or contact support.
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
              Authenticate Device
            </Heading>
            <Text fontSize="sm" color={subtleTextColor}>
              Verify this login attempt
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
            <AlertIcon as={FaExclamationTriangle} boxSize={5} color={warningText} />
            <AlertDescription fontWeight="medium">
              Beware of scams! Only approve if you trust this device and location.
            </AlertDescription>
          </Alert>

          <Box borderWidth="1px" borderColor={cardBorder} borderRadius="md" p={4}>
            <VStack spacing={2} fontSize="sm" align="stretch">
              <Flex align="center" gap={2}>
                <Icon as={FaNetworkWired} color={subtleTextColor} boxSize={4} />
                <Text color={subtleTextColor}>IP</Text>
                <Text color={textColor} fontWeight="medium" ml="auto">{geoData.ip}</Text>
              </Flex>
              <Flex align="center" gap={2}>
                <Icon as={FaMapMarkerAlt} color={subtleTextColor} boxSize={4} />
                <Text color={subtleTextColor}>Location</Text>
                <Text color={textColor} fontWeight="medium" ml="auto">
                  {geoData.city}, {geoData.region}
                </Text>
              </Flex>
              <Flex align="center" gap={2}>
                <Icon as={FaClock} color={subtleTextColor} boxSize={4} />
                <Text color={subtleTextColor}>Time</Text>
                <Text color={textColor} fontWeight="medium" ml="auto">
                  {new Date().toLocaleString()}
                </Text>
              </Flex>
              <Flex align="center" gap={2}>
                <Icon as={FaShieldAlt} color={subtleTextColor} boxSize={4} />
                <Text color={subtleTextColor}>Device ID</Text>
                <Text color={textColor} fontWeight="medium" fontFamily="mono" fontSize="xs" ml="auto" wordBreak="break-all">
                  {secretId}
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
                Deny
              </Button>
              <Button
                flex={1}
                onClick={() => setIsConfirmOpen(true)}
                colorScheme="blue"
                leftIcon={<FaCheckCircle />}
              >
                Confirm
              </Button>
            </Flex>
          ) : (
            <Center
              py={2}
              borderRadius="md"
              bg={authStatus === "confirmed" ? successBg : errorBg}
              color={authStatus === "confirmed" ? successText : errorText}
            >
              <Icon as={authStatus === "confirmed" ? FaCheckCircle : FaTimesCircle} mr={2} />
              <Text fontWeight="medium">
                {authStatus === "confirmed" ? "Confirmed" : "Denied"}
              </Text>
            </Center>
          )}
        </VStack>
      </MotionBox>

      <Modal isOpen={isConfirmOpen} onClose={() => setIsConfirmOpen(false)} size="sm">
        <ModalOverlay />
        <ModalContent borderRadius="lg" bg={cardBg} mx={4}>
          <ModalHeader fontSize="md" color={textColor}>
            Confirm Authentication
          </ModalHeader>
          <ModalCloseButton color={subtleTextColor} />
          <ModalBody>
            <Text fontSize="sm" color={subtleTextColor}>
              Are you sure this is your device? Approving grants account access.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Flex gap={2} w="full">
              <Button
                variant="outline"
                flex={1}
                onClick={() => setIsConfirmOpen(false)}
              >
                Cancel
              </Button>
              <Button
                flex={1}
                onClick={handleConfirm}
                colorScheme="blue"
                leftIcon={<FaCheckCircle />}
              >
                Confirm
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}