"use client";
import { useEffect, useState, useRef } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Fade,
  Link,
  Flex,
  Button,
  Image,
  SimpleGrid,
  Checkbox,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);

// RSS feeds with game labels
const RSS_FEEDS = [
  { url: "https://fetchrss.com/rss/67dc10f911087c9f2e07117267dc114fafd4cc2f7b0eb142.rss", label: "Era" },
  { url: "https://fetchrss.com/rss/67dc10f911087c9f2e07117267dc10e01c3dd50d360f3a43.rss", label: "Classic" },
  { url: "https://fetchrss.com/rss/67dc10f911087c9f2e07117267dc118abf187c22500e1c42.rss", label: "Ol'West" },
  { url: "https://fetchrss.com/rss/67dc10f911087c9f2e07117267dc11766f3966b055048784.rss", label: "Zone" },
];

// Animation variants for a cooler effect
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 2,
      ease: [0.6, -0.05, 0.01, 0.99],
      delay: index * 0.15,
    },
  }),
};

export default function NewsSection() {
  const { t } = useTranslation();
  const [feeds, setFeeds] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFeeds, setSelectedFeeds] = useState(() => {
    const randomIndex = Math.floor(Math.random() * RSS_FEEDS.length);
    return [RSS_FEEDS[randomIndex].label];
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" }); // Adjusted for earlier trigger

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        setLoading(true);
        const feedData = {};

        for (const feed of RSS_FEEDS) {
          const response = await fetch(
            `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`,
            { cache: "no-store" } // Prevent caching issues
          );
          const data = await response.json();

          if (data.status !== "ok") {
            throw new Error(`Failed to fetch posts for ${feed.label}`);
          }

          const formattedPosts = data.items.slice(0, 3).map((item) => ({
            title: item.title.replace(/\\u[\dA-F]{4}/gi, (match) =>
              String.fromCharCode(parseInt(match.substr(2), 16))
            ) || "Untitled",
            description: item.description
              .replace(/<[^>]+>/g, "")
              .replace(/\\n/g, " ")
              .trim() || "No description available",
            link: item.link,
            date: new Date(item.pubDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }) || "Unknown date",
            thumbnail: item.thumbnail || item.enclosure?.link || "/potluck.png",
          }));

          feedData[feed.label] = formattedPosts;
        }

        setFeeds(feedData);
      } catch (err) {
        setError(t("news.error") || "Failed to load news");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRSS();
  }, [t]);

  const handleFeedSelection = (values) => {
    setSelectedFeeds(values);
  };

  return (
    <Fade in>
      <Box
        bg="gray.900"
        color="white"
        px={{ base: 4, md: 6 }}
        py={12}
        minH="100vh"
        ref={sectionRef}
        position="relative" // Ensure stacking context
        overflow="visible" // Prevent clipping
      >
        <VStack spacing={12} maxW="1400px" mx="auto">
          <Heading as="h1" size={{ base: "xl", md: "2xl" }} textAlign="center">
            {t("news.title")}
          </Heading>

          {/* Feed Selection Checkboxes */}
          <CheckboxGroup value={selectedFeeds} onChange={handleFeedSelection}>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: 4, md: 6 }}
              mb={8}
              justify="center"
              align="center"
            >
              {RSS_FEEDS.map((feed) => (
                <Checkbox
                  key={feed.label}
                  value={feed.label}
                  colorScheme="blue"
                  size="lg"
                  sx={{ "& .chakra-checkbox__control": { borderWidth: "2px" } }}
                >
                  <Text fontSize={{ base: "md", md: "lg" }} color="white">
                    {t(`news.${feed.label.toLowerCase()}`)}
                  </Text>
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>

          {loading && <Text fontSize="lg">{t("news.loading")}</Text>}
          {error && <Text fontSize="lg" color="red.300">{error}</Text>}

          {!loading && !error && Object.keys(feeds).length > 0 && (
            <VStack spacing={15} w="full">
              {Object.entries(feeds)
                .filter(([label]) => selectedFeeds.includes(label))
                .map(([label, posts], feedIndex) => (
                  <Box key={label} w="full">
                    <Heading as="h2" size={{ base: "md", md: "lg" }} mb={6} color="blue.300">
                      {t(`news.${label.toLowerCase()}`)}
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }}>
                      {posts.map((post, index) => (
                        <MotionBox
                          key={index}
                          bg="gray.800"
                          borderRadius="lg"
                          boxShadow="lg"
                          overflow="hidden"
                          _hover={{
                            transform: `rotate(${feedIndex % 2 === 0 ? index * 2 : -index * 2}deg) scale(1.03)`,
                            boxShadow: "xl",
                            bg: "gray.700",
                          }}
                          variants={cardVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          custom={index + feedIndex * 3}
                          position="relative"
                        >
                          <Link href={post.link} isExternal _hover={{ textDecoration: "none" }}>
                            <Image
                              src={post.thumbnail}
                              alt={post.title}
                              h={{ base: "150px", md: "200px" }}
                              w="full"
                              objectFit="cover"
                              borderTopRadius="lg"
                              fallbackSrc="/potluck.png" // Reverted to original fallbackSrc
                            />
                            <Box p={{ base: 4, md: 5 }}>
                              <Heading
                                as="h3"
                                size={{ base: "sm", md: "md" }}
                                mb={3}
                                color="white"
                                noOfLines={2}
                              >
                                {post.title}
                              </Heading>
                              <Text
                                fontSize={{ base: "xs", md: "sm" }}
                                color="gray.300"
                                noOfLines={3}
                                mb={4}
                              >
                                {post.description.replace("(Feed generated with FetchRSS)", "")}
                              </Text>
                              <Flex justify="space-between" align="center">
                                <Text fontSize={{ base: "2xs", md: "xs" }} color="gray.400">
                                  {post.date}
                                </Text>
                                <Button
                                  size={{ base: "xs", md: "sm" }}
                                  colorScheme="blue"
                                  variant="outline"
                                  _hover={{ bg: "blue.600", color: "white" }}
                                  px={{ base: 4, md: 6 }}
                                >
                                  {t("news.readMore")}
                                </Button>
                              </Flex>
                            </Box>
                          </Link>
                        </MotionBox>
                      ))}
                    </SimpleGrid>
                  </Box>
                ))}
            </VStack>
          )}

          {!loading && !error && selectedFeeds.length > 0 && Object.keys(feeds).filter(label => selectedFeeds.includes(label)).length === 0 && (
            <Text fontSize="lg">{t("news.noPosts")}</Text>
          )}

          {!loading && !error && selectedFeeds.length === 0 && (
            <Text fontSize="lg">{t("news.selectFeed")}</Text>
          )}
        </VStack>
      </Box>
    </Fade>
  );
}