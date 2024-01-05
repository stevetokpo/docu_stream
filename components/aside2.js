export default function Aside2() {
    return (
        <aside className="right_menu">
            <div className="menu-app">
                <div className="slim_scroll">
                    <div className="card">
                        <div className="header">
                            <h2><strong>App</strong> Menu</h2>
                        </div>
                        <div className="body">
                            <ul className="list-unstyled menu">
                                <li><a href="events.html"><i className="zmdi zmdi-calendar-note"></i><span>Calendar</span></a></li>
                                <li><a href="file-dashboard.html"><i className="zmdi zmdi-file-text"></i><span>File Manager</span></a></li>
                                <li><a href="blog-dashboard.html"><i className="zmdi zmdi-blogger"></i><span>Blog</span></a></li>
                                <li><a href="javascript:void(0)"><i className="zmdi zmdi-arrows"></i><span>Notes</span></a></li>
                                <li><a href="javascript:void(0)"><i className="zmdi zmdi-view-column"></i><span>Taskboard</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="notif-menu">
                <div className="slim_scroll">
                    <div className="card">
                        <div className="header">
                            <h2><strong>Messages</strong></h2>
                        </div>
                        <div className="body">
                            <ul className="messages list-unstyled">
                                <li>
                                    <a href="javascript:void(0);">
                                        <div className="media">
                                            <img className="media-object rounded-circle" src="assets/images/xs/avatar1.jpg" alt="" />
                                            <div className="media-body">
                                                <span className="name">Alexander <small className="time">35min ago</small></span>
                                                <p className="message">New tasks needs to be done</p>                                        
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <div className="media">
                                            <img className="media-object rounded-circle" src="assets/images/xs/avatar2.jpg" alt="" />
                                            <div className="media-body">
                                                <span className="name">Grayson <small className="time">1hr ago</small></span>
                                                <p className="message">New tasks needs to be done</p>                                        
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <div className="media">
                                            <img className="media-object rounded-circle" src="assets/images/xs/avatar3.jpg" alt="" />
                                            <div className="media-body">
                                                <span className="name">Sophia <small className="time">31min ago</small></span>
                                                <p className="message">New tasks needs to be done</p>                                        
                                            </div>
                                        </div>
                                    </a>
                                </li>        
                            </ul>  
                        </div>
                    </div>
                    <div className="card">
                        <div className="header">
                            <h2><strong>Notifications</strong></h2>
                        </div>
                        <div className="body">
                            <ul className="notification list-unstyled">
                                <li>
                                    <i className="zmdi zmdi-balance-wallet text-success"></i>
                                    <strong>+$30 New sale</strong>
                                    <p><a href="javascript:void(0)">Admin Template</a></p>
                                    <small className="text-muted">7 min ago</small>
                                </li>
                                <li>
                                    <i className="zmdi zmdi-edit text-info"></i>
                                    <strong>You Edited file</strong>
                                    <p><a href="javascript:void(0)">Docs.doc</a></p>
                                    <small className="text-muted">15 min ago</small>
                                </li>
                                <li>
                                    <i className="zmdi zmdi-delete text-danger"></i>
                                    <strong>Project removed</strong>
                                    <p><a href="javascript:void(0)">AdminX BS4</a></p>
                                    <small className="text-muted">1 hours ago</small>
                                </li>
                                <li>
                                    <i className="zmdi zmdi-account text-success"></i>
                                    <strong>New user</strong>
                                    <p><a href="javascript:void(0)">UI Designer</a></p>
                                    <small className="text-muted">1 hours ago</small>
                                </li>
                                <li>
                                    <i className="zmdi zmdi-flag text-warning"></i>
                                    <strong>Alpino v1.0.0 is available</strong>
                                    <p><a href="javascript:void(0)">Update now</a></p>
                                    <small className="text-muted">5 hours ago</small>
                                </li>
                            </ul>  
                        </div>
                    </div>
                </div>
            </div>
            <div className="task-menu">
                <div className="slim_scroll">
                    <div className="card tasks">
                        <div className="header">
                            <h2><strong>Project</strong> Status</h2>
                        </div>
                        <div className="body m-b-10">
                            <a href="javascript:void(0);">
                                <span className="text-muted">Project Name 1 <span className="float-right">29%</span></span>
                                <div className="progress">
                                    <div className="progress-bar l-turquoise" role="progressbar" aria-valuenow="29" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <ul className="list-unstyled team-info">
                                    <li className="m-r-15"><small className="text-muted">Team</small></li>
                                    <li><img src="assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                                    <li><img src="assets/images/xs/avatar3.jpg" alt="Avatar" /></li>
                                    <li><img src="assets/images/xs/avatar4.jpg" alt="Avatar" /></li>
                                </ul>
                            </a>
                        </div>
                        <div className="body m-b-10">
                            <a href="javascript:void(0);">
                                <span className="text-muted">Project Name 2 <span className="float-right">78%</span></span>
                                <div className="progress">
                                    <div className="progress-bar l-slategray" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <ul className="list-unstyled team-info">
                                    <li className="m-r-15"><small className="text-muted">Team</small></li>
                                    <li><img src="assets/images/xs/avatar6.jpg" alt="Avatar" /></li>
                                    <li><img src="assets/images/xs/avatar7.jpg" alt="Avatar" /></li>
                                </ul>
                            </a>
                        </div>
                        <div className="body">
                            <a href="javascript:void(0);">
                                <span className="text-muted">Project Name 4 <span className="float-right">68%</span></span>
                                <div className="progress">
                                    <div className="progress-bar l-coral" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <ul className="list-unstyled team-info">
                                    <li className="m-r-15"><small className="text-muted">Team</small></li>
                                    <li><img src="assets/images/xs/avatar8.jpg" alt="Avatar" /></li>
                                    <li><img src="assets/images/xs/avatar9.jpg" alt="Avatar" /></li>
                                </ul>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="rightsidebar" className="right-sidebar">
                <ul className="nav nav-tabs">
                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#setting">Setting</a></li>        
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#activity">Activity</a></li>
                </ul>
                <div className="tab-content slim_scroll">
                    <div className="tab-pane slideRight active" id="setting">
                        <div className="card">
                            <div className="header">
                                <h2><strong>Colors</strong> Skins</h2>
                            </div>
                            <div className="body">
                                <ul className="choose-skin list-unstyled m-b-0">
                                    <li data-theme="black" className="active">
                                        <div className="black"></div>
                                    </li>
                                    <li data-theme="purple">
                                        <div className="purple"></div>
                                    </li>                   
                                    <li data-theme="blue">
                                        <div className="blue"></div>
                                    </li>
                                    <li data-theme="cyan">
                                        <div className="cyan"></div>                    
                                    </li>
                                    <li data-theme="green">
                                        <div className="green"></div>
                                    </li>
                                    <li data-theme="orange">
                                        <div className="orange"></div>
                                    </li>
                                    <li data-theme="blush">
                                        <div className="blush"></div>                    
                                    </li>
                                </ul>
                            </div>
                        </div>                
                        <div className="card">
                            <div className="header">
                                <h2><strong>General</strong> Settings</h2>
                            </div>
                            <div className="body">
                                <ul className="setting-list list-unstyled m-b-0">
                                    <li>
                                        <div className="checkbox">
                                            <input id="checkbox1" type="checkbox" />
                                            <label for="checkbox1">Report Panel Usage</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="checkbox">
                                            <input id="checkbox2" type="checkbox" checked="" />
                                            <label for="checkbox2">Email Redirect</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="checkbox">
                                            <input id="checkbox3" type="checkbox" />
                                            <label for="checkbox3">Notifications</label>
                                        </div>                        
                                    </li>
                                    <li>
                                        <div className="checkbox">
                                            <input id="checkbox4" type="checkbox" />
                                            <label for="checkbox4">Auto Updates</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="checkbox">
                                            <input id="checkbox5" type="checkbox" checked="" />
                                            <label for="checkbox5">Offline</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="checkbox m-b-0">
                                            <input id="checkbox6" type="checkbox" />
                                            <label for="checkbox6">Location Permission</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h2><strong>Left</strong> Menu</h2>
                            </div>
                            <div className="body theme-light-dark">
                                <button className="t-dark btn btn-primary btn-round btn-block">Dark</button>
                            </div>
                        </div>               
                    </div>
                    <div className="tab-pane slideLeft" id="activity">
                        <div className="card activities">
                            <div className="header">
                                <h2><strong>Recent</strong> Activity Feed</h2>
                            </div>
                            <div className="body">
                                <div className="streamline b-accent">
                                    <div className="sl-item">
                                        <div className="sl-content">
                                            <div className="text-muted">Just now</div>
                                            <p>Finished task <a href="" className="text-info">#features 4</a>.</p>
                                        </div>
                                    </div>
                                    <div className="sl-item b-info">
                                        <div className="sl-content">
                                            <div className="text-muted">10:30</div>
                                            <p><a href="">@Jessi</a> retwit your post</p>
                                        </div>
                                    </div>
                                    <div className="sl-item b-primary">
                                        <div className="sl-content">
                                            <div className="text-muted">12:30</div>
                                            <p>Call to customer <a href="" className="text-info">Jacob</a> and discuss the detail.</p>
                                        </div>
                                    </div>
                                    <div className="sl-item b-warning">
                                        <div className="sl-content">
                                            <div className="text-muted">1 days ago</div>
                                            <p><a href="" className="text-info">Jessi</a> commented your post.</p>
                                        </div>
                                    </div>
                                    <div className="sl-item b-primary">
                                        <div className="sl-content">
                                            <div className="text-muted">2 days ago</div>
                                            <p>Call to customer <a href="" className="text-info">Jacob</a> and discuss the detail.</p>
                                        </div>
                                    </div>
                                    <div className="sl-item b-primary">
                                        <div className="sl-content">
                                            <div className="text-muted">3 days ago</div>
                                            <p>Call to customer <a href="" className="text-info">Jacob</a> and discuss the detail.</p>
                                        </div>
                                    </div>
                                    <div className="sl-item b-warning">
                                        <div className="sl-content">
                                            <div className="text-muted">4 Week ago</div>
                                            <p><a href="" className="text-info">Jessi</a> commented your post.</p>
                                        </div>
                                    </div>
                                    <div className="sl-item b-warning">
                                        <div className="sl-content">
                                            <div className="text-muted">5 days ago</div>
                                            <p><a href="" className="text-info">Jessi</a> commented your post.</p>
                                        </div>
                                    </div>
                                    <div className="sl-item b-primary">
                                        <div className="sl-content">
                                            <div className="text-muted">5 Week ago</div>
                                            <p>Call to customer <a href="" className="text-info">Jacob</a> and discuss the detail.</p>
                                        </div>
                                    </div>
                                    <div className="sl-item b-primary">
                                        <div className="sl-content">
                                            <div className="text-muted">3 Week ago</div>
                                            <p>Call to customer <a href="" className="text-info">Jacob</a> and discuss the detail.</p>
                                        </div>
                                    </div>
                                    <div className="sl-item b-warning">
                                        <div className="sl-content">
                                            <div className="text-muted">1 Month ago</div>
                                            <p><a href="" className="text-info">Jessi</a> commented your post.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="leftsidebar" className="sidebar">
                <div className="menu">
                    <ul className="list">
                        <li>
                            <div className="user-info m-b-20">
                                <div className="image">
                                    <a href="profile.html"><img src="assets/images/profile_av.jpg" alt="User" /></a>
                                </div>
                                <div className="detail">
                                    <h6>Michael</h6>
                                    <p className="m-b-0">info@example.com</p>
                                    <a href="javascript:void(0);" title="" className=" waves-effect waves-block"><i className="zmdi zmdi-facebook-box"></i></a>
                                    <a href="javascript:void(0);" title="" className=" waves-effect waves-block"><i className="zmdi zmdi-linkedin-box"></i></a>
                                    <a href="javascript:void(0);" title="" className=" waves-effect waves-block"><i className="zmdi zmdi-instagram"></i></a>
                                    <a href="javascript:void(0);" title="" className=" waves-effect waves-block"><i className="zmdi zmdi-twitter-box"></i></a>                            
                                </div>
                            </div>
                        </li>
                        <li className="header">MAIN</li>
                        <li className="active open"> <a href="index.html"><i className="zmdi zmdi-home"></i><span>Dashboard</span></a></li>
                        <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-apps"></i><span>App</span> <span className="badge badge-success float-right">7</span></a>
                            <ul className="ml-menu">
                                <li><a href="mail-inbox.html">Inbox</a></li>
                                <li><a href="chat.html">Chat</a></li>
                                <li><a href="events.html">Calendar</a></li>
                                <li><a href="file-dashboard.html">File Manager</a></li>
                                <li><a href="contact.html">Contact list</a></li>
                                <li><a href="blog-dashboard.html">Blog</a></li>
                                <li><a href="app-ticket.html">Support Ticket</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-swap-alt"></i><span>UI Elements</span> <span className="badge badge-default float-right">15</span></a>
                            <ul className="ml-menu">
                                <li><a href="ui_kit.html">UI KIT</a></li>                    
                                <li><a href="alerts.html">Alerts</a></li>                    
                                <li><a href="collapse.html">Collapse</a></li>
                                <li><a href="colors.html">Colors</a></li>
                                <li><a href="dialogs.html">Dialogs</a></li>
                                <li><a href="icons.html">Icons</a></li>                    
                                <li><a href="list-group.html">List Group</a></li>
                                <li><a href="media-object.html">Media Object</a></li>
                                <li><a href="modals.html">Modals</a></li>
                                <li><a href="notifications.html">Notifications</a></li>                    
                                <li><a href="progressbars.html">Progress Bars</a></li>
                                <li><a href="range-sliders.html">Range Sliders</a></li>
                                <li><a href="sortable-nestable.html">Sortable & Nestable</a></li>
                                <li><a href="tabs.html">Tabs</a></li>
                                <li><a href="waves.html">Waves</a></li>
                            </ul>
                        </li>
                        <li className="header">FORMS, CHARTS, TABLES</li>
                        <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-assignment"></i><span>Forms</span> <span className="badge badge-warning float-right">9</span></a>
                            <ul className="ml-menu">
                                <li><a href="basic-form-elements.html">Basic Elements</a></li>
                                <li><a href="advanced-form-elements.html">Advanced Elements</a></li>
                                <li><a href="form-examples.html">Form Examples</a></li>
                                <li><a href="form-validation.html">Form Validation</a></li>
                                <li><a href="form-wizard.html">Form Wizard</a></li>
                                <li><a href="form-editors.html">Editors</a></li>
                                <li><a href="form-upload.html">File Upload</a></li>
                                <li><a href="form-img-cropper.html">Image Cropper</a></li>
                                <li><a href="form-summernote.html">Summernote</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-grid"></i><span>Tables</span> <span className="badge badge-info float-right">6</span></a>
                            <ul className="ml-menu">                        
                                <li><a href="normal-tables.html">Normal Tables</a></li>
                                <li><a href="jquery-datatable.html">Jquery Datatables</a></li>
                                <li><a href="editable-table.html">Editable Tables</a></li>
                                
                                <li><a href="table-color.html">Tables Color</a></li>
                                <li><a href="table-filter.html">Tables Filter</a></li>
                            </ul>
                        </li>            
                        <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-chart"></i><span>Charts</span> <span className="badge badge-default float-right">6</span></a>
                            <ul className="ml-menu">
                                <li><a href="morris.html">Morris</a></li>
                                <li><a href="flot.html">Flot</a></li>
                                <li><a href="chartjs.html">ChartJS</a></li>
                                <li><a href="sparkline.html">Sparkline</a></li>
                                <li><a href="jquery-knob.html">Jquery Knob</a></li>
                                    <li><a href="chart-e.html">E Chart</a></li>
                            </ul>
                        </li>
                        <li className="header">EXTRA COMPONENTS</li>                    
                        <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-delicious"></i><span>Widgets</span> <span className="badge badge-default float-right">3</span></a>
                            <ul className="ml-menu">
                                <li><a href="widgets-app.html">Apps Widgetse</a></li>
                                <li><a href="widgets-data.html">Data Widgetse</a></li>
                                <li><a href="widgets-chart.html">Chart Widgetse</a></li>
                            </ul>
                        </li>
                        <li className="sm_menu_btm"> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-lock"></i><span>Authentication</span> <span className="badge badge-default float-right">9</span></a>
                            <ul className="ml-menu">
                                <li><a href="sign-in.html">Sign In</a></li>
                                <li><a href="sign-up.html">Sign Up</a></li>
                                <li><a href="forgot-password.html">Forgot Password</a></li>
                                <li><a href="404.html">Page 404</a></li>
                                <li><a href="403.html">Page 403</a></li>
                                <li><a href="500.html">Page 500</a></li>
                                <li><a href="503.html">Page 503</a></li>
                                <li><a href="page-offline.html">Page Offline</a></li>
                                <li><a href="locked.html">Locked Screen</a></li>
                            </ul>
                        </li>
                        <li className="sm_menu_btm"> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-copy"></i><span>Sample Pages</span> <span className="badge badge-primary float-right">12</span></a>
                            <ul className="ml-menu">
                                <li><a href="blank.html">Blank Page</a></li>
                                <li><a href="teams-board.html">Teams Board</a></li>
                                <li><a href="projects.html">Projects List</a></li>
                                <li><a href="image-gallery.html">Image Gallery</a></li>
                                <li><a href="profile.html">Profile</a></li>
                                <li><a href="timeline.html">Timeline</a></li>
                                <li><a href="horizontal-timeline.html">Horizontal Timeline</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                                <li><a href="invoices.html">Invoices</a></li>
                                <li><a href="faqs.html">FAQs</a></li>
                                <li><a href="search-results.html">Search Results</a></li>
                                <li><a href="helper-class.html">Helper Classes</a></li>
                            </ul>
                        </li>
                        <li className="sm_menu_btm"> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-map"></i><span>Maps</span> <span className="badge badge-default float-right">3</span></a>
                            <ul className="ml-menu">
                                <li><a href="google.html">Google Map</a></li>
                                <li><a href="yandex.html">YandexMap</a></li>
                                <li><a href="jvectormap.html">jVectorMap</a></li>
                            </ul>
                        </li>                
                    </ul>
                </div>
            </div>
        </aside>
    )
}