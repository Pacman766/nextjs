import { fetchFromAPI } from '@/lib/fetcher';
import { Post } from '@/types/types';

export const revalidate = false; // ⚡️ Next.js → сгенерировать 1 раз и всё

async function getPosts(): Promise<Post[]> {
	return fetchFromAPI('https://jsonplaceholder.typicode.com/posts');
}

export default async function SSGPosts() {
	const posts = await getPosts();

	return (
		<div className="p-6">
			<h1 className="text-2xl mb-4">SSG — Static Site Generation</h1>
			<ul>
				{posts.slice(0, 5).map((post: any) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
}
