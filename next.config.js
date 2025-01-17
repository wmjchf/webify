const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    console.log("ewrewrewrwe");
    return [
      {
        source: "/api/:path*",
        destination: "http://c135-120-234-128-190.ngrok-free.app/:path*",
      },
    ];
  },
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  images: {
    domains: ["nextui.org"],
    unoptimized: true,
  },
};

module.exports = withNextIntl(nextConfig);
