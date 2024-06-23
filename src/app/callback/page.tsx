'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';

const CallbackPage = () => {
    const router = useRouter();

    useEffect(() => {
        const handleAuth = async () => {
            const code = new URL(window.location.href).searchParams.get('code');
            if (code) {
                try {
                    const response = await axios.post('/api/callback', { code });
                    Cookies.set('token', response.data.token, { expires: 7 });
                    router.replace('/');
                } catch (error) {
                    console.error('Authentication failed:', error.response?.data || error.message);
                }
            } else {
                router.replace('/login');
            }
        };

        handleAuth();
    }, [router]);

    return <div>Processing authentication...</div>;
};

export default CallbackPage;