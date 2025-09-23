import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "images.unsplash.com"], // ajoute d'autres domaines si besoin
  },
};

export default nextConfig;
