/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'randomuser.me',
                port: '',
                pathname: '/api/portraits/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/photo-1506744038136-46273834b3fb',
            },
        ],
    },
    // Add more options below as needed
    // experimental: {},
    // redirects: async () => [],
    // etc.
};

module.exports = nextConfig;