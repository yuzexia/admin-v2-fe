/*
 * @Author: yuze.xia 
 * @Date: 2018-11-10 10:58:41 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-10 16:20:07
 */

import React from 'react';
import User from 'service/user-service.jsx';
import MUtil from 'util/mm.jsx';
const _mm = new MUtil();
const _user = new User();

import './index.scss';

class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    // 当输入框内的内容发生变化时
    onInputChange(e) {
        let inputName = e.target.name,
            inputValue = e.target.value;
        this.setState({
            [inputName]: inputValue
        })
    }
    // 提交表单时调用的方法
    onSubmit(e) {
        _user.login({
            username: this.state.username,
            password: this.state.password
        }).then(res => {
            console.log(res)
        }, err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">欢迎登录 - MMALL管理系统</div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <input type="text"
                                       name="username"
                                       className="form-control" 
                                       placeholder="请输入用户名" 
                                       onChange={(e) => {this.onInputChange(e)}}/>
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                       name="password"
                                       className="form-control" 
                                       placeholder="请输入密码" 
                                       onChange={(e) => {this.onInputChange(e)}}/>
                            </div>
                            <button className="btn btn-primary btn-lg btn-block"
                                    onClick={(e) => {this.onSubmit(e)}}
                            >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
