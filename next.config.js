/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    SENDGRID_API_KEY:'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'
  },
  
  
}

module.exports = nextConfig
