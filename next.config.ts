import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/service',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
