/*
 * @Author: yuze.xia 
 * @Date: 2018-11-16 16:15:30 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-16 16:46:25
 */
import React from 'react';

class ListSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchType: 'productId', //productId, productName
            searchKeyword: ''
        }
    }
    // 选择/输入框改变时的操作
    onChangeValue(e) {
        let name = e.target.name,
            value = e.target.value.trim();
        this.setState({
            [name]: value
        })
    }
    // 点击搜索按钮触发的事件
    onSearch() {
        this.props.onSearch(this.state.searchType, this.state.searchKeyword);
    }
    // 输入关键字之后回车自动提交
    onSearchKeywrodKeyUp(e) {
        if (e.keyCode === 13) {
            this.onSearch();
        }
    }
    render() {
        return (
            <div className="row search-wrap">
                <div className="col-md-12">
                    <div className="form-inline">
                        <div className="form-group">
                            <select className="form-control"
                                name="searchType"
                                onChange={(e) => {this.onChangeValue(e)}}
                            >
                                <option value="productId">按商品ID查询</option>
                                <option value="productName">按商品名称查询</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" 
                                   className="form-control" 
                                   placeholder="关键词"
                                   name="searchKeyword"
                                   onChange={(e) => {this.onChangeValue(e)}}
                                   onKeyUp={(e) => {this.onSearchKeywrodKeyUp(e)}}
                                   />
                        </div>
                        <button type="submit" 
                                className="btn btn-primary"
                                onClick={(e) => {this.onSearch(e)}}
                        >搜索</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListSearch;
