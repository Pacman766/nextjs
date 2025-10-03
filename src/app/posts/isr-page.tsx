// app/isr/page.tsx
export const revalidate = 10; // ⚡️ ISR каждые 10 секунд

async function getPosts() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		next: { revalidate: 10 }, // 👉 важный момент
	});
	return res.json();
}

export default async function ISRPage() {
	const posts = await getPosts();
	const now = new Date().toISOString();

	return (
		<div className="p-6">
			<h1 className="text-2xl mb-4">ISR Demo</h1>
			<p>Rendered at: {now}</p>
			<ul>
				{posts.slice(0, 5).map((p: any) => (
					<li key={p.id}>{p.title}</li>
				))}
			</ul>
		</div>
	);
}
