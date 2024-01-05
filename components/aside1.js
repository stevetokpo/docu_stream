export default function Aside1() {
    return (
        <aside id="minileftbar" className="minileftbar">
            <ul className="menu_list">
                <li>
                    <a href="javascript:void(0);" className="bars"></a>
                    <a className="navbar-brand" href="index.html">
                        <img src="assets/images/logo.svg" alt="Alpino" /></a>
                </li>
                <li><a href="javascript:void(0);" className="btn_overlay hidden-sm-down"><i className="zmdi zmdi-search"></i></a></li>        
                <li><a href="javascript:void(0);" className="menu-sm"><i className="zmdi zmdi-swap"></i></a></li>        
                <li className="menuapp-btn"><a href="javascript:void(0);"><i className="zmdi zmdi-apps"></i></a></li>
                <li className="notifications badgebit">
                    <a href="javascript:void(0);">
                        <i className="zmdi zmdi-notifications"></i>
                        <div className="notify">
                            <span className="heartbit"></span>
                            <span className="point"></span>
                        </div>
                    </a>
                </li>
                <li className="task badgebit">
                    <a href="javascript:void(0);">
                        <i className="zmdi zmdi-flag"></i>
                        <div className="notify">
                            <span className="heartbit"></span>
                            <span className="point"></span>
                        </div>
                    </a>
                </li>
                <li><a href="events.html" title="Events"><i className="zmdi zmdi-calendar"></i></a></li>
                <li><a href="mail-inbox.html" title="Inbox"><i className="zmdi zmdi-email"></i></a></li>
                <li><a href="contact.html" title="Contact List"><i className="zmdi zmdi-account-box-phone"></i></a></li>        
                <li><a href="chat.html"><i className="zmdi zmdi-comments"></i></a></li>        
                <li><a href="javascript:void(0);" className="fullscreen" data-provide="fullscreen"><i className="zmdi zmdi-fullscreen"></i></a></li>
                <li className="power">
                    <a href="javascript:void(0);" className="js-right-sidebar"><i className="zmdi zmdi-settings zmdi-hc-spin"></i></a>            
                    <a href="sign-in.html" className="mega-menu"><i className="zmdi zmdi-power"></i></a>
                </li>
            </ul>    
        </aside>
    )
}