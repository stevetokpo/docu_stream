import Image from 'next/image'
import Link from 'next/link'

import { APP_NAME } from '../libs/constants';

export default function AuthZone2({ props }) {
    return (
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

                </p>
                {props === "0" ? (
                    <p>
                        Inscrivez-vous sur {APP_NAME} en renseignant votre nom, votre email et mot de passe. Si vous aviez déjà un compte veuillez vous connecter <Link href="/auth/login">ici</Link>.
                    </p>
                ) : (
                    <p>
                        Connectez-vous à votre compte existant en tapant votre email et mot de passe. Si vous n'aviez pas encore de compte veuillez en créer un en quelques étapes <Link href="/auth/signup">ici</Link>.
                    </p>
                )}
            </div>
        </div>
    )
}