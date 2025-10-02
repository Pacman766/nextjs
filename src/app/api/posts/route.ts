import { NextResponse } from 'next/server';
import { fetchFromAPI } from '@/lib/fetcher';
import { Post } from '@/types/types';
import { getUserFromCookie } from '@/lib/auth';

export async function GET() {
	const user = getUserFromCookie();
	if (!user) {
		return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	}
	const posts = (await fetchFromAPI('https://jsonplaceholder.typicode.com/posts')) as Post[];
	return NextResponse.json(posts.slice(0, 5)); // только 5 постов
}
