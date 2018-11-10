/*
 * @Author: yuze.xia 
 * @Date: 2018-11-01 09:45:04 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-10 10:22:04
 */

import React from 'react';
import PageTitle from 'component/page-title/index.jsx';

import './index.css';

class Home extends React.Component{
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="首页"></PageTitle>
                <div className="row">
                    <div className="col-md-12">
                        body
                    </div>
                </div>
            </div>
        );
    }
}

export default Home
