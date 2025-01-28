/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["bg", "en"],
    defaultLocale: "bg",
  },
  images: {
    domains: ["images.unsplash.com"],
  },
}

module.exports = nextConfig

