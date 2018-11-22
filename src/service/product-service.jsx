/*
 * @Author: yuze.xia 
 * @Date: 2018-11-16 10:15:40 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-22 10:18:54
 */
import React from 'react';
import MUtil from 'util/mm.jsx';
const _mm = new MUtil();

class Product {
    /**
     * 获取产品列表
     * @param {string} pageNum 第几页 
     */
    getProductList(listParam) {
        let data = {},
            url = '';
        // 当listType为list时，参数只需要pageNum
        // 当listType为search时，参数为pageNum与productName:value或productId: value
        data.pageNum = listParam.pageNum;
        if (listParam.listType === 'list') {
            url = '/manage/product/list.do';
        } else if (listParam.listType === 'search') {
            url = '/manage/product/search.do';
            data[listParam.searchType] = listParam.searchKeyword;
        }
        // 请求接口
        return _mm.request({
            type: 'post',
            url,
            data
        })
    }
    /**
     * 更改产品状态
     * @param {object} productInfo {productId, status} 产品id，目标状态值
     */
    setSaleStatus(productInfo) {
        return _mm.request({
            type: 'post',
            url: '/manage/product/set_sale_status.do',
            data: productInfo
        })
    }
    /**
     * 表单验证
     * @param {object} product 
     */
    checkProduct(product) {
        let result = {
            status: true,
            msg: '验证通过'
        }
        // 判断商品名是否为空
        if (typeof product.name !== 'string' || product.name.length <= 0) {
            return {
                status: false,
                msg: '商品名称不能为空！'
            }
        }
        // 判断描述是否为空
        if (typeof product.subtitle !== 'string' || product.subtitle.length <= 0) {
            return {
                status: false,
                msg: '商品描述不能为空！'
            }
        }
        // 判断品类ID
        if (typeof product.categoryId !== 'number' || !(product.categoryId > 0)) {
            return {
                status: false,
                msg: '请选择商品品类！'
            }
        }
        // 判断价格为数字，且大于0
        if (typeof product.price !== 'number' || !(product.price >= 0)) {
            return {
                status: false,
                msg: '请输入正确的价格！'
            }
        }
        // 判断库存为数字，且大于或等于0
        if (typeof product.stock !== 'number' || !(product.stock >= 0)) {
            return {
                status: false,
                msg: '请输入正确的库存数量！'
            }
        }
        return result;
    }
    /**
     * 表单提交
     * @param {*} parentCategoryId 
     */
    saveProduct(product) {
        return _mm.request({
            type: 'post',
            url: '/manage/product/save.do',
            data: product
        })
    }
    /**
     * 获取单个商品详情
     * @param {number} productId 
     */
    getProduct(productId) {
        return _mm.request({
            type: 'post',
            url: '/manage/product/detail.do',
            data: {
                productId
            }
        })
    }
    /**
     * 品类相关接口
     */
    /**
     * 
     * @param {number} firstCategoryId 
     */
    getCategoryList(parentCategoryId){
        return _mm.request({
            type: 'post',
            url: '/manage/category/get_category.do',
            data: {
                categoryId: parentCategoryId || 0
            }
        })
    }
}

export default Product;
