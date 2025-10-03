export async function fetchFromAPI<T>(url: string): Promise<T> {
	const res = await fetch(url, { cache: 'no-store' });
	if (!res.ok) throw new Error('Failed to fetch data');
	return res.json();
}

export async function fetchPosts() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	if (!res.ok) throw new Error('Failed to fetch posts');
	return res.json();
}
