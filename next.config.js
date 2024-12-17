/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true
  },
  /* config options here */
  webpack: (config, { isServer }) => {
    // Suppress the warnings
    config.ignoreWarnings = [
      { module: /@opentelemetry/ },
      { module: /node_modules/ },
    ];
    return config;
  },
}

module.exports = nextConfig;
