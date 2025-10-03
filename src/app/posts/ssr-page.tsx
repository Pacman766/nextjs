// app/posts/ssr-page.tsx
import { fetchPosts } from '@/lib/fetcher';
import PostCard from '@/components/PostCard';

// ⚡️ SSR — данные загружаются при каждом запросе
export const dynamic = 'force-dynamic';

export default async function SSRPostsPage() {
	const posts = await fetchPosts();
	return (
		<div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{posts.slice(0, 6).map((post: any) => (
				<PostCard key={post.id} post={post} />
			))}
		</div>
	);
}
