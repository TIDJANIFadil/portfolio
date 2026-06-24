import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/fadil-portfolio",
  assetPrefix: "/fadil-portfolio/",

  /* Optimisation des images */
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
};

export default nextConfig;
