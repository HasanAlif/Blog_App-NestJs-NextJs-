import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Handle Windows paths with spaces
  trailingSlash: false,
  // Ensure proper asset handling
  assetPrefix: '',
};

export default nextConfig;
