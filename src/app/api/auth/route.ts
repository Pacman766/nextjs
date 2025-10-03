import { NextRequest, NextResponse } from 'next/server';
import { createToken, setAuthCookie, clearAuthCookie } from '@/lib/auth';

// Логин
export async function POST(req: NextRequest) {
	const { username, password } = await req.json();

	// фейковая проверка (в реале - база / внешний API)
	if (username === '111' && password === '111') {
		const token = createToken({ username });
		const res = NextResponse.json({ success: true });
		res.cookies.set('token', token, {
			httpOnly: true,
			path: '/',
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax',
			maxAge: 60 * 60 * 24, // 1 день
		});
		return res;
	}

	return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}

// Логаут
export async function DELETE() {
	const res = NextResponse.json({ success: true });
	res.cookies.delete('token'); // удаляем cookie
	return res;
}
