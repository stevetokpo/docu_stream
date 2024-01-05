import React, { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

import Alert from '@mui/material/Alert';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PasswordIcon from '@mui/icons-material/Password';

import { APP_NAME } from '../../libs/constants';

import AuthZone2 from '../../components/authZone2'

export default function Login() {
    useEffect(() => {
        document.title = `Connexion - ${APP_NAME}`;
    }, []);

    return (
        <>
            <Head>
                <meta name="description" content="Connexion sur la plateforme de ressources vidéos, audios, documents" />
            </Head>
            <div className="theme-black">
                <div className="authentication">
                    <div className="container">
                        <div className="col-md-12 content-center">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="company_detail">
                                        <h4 className="logo">
                                            <Image 
                                                src="/next.svg"
                                                alt="Description de l'image"
                                                width={100}
                                                height={10}
                                            />
                                            {APP_NAME}
                                        </h4>
                                        <h3>
                                            Plateforme de ressources <strong>vidéos</strong>, <strong>audios</strong>, <strong>documents</strong>.
                                        </h3>
                                        <p>
                                            Connectez-vous à votre compte existant en tapant votre email et mot de passe. Si vous n'aviez pas encore de compte veuillez en créer un en quelques étapes <Link href="/auth/signup">ici</Link>.
                                        </p>
                                    </div>                    
                                </div>
                                <div className="col-lg-5 col-md-12 offset-lg-1">
                                    <div className="card-plain">
                                        <div className="header">
                                            <h5>
                                                Connexion
                                            </h5>
                                        </div>
                                        <form className="form">
                                            <div className="input-group">
                                                <input type="email" className="form-control"  placeholder="Email" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <AlternateEmailIcon />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <input type="password" className="form-control" placeholder="Mot de passe" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <PasswordIcon />
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="footer">
                                            <button className="btn btn-primary btn-round btn-block">
                                                SE CONNECTER
                                            </button>
                                            <Link href="/auth/signup" className="btn btn-primary btn-simple btn-round btn-block">
                                                Créer un compte
                                            </Link>
                                        </div>
                                        <Link href="/auth/forgot-password" className="link">
                                            Mot de passe oublié?
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};