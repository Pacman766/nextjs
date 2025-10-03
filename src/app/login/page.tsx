'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const login = async (e: React.FormEvent) => {
		e.preventDefault();
		const res = await fetch('/api/auth', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include', // важно для HttpOnly cookie
		});

		if (res.ok) {
			// 🔹 replace, чтобы нельзя было вернуться назад на login
			router.replace('/dashboard');
		} else {
			alert('Invalid credentials');
		}
	};

	return (
		<div className="flex min-h-screen items-center justify-center">
			<form onSubmit={login} className="bg-white p-6 rounded shadow-md w-80">
				<h1 className="text-xl font-bold mb-4 text-black">Login</h1>
				<input
					type="text"
					placeholder="Username"
					className="border w-full p-2 mb-2 text-black"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					className="border w-full p-2 mb-2 text-black"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700">Login</button>
			</form>
		</div>
	);
}
