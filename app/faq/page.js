// pages/download.js
import FAQ from './FaqClient'; 

// Metadata for SEO optimized for FAQ content
export const metadata = {
  title: "GraalOnline - Frequently Asked Questions",
  description:
    "Find answers to frequently asked questions about GraalOnline, a modern fantasy MMORPG. Learn about system requirements, registration, and how to get the game client for Windows, Linux, or Mac.",
  keywords: "GraalOnline FAQ, MMORPG questions, GraalOnline system requirements, fantasy game help, GraalOnline support",
  openGraph: {
    type: "website",
    url: "https://www.graalonline.com/faq", 
    title: "GraalOnline - Download FAQ | Frequently Asked Questions",
    description:
      "Get answers to common questions about GraalOnline, a modern fantasy MMORPG. Free registration, guest play, and system requirements for Windows, Linux, and Mac.",
    images: [
      {
        url: "https://i.imgur.com/eAerGWX.png",
        width: 1200,
        height: 630,
        alt: "GraalOnline FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://www.graalonline.com/faq",
    title: "GraalOnline - Download FAQ | Frequently Asked Questions",
    description:
      "Answers to your questions about GraalOnline, a fantasy MMORPG. System requirements, registration, and more for Windows, Linux, and Mac.",
    image: "https://i.imgur.com/eAerGWX.png",
  }
};

// Viewport metadata
export const viewport = {
  themeColor: "#57cbf8",
};


export default function FaqPage() {
  return (
    <>
      <FAQ />
    </>
  );
}