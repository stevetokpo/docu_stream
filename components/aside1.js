import Image from 'next/image'
import Link from 'next/link'

import HomeIcon from '@mui/icons-material/Home';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import ArticleIcon from '@mui/icons-material/Article';
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'

export default function Aside1() {

    const toggleFullScreen = () => {
        if ( !document.fullscreenElement ) {
            document.documentElement.requestFullscreen().catch((e) => {
                console.error("Échec du passage en mode plein écran : ", e);
            });
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    return (
        <aside id="minileftbar" className="minileftbar">
            <ul className="menu_list">
                <li>
                    <Link href="javascript:void(0);" className="bars"></Link>
                    <Link className="navbar-brand" href="/">
                        <Image 
                            src="/next.svg"
                            alt="Description de l'image"
                            width={100}
                            height={10}
                        />
                    </Link>
                </li>       
                <li className="menuapp-btn">
                    <Link href="/">
                        <HomeIcon />
                    </Link>
                </li>
                <li className="menuapp-btn">
                    <Link href="/videos">
                        <VideoCameraBackIcon />
                    </Link>
                </li>
                <li className="menuapp-btn">
                    <Link href="/audios">
                        <AudiotrackIcon />
                    </Link>
                </li>
                <li className="menuapp-btn">
                    <Link href="/documents">
                        <ArticleIcon />
                    </Link>
                </li>     
                <li>
                    <a href="javascript:void(0);" onClick={toggleFullScreen}>
                        <FullscreenIcon />
                    </a>
                </li>
                <li className="power">
                    <Link href="javascript:void(0);" className="js-right-sidebar">
                        <SettingsIcon className="zmdi-hc-spin"/>
                    </Link>            
                    <Link href="/auth/logout" className="mega-menu">
                        <PowerSettingsNewIcon />
                    </Link>
                </li>
            </ul>    
        </aside>
    )
}