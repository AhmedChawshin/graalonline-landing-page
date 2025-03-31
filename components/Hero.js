"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Text,
  Button,
  VStack,
  Fade,
  Flex,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter for client-side navigation

const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);
const MotionText = motion.create(Text);

export default function Hero() {
  const { t } = useTranslation();
  const [userCount, setUserCount] = useState(1500); // Starting user count
  const router = useRouter(); // Initialize router for navigation

  // Simulate user count fluctuation
  useEffect(() => {
    const fluctuateUserCount = () => {
      const change = Math.floor(Math.random() * 101) - 50; // Random change between -50 and +50
      setUserCount((prev) => {
        const newCount = prev + change;
        if (newCount < 1450) return 1450;
        if (newCount > 1550) return 1550;
        return newCount;
      });
    };

    const interval = setInterval(fluctuateUserCount, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Fade in>
      <MotionBox
        minH="100vh"
        bgImage="url('/background_graalwebsite.jpg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        px={6}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        position="relative"
      >
        {/* Gradient Overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bgGradient="linear(to-b, rgba(0, 0, 0, 0.6), rgba(102, 126, 234, 0.2))"
          zIndex={1}
        />

        {/* Content */}
        <Flex
          minH="100vh"
          justify="center"
          align="center"
          textAlign="center"
          px={{ base: 4, md: 8 }}
          position="relative"
          zIndex={2}
        >
          <VStack spacing={{ base: 6, md: 8 }} maxW="750px">
            {/* Logo */}
            <Image
              src="/logograalonlinequality.png"
              style={{
                objectFit: "contain",
                transition: "transform 0.3s ease-in-out",
                maxWidth: "100%",
                height: "auto",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              draggable="false"
              alt="Landing page logo"
              width={250}
              height={150}
              quality={100}
              priority
              sizes="(max-width: 768px) 200px, 250px"
            />

            {/* Description */}
            <Text
              fontSize={{ base: "md", md: "xl" }}
              color="white"
              textShadow="0 0 8px rgba(0, 0, 0, 0.6)"
              lineHeight="1.8"
              fontWeight="medium"
            >
              {t("hero.description")}
            </Text>

            {/* User Count */}
            <MotionText
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="semibold"
              color="white"
              bg="rgba(255, 255, 255, 0.15)"
              px={4}
              py={2}
              borderRadius="full"
              boxShadow="0 0 12px rgba(102, 126, 234, 0.3)"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {t("hero.playersOnline", {
                count: userCount,
                defaultValue: "{{count}} Players Online",
              })}
            </MotionText>

            {/* Call-to-Action Section */}
            <VStack spacing={4}>
              {/* Centered Discover Button */}
              <Button
                colorScheme="brand"
                size={{ base: "md", md: "lg" }}
                bg="brand.500"
                color="white"
                _hover={{
                  bg: "brand.600",
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 20px rgba(102, 126, 234, 0.5)",
                }}
                _active={{ transform: "translateY(0)" }}
                transition="all 0.3s ease"
                boxShadow="0 4px 15px rgba(102, 126, 234, 0.3)"
                onClick={() =>
                  document.getElementById("discover").scrollIntoView({ behavior: "smooth" })
                }
                fontWeight="bold"
                px={{ base: 6, md: 10 }}
                py={{ base: 6, md: 7 }}
                rounded="lg"
              >
                {t("hero.discoverButton")}
              </Button>

              {/* Secondary Buttons */}
              <HStack spacing={4}>
                <Button
                  as="a" // Render as an anchor tag for external link
                  href="https://support.toonslab.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size={{ base: "sm", md: "md" }}
                  color="white"
                  borderColor="brand.400"
                  _hover={{
                    bg: "brand.500",
                    color: "white",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
                  }}
                  transition="all 0.3s ease"
                  boxShadow="0 2px 8px rgba(102, 126, 234, 0.2)"
                  fontWeight="medium"
                  px={{ base: 4, md: 6 }}
                >
                  {t("header.support")}
                </Button>
                <Button
                  size={{ base: "sm", md: "md" }}
                  variant="outline"
                  color="white"
                  borderColor="brand.400"
                  _hover={{
                    bg: "brand.500",
                    color: "white",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
                  }}
                  transition="all 0.3s ease"
                  boxShadow="0 2px 8px rgba(102, 126, 234, 0.2)"
                  fontWeight="medium"
                  px={{ base: 4, md: 6 }}
                  onClick={() => router.push("/upload")} // Client-side navigation
                >
                  {t("header.upload")}
                </Button>
              </HStack>
            </VStack>

            {/* Scroll Down Indicator */}
            <MotionFlex
              direction="column"
              align="center"
              mt={{ base: 8, md: 12 }}
              onClick={() =>
                document.getElementById("discover").scrollIntoView({ behavior: "smooth" })
              }
              cursor="pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Text
                fontSize="sm"
                fontWeight="medium"
                color="white"
                textShadow="0 0 6px rgba(0, 0, 0, 0.5)"
                mb={2}
              >
                {t("hero.scrollDown")}
              </Text>
              <MotionFlex
                initial={{ y: 0 }}
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <Icon
                  as={ChevronDownIcon}
                  w={10}
                  h={10}
                  color="white"
                  _hover={{ color: "brand.400" }}
                  transition="color 0.3s ease"
                />
              </MotionFlex>
            </MotionFlex>
          </VStack>
        </Flex>
      </MotionBox>
    </Fade>
  );
}