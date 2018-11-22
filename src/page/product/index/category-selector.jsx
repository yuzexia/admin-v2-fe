/*
 * @Author: yuze.xia 
 * @Date: 2018-11-19 15:04:55 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-22 11:27:40
 */
import React from 'react';

import Product from 'service/product-service.jsx';
import MUtil from 'util/mm.jsx';
const _mm = new MUtil();
const _product = new Product();

import './category-selector.scss';

// 品类选择器
class CategorySelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstCategoryList: [],
            firstCategoryId: 0,
            secondCategoryList: [],
            secondCategoryId: 0
        }
    }

    componentDidMount() {
        this.loadFirstCategory()
    }

    componentWillReceiveProps(nextProps) {
        let categoryIdChange = this.props.categoryId !== nextProps.categoryId,
            parentCategoryIdChange = this.props.parentCategoryId !== nextProps.parentCategoryId;
        // 数据没有变化的时候，直接不做处理
        if (!categoryIdChange && !parentCategoryIdChange) {
            return;
        }
        //只有一级品类
        if (nextProps.parentCategoryId === 0) {
            this.setState({
                firstCategoryId: nextProps.categoryId,
                secondCategoryId: 0
            })
        } 
        // 两级品类
        else {
            this.setState({
                firstCategoryId: nextProps.parentCategoryId,
                secondCategoryId: nextProps.categoryId
            }, () => {
                this.loadSecondCategory()
            })
        }
    }
    // 加载一次品类
    loadFirstCategory() {
        _product.getCategoryList().then(res => {
            this.setState({
                firstCategoryList: res
            });
        }, errMsg => {
            _mm.errorTips(errMsg);
        })
    }
    // 加载二级品类
    loadSecondCategory() {
        _product.getCategoryList(this.state.firstCategoryId).then(res => {
            this.setState({
                secondCategoryList: res
            });
        }, errMsg => {
            _mm.errorTips(errMsg);
        })
    }
    // 选择一级品类
    onFirstCategoryChange(e) {
        let newValue = e.target.value;
        // 更新state firstCategoryId时，将secondCategoryId，secondCategoryList重置为0与[]
        this.setState({
            firstCategoryId: newValue,
            secondCategoryId: 0,
            secondCategoryList: []
        }, () => {
            this.loadSecondCategory();
            this.onPropsCategoryChange();
        })
    }
    // 选择二级品类
    onSecondCategoryChange(e){
        let newValue = e.target.value;
        this.setState({
            secondCategoryId: newValue,
        }, () => {
            this.onPropsCategoryChange();
        })
    }
    // 将选中结果传给父组建
    onPropsCategoryChange() {
        // 判断props里的回调函数是否存在
        let categoryChangeable = typeof this.props.onCategoryChange === 'function';
        // 如果有二级品类
        if (this.state.secondCategoryId) {
            categoryChangeable && this.props.onCategoryChange(this.state.secondCategoryId, this.state.firstCategoryId);
        } 
        // 如果只有一级品类
        else {
            categoryChangeable && this.props.onCategoryChange(this.state.firstCategoryId, 0);
        }
    }
    render() {
        return (
            <div className="col-md-10">
                <select type="text" 
                        className="form-control cate-select"
                        value={this.state.firstCategoryId}
                        onChange={(e) => {this.onFirstCategoryChange(e)}}
                        >
                    <option value="">请选择一级分类</option>
                    {
                        this.state.firstCategoryList.map((category, index) => {
                            return <option value={category.id} key={index}>{category.name}</option>
                        })
                    }
                </select>
                {
                    this.state.secondCategoryList.length ?
                    (<select type="text" 
                             className="form-control cate-select"
                             value={this.state.secondCategoryId}
                             onChange={(e) => {this.onSecondCategoryChange(e)}}>
                        <option value="">请选择二级分类</option>
                        {
                            this.state.secondCategoryList.map((category, index) => {
                                return <option value={category.id} key={index}>{category.name}</option>
                            })
                        }
                    </select>) : null
                }
            </div>
        )
    }
}

export default CategorySelector;
