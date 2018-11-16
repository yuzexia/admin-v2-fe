/*
 * @Author: yuze.xia 
 * @Date: 2018-11-16 10:51:21 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-16 12:42:56
 */
import React from 'react';

class TableList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isFirstLoading: true
        }
    }

    componentWillReceiveProps() {
        this.setState({
            isFirstLoading: false
        })
    }

    render() {
        let tableHeads = this.props.tableHeads
        let listBody = this.props.children;
        let listInfo = (
            <tr>
                <td colSpan={tableHeads.length} className="text-center">
                {
                    this.state.isFirstLoading ? '数据加载中...' : '没有找到相应的结果～'
                }
                </td>
            </tr>
        )
        let tableBody = listBody.length > 0 ? listBody : listInfo;
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                {
                                    tableHeads.map(
                                        (tableHead, index) => <th key={index}>{tableHead}</th>
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableBody
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default TableList;
