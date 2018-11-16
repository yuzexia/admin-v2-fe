/*
 * @Author: yuze.xia 
 * @Date: 2018-11-16 10:04:44 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-16 14:58:02
 */
import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import TableList from 'util/table-list/index.jsx';
import Pagination from 'util/pagination/index.jsx';

import {Link} from 'react-router-dom';

import Product from 'service/product-service.jsx';
import MUtil from 'util/mm.jsx';
const _mm = new MUtil();
const _product = new Product();

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNum: 1,
            list: []
        }
    }

    componentWillMount() {
        this.loadProductList();
    }

    // 用户列表
    loadProductList() {
        _product.getProductList(this.state.pageNum).then(res => {
            console.log(res);
            this.setState(res);
        }, errMsg => {
            _mm.errorTips(errMsg);
        })
    }
    // 分页
    changePageList(pageNum) {
        this.setState({
            pageNum: pageNum
        }, () => {
            this.loadProductList();
        })
    }

    render() {
        let tableHeads = ['商品ID', '商品信息', '价格', '状态', '操作'];

        let listBody = this.state.list.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{product.id}</td>
                    <td>
                        <p>{product.name}</p>
                        <p>{product.subtitle}</p>
                    </td>
                    <td>¥{product.price}</td>
                    <td>
                        <span>{product.status == 1 ? '在售' : '已下架'}</span>
                    </td>
                    <td>
                        <Link to={`/product/detail/${product.id}`}>查看详情</Link>
                        <Link to={`/product/save/${product.id}`}>编辑</Link>
                    </td>
                </tr>
            );
        });
        // let listError = (
        //     <tr>
        //         <td colSpan="5" className="text-center">
        //         {
        //             this.state.firstLoading ? '数据加载中...' : '没有找到相应的结果～'
        //         }
        //         </td>
        //     </tr>
        // )
        // let tableBody = this.state.list.length > 0 ? listBody : listError;

        return (
            <div id="page-wrapper">
                <PageTitle title="用户列表"/>
                <TableList tableHeads={tableHeads}>
                    {
                        listBody
                    }
                </TableList>

                {/* <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>用户名</th>
                                    <th>邮箱</th>
                                    <th>电话</th>
                                    <th>注册时间</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tableBody
                                }
                            </tbody>
                        </table>
                    </div>
                </div> */}
                <Pagination current={this.state.pageNum} 
                            total={this.state.total} 
                            onChange={(pageNum) => {this.changePageList(pageNum)}}/>
            </div>
        )
    }
}

export default ProductList;
