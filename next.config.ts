import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',

  // Recommended: Disable image optimization API for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
