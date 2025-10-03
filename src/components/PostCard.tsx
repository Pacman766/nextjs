// components/PostCard.tsx
import Image from 'next/image';

export default function PostCard({ post }: { post: any }) {
	return (
		<div className="border p-4 rounded-lg shadow-md">
			{/* ✅ Оптимизированная картинка с другого API */}
			<Image
				src={`https://i.pravatar.cc/400?u=${post.id}`} // разные аватарки
				alt={post.title}
				width={400}
				height={200}
				className="rounded-lg object-cover"
				priority={post.id === 1} // первую картинку грузим сразу
			/>
			<h2 className="text-xl font-bold mt-2">{post.title}</h2>
			<p>{post.body}</p>
		</div>
	);
}
