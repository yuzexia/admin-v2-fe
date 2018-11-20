/*
 * @Author: yuze.xia 
 * @Date: 2018-11-19 11:40:08 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-20 20:04:39
 */
import React from 'react';
import {Link} from 'react-router-dom';
import PageTitle from 'component/page-title/index.jsx';
import CategorySelector from 'page/product/index/category-selector.jsx';
import FileUploader from 'util/file-upload/index.jsx';

import './save.scss';

import Product from 'service/product-service.jsx';
import MUtil from 'util/mm.jsx';
const _mm = new MUtil();
const _product = new Product();

class ProductSave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryId: 0,
            parentCategoryId: 0,
            subImages: []
        }
    }
    // 品类选择器的变化
    onCategoryChange(categoryId, parentCategoryId) {
        console.log('-----', categoryId, parentCategoryId);
    }
    
    // 图片上传成功
    onUploadSuccess(res){
        let subImages = this.state.subImages;
        subImages.push(res)
        this.setState({
            subImages
            // subImages: this.state.subImages.push(res)  //这样写直接返回的是push进去的数组的长度
        })
        console.log(this.state);
    }
    // 图片上传失败
    onUploadError(errMsg) {
        _mm.errorTips(errMsg);
    }
    // 删除图片
    onImageDelete(e) {
        // let index = e.target.index, // 这种方式无法获取到index值
        let index = e.target.getAttribute('index'),
            subImages = this.state.subImages;
        console.log(index);
        subImages.splice(index, 1);
        this.setState({
            subImages
        })

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
                        <div className="form-horizontal">
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
                                <div className="col-md-4">
                                    <div className="input-group">
                                        <input type="number" className="form-control" placeholder="请输入商品价格" />
                                        <span className="input-group-addon">元</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">库存</label>
                                <div className="col-md-4">
                                    <div className="input-group">
                                        <input type="number" className="form-control" placeholder="请输入商品库存" />
                                        <span className="input-group-addon">件</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">商品图片</label>
                                <div className="col-md-10">
                                    {   
                                        this.state.subImages.length ? 
                                        this.state.subImages.map((image, index) => {
                                            return (
                                                <div className="img-con" key={index}>
                                                    <img className="img" src={image.url}/>
                                                    <i className="fa fa-close" index={index} onClick={(e) => this.onImageDelete(e)}></i>
                                                </div>
                                            )
                                        }) : (<div>请上传图片</div>)
                                    }
                                </div>
                                <div className="col-md-10 col-md-offset-2 margin-top15">
                                    <FileUploader 
                                        onSuccess={(res) => {
                                            this.onUploadSuccess(res)
                                        }}
                                        onError={(errMsg) => {
                                            this.onUploadError(errMsg)
                                        }}
                                    />
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductSave;
