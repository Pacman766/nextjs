import Protected from '@/components/Protected';
import ClientPosts from './posts-client';
import Navbar from '@/components/Navbar';

// ⚡️ Этот компонент рендерится на сервере
async function getPostsSSR() {
	const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });
	if (!res.ok) return [];
	return res.json();
}

export default async function Dashboard() {
	const posts = await getPostsSSR(); // данные загружаются при SSR

	return (
		<Protected>
			<Navbar />
			<div className="p-4">
				<h1 className="text-2xl font-bold mb-4">Dashboard</h1>
				<ul className="space-y-2">
					{posts.map((post: any) => (
						<li key={post.id} className="border p-2 rounded bg-gray-50">
							<h2 className="font-semibold mb-2 text-black">{post.title}</h2>
							<p className="text-black">{post.body}</p>
						</li>
					))}
				</ul>
			</div>
		</Protected>
	);
}
