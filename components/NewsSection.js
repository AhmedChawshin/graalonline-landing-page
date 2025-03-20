import { useEffect, useState, useRef } from 'react';
import { Box, Heading, Text, VStack, Fade, Link, Flex, Button, Image, SimpleGrid, Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MotionBox = motion(Box);

// RSS feeds with game labels
const RSS_FEEDS = [
  { url: 'https://fetchrss.com/rss/67dc10f911087c9f2e07117267dc114fafd4cc2f7b0eb142.rss', label: 'Era' },
  { url: 'https://fetchrss.com/rss/67dc10f911087c9f2e07117267dc10e01c3dd50d360f3a43.rss', label: 'Classic' },
  { url: 'https://fetchrss.com/rss/67dc10f911087c9f2e07117267dc118abf187c22500e1c42.rss', label: "Ol'West" },
  { url: 'https://fetchrss.com/rss/67dc10f911087c9f2e07117267dc11766f3966b055048784.rss', label: 'Zone' },
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
      ease: [0.6, -0.05, 0.01, 0.99], // Smooth easing with a slight bounce
      delay: index * 0.15, // Staggered delay for each card
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

  // Single ref and useInView for the entire news section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-300px' });

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        setLoading(true);
        const feedData = {};

        for (const feed of RSS_FEEDS) {
          const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`);
          const data = await response.json();

          if (data.status !== 'ok') {
            throw new Error(`Failed to fetch posts for ${feed.label}`);
          }

          const formattedPosts = data.items.slice(0, 3).map((item) => ({
            title: item.title.replace(/\\u[\dA-F]{4}/gi, (match) => String.fromCharCode(parseInt(match.substr(2), 16))),
            description: item.description.replace(/<[^>]+>/g, '').replace(/\\n/g, ' ').trim(),
            link: item.link,
            date: new Date(item.pubDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            thumbnail: item.thumbnail || item.enclosure?.link || '/potluck.png',
          }));

          feedData[feed.label] = formattedPosts;
        }

        setFeeds(feedData);
      } catch (err) {
        setError(t('news.error'));
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRSS();
  }, [t]);

  // Handle checkbox changes
  const handleFeedSelection = (values) => {
    setSelectedFeeds(values);
  };

  return (
    <Fade in>
      <Box bg="gray.900" color="white" px={6} py={12} minH="100vh" ref={sectionRef}>
        <VStack spacing={12} maxW="1400px" mx="auto">
          <Heading as="h1" size="2xl" textAlign="center">
            {t('news.title')}
          </Heading>

          {/* Feed Selection Checkboxes */}
          <CheckboxGroup value={selectedFeeds} onChange={handleFeedSelection}>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} mb={8} justify="center">
              {RSS_FEEDS.map((feed) => (
                <Checkbox key={feed.label} value={feed.label} colorScheme="blue">
                  {t(`${feed.label}`)}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>

          {loading && <Text>{t('news.loading')}</Text>}
          {error && <Text color="red.300">{error}</Text>}

          {!loading && !error && Object.keys(feeds).length > 0 && (
            <VStack spacing={15} w="full">
              {Object.entries(feeds)
                .filter(([label]) => selectedFeeds.includes(label)) // Only show selected feeds
                .map(([label, posts], feedIndex) => (
                  <Box key={label} w="full">
                    <Heading as="h2" size="lg" mb={6} color="blue.300">
                      {t(`${label}`)}
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                      {posts.map((post, index) => (
                        <MotionBox
                          key={index}
                          bg="gray.800"
                          borderRadius="lg"
                          boxShadow="lg"
                          overflow="hidden"
                          _hover={{
                            transform: `rotate(${feedIndex % 2 === 0 ? index * 2 : -index * 2}deg) scale(1.03)`,
                            boxShadow: 'xl',
                            bg: 'gray.700',
                          }}
                          variants={cardVariants}
                          initial="hidden"
                          animate={isInView ? 'visible' : 'hidden'}
                          custom={index + feedIndex * 3} // Adjust index for multiple feeds
                        >
                          <Link href={post.link} isExternal _hover={{ textDecoration: 'none' }}>
                            <Image
                              src={post.thumbnail}
                              alt={post.title}
                              h="200px"
                              w="full"
                              objectFit="cover"
                              borderTopRadius="lg"
                              fallbackSrc="/potluck.png"
                            />
                            <Box p={5}>
                              <Heading as="h3" size="md" mb={3} color="white" noOfLines={2}>
                                {post.title}
                              </Heading>
                              <Text fontSize="sm" color="gray.300" noOfLines={3} mb={4}>
                                {post.description.replace("(Feed generated with FetchRSS)", "")}
                              </Text>
                              <Flex justify="space-between" align="center">
                                <Text fontSize="xs" color="gray.400">
                                  {post.date}
                                </Text>
                                <Button
                                  size="sm"
                                  colorScheme="blue"
                                  variant="outline"
                                  _hover={{ bg: 'blue.600', color: 'white' }}
                                >
                                  {t('news.readMore')}
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
            <Text>{t('news.noPosts')}</Text>
          )}

          {!loading && !error && selectedFeeds.length === 0 && (
            <Text>{t('news.selectFeed')}</Text>
          )}
        </VStack>
      </Box>
    </Fade>
  );
}