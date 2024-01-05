import Image from 'next/image'
import Link from 'next/link'

export default function Aside2() {
    return (
        <aside className="right_menu">
            <div id="leftsidebar" className="sidebar">
                <div className="menu">
                    <ul className="list">
                        <li>
                            <div className="user-info m-b-20">
                                <div className="image">
                                    <Link href="/">
                                        <Image 
                                            src="/user.jpg"
                                            alt="Utilisateur"
                                            width={240}
                                            height={100}
                                            className="media-object rounded-circle"
                                        />    
                                    </Link>
                                </div>
                                <div className="detail">
                                    <h6>Michael</h6>
                                    <p className="m-b-0">info@example.com</p>                    
                                </div>
                            </div>
                        </li>                
                    </ul>
                </div>
            </div>
        </aside>
    )
}