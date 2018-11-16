/*
 * @Author: yuze.xia 
 * @Date: 2018-11-10 16:12:20 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-16 15:32:33
 */

import MUtil from 'util/mm.jsx';
const _mm = new MUtil();

class User {
    // 用户登录
    login(loginInfo) {
        return _mm.request({
            type: 'POST',
            url: '/manage/user/login.do',
            data: loginInfo
        })
    }
    // 检查登录接口的数据是否合法
    checkLoginInfo(loginInfo) {
        let username = $.trim(loginInfo.username),
            password = $.trim(loginInfo.password);

        if (typeof username !== 'string' || username.length === 0) {
            return {
                status: false,
                msg: '用户名不能为空'
            }
        }
        if (typeof password !== 'string' || password.length === 0) {
            return {
                status: false,
                msg: '密码不能为空'
            }
        }

        return {
            status: true,
            msg: '验证通过'
        }
    }
    // 退出登录
    logout() {
        return _mm.request({
            type: 'post',
            url: '/user/logout.do',
        })
    }
    /**
     * 获取用户列表
     * @param pageNum {number} 第几页 
     */
    getUserList(pageNum) {
        return _mm.request({
            type: 'post',
            url: '/manage/user/list.do',
            data: {
                pageNum
            }
        })
    }
}

export default User;
