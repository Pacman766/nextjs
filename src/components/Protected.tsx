'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Protected({ children }: { children: React.ReactNode }) {
	const [authorized, setAuthorized] = useState<boolean | null>(null);
	const router = useRouter();

	useEffect(() => {
		fetch('/api/posts') // проверим доступ к защищённому API
			.then((res) => {
				if (res.status === 401) {
					router.push('/login');
					setAuthorized(false);
				} else {
					setAuthorized(true);
				}
			});
	}, []);

	if (authorized === null) return <div className="p-4">Loading...</div>;

	return <>{authorized && children}</>;
}
