/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

module.exports = nextConfig;

const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins([
  [withBundleAnalyzer],
  // your other plugins here
]);

/*module.exports = {
  i18n: {
    // providing the locales supported by your application
    locales: ["sl", "en"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "sl",
  },
};*/

module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },
};

const nextTranslate = require("next-translate");
module.exports = nextTranslate();

// module.exports = {
//   productionBrowserSourceMaps: true,
// };
