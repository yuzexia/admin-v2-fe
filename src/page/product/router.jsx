/*
 * @Author: yuze.xia 
 * @Date: 2018-11-16 09:53:52 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-16 10:04:08
 */
import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch, Link} from 'react-router-dom';

import ProductList from 'page/product/index/index.jsx';
import ProductSave from 'page/product/index/save.jsx';

class ProductRouter extends React.Component {

    render() {
        return (
            <Switch>
                <Route path="/product/index" component={ProductList}/>
                <Route path="/product/save" component={ProductSave}/>
                <Redirect exact from="/product" to="/product/index"/>
            </Switch>
        )
    }
}

export default ProductRouter;