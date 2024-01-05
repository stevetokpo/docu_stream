import { useEffect } from 'react';
import { useRouter } from 'next/router';

const checkUserAuthentication = async () => {
    try {
        const response = await fetch('/api/auth/checkout', {
            method: 'GET',
            credentials: 'include',
        });
        const data = await response.json();
        return data.status === 'ok';
    }
    catch (error) {
        return false;
    }
};

const withUserProtection = (WrappedComponent) => {
    return function WithAuthProtection(props) {
        const router = useRouter();

        useEffect(() => {
            const verifyUser = async () => {
                const isAuthenticated = await checkUserAuthentication();
                if (!isAuthenticated) {
                    router.push('/auth/login');
                }
            };

            verifyUser();
        }, [router]);
        
        return <WrappedComponent {...props} />;
    };
};

export default withUserProtection;