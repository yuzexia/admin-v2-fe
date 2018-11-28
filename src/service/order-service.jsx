/*
 * @Author: yuze.xia 
 * @Date: 2018-11-27 18:41:10 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-28 08:55:32
 */
import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Order {
    /**
     * 获取订单列表
     * @param {number} pageSize 每页多少条数据
     * @param {number} pageNum 页数 
     */
    getOrderList(listParam) {
        let url = '',
            data = {};
        if(listParam.listType === 'list') {
            url = '/manage/order/list.do';
            data.pageNum = listParam.pageNum
        } else if (listParam.listType === 'search') {
            url = '/manage/order/search.do';
            data.orderNo = listParam.orderNo;
        }

        return _mm.request({
            type: 'post',
            url: url,
            data: data
        })
    }
}

export default Order;
