/*
 * @Author: yuze.xia 
 * @Date: 2018-11-07 15:42:16 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-10 18:24:01
 */

import React from 'react';
import {Link} from 'react-router-dom';

import User from 'service/user-service.jsx';
import MUtil from 'util/mm.jsx';
const _mm = new MUtil();
const _user = new User();

class NavTop extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username : _mm.getStorage('userInfo').username || ''
        }
    }

    onLogout() {
        _user.logout().then(res => {
            _mm.removeStorage('userInfo')
            window.location.href = '/login';
        }, errMsg => {
            _mm.errorTips(errMsg);
        })
    }
    
    render() {
        return (
            <div className="navbar navbar-default top-navbar">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="index.html"><b>HAPPY</b> MMALL</Link>
                </div>
                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" href="javascript:;">
                            <i className="fa fa-user fa-fw"></i> 
                            {
                                this.state.username 
                                ? <span>欢迎，{this.state.username}</span>
                                : <span>欢迎您</span>
                            }
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                {/* <a href="javascript:;" onClick={this.onLogout.bind(this)}> */}
                                <a href="javascript:;" onClick={() => {this.onLogout()}}>
                                    <i className="fa fa-sign-out fa-fw"></i> Logout
                                </a>
                            </li>
                        </ul>
                        
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavTop;
