// pages/rules.js
import Rules from './RulesClient'; 

// Metadata for SEO optimized for Rules content
export const metadata = {
  title: "GraalOnline - Rules",
  description:
    "Read the official rules of GraalOnline. Learn about player conduct, prohibited actions, and community guidelines to ensure a fair and enjoyable experience.",
  keywords: "GraalOnline rules, MMORPG rules, GraalOnline conduct, game guidelines, GraalOnline community standards",
  openGraph: {
    type: "website",
    url: "https://www.graalonline.com/rules", 
    title: "GraalOnline - Official Rules",
    description:
      "Review the official rules of GraalOnline, including player conduct, prohibited actions, and guidelines for a fair and enjoyable game experience.",
    images: [
      {
        url: "https://i.imgur.com/eAerGWX.png",
        width: 1200,
        height: 630,
        alt: "GraalOnline Rules",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://www.graalonline.com/rules",
    title: "GraalOnline - Official Rules",
    description:
      "Stay informed about GraalOnline's rules and community guidelines. Ensure fair play and respect for all players.",
    image: "https://i.imgur.com/eAerGWX.png",
  }
};

// Viewport metadata
export const viewport = {
  themeColor: "#57cbf8",
};

export default function RulesPage() {
  return (
    <>
      <Rules />
    </>
  );
}
