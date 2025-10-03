'use client'; // ⚡️ ВАЖНО: клиентский компонент

import useSWR from 'swr';
import { fetchFromAPI } from '@/lib/fetcher';
import { Post } from '@/types/types';

export default function CSRPosts() {
	// ⚡️ Данные загружаются в браузере, после рендера
	const { data, error } = useSWR<Post[]>('https://jsonplaceholder.typicode.com/posts', fetchFromAPI);

	if (error) return <div>Ошибка загрузки</div>;
	if (!data) return <div>Загрузка...</div>;

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">Dashboard (SSR + SWR)</h1>
			<ul>
				{data.slice(0, 5).map((post: any) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
}
