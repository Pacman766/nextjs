import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { fetchFromAPI } from '@/lib/fetcher';
import { Post } from '@/types/types';
import PostCard from '@/components/PostCard';

async function getPosts(): Promise<Post[]> {
	return fetchFromAPI('https://jsonplaceholder.typicode.com/posts');
}

export default async function DashboardPage() {
	const token = (await cookies()).get('token')?.value;

	// 🔹 Если нет токена → редирект сразу на сервере
	if (!token) redirect('/login');

	const posts = await getPosts();

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">Dashboard</h1>
			<div className="grid gap-4">
				{posts.slice(0, 5).map((post) => (
					<PostCard key={post.id} post={post} />
				))}
			</div>
		</div>
	);
}
