/*
 * @Author: yuze.xia 
 * @Date: 2018-11-07 15:43:40 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-07 16:50:25
 */

import React from 'react';

class NavSide extends React.Component {
    render() {
        return (
            <div class="navbar-default navbar-side" role="navigation">
                <div class="sidebar-collapse">
                    <ul class="nav" id="main-menu">

                        <li>
                            <a class="active-menu" href="index.html"><i class="fa fa-dashboard"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="ui-elements.html"><i class="fa fa-desktop"></i> UI Elements</a>
                        </li>
                        <li>
                            <a href="chart.html"><i class="fa fa-bar-chart-o"></i> Charts</a>
                        </li>
                        <li>
                            <a href="tab-panel.html"><i class="fa fa-qrcode"></i> Tabs &amp; Panels</a>
                        </li>
                        
                        <li>
                            <a href="table.html"><i class="fa fa-table"></i> Responsive Tables</a>
                        </li>
                        <li>
                            <a href="form.html"><i class="fa fa-edit"></i> Forms </a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-sitemap"></i> Multi-Level Dropdown<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li>
                                    <a href="#">Second Level Link</a>
                                </li>
                                <li>
                                    <a href="#">Second Level Link</a>
                                </li>
                                <li>
                                    <a href="#">Second Level Link<span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level collapse">
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
                            <a href="empty.html"><i class="fa fa-fw fa-file"></i> Empty Page</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavSide;
