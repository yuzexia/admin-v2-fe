/*
 * @Author: yuze.xia 
 * @Date: 2018-11-16 10:15:40 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-16 15:33:56
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
}

export default Product;
