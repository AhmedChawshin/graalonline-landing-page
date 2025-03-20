'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      500: '#667eea',
      600: '#764ba2',
    },
    slate: {
      800: '#1e293b',
      100: '#e2e8f0',
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Title & Meta Descriptions */}
        <title>GraalOnline - Modern Fantasy MMORPG</title>
        <meta name="title" content="GraalOnline - Modern Fantasy MMORPG" />
        <meta
          name="description"
          content="Experience the legendary online multiplayer adventure across multiple worlds with GraalOnline's diverse universe of games. Play Classic, Era, Zone, and more!"
        />
        <meta
          name="keywords"
          content="GraalOnline, MMORPG, online games, fantasy games, multiplayer games, Graal Classic, Graal Era, Graal Zone"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.graalonline.com/" />
        <meta property="og:title" content="GraalOnline - Modern Fantasy MMORPG" />
        <meta
          property="og:description"
          content="Experience the legendary online multiplayer adventure across multiple worlds with GraalOnline's diverse universe of games."
        />
        <meta property="og:image" content="https://i.imgur.com/eAerGWX.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.graalonline.com/" />
        <meta name="twitter:title" content="GraalOnline - Modern Fantasy MMORPG" />
        <meta
          name="twitter:description"
          content="Experience the legendary online multiplayer adventure across multiple worlds with GraalOnline's diverse universe of games."
        />
        <meta name="twitter:image" content="https://i.imgur.com/eAerGWX.png" />

        {/* Discord Embed Color */}
        <meta name="theme-color" content="#57cbf8" />

        {/* Poppins Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <I18nextProvider i18n={i18n}>
          <ChakraProvider theme={theme}>
            <Header />
            {children}
            <Footer />
          </ChakraProvider>
        </I18nextProvider>
      </body>
    </html>
  );
}