/*
 * @Author: yuze.xia 
 * @Date: 2018-11-07 11:22:28 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-19 14:12:16
 */

import React from 'react';

import NavTop from 'component/nav-top/index.jsx';
import NavSide from 'component/nav-side/index.jsx';

import './theme.css';
import './index.scss';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="wrapper">
                <NavTop />
                <NavSide />
                {
                    this.props.children
                }
            </div>
        )
    }
}

export default Layout