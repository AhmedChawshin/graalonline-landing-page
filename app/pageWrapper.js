"use client";

import { Box, VStack } from "@chakra-ui/react";
import Hero from "../components/Hero";
import Discover from "../components/Discover";
import NewsSection from "../components/NewsSection";
import YouTube from "../components/YouTube";

export default function Home() {
  return (
    <>
      <Box as="main" minH="200vh" color="white">
        <VStack spacing={0} align="stretch">
          <Box id="home" minH="100vh">
            <Hero />
          </Box>
          <Box id="discover" minH="100vh">
            <Discover />
          </Box>
          <Box id="news" minH="100vh">
            <NewsSection />
          </Box>
          <Box id="youtube" minH="100vh">
            <YouTube />
          </Box>
        </VStack>
      </Box>
    </>
  );
}
