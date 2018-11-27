/*
 * @Author: yuze.xia 
 * @Date: 2018-11-16 09:52:41 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-23 09:17:16
 */
import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import TableList from 'util/table-list/index.jsx';

import {Link} from 'react-router-dom';

import Product from 'service/product-service.jsx';
import MUtil from 'util/mm.jsx';
const _mm = new MUtil();
const _product = new Product();

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
    componentDidUpdate(prevProps, prevState) {
        let oldPath = prevProps.location.pathname,
            curPath = this.props.location.pathname,
            curId = this.props.match.params.categoryId || 0;
        if (oldPath !== curPath) {
            this.setState({
                parentCategoryId: curId
            }, () => {
                this.loadCategoryList();
            })
        }
    }

    // 品类列表
    loadCategoryList() {
        _product.getCategoryList(this.state.parentCategoryId).then(res => {
            this.setState({
                list: res
            });
        }, errMsg => {
            this.setState({
                list: []
            })
            _mm.errorTips(errMsg);
        })
    }
    // 操作品类
    onUpdateName(categoryId, categoryName) {
        let newName = window.prompt('请输入新的品类名称', categoryName);
        if (newName) {
            _product.updateCategoryName({
                categoryId,
                categoryName: newName
            }).then(res => {
                _mm.successTips(res);
                this.loadCategoryList();
            }, errMsg => {
                _mm.errorTips(errMsg);
            })
        }
    }

    render() {
        let tableHeads = ['品类ID', '品类名称', '操作'];

        let listBody = this.state.list.map((category, index) => {
            return (
                <tr key={index}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>
                        <a className="opear"
                           onClick={(e) => {this.onUpdateName(category.id, category.name)}}
                        >修改品类名称</a>
                        {
                            category.parentId === 0 
                            ? <Link to={`/product-category/index/${category.id}`}>查看子品类</Link>
                            : null
                        }
                    </td>
                </tr>
            );
        });

        return (
            <div id="page-wrapper">
                <PageTitle title="品类列表"/>
                <div className="row">
                    <div className="col-md-12">
                        <p>父品类ID: {this.state.parentCategoryId}</p>
                    </div>
                </div>
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
