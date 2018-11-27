/*
 * @Author: yuze.xia 
 * @Date: 2018-11-27 18:39:20 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-27 19:48:33
 */
import React from 'react';
import { Link } from 'react-router-dom';
import MUtil from 'util/mm.jsx';
import Order from 'service/order-service.jsx';

import PageTitle from 'component/page-title/index.jsx';
// import ListSearch from './index-list-search.jsx';
import TableList from 'util/table-list/index.jsx';
import Pagination from 'util/pagination/index.jsx';

const _mm = new MUtil();
const _order = new Order();

class OrderList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pageNum: 1,
            total: 1,
            list: []
        }
    }

    componentWillMount() {
        this.loadOrderList();
    }
    // 获取订单列表
    loadOrderList(){
        _order.getOrderList({pageNum:this.state.pageNum})
        .then(res => {
            this.setState(res)
        }, errMsg => {
            this.setState({
                list: []
            })
            _mm.errorTipe(errMsg);
        })
    }
    // 分页
    changePageList(pageNum) {
        this.setState({
            pageNum: pageNum
        }, () => {
            this.loadOrderList();
        });
    }
    render() {
        let tableHeads = ['订单号', '收件人', '订单状态', '订单总价', '创建时间', '操作'];
        let listBody = this.state.list.map((order, index) => {
            return (<tr key={index}>
                <td>{order.orderNo}</td>
                <td>{order.receiverName}</td>
                <td>{order.status}</td>
                <td>{order.payment}</td>
                <td>{order.createTime}</td>
                <td>
                    <Link to={`/order/detail?orderId${order.orderNo}`}>详情</Link>
                </td>
            </tr>)
        })
        return (
            <div id="page-wrapper">
                <PageTitle title="订单列表"/>
                <TableList tableHeads={tableHeads}>
                    {
                        listBody
                    }
                </TableList>
                <Pagination current={this.state.pageNum} 
                            total={this.state.total} 
                            onChange={(pageNum) => {this.changePageList(pageNum)}}/>
            </div>
        )
    }
}

export default OrderList;
