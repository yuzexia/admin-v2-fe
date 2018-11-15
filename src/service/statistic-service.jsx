/*
 * @Author: yuze.xia 
 * @Date: 2018-11-15 10:33:33 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-15 10:41:38
 */

import MUtil from 'util/mm.jsx';
const _mm = new MUtil();

class Statistic {
    getHomeCount() {
        return _mm.request({
            type: 'post',
            url: '/manage/statistic/base_count.do'
        })
    }
}

export default Statistic;
