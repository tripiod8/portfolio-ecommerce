import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shop.ccs.com',
        pathname: '/cdn/shop/files/**',
      },
      {
        protocol: 'https',
        hostname: 'shop.ccs.com',
        pathname: '/cdn/shop/products/**', // Path for products
      },
    ]
  }
};

export default nextConfig;
