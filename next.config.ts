import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /pdf\.worker\.entry\.js/,
      loader: 'worker-loader',
      options: {
        inline: 'no-fallback',
      },
    })
    return config
  },
  allowedDevOrigins: [
    "http://localhost:3002", // or your frontend URL
    "http://147.93.87.131",  // IP if you're testing directly
  ],
  // output: 'export',
}

export default nextConfig
