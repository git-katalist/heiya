/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/heiya",
  assetPrefix: "/heiya",
}

module.exports = nextConfig
