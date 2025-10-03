import { NextRequest, NextResponse } from 'next/server';
import { createToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
	const { username, password } = await req.json();

	if (username === '111' && password === '111') {
		const token = createToken({ username });

		const res = NextResponse.json({ success: true });
		res.cookies.set('token', token, {
			httpOnly: true,
			path: '/',
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax',
			maxAge: 60 * 60 * 24,
		});

		return res;
	}

	return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}

export async function DELETE() {
	const res = NextResponse.json({ success: true });
	res.cookies.delete('token');
	return res;
}
