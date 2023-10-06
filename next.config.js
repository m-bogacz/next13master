/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["media.graphassets.com"],
	},
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		serverActions: true,
		mdxRs: true,
	},

	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: false,
			},
			{
				source: "/collections",
				destination: "/collections/summer-vibes",
				permanent: false,
			},
		];
	},
};
const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
