// app/ClientWrapper.js
'use client'; 

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

// Define the Chakra theme
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

export default function ClientWrapper({ children }) {
  return (
    <I18nextProvider i18n={i18n}>
      <ChakraProvider theme={theme}>
        <Header />
        {children}
        <Footer />
      </ChakraProvider>
    </I18nextProvider>
  );
}