// components/ClientPosts.tsx
'use client';

import useSWR from 'swr';
import PostCard from './PostCard';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ClientPosts({ initialData }: { initialData: any[] }) {
	const { data } = useSWR('/api/posts', fetcher, { fallbackData: initialData });

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{data.map((post: any) => (
				<PostCard key={post.id} post={post} />
			))}
		</div>
	);
}
