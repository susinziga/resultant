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
