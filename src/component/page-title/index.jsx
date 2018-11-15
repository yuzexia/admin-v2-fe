/*
 * @Author: yuze.xia 
 * @Date: 2018-11-08 16:41:27 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-10 10:21:01
 */

import React from 'react';

class PageTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        document.title = this.props.title + '- HAPPY MMALL';
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-header">{this.props.title}</h1>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default PageTitle;
