import Image from 'next/image'

export default function Loader() {
    return (
        <div className="page-loader-wrapper">
            <div className="loader">
                <div className="m-t-30">
                    <Image 
                        src="/next.svg"
                        alt="Logo"
                        width={100}
                        height={10}
                    />
                </div>
                <p>
                    Chargement en cours...
                </p>
            </div>
        </div>
    )
}