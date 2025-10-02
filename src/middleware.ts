// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
	const isAuth = req.cookies.get('token'); // или сессия из JWT/NextAuth

	if (!isAuth && !req.nextUrl.pathname.startsWith('/login')) {
		const loginUrl = new URL('/login', req.url);
		return NextResponse.redirect(loginUrl);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!_next|api|favicon.ico).*)'], // применяем ко всем страницам, кроме служебных
};
