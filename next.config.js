/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextTranslate = require("next-translate");

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    styledComponents: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextTranslate(withBundleAnalyzer(nextConfig));