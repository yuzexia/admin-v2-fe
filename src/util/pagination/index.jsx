/*
 * @Author: yuze.xia 
 * @Date: 2018-11-15 15:48:40 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-15 15:54:48
 */
import React from 'react';
import RcPagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <RcPagination {...this.props}
                        hideOnSinglePage
                        showQuickJumper
                    />
                </div>
            </div>
        )
    }
}

export default Pagination;
