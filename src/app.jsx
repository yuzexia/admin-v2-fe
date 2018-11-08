/*
 * @Author: yuze.xia 
 * @Date: 2018-09-21 11:03:12 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-07 11:42:43
 */

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Redirect, Switch, Link} from 'react-router-dom';

import Layout from 'component/layout/index.jsx';

// 页面
import Home from 'page/home/index.jsx'; 


import './index.css';
import './index.scss'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/product" component={Home}/>
                        <Route path="/product-category" component={Home}/>
                    </Switch>
                </Layout>
            </Router>
        )
    }
}

ReactDom.render(
    <div>
        <App />
    </div>,
    document.getElementById('app')
)
