import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Add the transpilePackages property
  transpilePackages: ['@react-spring/web'],
};

export default nextConfig;