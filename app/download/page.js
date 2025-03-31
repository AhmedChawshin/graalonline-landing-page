// pages/download.js
import DownloadClient from './DownloadClient'; 

// Metadata for SEO
export const metadata = {
  title: "GraalOnline - Download",
  description:
    "Download GraalOnline, a modern fantasy MMORPG. Register for free or play as a guest. Check system requirements and get the game client for Windows, Linux, or Mac.",
  keywords: "GraalOnline, MMORPG, fantasy game, download Graal, online multiplayer",
  openGraph: {
    type: "website",
    url: "https://www.graalonline.com/",
    title: "GraalOnline - Download Modern Fantasy MMORPG",
    description:
      "Download GraalOnline, a modern fantasy MMORPG. Register for free or play as a guest. Check system requirements and get the game client for Windows, Linux, or Mac.",
    images: [
      {
        url: "https://i.imgur.com/eAerGWX.png",
        width: 1200,
        height: 630,
        alt: "GraalOnline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://www.graalonline.com/",
    title: "GraalOnline - Download Modern Fantasy MMORPG",
    description:
      "Download GraalOnline, a modern fantasy MMORPG. Register for free or play as a guest. Check system requirements and get the game client for Windows, Linux, or Mac.",
    image: "https://i.imgur.com/eAerGWX.png",
  }
};

// Viewport metadata
export const viewport = {
  themeColor: "#57cbf8",
};

export default function DownloadPage() {
  return <DownloadClient />;
}