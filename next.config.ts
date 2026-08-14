import type { NextConfig } from "next";

const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  ...(isVercel ? {} : { output: "export", trailingSlash: true }),
  basePath: isVercel ? "" : "/fadil-portfolio",
  assetPrefix: isVercel ? "" : "/fadil-portfolio/",

  env: {
    NEXT_PUBLIC_BASE_PATH: isVercel ? "" : "/fadil-portfolio",
  },

  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
};

export default nextConfig;
