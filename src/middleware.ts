import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
	const token = req.cookies.get('token');

	// 🔹 Защищаем только нужные маршруты
	const protectedPaths = ['/dashboard', '/profile'];
	const isProtected = protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path));

	if (isProtected && !token) {
		const loginUrl = new URL('/login', req.url);
		return NextResponse.redirect(loginUrl);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/dashboard/:path*', '/profile/:path*'],
};
