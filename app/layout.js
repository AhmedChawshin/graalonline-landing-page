// app/layout.js
import { Poppins } from 'next/font/google';
import ClientWrapper from './ClientWrapper';

const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}