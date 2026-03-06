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
  serverExternalPackages: ["cohere-ai", "langchain", "@langchain/openai", "@langchain/community", "pdf-parse"],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push({
        'cohere-ai': 'cohere-ai', 
        'langchain': 'langchain',
        '@langchain/openai': '@langchain/openai',
        '@langchain/community': '@langchain/community',
        'pdf-parse': 'pdf-parse',
        'uuid': 'uuid'
      });
    }
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
    };
    return config;
  },
}

export default nextConfig
