/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Completely disable all development indicators
  devIndicators: false,
  // Suppress hydration warnings
  experimental: {
    // Remove the invalid suppressHydrationWarning option
  },
  // Disable all development overlays
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.plugins = config.plugins.filter(plugin => {
        return plugin.constructor.name !== 'ForkTsCheckerWebpackPlugin';
      });
    }
    return config;
  },
  // Environment variables to disable development tools
  env: {
    NEXT_DISABLE_DEVTOOLS: 'true',
    NEXT_DISABLE_OVERLAY: 'true',
  },
}

export default nextConfig
