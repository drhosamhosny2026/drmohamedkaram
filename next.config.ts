import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Images picked in the Tina editor preview are served from Tina's CDN
    // until the next build copies them into the repo.
    remotePatterns: [{ protocol: "https", hostname: "assets.tina.io", pathname: "/**" }],
  },
  async redirects() {
    // Media moved into public/uploads (Tina's media folder); keep old links working.
    return [
      { source: "/cv-mohamed-karam.pdf", destination: "/uploads/cv-mohamed-karam.pdf", permanent: true },
      { source: "/portrait.png", destination: "/uploads/portrait.png", permanent: true },
    ];
  },
};

export default nextConfig;
