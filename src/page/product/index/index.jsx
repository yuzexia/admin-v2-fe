/*
 * @Author: yuze.xia 
 * @Date: 2018-11-16 10:04:44 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-16 15:33:44
 */
import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import TableList from 'util/table-list/index.jsx';
import Pagination from 'util/pagination/index.jsx';

import './index.scss';

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
            this.setState({
                list: []
            })
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
    // 改变在售状态
    onSetProductStatus(e, productId, currentStatus) {
        let status = currentStatus === 1 ? 2 : 1,
            confrimTips = currentStatus === 1 ? '确定要下架该商品？' : '确定要上架该商品？';
        
        if (window.confirm(confrimTips)) {
            _product.setSaleStatus({productId, status}).then(res => {
                _mm.successTips(res);
                this.loadProductList();
            }, errMsg => {
                _mm.errorTips(errMsg);
            })
        }
    }
    render() {
        let tableHeads = [
            {name: '商品ID', width: '10%'},
            {name: '商品信息', width: '50%'},
            {name: '价格', width: '10%'},
            {name: '状态', width: '15%'},
            {name: '操作', width: '15%'}
        ];

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
                        <p>{product.status == 1 ? '在售' : '已下架'}</p>
                        <button 
                            className="btn btn-warning btn-xs" 
                            onClick={(e) => {this.onSetProductStatus(e, product.id, product.status)}}>
                            {product.status == 1 ? '下架' : '上架'}
                        </button>
                    </td>
                    <td>
                        <Link className="opear" to={`/product/detail/${product.id}`}>详情</Link>
                        <Link className="opear" to={`/product/save/${product.id}`}>编辑</Link>
                    </td>
                </tr>
            );
        });

        return (
            <div id="page-wrapper">
                <PageTitle title="用户列表"/>
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

export default ProductList;
