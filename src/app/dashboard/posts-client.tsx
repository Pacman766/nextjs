'use client';

import useSWR from 'swr';
import { fetchFromAPI } from '@/lib/fetcher';
import { Post } from '@/types/types';

export default function ClientPosts({ initialData }: { initialData: Post[] }) {
	const { data, error, isLoading } = useSWR<Post[]>('/api/posts', fetchFromAPI, {
		fallbackData: initialData, // 👈 передаем данные с SSR
		revalidateOnFocus: true, // автообновление при фокусе окна
	});

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div className="text-red-600">Failed to load</div>;

	return (
		<ul className="space-y-2">
			{data?.map((post: Post) => (
				<li key={post.id} className="border p-3 rounded-md shadow-sm bg-gray-50 hover:bg-gray-100">
					<h2 className="font-semibold">{post.title}</h2>
					<p className="text-sm text-gray-600">{post.body}</p>
				</li>
			))}
		</ul>
	);
}
