export default function Menu() {
    return (
        <>
            <div className="overlay_menu">
                <button className="btn btn-primary btn-icon btn-icon-mini btn-round">
                    <i className="zmdi zmdi-close"></i>
                    </button>
                <div className="container">
                    <div className="row clearfix">
                        <div className="card">
                            <div className="body">
                                <div className="input-group m-b-0">                
                                    <input type="text" className="form-control" placeholder="Search.." />
                                    <span className="input-group-addon">
                                        <i className="zmdi zmdi-search"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card links">
                            <div className="body">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <h6>App</h6>
                                        <ul className="list-unstyled">
                                            <li><a href="mail-inbox.html">Inbox</a></li>
                                            <li><a href="chat.html">Chat</a></li>
                                            <li><a href="events.html">Calendar</a></li>
                                            <li><a href="file-dashboard.html">File Manager</a></li>
                                            <li><a href="contact.html">Contact list</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <h6>User Interface (UI)</h6>
                                        <ul className="list-unstyled">
                                            <li><a href="ui_kit.html">UI KIT</a></li>
                                            <li><a href="tabs.html">Tabs</a></li>
                                            <li><a href="range-sliders.html">Range Sliders</a></li>
                                            <li><a href="modals.html">Modals</a></li>
                                            <li><a href="alerts.html">Alerts</a></li>
                                            <li><a href="dialogs.html">Dialogs</a></li>
                                            <li><a href="collapse.html">Collapse</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <h6>Sample Pages</h6>
                                        <ul className="list-unstyled">                            
                                            <li><a href="image-gallery.html">Image Gallery</a></li>
                                            <li><a href="profile.html">Profile</a></li>
                                            <li><a href="timeline.html">Timeline</a></li>
                                            <li><a href="pricing.html">Pricing</a></li>
                                            <li><a href="invoices.html">Invoices</a></li>
                                            <li><a href="faqs.html">FAQs</a></li>
                                            <li><a href="search-results.html">Search Results</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <h6>About</h6>
                                        <ul className="list-unstyled">
                                            <li><a href="http://thememakker.com/about/" target="_blank">About</a></li>
                                            <li><a href="http://thememakker.com/contact/" target="_blank">Contact Us</a></li>
                                            <li><a href="http://thememakker.com/admin-templates/" target="_blank">Admin Templates</a></li>
                                            <li><a href="http://thememakker.com/services/" target="_blank">Services</a></li>
                                            <li><a href="http://thememakker.com/portfolio/" target="_blank">Portfolio</a></li>                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>            
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12">
                            <div className="social">
                                <a className="icon" href="https://www.facebook.com/thememakkerteam" target="_blank"><i className="zmdi zmdi-facebook"></i></a>
                                <a className="icon" href="https://www.behance.net/thememakker" target="_blank"><i className="zmdi zmdi-behance"></i></a>
                                <a className="icon" href="javascript:void(0);"><i className="zmdi zmdi-twitter"></i></a>
                                <a className="icon" href="javascript:void(0);"><i className="zmdi zmdi-linkedin"></i></a>                    
                                <p>Coded by WrapTheme<br /> Designed by <a href="http://thememakker.com/" target="_blank">thememakker.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlay"></div>
        </>
    )
}