/*
 * @Author: yuze.xia 
 * @Date: 2018-11-10 10:33:07 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-10 15:44:07
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
    doLogin() {
        window.location.href = '/login?redirect' + encodeURIComponent(window.location.pathname);
    }
}

export default MUtil;
