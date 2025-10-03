'use client';
import { useRouter } from 'next/navigation';

export default function Navbar() {
	const router = useRouter();

	const logout = async () => {
		await fetch('/api/auth', { method: 'DELETE', credentials: 'include' });
		router.replace('/dashboard');
	};

	return (
		<nav className="bg-gray-800 text-white p-4 flex justify-between">
			<span className="font-bold">Next.js BFF Demo</span>
			<button onClick={logout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
				Logout
			</button>
		</nav>
	);
}
