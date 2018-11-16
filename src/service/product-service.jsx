/*
 * @Author: yuze.xia 
 * @Date: 2018-11-16 10:15:40 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-16 12:43:04
 */
import React from 'react';
import MUtil from 'util/mm.jsx';
const _mm = new MUtil();

class Product {
    getProductList(pageNum) {
        return _mm.request({
            type: 'post',
            url: '/manage/product/list.do',
            data: {
                pageNum
            }
        })
    }
}

export default Product;
