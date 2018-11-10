/*
 * @Author: yuze.xia 
 * @Date: 2018-11-10 10:33:07 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-10 17:03:55
 */

class MUtil {
    request (param) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: param.type || 'get',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success(res) {
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
    // getUrlParam
    getUrlParam(name) {
        
        let queryString = window.location.search.split('?')[1] || '',
            reg         = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            result      = queryString.match(reg);
        
        return result ? decodeURIComponent(result[2]) : null;

    }
    errorTips(errMsg) {
        alert(errMsg || '好像哪里不对~');
    }
}

export default MUtil;
