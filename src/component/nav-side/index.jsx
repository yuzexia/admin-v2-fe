/*
 * @Author: yuze.xia 
 * @Date: 2018-11-07 15:43:40 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-07 16:50:25
 */

import React from 'react';
import {Link} from 'react-router-dom';


class NavSide extends React.Component {
    render() {
        return (
            <div className="navbar-default navbar-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav" id="main-menu">
                        <li>
                            <Link className="active-menu" to="index.html"><i className="fa fa-dashboard"></i> Dashboard</Link>
                        </li>
                        <li>
                            <a href="ui-elements.html"><i className="fa fa-desktop"></i> UI Elements</a>
                        </li>
                        <li>
                            <a href="chart.html"><i className="fa fa-bar-chart-o"></i> Charts</a>
                        </li>
                        <li>
                            <a href="tab-panel.html"><i className="fa fa-qrcode"></i> Tabs &amp; Panels</a>
                        </li>
                        
                        <li>
                            <a href="table.html"><i className="fa fa-table"></i> Responsive Tables</a>
                        </li>
                        <li>
                            <a href="form.html"><i className="fa fa-edit"></i> Forms </a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-sitemap"></i> Multi-Level Dropdown<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level collapse">
                                <li>
                                    <a href="#">Second Level Link</a>
                                </li>
                                <li>
                                    <a href="#">Second Level Link</a>
                                </li>
                                <li>
                                    <a href="#">Second Level Link<span className="fa arrow"></span></a>
                                    <ul className="nav nav-third-level collapse">
                                        <li>
                                            <a href="#">Third Level Link</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Link</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Link</a>
                                        </li>

                                    </ul>

                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="empty.html"><i className="fa fa-fw fa-file"></i> Empty Page</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavSide;
