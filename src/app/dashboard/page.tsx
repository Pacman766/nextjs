import Protected from '@/components/Protected';
import Navbar from '@/components/Navbar';
import ClientPosts from '@/components/ClientPosts';
import ISRPosts from '../posts/isr-page';

// ⚡️ Этот компонент рендерится на сервере
// async function getPostsSSR() {
// 	const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });
// 	if (!res.ok) return [];
// 	return res.json();
// }

export default async function Dashboard() {
	// const initialData = await getPostsSSR(); // данные загружаются при SSR

	return (
		<Protected>
			<Navbar />
			<div className="p-4">
				<ISRPosts />
			</div>
		</Protected>
	);
}
