/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/upload/eraupload/:path*',
          destination: 'https://eraupload.graalonline.com/:path*',
        },
        {
          source: '/api/upload/classicupload/:path*',
          destination: 'https://classicupload.graalonline.com/:path*',
        },
        {
          source: '/api/upload/graalonline/:path*',
          destination: 'https://graalonline.com/:path*', 
        },
      ];
    },
  };
  
  export default nextConfig;