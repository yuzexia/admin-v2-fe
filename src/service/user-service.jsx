/*
 * @Author: yuze.xia 
 * @Date: 2018-11-10 16:12:20 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-10 16:18:32
 */

import MUtil from 'util/mm.jsx';
const _mm = new MUtil();

class User {
    login(loginInfo) {
        return _mm.request({
            type: 'POST',
            url: '/manage/user/login.do',
            data: loginInfo
        })
    }
}

export default User;
