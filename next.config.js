/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
};

// next.config.js
module.exports = {
	images: {
		domains: [
			"https://cdn-lostark.game.onstove.com/2018/obt/assets/images/pc/sprite/sprite_information.png?96443db945fa49787ee76f027e6b1658",
		],
	},
};

const nextConfig = {
	reactStrictMode: true,
	webpack5: true,
	webpack: (config, { isServer }) => {
		config.resolve.fallback = { fs: false };

		// if (!isServer) {
		// 	config.node = {
		// 		net: "empty",
		// 	};
		// }

		return config;
	},
};

module.exports = nextConfig;
