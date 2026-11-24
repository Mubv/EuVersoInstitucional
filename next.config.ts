import type { NextConfig } from "next";

const outputMode =
  process.env.NEXT_STATIC_EXPORT === "true"
    ? ("export" as const)
    : process.env.NEXT_OUTPUT_STANDALONE === "true"
      ? ("standalone" as const)
      : undefined;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: process.env.NEXT_STATIC_EXPORT === "true",
  },
  ...(outputMode ? { output: outputMode } : {}),
};

export default nextConfig;
