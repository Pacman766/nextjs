import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'supersecret'; // секрет для подписи токенов

// Создание токена
export function createToken(payload: object) {
	return jwt.sign(payload, SECRET, { expiresIn: '1h' });
}

// Проверка токена из куков
export async function getUserFromCookie() {
	const cookieStore = await cookies();
	const token = cookieStore.get('token')?.value;

	if (!token) {
		return null;
	}

	try {
		return jwt.verify(token, SECRET);
	} catch {
		return null;
	}
}

// Установка токена в cookie
export function setAuthCookie(token: string) {
	cookies().then((cookies) => cookies.set('token', token, { httpOnly: true, path: '/', secure: false }));
}

// Удаление куки
export async function clearAuthCookie() {
	(await cookies()).delete('token');
}
