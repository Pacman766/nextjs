/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		domains: ['picsum.photos', 'jsonplaceholder.typicode.com', 'i.pravatar.cc'], // ✅ разрешаем домены
	},
};

module.exports = nextConfig;
