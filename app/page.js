// page.js
import Page from './pageWrapper'; 

// Metadata for SEO optimized for Upload of Customs content
export const metadata = {
  title: "GraalOnline - Modern Fantasy MMORPG",
  description:
    "Experience the legendary online multiplayer adventure across multiple worlds with GraalOnline's diverse universe of games. Play Classic, Era, Zone, and more!",
  keywords: "GraalOnline, MMORPG, online games, fantasy games, multiplayer games, Graal Classic, Graal Era, Graal Zone",
  openGraph: {
    type: "website",
    url: "https://www.graalonline.com/", 
    title: "GraalOnline - Modern Fantasy MMORPG",
    description:
      "Experience the legendary online multiplayer adventure across multiple worlds with GraalOnline's diverse universe of games.",
    images: [
      {
        url: "https://i.imgur.com/eAerGWX.png",
        width: 1200,
        height: 630,
        alt: "GraalOnline - Modern Fantasy MMORPG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://www.graalonline.com/upload",
    title: "GraalOnline - Modern Fantasy MMORPG",
    description:
      "Experience the legendary online multiplayer adventure across multiple worlds with GraalOnline's diverse universe of games.",
    image: "https://i.imgur.com/eAerGWX.png",
  }
};

// Viewport metadata
export const viewport = {
  themeColor: "#57cbf8",
};

export default function Frontpage() {
  return (
    <>
      <Page />
    </>
  );
}
