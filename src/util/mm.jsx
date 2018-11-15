/*
 * @Author: yuze.xia 
 * @Date: 2018-11-10 10:33:07 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-10 17:58:31
 */

class MUtil {
    request (param) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: param.type || 'get',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success: res => {
                    if (0 === res.status) {
                        typeof resolve === 'function' && resolve(res.data, res.msg);
                    } else if (10 === res.status) {
                        // 未登录
                        this.doLogin();
                    } else {
                        typeof reject === 'function' && reject(res.msg || res.data);
                    }
                },
                error(err) {
                    typeof reject === 'function' && reject(err.statusText);
                }
            })
        })
    }
    // 跳转到登录页面 && 把当前页路径带过去
    doLogin() {
        window.location.href = '/login?redirect' + encodeURIComponent(window.location.pathname);
    }
    // 获取url参数
    getUrlParam(name) {
        
        let queryString = window.location.search.split('?')[1] || '',
            reg         = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            result      = queryString.match(reg);
        
        return result ? decodeURIComponent(result[2]) : null;

    }
    // 处理错误信息
    errorTips(errMsg) {
        alert(errMsg || '好像哪里不对~');
    }
    // 设置存储
    setStorage(name, data) {
        let dataType = typeof data;

        // json对象
        if (dataType === 'object') {
            window.localStorage.setItem(name, JSON.stringify(data));
        } 
        // 基本类型
        else if (['number', 'string', 'boolean'].indexof(dataType) >= 0){
            window.localStorage.setItem(name, data)
        }
        // 其他类型function等
         else {
            alert('该类型不能用于本地存储')
        }
    }
    // 获取存储
    getStorage(name) {
        let data = window.localStorage.getItem(name);
        if (data) {
            return JSON.parse(data);
        } else {
            return ''
        }
    }
    // 删除存储
    removeStorage(name) {
        window.localStorage.removeItem(name);
    }
}

export default MUtil;
