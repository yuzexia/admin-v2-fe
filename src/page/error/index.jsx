/*
 * @Author: yuze.xia 
 * @Date: 2018-11-15 11:01:54 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-15 11:11:07
 */

import React from 'react';
import {Link} from 'react-router-dom';
import PageTitle from 'component/page-title/index.jsx';

class Error extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="出错啦！"/>
                <div className="row">
                    <div className="col-md-12">
                        <span>找不到路径，</span>
                        <Link to="/">点我返回首页</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Error;
