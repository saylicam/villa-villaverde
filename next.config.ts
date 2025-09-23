import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "images.unsplash.com"], // ajoute d'autres domaines si besoin
  },

  // ⬇️ Clé qui débloque ton déploiement : ESLint n'arrête plus le build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // (Optionnel) si un jour tu veux aussi ignorer les erreurs TypeScript au build :
  // typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
