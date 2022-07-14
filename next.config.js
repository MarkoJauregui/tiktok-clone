/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['img.seadn.io'],
	},
	swcMinify: true,
};

module.exports = nextConfig;
