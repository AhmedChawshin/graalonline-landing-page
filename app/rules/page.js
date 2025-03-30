"use client";

import {
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import GraalOnlineEraRules from "../../components/rules/GraalOnlineEra"
import GraalOnlineRules from "../../components/rules/GraalOnline"
import GraalOnlineClassicRules from "../../components/rules/GraalOnlineClassic"
import PlayerworldsRules from "../../components/rules/Playerworlds"

const MotionBox = motion(Box);

export default function Rules() {
 
    return (
    <MotionBox
      minH="100vh"
      color="white"
      px={{ base: 4, md: 8 }}
      py={12}
      position="relative"
      overflow="hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <GraalOnlineRules />
      <GraalOnlineEraRules />
      <GraalOnlineClassicRules />
      <PlayerworldsRules />

    </MotionBox>
  );
}