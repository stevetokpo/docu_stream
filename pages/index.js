import React, { useEffect } from 'react';
import Head from 'next/head'

import authMiddleware from '../middlewares/authMiddleware';

import { APP_NAME } from '../libs/constants'

import Loader from '../components/loader'
import Aside1 from '../components/aside1'
import Aside2 from '../components/aside2'
import MainIndex from '../components/main/index'

const Home = () => {

    useEffect(() => {
        document.title = `Tableau de bord - ${APP_NAME}`;
    }, []);

    return (
        <>
            <Head>
                <meta name="description" content="Plateforme de ressources vidéos, audios, documents" />
            </Head>
            <div className="theme-black">
                <Loader />
                <Aside1 />
                <Aside2 />
                <MainIndex />
            </div>
        </>
    )
};

export default authMiddleware(Home);