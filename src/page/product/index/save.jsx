/*
 * @Author: yuze.xia 
 * @Date: 2018-11-19 11:40:08 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-22 13:01:26
 */
import React from 'react';
import {Link} from 'react-router-dom';
import PageTitle from 'component/page-title/index.jsx';
import CategorySelector from 'page/product/index/category-selector.jsx';
import FileUploader from 'util/file-upload/index.jsx';
import RichEditor from 'util/rich-editor/index.jsx';

import './save.scss';

import Product from 'service/product-service.jsx';
import MUtil from 'util/mm.jsx';
const _mm = new MUtil();
const _product = new Product();

class ProductSave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.pid,
            categoryId: 0,
            parentCategoryId: 0,
            subImages: [],
            name: '',
            subtitle: '',
            detail: '',
            price: '',
            stock: '',
            status: 1 // 发布商品状态为1 为在售

        }
    }
    componentDidMount() {
        this.loadProduct();
    }
    // 获取商品信息
    loadProduct() {
        if (this.state.id) {
            _product.getProduct(this.state.id).then(res => {
                let images = res.subImages.split(',');
                res.subImages = images.map((imageUri) => {
                    return {
                        uri: imageUri,
                        url: res.imageHost + imageUri
                    }
                });
                res.defaultDetail = res.detail;
                this.setState(res);
            }, errMsg => {
                _mm.errorTips(errMsg);
            })
        }
    }
    // 品类选择器的变化
    onCategoryChange(categoryId, parentCategoryId) {
        this.setState({
            categoryId
        })
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
    // 获取富文本编辑器的内容
    onDetailValueChange(value) {
        this.setState({
            detail: value
        })
    }
    // 简单字段内容改变时，比如商品名称，描述，价格，库存，
    onValueChange(e) {
        let name = e.target.name,
            value = e.target.value.trim();
        this.setState({
            [name]: value
        })
    }
    // 处理图片参数
    getSubImagesString() {
        return this.state.subImages.map((image) => image.uri).join(',')
    }
    // 提交订单
    onSubmit(e) {
        let product = {
            name: this.state.name,
            subtitle: this.state.subtitle,
            detail: this.state.detail,
            price: parseFloat(this.state.price),
            stock: parseInt(this.state.stock),
            status: this.state.status,
            categoryId: parseInt(this.state.categoryId),
            subImages: this.getSubImagesString()
        }
        if (this.state.id) {
            product.id = this.state.id;
        }
        // 表单验证
        let productCheckResult = _product.checkProduct(product);

        if (productCheckResult.status) {
            _product.saveProduct(product).then(res => {
                _mm.successTips(res.msg);
                this.props.history.push('/product/index');
            }, errMsg => {
                _mm.errorTips(errMsg);
            })
        } else {
            _mm.errorTips(productCheckResult.msg);
        }
    }
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="添加商品"/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-horizontal">
                            <div className="form-group">
                                <label className="col-md-2 control-label">商品名称</label>
                                <div className="col-md-5">
                                    <input type="text" 
                                           className="form-control" 
                                           placeholder="请输入商品名称" 
                                           name="name"
                                           value={this.state.name}
                                           onChange={e => this.onValueChange(e)}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">描述</label>
                                <div className="col-md-5">
                                    <input type="text" 
                                            className="form-control" 
                                            placeholder="请输入商品描述" 
                                            name="subtitle"
                                            value={this.state.subtitle}
                                            onChange={e => this.onValueChange(e)}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">所属分类</label>
                                <CategorySelector 
                                        categoryId={this.state.categoryId}
                                        parentCategoryId={this.state.parentCategoryId}
                                        onCategoryChange={
                                        (categoryId, parentCategoryId) => {
                                            this.onCategoryChange(categoryId, parentCategoryId)
                                        }}/>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">价格</label>
                                <div className="col-md-4">
                                    <div className="input-group">
                                        <input type="number" 
                                                className="form-control" 
                                                placeholder="请输入商品价格" 
                                                name="price"
                                                value={this.state.price}
                                                onChange={e => this.onValueChange(e)}/>
                                        <span className="input-group-addon">元</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">库存</label>
                                <div className="col-md-4">
                                    <div className="input-group">
                                        <input type="number" 
                                                className="form-control" 
                                                placeholder="请输入商品库存" 
                                                name="stock"
                                                value={this.state.stock}
                                                onChange={e => this.onValueChange(e)}/>
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
                                    <RichEditor 
                                        defaultDetail={this.state.defaultDetail}
                                        detail={this.state.detail}
                                        onValueChange={(value) => {this.onDetailValueChange(value);}}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-offset-2 col-md-5">
                                    <button type="submit" className="btn btn-primary" onClick={e => this.onSubmit(e)}>保存</button>
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
