'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LoginPage = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace('/api/auth');
    }, [router]);

    return <div>Redirecting to Allegro login...</div>;
};

export default LoginPage;