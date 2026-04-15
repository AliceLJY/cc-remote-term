import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['node-pty'],
  allowedDevOrigins: ['192.168.62.189', '100.123.101.117', '198.18.0.1'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'no-store, must-revalidate' },
        ],
      },
    ];
  },
};

export default nextConfig;
