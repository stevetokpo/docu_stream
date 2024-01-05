// import '@/styles/globals.css'
import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import '@/styles/bootstrap.min.css'
import '@/styles/morris.css'
import '@/styles/jquery-jvectormap-2.0.3.min.css'
import '@/styles/main.css'
import '@/styles/color_skins.css'

export default function App({ Component, pageProps }) {
    const router = useRouter();

    const isExcludedRoute = ['/auth/login', '/auth/signup', '/auth/forgot-password'].includes(router.pathname);

    useEffect(() => {
        if (!isExcludedRoute) {
            const scripts = [
                "/knob.bundle.js",
                "/jvectormap.bundle.js",
                "/morrisscripts.bundle.js",
                "/sparkline.bundle.js",
                "/doughnut.bundle.js",
                "/mainscripts.bundle.js",
                "/index.js"
            ];

            scripts.forEach(src => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                document.body.appendChild(script);
            });
        }
    }, [isExcludedRoute]);

    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
            <script src="/libscripts.bundle.js"></script>
            <script src="/vendorscripts.bundle.js"></script>
        </>
    )
}