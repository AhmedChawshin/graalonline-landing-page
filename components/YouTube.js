"use client";
import { useEffect, useState, useRef } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Fade,
  Link,
  Button,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaYoutube, FaPlay } from "react-icons/fa";
import axios from "axios";

const MotionBox = motion(Box);

const CHANNEL_ID = "UCgepWt075N5ObYPHNy_Ic2w";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: index * 0.1,
    },
  }),
};

export default function NewsSection() {
  const { t } = useTranslation();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("/api/youtube-feed");
        setVideos(res.data);
      } catch (err) {
        console.error("Failed to fetch YouTube videos:", err);
        setError(t("youtube.error"));
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [t]);

  return (
    <Fade in>
      <Box
        bgImage="url('https://i.imgur.com/oN8rCgO.png')"
        bgRepeat="repeat"
        bgSize="auto"
        color="white"
        px={{ base: 4, md: 6 }}
        py={12}
        minH="100vh"
        ref={sectionRef}
        position="relative"
        borderTop="2px solid white"
      >
        <VStack spacing={12} maxW="1400px" mx="auto">
          <Heading as="h1" size={{ base: "xl", md: "2xl" }} textAlign="center">
            {t("youtube.title")}
          </Heading>

          {loading && <Text fontSize="lg">{t("youtube.loading")}</Text>}
          {error && <Text fontSize="lg" color="red.300">{error}</Text>}

          {!loading && videos.length > 0 && (
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }} w="full">
              {videos.map((video, index) => (
                <MotionBox
                  key={video.id}
                  bg="gray.800"
                  borderRadius="lg"
                  boxShadow="lg"
                  overflow="hidden"
                  _hover={{ transform: "scale(1.03)", boxShadow: "xl", bg: "gray.700" }}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={index}
                >
                  <Link href={video.url} isExternal _hover={{ textDecoration: "none" }}>
                    <Box position="relative" w="full" pt="56.25%">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        objectFit="cover"
                        position="absolute"
                        top={0}
                        left={0}
                        width="100%"
                        height="100%"
                      />
                      <Box
                        position="absolute"
                        inset={0}
                        bg="blackAlpha.400"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        opacity={0}
                        _hover={{ opacity: 1 }}
                        transition="opacity 0.2s ease"
                      >
                        <FaPlay size={32} color="white" />
                      </Box>
                    </Box>
                    <Box p={5}>
                      <Heading as="h3" size="sm" mb={3} noOfLines={2}>
                        {video.title}
                      </Heading>
                      <Button
                        size="sm"
                        variant="ghost"
                        leftIcon={<FaYoutube />}
                        w="full"
                        color="gray.300"
                        _hover={{ bg: "gray.700", color: "white" }}
                      >
                        {t("youtube.watch")}
                      </Button>
                    </Box>
                  </Link>
                </MotionBox>
              ))}
            </SimpleGrid>
          )}

          {!loading && videos.length > 0 && (
            <Button
              as="a"
              href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
              target="_blank"
              variant="ghost"
              size="md"
              color="gray.300"
              _hover={{ bg: "gray.700", color: "white" }}
              leftIcon={<FaYoutube />}
              mt={8}
            >
              {t("youtube.viewChannel")}
            </Button>
          )}
        </VStack>
      </Box>
    </Fade>
  );
}
