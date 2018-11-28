/*
 * @Author: yuze.xia 
 * @Date: 2018-11-28 09:42:35 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-28 11:26:39
 */
import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import TableList from 'util/table-list/index.jsx';

import './detail.scss';

import MUtil from 'util/mm.jsx';
import Order from 'service/order-service.jsx';
const _mm = new MUtil();
const _order = new Order();

class OrderDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderNumber: this.props.match.params.orderNo,
            orderInfo: {}
        }
    }

    componentWillMount() {
        this.loadOrderDetail();
    }
    // 订单详情
    loadOrderDetail(){
        _order.getOrderDetail(this.state.orderNumber)
        .then(res => {
            this.setState({
                orderInfo: res
            })
        }, errMsg => {
            _mm.errorTips(errMsg);
        })
    }

    // 发货
    sendGoods() {
        if(window.confirm('是否确定该订单已经发货？')) {
            _order.sendGoods(this.state.orderNumber)
            .then(res => {
                _mm.successTips('发货成功');
                this.loadOrderDetail();
            }, errMsg => {
                _mm.errorTips(errMsg);
            })
        }
    }
    render() {
        let receiverInfo = this.state.orderInfo.shippingVo || {}
        let productInfo = this.state.orderInfo.orderItemVoList || [];
        let listBody = productInfo.map((order, index) => {
            return (
                <tr key={index}>
                    <td>
                        <img className="p-img" src={`${this.state.orderInfo.imageHost}/${order.productImage}`} alt={order.productName}/>
                    </td>
                    <td>{order.productName}</td>
                    <td>¥ {order.currentUnitPrice}</td>
                    <td>{order.quantity}</td>
                    <td>¥ {order.totalPrice}</td>
                </tr>)
        })
        return (
            <div id="page-wrapper">
                <PageTitle title="订单详情"/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-horizontal">
                            <div className="form-group">
                                <label className="col-md-2 control-label">订单号</label>
                                <div className="col-md-5">
                                    <div className="form-control-static">{this.state.orderInfo.orderNo}</div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">创建时间</label>
                                <div className="col-md-5">
                                    <div className="form-control-static">{this.state.orderInfo.createTime}</div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">收件人</label>
                                <div className="col-md-5">
                                    <div className="form-control-static">
                                        {receiverInfo.receiverName}，
                                        {receiverInfo.receiverProvince} 
                                        {receiverInfo.receiverCity} 
                                        {receiverInfo.receiverAddress} 
                                        {receiverInfo.receiverMobile || receiverInfo.receiverPhone}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">订单状态</label>
                                <div className="col-md-5">
                                    <div className="form-control-static">
                                        {this.state.orderInfo.statusDesc}
                                        {
                                            this.state.orderInfo.status === 20
                                            ? <button onClick={(e) => { this.sendGoods(e) }} className="btn btn-default btn-sm btn-send-goods">立即发货</button>
                                            : null
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">支付方式</label>
                                <div className="col-md-5">
                                    <div className="form-control-static">{this.state.orderInfo.paymentTypeDesc}</div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">订单金额</label>
                                <div className="col-md-5">
                                    <div className="form-control-static">¥ {this.state.orderInfo.payment}</div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">商品列表</label>
                                <div className="col-md-10">
                                    <TableList tableHeads={[
                                        {name: '商品图片', width: '15%'},
                                        {name: '商品信息', width: '40%'},
                                        {name: '单价', width: '15%'},
                                        {name: '数量', width: '15%'},
                                        {name: '总计', width: '15%'}
                                    ]}>
                                        {
                                            listBody
                                        }
                                    </TableList>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderDetail;
