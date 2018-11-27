/*
 * @Author: yuze.xia 
 * @Date: 2018-11-27 18:41:10 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-27 19:46:51
 */
import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Order {
    /**
     * 获取订单列表
     * @param {number} pageSize 每页多少条数据
     * @param {number} pageNum 页数 
     */
    getOrderList({pageSize = 10, pageNum}) {
        return _mm.request({
            type: 'post',
            url: '/manage/order/list.do',
            data: {
                pageSize,
                pageNum
            }
        })
    }
}

export default Order;