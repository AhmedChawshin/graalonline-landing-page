// pages/upload.js
import Upload from './UploadClient'; 

// Metadata for SEO optimized for Upload of Customs content
export const metadata = {
  title: "GraalOnline - Upload Customs",
  description:
    "Upload your custom graphics to GraalOnline. Learn about the requirements, guidelines, and approval process for custom heads, bodies, and more.",
  keywords: "GraalOnline upload, GraalOnline customs, upload heads, upload bodies, custom graphics, GraalOnline customization",
  openGraph: {
    type: "website",
    url: "https://www.graalonline.com/upload", 
    title: "GraalOnline - Upload Customs",
    description:
      "Easily upload custom graphics to GraalOnline. Follow the rules and guidelines for submitting custom heads, bodies, and other assets.",
    images: [
      {
        url: "https://i.imgur.com/eAerGWX.png",
        width: 1200,
        height: 630,
        alt: "GraalOnline Upload Customs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://www.graalonline.com/upload",
    title: "GraalOnline - Upload Customs",
    description:
      "Submit your custom graphics for GraalOnline. Ensure your uploads meet the game's requirements and get them approved.",
    image: "https://i.imgur.com/eAerGWX.png",
  }
};

// Viewport metadata
export const viewport = {
  themeColor: "#57cbf8",
};

export default function UploadPage() {
  return (
    <>
      <Upload />
    </>
  );
}
