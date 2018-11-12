/*
 * @Author: yuze.xia 
 * @Date: 2018-11-01 09:45:04 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-10 10:22:04
 */

import React from 'react';
import {Link} from 'react-router-dom';
import PageTitle from 'component/page-title/index.jsx';

import './index.scss';

class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            userCount: '123',
            productCount: '456',
            orderCount: '789'
        }
    }

    loadCount() {
        
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="首页"></PageTitle>
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/user" className="color-box brown">
                            <p className="count">{this.state.userCount}</p>
                            <p className="desc">
                                <i className="fa fa-user-o"></i>
                                <span>用户总数</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/user" className="color-box green">
                            <p className="count">{this.state.userCount}</p>
                            <p className="desc">
                                <i className="fa fa-list"></i>
                                <span>用户总数</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/user" className="color-box blue">
                            <p className="count">{this.state.userCount}</p>
                            <p className="desc">
                                <i className="fa fa-check-square-o"></i>
                                <span>用户总数</span>
                            </p>
                        </Link>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Home
