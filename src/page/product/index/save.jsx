/*
 * @Author: yuze.xia 
 * @Date: 2018-11-19 11:40:08 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-19 15:24:48
 */
import React from 'react';
import {Link} from 'react-router-dom';
import PageTitle from 'component/page-title/index.jsx';
import CategorySelector from 'page/product/index/category-selector.jsx';

import './index.scss';

import Product from 'service/product-service.jsx';
import MUtil from 'util/mm.jsx';
const _mm = new MUtil();
const _product = new Product();

class ProductSave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryId: 0,
            parentCategoryId: 0
        }
    }

    onCategoryChange(categoryId, parentCategoryId) {
        console.log('-----', categoryId, parentCategoryId);
    }
    
    render() {
        // 接口字段
        // categoryId=1
        // name=三星洗衣机
        // subtitle=三星大促销
        // mainImage=sss.jpg
        // subImages=test.jpg
        // detail=detailtext
        // price=1000
        // stock=100
        // status=1
        // id=3
        return (
            <div id="page-wrapper">
                <PageTitle title="添加商品"/>
                <div className="row">
                    <div className="col-md-12">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label className="col-md-2 control-label">商品名称</label>
                                <div className="col-md-5">
                                    <input type="text" className="form-control" placeholder="请输入商品名称" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">描述</label>
                                <div className="col-md-5">
                                    <input type="text" className="form-control" placeholder="请输入商品描述" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">所属分类</label>
                                <CategorySelector onCategoryChange={
                                    (categoryId, parentCategoryId) => {
                                        this.onCategoryChange(categoryId, parentCategoryId)
                                    }}/>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">价格</label>
                                <div className="col-md-3">
                                    <div className="input-group">
                                        <input type="number" className="form-control" placeholder="请输入商品价格" />
                                        <span className="input-group-addon">元</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">库存</label>
                                <div className="col-md-3">
                                    <div className="input-group">
                                        <input type="number" className="form-control" placeholder="请输入商品库存" />
                                        <span className="input-group-addon">件</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">商品图片</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control" placeholder="请输入商品描述" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">商品详情</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control" placeholder="请输入商品描述" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-offset-2 col-md-5">
                                    <button type="submit" className="btn btn-primary">保存</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductSave;
