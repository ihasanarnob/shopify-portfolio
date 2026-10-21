import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/projects/bro-storefront',
        destination: '/projects/bro-compagnie',
        permanent: true,
      },
      {
        source: '/projects/cfs-storefront',
        destination: '/projects/candy-from-strangers',
        permanent: true,
      },
      {
        source: '/projects/candy-for-stangers',
        destination: '/projects/candy-from-strangers',
        permanent: true,
      },
      {
        source: '/projects/candy-for-strangers',
        destination: '/projects/candy-from-strangers',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
