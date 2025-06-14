// pages/download.js
import Authenticate from './AuthenticateClient'; 

// Metadata for SEO optimized for FAQ content
export const metadata = {
  title: "GraalOnline - Authentication",
  description: "Authentication for GraalOnline Era",
};

// Viewport metadata
export const viewport = {
  themeColor: "#57cbf8",
};


export default function AuthenticatePage() {
  return (
    <>
      <Authenticate />
    </>
  );
}