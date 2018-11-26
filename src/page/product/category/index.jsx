/*
 * @Author: yuze.xia 
 * @Date: 2018-11-16 09:52:41 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-23 09:17:16
 */
import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import TableList from 'util/table-list/index.jsx';

import User from 'service/user-service.jsx';
import MUtil from 'util/mm.jsx';
const _mm = new MUtil();
const _user = new User();

class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            parentCategoryId: this.props.match.params.categoryId || 0
        }
    }

    componentWillMount() {
        this.loadCategoryList();
    }

    // 用户列表
    loadCategoryList() {
        _user.getCategoryList(this.state.parentCategoryId).then(res => {
            this.setState(res);
        }, errMsg => {
            this.setState({
                list: []
            })
            _mm.errorTips(errMsg);
        })
    }
    render() {
        let tableHeads = ['品类ID', '品类名称', '操作'];

        let listBody = this.state.list.map((category, index) => {
            return (
                <tr key={index}>
                    <td>{category.id}</td>
                    <td>{category.username}</td>
                    <td>{category.email}</td>
                </tr>
            );
        });

        return (
            <div id="page-wrapper">
                <PageTitle title="品类列表"/>
                <TableList tableHeads={tableHeads}>
                    {
                        listBody
                    }
                </TableList>
            </div>
        )
    }
}

export default CategoryList;
