import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Logout() {
    const router = useRouter();

    useEffect(() => {
        async function logout() {
            try {
                const response = await fetch('/api/auth/logout', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ log: 'out' }),
                });

                const data = await response.json();
                router.push('/auth/login');
            }
            catch (error) {
                console.error('Erreur lors de la déconnexion', error);
            }
        }

        logout();
    }, [router]);

    return (
        <div>En cours de déconnexion...</div>
    );
}
