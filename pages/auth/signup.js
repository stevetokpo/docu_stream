import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'

import Alert from '@mui/material/Alert'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PasswordIcon from '@mui/icons-material/Password'
import PersonIcon from '@mui/icons-material/Person'

import { APP_NAME } from '../../libs/constants'

import AuthZone2 from '../../components/authZone2'

export default function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [alert, setAlert] = useState({ show: false, type: '', message: '' });

    const router = useRouter();

    const handleSubmit = async (e) => {
        console.log('ok 1')
        e.preventDefault();

        const body = { name, email, password, confirm_password: confirmPassword };
        
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            const data = await response.json();
    
            if ( data.status === 'done' ) {
                setAlert({ show: true, type: 'success', message: 'Inscription réussie! Redirection en cours...' });
                console.log('Inscription réussie');
                setTimeout(() => {
                    router.push('/');
                }, 4000);
            }
            else if (data.status === 'error') {
                setAlert({ show: true, type: 'error', message: data.message });
                console.error('Erreur: ', data.message);
            }
            else {
                setAlert({ show: true, type: 'error', message: 'Une erreur inconnue est survenue!' });
                console.error('Une erreur inconnue est survenue!');
            }
        }
        catch (error) {
            setAlert({ show: true, type: 'error', message: 'Erreur lors de l\'envoi de la requête' });
            console.error('Erreur lors de l\'envoi de la requête: ', error);
        }
    };

    useEffect(() => {
        document.title = `Inscription - ${APP_NAME}`;
    }, []);

    return (
        <>
            <Head>
                <meta name="description" content="Inscription sur la plateforme de ressources vidéos, audios, documents" />
            </Head>
            <div className="theme-black">
                <div className="authentication">
                    <div className="container">
                        <div className="col-md-12 content-center">
                            <div className="row">
                                <AuthZone2 props="0" />
                                <div className="col-lg-5 col-md-12 offset-lg-1">
                                    <div className="card-plain">
                                        <div className="header">
                                            <h5>
                                                Inscription
                                            </h5>
                                        </div>
                                        {alert.show && (
                                            <Alert className="mb-3" severity={alert.type}>
                                                {alert.message}
                                            </Alert>
                                        )}
                                        <form className="form" onSubmit={handleSubmit}>
                                            <div className="input-group">
                                                <input type="name" className="form-control"  placeholder="Nom & Prénoms" value={name} onChange={(e) => setName(e.target.value)} />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <PersonIcon />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <input type="email" className="form-control"  placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <AlternateEmailIcon />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <input type="password" className="form-control" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <PasswordIcon />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <input type="password" className="form-control" placeholder="Confirmation mot de passe" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <PasswordIcon />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <button type="submit" className="btn btn-primary btn-round btn-block" >
                                                    CREER LE COMPTE
                                                </button>
                                                <Link href="/auth/login" className="btn btn-primary btn-simple btn-round btn-block">
                                                    Se connecter
                                                </Link>
                                            </div>
                                        </form>
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