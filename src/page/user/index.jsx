/*
 * @Author: yuze.xia 
 * @Date: 2018-11-15 15:05:01 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-15 15:53:51
 */

import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import Pagination from 'util/pagination/index.jsx';

import User from 'service/user-service.jsx';
import MUtil from 'util/mm.jsx';
const _mm = new MUtil();
const _user = new User();

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNum: 1,
            total: 1,
            list: []
        }
    }

    componentWillMount() {
        this.loadUserList(this.state.pageNum);
    }

    // 用户列表
    loadUserList(pageNum) {
        _user.getUserList(pageNum).then(res => {
            this.setState(res);
        }, errMsg => {
            _mm.errorTips(errMsg);
        })
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="用户列表"/>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>用户名</th>
                                    <th>邮箱</th>
                                    <th>电话</th>
                                    <th>注册时间</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.list.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{user.id}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.createTime}</td>
                                            </tr>
                                        );
                                    })
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <Pagination current={this.state.pageNum} 
                            total={this.state.total} 
                            onChange={(pageNum) => {this.loadUserList(pageNum)}}/>
            </div>
        )
    }
}

export default UserList;
